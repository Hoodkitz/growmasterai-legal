import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="section pt-32 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              DSGVO-konform & rechtsicher
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Rechtliche Dokumente für{" "}
              <span className="gradient-text">dein Business</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
              Verträge, Impressum, Datenschutz, AGB und mehr — in wenigen Minuten
              generiert und immer auf dem neuesten Stand. Kein Anwalt nötig.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#pricing" className="btn-primary">
                Jetzt starten — ab 19€/Monat
              </a>
              <a href="#features" className="btn-secondary">
                Features entdecken
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              14 Tage kostenlos testen · Keine Kreditkarte erforderlich · Jederzeit kündbar
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section bg-dark-800">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Alles, was du <span className="gradient-text">rechtlich brauchst</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Unsere KI-generierte Dokumente decken alle wichtigen rechtlichen
                Anforderungen ab — immer aktuell und DSGVO-konform.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Verträge</h3>
                <p className="text-gray-400">
                  Arbeitsverträge, NDA, Freelancer-Verträge, Mietverträge und
                  mehr — angepasst an deine individuellen Anforderungen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Impressum</h3>
                <p className="text-gray-400">
                  DSGVO-konforme Impressums-Generierung in Sekunden — mit allen
                  Pflichtangaben nach § 5 TMG.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Datenschutz</h3>
                <p className="text-gray-400">
                  Datenschutzerklärungen, Cookies-Einwilligungen und
                  Auftragsverarbeitungsverträge — DSGVO-konform.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">AGB</h3>
                <p className="text-gray-400">
                  Allgemeine Geschäftsbedingungen für Shops, Dienstleister und
                  SaaS-Produkte — individuell anpassbar.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Dokumenten-Generator</h3>
                <p className="text-gray-400">
                  Intelligenter Generator: Beantworte ein paar Fragen und erhalte
                  ein fertiges, rechtsiches Dokument.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-2xl border border-dark-600 bg-dark-700 p-8 transition hover:border-primary-500/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20">
                  <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Auto-Updates</h3>
                <p className="text-gray-400">
                  Gesetzesänderungen? Kein Problem. Deine Dokumente werden
                  automatisch aktualisiert und benachrichtigen dich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="section">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Transparente <span className="gradient-text">Preise</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Wähle den Plan, der zu dir passt. Alle Pläne inklusive 14-tägigem
                kostenlosem Test.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Starter */}
              <div className="relative rounded-2xl border border-dark-600 bg-dark-800 p-8">
                <h3 className="mb-2 text-xl font-semibold">Starter</h3>
                <p className="mb-6 text-gray-400">Für Einzelpersonen und kleine Projekte</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">19€</span>
                  <span className="text-gray-400">/Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {[
                    "5 Dokumente/Monat",
                    "Basis-Vorlagen",
                    "E-Mail Support",
                    "DSGVO-konform",
                    "Deutsch & Englisch",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/api/checkout?plan=starter" className="btn-secondary w-full">
                  Starter wählen
                </a>
              </div>

              {/* Professional - Popular */}
              <div className="relative rounded-2xl border-2 border-primary-500 bg-dark-800 p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold text-white">
                  Beliebt
                </div>
                <h3 className="mb-2 text-xl font-semibold">Professional</h3>
                <p className="mb-6 text-gray-400">Für wachsende Teams und Agenturen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-gray-400">/Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {[
                    "25 Dokumente/Monat",
                    "Alle Vorlagen",
                    "Prioritäts-Support",
                    "Unbegrenzte Updates",
                    "Team-Zugang (3 Nutzer)",
                    "Custom Branding",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/api/checkout?plan=professional" className="btn-primary w-full">
                  Professional wählen
                </a>
              </div>

              {/* Enterprise */}
              <div className="relative rounded-2xl border border-dark-600 bg-dark-800 p-8">
                <h3 className="mb-2 text-xl font-semibold">Enterprise</h3>
                <p className="mb-6 text-gray-400">Für Unternehmen mit individuellen Anforderungen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">49€</span>
                  <span className="text-gray-400">/Monat</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {[
                    "Unbegrenzte Dokumente",
                    "Alle Vorlagen + Custom",
                    "24/7 Support",
                    "Unbegrenzte Updates",
                    "Unbegrenzte Team-Mitglieder",
                    "API-Zugang",
                    "Dedizierter Account Manager",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/api/checkout?plan=enterprise" className="btn-secondary w-full">
                  Enterprise wählen
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Alle Preise inkl. MwSt. Jederzeit kündbar. 14 Tage Geld-zurück-Garantie.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section bg-dark-800">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Häufige <span className="gradient-text">Fragen</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Sind die generierten Dokumente rechtsgültig?",
                  a: "Ja, unsere Dokumente werden auf Basis aktueller deutscher Gesetze und Rechtsprechung generiert. Sie ersetzen keine Rechtsberatung, bieten aber eine solide rechtliche Grundlage für dein Business.",
                },
                {
                  q: "Wie funktioniert der Dokumenten-Generator?",
                  a: "Du beantwortest ein paar einfache Fragen zu deinem Projekt oder Business. Unsere KI generiert daraus ein vollständiges, rechtsiches Dokument, das du als PDF herunterladen kannst.",
                },
                {
                  q: "Kann ich jederzeit kündigen?",
                  a: "Ja, alle Abonnements kannst du jederzeit mit einer Frist von 24 Stunden kündigen. Es gibt keine Mindestlaufzeit oder versteckten Kosten.",
                },
                {
                  q: "Was passiert bei Gesetzesänderungen?",
                  a: "Deine Dokumente werden automatisch aktualisiert, wenn sich Gesetze ändern. Du erhältst eine Benachrichtigung und kannst die Updates mit einem Klick übernehmen.",
                },
                {
                  q: "Gibt es eine Testphase?",
                  a: "Ja, alle Pläne kommen mit einer 14-tägigen kostenlosen Testphase. Keine Kreditkarte erforderlich.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-dark-600 bg-dark-700 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-dark-800 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Starte jetzt <span className="gradient-text">kostenlos</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              Erstelle dein erstes Dokument in weniger als 5 Minuten. Keine
              Kreditkarte erforderlich.
            </p>
            <a href="#pricing" className="btn-primary">
              14 Tage kostenlos testen
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
