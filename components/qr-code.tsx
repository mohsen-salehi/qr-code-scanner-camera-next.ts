"use client";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCodeScanner = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data); // قرار دادن نتیجه در اینپوت
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      <QrReader
        onResult={(result, error) => {
          if (result) {
            handleScan(result.getText());
          }
          if (error) {
            handleError(error);
          }
        }}
        constraints={{ facingMode: "environment" }} // به صورت پیش‌فرض دوربین پشت
      />
      <input
        type="text"
        value={scanResult || ""}
        readOnly
        placeholder="Scan result"
      />
    </div>
  );
};

export default QrCodeScanner;
