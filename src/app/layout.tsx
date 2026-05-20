"use client";

import StoreProvider from "@/store/StoreProvider";
import QueryProvider from "@/providers/QueryProvider";
import Script from "next/script";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jqueryLoaded, setJqueryLoaded] = useState(false);
  const [slickLoaded, setSlickLoaded] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/all.min.css" />
        <link rel="stylesheet" href="/styles/slick.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
        {/* Added jQuery UI styles for the datepicker */}
        <link
          rel="stylesheet"
          href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css"
        />
      </head>
      <body>
        <StoreProvider>
          <QueryProvider>{children}</QueryProvider>
        </StoreProvider>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

        {/* 1. Load base jQuery */}
        <Script
          src="/js/jquery.min.js"
          strategy="beforeInteractive"
          onLoad={() => setJqueryLoaded(true)}
        />

        {jqueryLoaded && (
          <>
            {/* 2. FIXED: Load jQuery UI dependency so .datepicker() works smoothly */}
            <Script
              src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"
              strategy="lazyOnload"
              onLoad={() => setSlickLoaded(true)}
            />
            <Script src="/js/slick.min.js" strategy="lazyOnload" />
          </>
        )}

        {slickLoaded && (
          <>
            {/* 3. FIXED: Added type="module" fallback configurations to handle unexpected export syntaxes */}
            <Script
              src="/js/circle-progress.min.js"
              strategy="lazyOnload"
              type="module"
            />
            <Script src="/js/custom.js" strategy="lazyOnload" type="module" />
          </>
        )}
      </body>
    </html>
  );
}
