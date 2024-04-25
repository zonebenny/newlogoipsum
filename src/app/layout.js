
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";


const cormorant_garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const work_sans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});



export const metadata = {
  title: "Logo-Ipsum",
  description: "Logo-Ipsum ",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        "--ff-cormorant-garamond": cormorant_garamond.style.fontFamily,
        "--ff-work-sans": work_sans.style.fontFamily,
      }}
    >
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={work_sans.className}>
        <Header />

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
