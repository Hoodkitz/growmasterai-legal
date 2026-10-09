export default function Footer() {
  return (
    <footer className="border-t border-dark-600 bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                GrowMaster <span className="text-primary-400">AI Legal</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Professionelle rechtliche Dokumente für dein Business — generiert, aktuell und DSGVO-konform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Produkt
            </h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-400 transition hover:text-primary-400">Features</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 transition hover:text-primary-400">Preise</a></li>
              <li><a href="#faq" className="text-sm text-gray-400 transition hover:text-primary-400">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li><a href="/impressum" className="text-sm text-gray-400 transition hover:text-primary-400">Impressum</a></li>
              <li><a href="/datenschutz" className="text-sm text-gray-400 transition hover:text-primary-400">Datenschutz</a></li>
              <li><a href="/agb" className="text-sm text-gray-400 transition hover:text-primary-400">AGB</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Kontakt
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@growmaster.app" className="text-sm text-gray-400 transition hover:text-primary-400">
                  support@growmaster.app
                </a>
              </li>
              <li>
                <a href="https://growmaster.app" className="text-sm text-gray-400 transition hover:text-primary-400">
                  growmaster.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-600 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GrowMaster AI Legal. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="/impressum" className="text-sm text-gray-500 transition hover:text-primary-400">
                Impressum
              </a>
              <a href="/datenschutz" className="text-sm text-gray-500 transition hover:text-primary-400">
                Datenschutz
              </a>
              <a href="/agb" className="text-sm text-gray-500 transition hover:text-primary-400">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
