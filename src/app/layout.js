import "./globals.css"
import FloatingUI from "./components/FloatingUI";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  title: "Anshika Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <ScrollReveal />
        {children}
        <FloatingUI />
      </body>
    </html>
  );
}
