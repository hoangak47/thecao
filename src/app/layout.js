import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";

export const metadata = {
  title: "Công ty TNHH MTV Thế Cao",
  icons: {
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    msTileIcon: "/mstile-150x150.png",
  },
  description:
    "Công ty TNHH THẾ CAO chuyên cung cấp dịch vụ uy tín, chất lượng tại Quận 12, TP. HCM. Liên hệ 0788 388 588 (Mr. Vũ) hoặc email lamtanvu232@gmail.com để được tư vấn nhanh chóng và chuyên nghiệp!",
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Công ty TNHH THẾ CAO",
    url: "https://thecao.vercel.app/", // Thay bằng URL thật
    logo: "https://thecao.vercel.app/logo.png", // Thay bằng logo thật
    address: {
      "@type": "PostalAddress",
      streetAddress: "362/109 Hiệp Thành 13, Khu Phố 7",
      addressLocality: "Quận 12",
      addressRegion: "Hồ Chí Minh",
      addressCountry: "VN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84 788 388 588",
      contactType: "customer service",
      email: "lamtanvu232@gmail.com",
    },
  };
  return (
    <html lang="en">
      <Head>
        <title>Công ty TNHH THẾ CAO</title>
        <meta
          name="description"
          content="Công ty TNHH THẾ CAO chuyên cung cấp dịch vụ uy tín tại Quận 12, TP. HCM. Liên hệ ngay!"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <meta
        name="google-site-verification"
        content="HYV1y2_mgjeriNKA6NB_iCS9-Ak5-mbkcCoxqH02yZ0"
      />
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
