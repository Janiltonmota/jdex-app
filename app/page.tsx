import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  JDEX
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                  Home
                </Link>
                <Link href="/trade" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                  Trade
                </Link>
                {/* Add more links as needed */}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Placeholder for user avatar or wallet connect */}
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Connect Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Bem-vindo ao JDEX
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Plataforma de negociação descentralizada para ativos digitais
          </p>
          <div className="space-x-4">
            <Link
              href="/trade"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Acessar Área de Negociação
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} JDEX. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
