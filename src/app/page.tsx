import Link from "next/link";
import { Arrow } from "./components/Marks";
import ParcelScene from "./components/ParcelScene";
import { archive, experience, profile, studies } from "./content";

export default function Home() {
  return (
    <div className="wrap">
      <section className="hero" aria-labelledby="intro">
        <div className="hero-copy">
          <h1 id="intro">
            Full-stack
            <br />
            <em>engineer.</em>
          </h1>
          <p>
            I’m Ron Fried. I lead the technology behind Landly. At Firefly, I
            build frontends and APIs and run our full-stack guild.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore my work <Arrow direction="down" />
            </a>
            <a className="text-link" href="#experience">
              Experience <Arrow />
            </a>
          </div>
          <div className="hero-meta">
            <span className="location">
              <svg aria-hidden="true" viewBox="0 0 18 18">
                <circle cx="9" cy="9" r="7" />
                <ellipse cx="9" cy="9" rx="3" ry="7" />
                <path d="M2 9h14" />
              </svg>
              Tel Aviv, Israel
            </span>
            <span className="meta-divider" />
            <a href={profile.github}>
              GitHub <Arrow direction="up" />
            </a>
            <a href={profile.linkedin}>
              LinkedIn <Arrow direction="up" />
            </a>
          </div>
        </div>
        <ParcelScene />
      </section>
      <section className="work-section" id="projects">
        <div className="section-title">
          <h2>
            Selected <em>work.</em>
          </h2>
          <span>Case studies</span>
        </div>
        {studies.map((s) => (
          <Link className="study-row" key={s.slug} href={"/work/" + s.slug}>
            <div className={"thumb thumb-" + s.slug} aria-hidden="true">
              {s.slug === "fastride" && (
                <span className="ticket">
                  FAST
                  <br />
                  RIDE
                  <i />
                </span>
              )}
            </div>
            <div className="study-name">
              <span>{s.kind}</span>
              <h3>{s.name}</h3>
            </div>
            <p>{s.summary}</p>
            <span className="round-arrow">
              <Arrow />
            </span>
          </Link>
        ))}
        <details className="archive">
          <summary>More projects</summary>
          <ul>
            {archive.map(([name, code, site]) => (
              <li key={name}>
                <b>{name}</b>
                {code && <a href={code}>Source</a>}
                <a href={site}>
                  Website <Arrow direction="up" />
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>
      <section className="experience-section" id="experience">
        <div>
          <h2>
            Experience<em>.</em>
          </h2>
          <Link className="text-link" href="/about">
            About me <Arrow />
          </Link>
        </div>
        <div>
          {experience.map(([name, role, description]) => (
            <article className="role" key={name}>
              <div>
                <h3>{name}</h3>
                <span>{role}</span>
              </div>
              <p>{description}</p>
            </article>
          ))}
          <div className="ai-note">
            <h3>Working with AI</h3>
            <p>
              I use AI coding tools to explore an implementation and produce a
              working draft. For this portfolio, the checks included a
              production build, keyboard testing and a side-by-side review of
              the mobile and desktop layouts.
            </p>
            <a className="text-link" href={profile.github}>
              My public projects <Arrow direction="up" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
