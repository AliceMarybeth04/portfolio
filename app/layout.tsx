import type { Metadata } from "next";
import "./globals.css";
import ColorBends from "./components/ColorBends";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Alice Marybeth | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative min-h-screen bg-black`}>

        {/* Global Animated Background */}
        <div className="fixed inset-0 -z-10 opacity-30">
          <ColorBends
            colors={["#0000ff", "#0047AB", "#00BFFF", "#000080"]}
            transparent={false}
          />
        </div>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}