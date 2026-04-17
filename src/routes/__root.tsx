import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://o6cdhdutve.execute-api.ap-northeast-2.amazonaws.com",
      },
      {
        rel: "stylesheet",
        href: "https://o6cdhdutve.execute-api.ap-northeast-2.amazonaws.com/v1/api/css/drop_fontstream_css/?sid=gAAAAABp34rUSf_DW-bOsbbyudIswhf0pMIf-cFaW8SIJzeKEQ1r1CRw0uMKkq3-EvAsf5nmj0sJVtuW3IRpLV6VMfrsBg3lR_lf5anamYrL2kCVpAhgGsQavSb6gWKjDnYi6f5k9ek3azyTedq11YV4p4TeAWHWIWVsssl9ZvR2wfQ-8_s73u5SrqkbtxZxXYqdKNhIPFvit6u9UZVIm8M5PPSs93GpZPyGCAHfyTEPKEDtLc3miZKBPaJOErxAjxDJXj7u9rpd",
        charSet: "utf-8",
        referrerPolicy: "origin",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head suppressHydrationWarning>
        <HeadContent />
        <link rel="preconnect" href="https://o6cdhdutve.execute-api.ap-northeast-2.amazonaws.com" />
        <link
          rel="stylesheet"
          href="https://o6cdhdutve.execute-api.ap-northeast-2.amazonaws.com/v1/api/css/drop_fontstream_css/?sid=gAAAAABp34rUSf_DW-bOsbbyudIswhf0pMIf-cFaW8SIJzeKEQ1r1CRw0uMKkq3-EvAsf5nmj0sJVtuW3IRpLV6VMfrsBg3lR_lf5anamYrL2kCVpAhgGsQavSb6gWKjDnYi6f5k9ek3azyTedq11YV4p4TeAWHWIWVsssl9ZvR2wfQ-8_s73u5SrqkbtxZxXYqdKNhIPFvit6u9UZVIm8M5PPSs93GpZPyGCAHfyTEPKEDtLc3miZKBPaJOErxAjxDJXj7u9rpd"
          charSet="utf-8"
          referrerPolicy="origin"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
