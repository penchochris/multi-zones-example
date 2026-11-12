import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Shell } from "@multi-zones/shared-ui";
import "@multi-zones/shared-ui/styles.css";

export const metadata: Metadata = {
  title: "App A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell zone="appA">{children}</Shell>
      </body>
    </html>
  );
}
