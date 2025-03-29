"use client";

import { useState, useCallback } from "react";
import pdfParse from "pdf-parse";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";
import { saveAs } from "file-saver";
import { useDropzone } from "react-dropzone";

export default function Converter() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const convertPdfToWord = async () => {
    if (!file) return alert("Please upload a PDF file.");
    setLoading(true);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const textData = await pdfParse(Buffer.from(arrayBuffer));
      const text = textData.text; // Extracted text

      const docBlob = new Blob([text], { type: "application/msword" });
      saveAs(docBlob, "converted.docx");
    } catch (error) {
      console.error("Conversion failed:", error);
      alert("Failed to convert PDF to Word.");
    } finally {
      setLoading(false);
    }
  };

  const convertWordToPdf = async () => {
    if (!file) return alert("Please upload a DOCX file.");
    setLoading(true);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      const text = result.value; // Extracted text from DOCX

      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      page.drawText(text, { x: 50, y: 750 });

      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(pdfBlob, "converted.pdf");
    } catch (error) {
      console.error("Conversion failed:", error);
      alert("Failed to convert Word to PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">PDF ↔ Word Converter</h1>

      <div
        {...getRootProps()}
        className="w-80 h-40 border-2 border-dashed flex items-center justify-center text-gray-600 bg-white rounded-lg mb-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag & drop a file here, or click to select one</p>
        )}
      </div>

      {file && <p className="mb-4">Selected File: {file.name}</p>}

      <div className="flex gap-4">
        <button
          onClick={convertPdfToWord}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Convert PDF to Word
        </button>
        <button
          onClick={convertWordToPdf}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Convert Word to PDF
        </button>
      </div>

      {loading && <p className="mt-4 text-gray-600">Converting, please wait...</p>}
    </div>
  );
}
