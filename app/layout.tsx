import type { Metadata } from "next";
import React from "react";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Bylyna.online Self Hosted Demo",
  description: "This is hosted on Ubuntu Linux with Nginx as a reverse proxy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <title>Bylyna</title>
      </head>
      <body>{children}</body>
      </html>
  );
}
