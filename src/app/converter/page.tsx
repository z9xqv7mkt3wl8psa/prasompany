"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";

export default function Converter() {
  const [file, setFile] = useState<File | null>(null);
  const [outputText, setOutputText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const extractText = async (file: File) => {
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = async () => {
        if (!reader.result) return;
        const pdfDoc = await PDFDocument.load(new Uint8Array(reader.result as ArrayBuffer));
        const pages = await Promise.all(pdfDoc.getPages().map(page => page.getTextContent()));
        const extractedText = pages.map(page => page.items.map(item => (item as any).str).join(" ")).join("\n\n");
        setOutputText(extractedText);
      };
    } catch (error) {
      console.error("Error extracting text:", error);
      alert("Failed to extract text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">PDF to Text Converter</h1>

      <div
        {...getRootProps()}
        className="w-80 h-40 border-2 border-dashed flex items-center justify-center text-gray-600 bg-white rounded-lg mb-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the file here...</p> : <p>Drag & drop a PDF, or click to select one</p>}
      </div>

      {file && <p className="mb-4">Selected File: {file.name}</p>}

      <button
        onClick={() => file && extractText(file)}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? "Extracting..." : "Extract PDF Text"}
      </button>

      {outputText && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-2">Extracted Text:</h2>
          <p className="text-gray-700 whitespace-pre-line">{outputText}</p>
        </div>
      )}
    </div>
  );
}
