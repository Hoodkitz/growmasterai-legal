import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — GrowMaster AI Legal",
  description: "Allgemeine Geschäftsbedingungen von GrowMaster AI Legal.",
};

export default function AGBPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">1. Geltungsbereich</h2>
        <p className="text-gray-300">
          Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der mobilen Anwendung "GrowMaster AI" (nachfolgend "App") und alle damit verbundenen Dienste.
        </p>
        <p className="text-gray-300">
          Mit der Registrierung und Nutzung der App akzeptieren Sie diese AGB.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">2. Vertragspartner</h2>
        <p className="text-gray-300">Anbieter der App ist:</p>
        <p className="text-gray-300">
          <strong>GrowMaster AI</strong><br />
          [Ihr Name / Firma]<br />
          [Adresse]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>
        <p className="text-gray-300">
          E-Mail: <a href="mailto:support@growmaster.app" className="text-primary-400 hover:underline">support@growmaster.app</a>
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">3. Leistungsbeschreibung</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">3.1 Kostenlose Funktionen (Free)</h3>
        <p className="text-gray-300">Die App bietet folgende kostenlose Funktionen:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Pflanzen-Tracking (bis zu 2 Pflanzen)</li>
          <li>Basis-Diagnose (3 Analysen pro Tag)</li>
          <li>Grow-Coach Chat (5 Nachrichten pro Tag)</li>
          <li>Community-Zugang (Lesen)</li>
          <li>Basis-Sorten-Datenbank</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">3.2 Premium-Abonnement</h3>
        <p className="text-gray-300">Das Premium-Abonnement umfasst zusätzlich:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Pflanzen-Tracking (bis zu 10 Pflanzen)</li>
          <li>Erweiterte Diagnose (15 Analysen pro Tag)</li>
          <li>Grow-Coach Chat (50 Nachrichten pro Tag)</li>
          <li>Community-Zugang (Lesen und Schreiben)</li>
          <li>Vollständige Sorten-Datenbank</li>
          <li>Grow-Tools (Kalender, Rechner)</li>
          <li>Werbefreie Nutzung</li>
        </ul>
        <p className="text-gray-300"><strong>Preis:</strong> 4,99 € pro Monat oder 39,99 € pro Jahr</p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">3.3 Pro-Abonnement</h3>
        <p className="text-gray-300">Das Pro-Abonnement umfasst zusätzlich zu Premium:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Unbegrenzte Pflanzen</li>
          <li>Unbegrenzte Diagnosen</li>
          <li>Unbegrenzter Grow-Coach Chat</li>
          <li>Live-Kamera-Analyse</li>
          <li>Geschlechts- und Sorten-Erkennung</li>
          <li>Direktnachrichten</li>
          <li>Prioritäts-Support</li>
          <li>Exklusive Pro-Features</li>
        </ul>
        <p className="text-gray-300"><strong>Preis:</strong> 9,99 € pro Monat oder 79,99 € pro Jahr</p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">4. Vertragsschluss und Abonnement</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">4.1 Registrierung</h3>
        <p className="text-gray-300">Die Nutzung der App erfordert eine Registrierung. Sie können sich registrieren über:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>E-Mail und Passwort</li>
          <li>Google-Konto</li>
          <li>Apple-ID</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">4.2 Abonnement-Abschluss</h3>
        <p className="text-gray-300">
          Der Abschluss eines kostenpflichtigen Abonnements erfolgt über den Apple App Store oder Google Play Store. Es gelten zusätzlich die Nutzungsbedingungen des jeweiligen Stores.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">4.3 Automatische Verlängerung</h3>
        <p className="text-gray-300">
          Abonnements verlängern sich automatisch um den gewählten Zeitraum, sofern sie nicht mindestens 24 Stunden vor Ablauf der aktuellen Periode gekündigt werden.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">4.4 Kündigung</h3>
        <p className="text-gray-300">Die Kündigung erfolgt über:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Apple App Store: Einstellungen → [Ihr Name] → Abonnements</li>
          <li>Google Play Store: Play Store → Menü → Abonnements</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">5. Widerrufsrecht</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">5.1 Widerrufsbelehrung</h3>
        <p className="text-gray-300">
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
        </p>
        <p className="text-gray-300">
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
        </p>
        <p className="text-gray-300">
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">5.2 Folgen des Widerrufs</h3>
        <p className="text-gray-300">
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">5.3 Ausschluss des Widerrufsrechts</h3>
        <p className="text-gray-300">
          Das Widerrufsrecht erlischt bei digitalen Inhalten, wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und Sie Ihre Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">6. Nutzungsrechte und -pflichten</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">6.1 Nutzungsrecht</h3>
        <p className="text-gray-300">
          Mit der Registrierung erhalten Sie ein nicht-exklusives, nicht übertragbares Recht zur Nutzung der App für private Zwecke.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">6.2 Verbotene Nutzung</h3>
        <p className="text-gray-300">Es ist untersagt:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Die App für illegale Zwecke zu nutzen</li>
          <li>Falsche Informationen bei der Registrierung anzugeben</li>
          <li>Andere Nutzer zu belästigen oder zu bedrohen</li>
          <li>Urheberrechtlich geschützte Inhalte ohne Berechtigung hochzuladen</li>
          <li>Die App zu hacken oder zu manipulieren</li>
          <li>Automatisierte Zugriffe auf die App durchzuführen</li>
          <li>Werbung oder Spam zu verbreiten</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">6.3 Nutzerinhalte</h3>
        <p className="text-gray-300">
          Sie behalten die Rechte an Ihren hochgeladenen Inhalten. Mit dem Hochladen räumen Sie uns jedoch ein nicht-exklusives, weltweites Recht ein, diese Inhalte im Rahmen der App-Funktionen zu nutzen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">7. Community-Richtlinien</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">7.1 Respektvoller Umgang</h3>
        <p className="text-gray-300">In der Community ist ein respektvoller Umgang Pflicht. Verboten sind:</p>
        <ul className="text-gray-300 list-disc pl-5 space-y-1">
          <li>Beleidigungen und Hassrede</li>
          <li>Diskriminierung jeglicher Art</li>
          <li>Gewaltverherrlichung</li>
          <li>Pornografische Inhalte</li>
          <li>Spam und Werbung (außer in dafür vorgesehenen Bereichen)</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">7.2 Moderation</h3>
        <p className="text-gray-300">
          Wir behalten uns vor, Inhalte zu entfernen und Nutzer zu sperren, die gegen diese Richtlinien verstoßen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">8. Marktplatz und Gewinnspiele</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">8.1 Marktplatz</h3>
        <p className="text-gray-300">
          Der Marktplatz dient der Vermittlung zwischen Anbietern und Nutzern. Wir sind nicht Vertragspartner bei Käufen über den Marktplatz.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">8.2 Gewinnspiele</h3>
        <p className="text-gray-300">
          Für Gewinnspiele gelten zusätzlich die jeweiligen Teilnahmebedingungen. Die Teilnahme ist nur für volljährige Nutzer möglich.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">8.3 Auktionen</h3>
        <p className="text-gray-300">
          Bei Auktionen kommt der Vertrag zwischen dem Höchstbietenden und dem Anbieter zustande. Wir übernehmen keine Haftung für die Abwicklung.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">9. Haftung</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">9.1 Haftungsbeschränkung</h3>
        <p className="text-gray-300">
          Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">9.2 KI-Diagnosen</h3>
        <p className="text-gray-300">
          Die KI-gestützten Diagnosen und Empfehlungen dienen nur zu Informationszwecken. Sie ersetzen keine fachkundige Beratung. Wir übernehmen keine Haftung für Schäden, die durch das Befolgen von KI-Empfehlungen entstehen.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">9.3 Externe Links</h3>
        <p className="text-gray-300">
          Für Inhalte verlinkter externer Websites übernehmen wir keine Haftung.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">10. Datenschutz</h2>
        <p className="text-gray-300">
          Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">11. Änderungen der AGB</h2>
        <p className="text-gray-300">
          Wir behalten uns vor, diese AGB zu ändern. Über Änderungen werden Sie per E-Mail oder In-App-Benachrichtigung informiert. Die geänderten AGB gelten als akzeptiert, wenn Sie der Nutzung nicht innerhalb von 14 Tagen widersprechen.
        </p>

        <h2 className="text-xl font-semibold text-primary-400 mt-8 mb-4">12. Schlussbestimmungen</h2>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">12.1 Anwendbares Recht</h3>
        <p className="text-gray-300">
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">12.2 Gerichtsstand</h3>
        <p className="text-gray-300">
          Soweit gesetzlich zulässig, ist Gerichtsstand [Ihr Ort].
        </p>

        <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">12.3 Salvatorische Klausel</h3>
        <p className="text-gray-300">
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>

        <hr className="border-dark-600 my-8" />
        <p className="text-sm text-gray-500"><em>Stand: Januar 2026</em></p>
      </div>
    </div>
  );
}
