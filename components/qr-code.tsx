"use client";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCodeScanner = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
  };

  return (
    <div className="scanner-container">
      <div className="qr-reader-wrapper">
        <QrReader
          onResult={(result, error) => {
            if (result) {
              handleScan(result.getText());
            }
            if (error) {
              handleError(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
        />
        <div className="scan-overlay" />
      </div>
      <input
        type="text"
        className="scan-result-input"
        value={scanResult || ""}
        readOnly
        placeholder="Scan result"
      />
    </div>
  );
};

export default QrCodeScanner;
