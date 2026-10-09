import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfolg — GrowMaster AI Legal",
  description: "Zahlung erfolgreich abgeschlossen.",
};

export default function ErfolgPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mb-8 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-500/20">
          <svg className="h-10 w-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h1 className="mb-4 text-3xl font-bold text-white">Zahlung erfolgreich!</h1>
      <p className="mb-8 text-lg text-gray-400">
        Vielen Dank für dein Abonnement. Du erhältst in Kürze eine Bestätigungs-E-Mail.
      </p>
      <a href="/" className="btn-primary">
        Zurück zur Startseite
      </a>
    </div>
  );
}
