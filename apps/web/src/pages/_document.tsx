import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <link rel="manifest" href="/api/manifest.json" />
          <link rel="shortcut icon" href="/static/icons/icon-256.webp" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/icon-180x180.png"
          />
          <meta name="theme-color" content="#818cf8" />
          <script
            dangerouslySetInnerHTML={{
              // This code should be injected to avoid Flash of Unstyled Content (FOUC)
              // also see: https://tailwindcss.com/docs/dark-mode
              __html: `
              try {
                if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
