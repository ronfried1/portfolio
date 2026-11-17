import Link from "next/link";
import { Arrow } from "./components/Marks";
import TerrainStudy from "./components/TerrainStudy";
import { archive, experience, profile, studies } from "./content";
import "./fieldwork.css";

export default function Home() {
  return (
    <>
      <section className="field-hero" aria-labelledby="intro">
        <div className="wrap field-grid">
          <div className="field-intro">
            <h1 id="intro">
              Ron <em>Fried.</em>
            </h1>
            <h2>Full-stack engineer &amp; guild lead.</h2>
            <p>
              I build Go services and AI agents at Firefly. On the side, I lead
              technology at <a href="https://landly.co.il/">Landly</a>, our
              startup for researching land in Israel.
            </p>
            <a className="field-cta" href="#projects">
              Explore my work <Arrow direction="down" />
            </a>
          </div>
          <TerrainStudy />
          <div className="field-meta">
            <span>Bat Yam, Israel</span>
            <div>
              <a href={profile.github}>
                GitHub <Arrow direction="up" />
              </a>
              <a href={profile.linkedin}>
                LinkedIn <Arrow direction="up" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="field-work" id="projects">
          <div className="section-title">
            <h2>
              Selected <em>work.</em>
            </h2>
          </div>
          <div className="project-spread">
            {studies
              .filter(({ slug }) => slug !== "fastride")
              .map((study) => (
                <article className="project-feature" key={study.slug}>
                  <Link href={"/work/" + study.slug} className="feature-link">
                    <div
                      className={"project-art art-" + study.slug}
                      aria-hidden="true"
                    >
                      {study.slug === "firefly" ? (
                        <svg
                          viewBox="0 0 620 160"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <g fill="none" strokeWidth="1.3">
                            {Array.from({ length: 24 }, (_, i) => (
                              <path
                                key={i}
                                stroke={i % 5 === 0 ? "#e6ecc7" : "#9b9dea"}
                                d={`M-15 ${32 + i * 4} C110 ${32 + i * 4} 130 ${148 - i * 7} 230 ${112 - i * 3} S332 ${-76 + i * 8} 405 ${21 + i * 4} S510 ${149 - i * 3} 650 ${58 + i * 1.8}`}
                              />
                            ))}
                          </g>
                        </svg>
                      ) : (
                        <div className="map-detail" />
                      )}
                    </div>
                    <div className="project-label">
                      <span>{study.kind}</span>
                      <Arrow />
                    </div>
                    <h3>{study.name}</h3>
                    <p>{study.summary}</p>
                  </Link>
                  {study.slug === "landly" && (
                    <a className="live-link" href="https://landly.co.il/">
                      Visit Landly <Arrow direction="up" />
                    </a>
                  )}
                </article>
              ))}
          </div>
          <details className="archive">
            <summary>Earlier projects</summary>
            <ul>
              <li>
                <b>FastRide</b>
                <Link href="/work/fastride">
                  Read the case <Arrow />
                </Link>
              </li>
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
          </div>
        </section>
      </div>
    </>
  );
}
