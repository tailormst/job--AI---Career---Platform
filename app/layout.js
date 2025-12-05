import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react"; // Import necessary icons

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jobAi - Career",
  description: "It is a app for job Preparation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* Footer Section */}
            <footer className="w-full bg-secondary py-10 border-t border-border">
              <div className="container mx-auto px-4 md:px-6 text-center">
                
                {/* Main Footer Links and Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pb-5 mb-4 border-b border-border/50">
                  {/* Corrected text color class to text-muted-foreground */}
                  <p className="text-foreground text-base hover:text-primary transition-colors">
                    &copy; {new Date().getFullYear()} The Job Matrix. All rights reserved.
                  </p>
                  <div className="flex space-x-6">
                    {/* Twitter is kept as a placeholder since no URL was provided */}
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                      <Twitter className="h-6 w-6" /> {/* Increased size */}
                      <span className="sr-only">Twitter</span>
                    </Link>
                    {/* LinkedIn URL added */}
                    <Link 
                      href="https://www.linkedin.com/in/mohammed-tailor-002968288/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-6 w-6" /> {/* Increased size */}
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    {/* GitHub URL added */}
                    <Link 
                      href="https://github.com/tailormst" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-6 w-6" /> {/* Increased size */}
                      <span className="sr-only">GitHub</span>
                    </Link>
                    {/* Mailto link added and corrected */}
                    <Link href="mailto:mohammedtailor5253@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      <Mail className="h-6 w-6" /> {/* Increased size */}
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                  <div className="flex space-x-4 text-base"> {/* Increased size */}
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                </div>
                
                {/* Custom Credit Line - Increased size */}
                <div className="pt-2 text-center text-sm text-foreground hover:text-primary transition-colors">
                  <p>Made with 💗 by Mohammed Tailor || The Job Matrix 🤖</p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}