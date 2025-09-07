import "@/assets/globals.css";
import { jost } from "@/fonts/allFonts";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import Banner from "@/components/ui/Banner";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Headers";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import OfflineWrapper from "@/components/pages/OfflineWrapper";

export const metadata = {
  metadataBase: new URL("https://edupress.vercel.app/"),
  title: "EduPress Online Courses",
  description: "Best platform for online courses",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={"en"} data-theme="light" suppressHydrationWarning>
      <body className={jost.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <OfflineWrapper>
            <NextIntlClientProvider>
              <ToastContainer />
              <Banner locale={locale} />
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </OfflineWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
