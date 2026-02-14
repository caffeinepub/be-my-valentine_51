import { ReactNode } from 'react';

interface ValentineLayoutProps {
  children: ReactNode;
}

export function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="min-h-screen bg-valentine-bg overflow-hidden">
      <main className="container mx-auto px-4 py-8 md:py-16 flex items-center justify-center min-h-screen">
        <div className="valentine-card w-full max-w-4xl bg-valentine-card rounded-3xl shadow-valentine p-6 md:p-12 text-center">
          {children}
        </div>
      </main>
      <footer className="fixed bottom-4 left-0 right-0 text-center text-sm text-valentine-text/60 z-20 pointer-events-none">
        <div className="pointer-events-auto inline-block">
          © {new Date().getFullYear()} · Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-valentine-primary transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
