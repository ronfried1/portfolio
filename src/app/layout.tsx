import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Mark } from "./components/Marks";
import Contact from "./components/Contact";
import { profile } from "./content";

const title = "Ron Fried — Full-stack engineer";
const description =
  "Explore Ron Fried’s full-stack engineering work, from Go services and in-product AI agents at Firefly to Landly, his independent real-estate startup.";
export const metadata: Metadata = {
  metadataBase: new URL("https://ronfried-portfolio.vercel.app"),
  title: { default: title, template: "%s | Ron Fried" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      { url: "/atlas/social.jpg", width: 1200, height: 630, alt: title },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/atlas/social.jpg"] },
  icons: { icon: "/atlas/mark.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="wrap nav">
            <Link className="brand" href="/">
              <Mark /> Ron Fried
            </Link>
            <nav aria-label="Main navigation">
              <a href="/#projects">Work</a>
              <a href="/#experience">Experience</a>
              <a href={profile.cv} aria-label="CV (PDF)">
                CV <Arrow direction="up" />
              </a>
              <a className="nav-contact" href="#contact">
                Contact <Arrow direction="up" />
              </a>
            </nav>
          </div>
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer id="contact">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <h2>
                  Get in <em>touch.</em>
                </h2>
                <p>
                  For engineering roles, collaborations or a conversation about
                  the work.
                </p>
                <a className="email" href={"mailto:" + profile.email}>
                  {profile.email.toLowerCase()} <Arrow direction="up" />
                </a>
              </div>
              <div className="contact-options">
                <a href={profile.linkedin}>
                  LinkedIn <Arrow direction="up" />
                </a>
                <a href={profile.github}>
                  GitHub <Arrow direction="up" />
                </a>
                <a href={profile.cv}>
                  CV · PDF <Arrow direction="down" />
                </a>
                <Contact />
              </div>
            </div>
            <div className="footer-end">
              <span>Ron Fried</span>
              <a href="#main">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
