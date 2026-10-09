import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — GrowMaster AI Legal",
  description: "Datenschutzerklärung von GrowMaster AI Legal.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Datenschutzerklärung</h1>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">1. Verantwortliche Stelle</h2>
        <p className="text-gray-300">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="text-gray-300">
          <strong>GrowMaster AI</strong><br />
          [Ihr vollständiger Name / Firmenname]<br />
          [Straße und Hausnummer]<br />
          [PLZ Ort]<br />
          Deutschland<br />
          E-Mail: <a href="mailto:support@growmaster.app" className="text-primary-400 hover:underline">support@growmaster.app</a>
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p className="text-gray-300">
          Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (z.B. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs). Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">3. Zweck der Datenverarbeitung</h2>
        <p className="text-gray-300">
          Die Verarbeitung personenbezogener Daten erfolgt zu folgenden Zwecken:
        </p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Bereitstellung und Betrieb der Website</li>
          <li>Verbesserung unseres Angebots</li>
          <li>Kommunikation mit Nutzern</li>
          <li>Abwicklung von Verträgen und Zahlungen</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
        <p className="text-gray-300">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) und Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">5. Cookies</h2>
        <p className="text-gray-300">
          Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Sie können Ihren Browser so einstellen, dass Cookies abgelehnt werden.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">6. Drittanbieter-Dienste</h2>
        <p className="text-gray-300">
          Wir nutzen folgende Drittanbieter-Dienste:
        </p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li><strong>Stripe</strong> — Zahlungsabwicklung (https://stripe.com/de/privacy)</li>
          <li><strong>Google Analytics</strong> — Webanalyse (mit IP-Anonymisierung)</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">7. Ihre Rechte</h2>
        <p className="text-gray-300">
          Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
        </p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">8. Kontakt</h2>
        <p className="text-gray-300">
          Bei Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
          <a href="mailto:support@growmaster.app" className="text-primary-400 hover:underline">
            support@growmaster.app
          </a>
        </p>

        <hr className="border-dark-600 my-8" />
        <p className="text-sm text-gray-500"><em>Stand: Januar 2026</em></p>
      </div>
    </div>
  );
}
