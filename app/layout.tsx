import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Providers } from "./context/redux.provider";
import { QueryProvider } from "./context/query.provider";
import { AuthGuard } from "../components/authGuard";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mark8",
  description: "Done by Fabien for Awesomity Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
          <Providers>
            <QueryProvider>
              <AuthGuard>{children}</AuthGuard>
            </QueryProvider>
          </Providers>
      </body>
    </html>
  );
}
