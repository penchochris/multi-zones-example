import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Shell } from "@multi-zones/shared-ui";
import "@multi-zones/shared-ui/styles.css";

export const metadata: Metadata = {
  title: "App B",
};

// appB renders the same shared nav + footer as appA, so /appB looks like part
// of appA while the middle content comes from this app.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shell zone="appB">{children}</Shell>
      </body>
    </html>
  );
}
