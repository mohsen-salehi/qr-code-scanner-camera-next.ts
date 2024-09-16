import QrCodeScanner from "@/components/qr-code";

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">QR Code Scanner</h1>
      <QrCodeScanner />
    </div>
  );
}
