import QrCodeScanner from "@/components/qr-code";

export default function Home() {
  return (
    <main className="border w-full h-screen p-4 bg-gray-50 flex items-center justify-center">
      <div className="w-full h-full rounded-xl bg-white shadow-xl">
        <QrCodeScanner />
      </div>
    </main>
  );
}
