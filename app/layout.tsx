import "./globals.css";
import type { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export const metadata = {
  title: "Chip Registry Creative OS",
  description: "Showroom de execuções verificáveis"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-canvas text-text-primary">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex w-full flex-col">
            <Topbar />
            <main className="flex-1 px-6 py-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
