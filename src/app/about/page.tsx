import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/Marks";
import { profile } from "../content";

export const metadata = {
  title: "About Ron",
  description:
    "Ron Fried’s background in software engineering, music and running a bar in Tel Aviv.",
};

export default function About() {
  return (
    <article className="wrap about-page">
      <div>
        <Link className="back-link" href="/">
          ← Portfolio
        </Link>
        <h1>
          About <em>Ron.</em>
        </h1>
        <p className="lead">
          Before I built software professionally, I owned a bar in Tel Aviv.
          Music has also been part of my life.
        </p>
        <p>
          These days my work takes me from React interfaces to the APIs and data
          behind them. At Firefly, that includes frontend and
          backend-for-frontend engineering. At Landly, I lead the technology
          behind a platform for researching land.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/#experience">
            Experience <Arrow />
          </Link>
          <a className="text-link" href={profile.cv}>
            CV · PDF <Arrow direction="down" />
          </a>
        </div>
      </div>
      <Image
        className="portrait"
        src="/images/ron.png"
        width={600}
        height={800}
        alt="Ron Fried"
      />
    </article>
  );
}
