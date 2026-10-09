import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — GrowMaster AI Legal",
  description: "Impressum und rechtliche Informationen zu GrowMaster AI Legal.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Impressum</h1>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="text-gray-300">
          <strong>GrowMaster AI</strong><br />
          [Ihr vollständiger Name / Firmenname]<br />
          [Straße und Hausnummer]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Kontakt</h2>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li><strong>Telefon:</strong> [Ihre Telefonnummer]</li>
          <li><strong>E-Mail:</strong> <a href="mailto:support@growmaster.app" className="text-primary-400 hover:underline">support@growmaster.app</a></li>
          <li><strong>Website:</strong> <a href="https://growmaster.app" className="text-primary-400 hover:underline">https://growmaster.app</a></li>
        </ul>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="text-gray-300">
          [Ihr vollständiger Name]<br />
          [Adresse wie oben]
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">EU-Streitschlichtung</h2>
        <p className="text-gray-300">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-400 hover:underline">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="text-gray-300">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p className="text-gray-300">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Haftung für Inhalte</h2>
        <p className="text-gray-300">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="text-gray-300">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Haftung für Links</h2>
        <p className="text-gray-300">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-gray-300">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">Urheberrecht</h2>
        <p className="text-gray-300">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-gray-300">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <hr className="border-dark-600 my-8" />
        <p className="text-sm text-gray-500"><em>Stand: Januar 2026</em></p>
      </div>
    </div>
  );
}
