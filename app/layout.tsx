import "../dist/style.css";
import { Kalam, Noto_Sans } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--kalam-font",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--natoSans-font",
});

export const metadata = {
  title: "Ratepunk",
  description: "Ratepunk task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
