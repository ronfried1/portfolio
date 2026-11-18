import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../../components/Marks";
import ParcelScene from "../../components/ParcelScene";
import StreamReplay from "../../components/StreamReplay";
import { studies } from "../../content";

function getStudy(slug: string) {
  return studies.find((study) => study.slug === slug) ?? notFound();
}
export const dynamicParams = false;
export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const study = getStudy((await params).slug);
  return {
    title: study.name + " — " + study.title,
    description: study.summary,
  };
}
export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const study = getStudy((await params).slug);
  const other = studies[(studies.indexOf(study) + 1) % studies.length];
  return (
    <article className="wrap case">
      <Link className="back-link" href="/#projects">
        ← Selected work
      </Link>
      <div className="case-heading">
        <h1>
          {study.name}
          <em>.</em>
        </h1>
        <div>
          <span>{study.kind}</span>
          <b>{study.role}</b>
        </div>
      </div>
      <div className="case-intro">
        <div>
          <h2>{study.title}</h2>
          <p className="lead">{study.intro}</p>
        </div>
        {study.slug === "firefly" ? (
          <StreamReplay />
        ) : study.slug === "landly" ? (
          <ParcelScene inCase />
        ) : (
          <figure className="archive-shot">
            <Image
              src="/atlas/fastride.webp"
              alt="The original FastRide interface showing the ride list and park pass input"
              width={930}
              height={452}
              unoptimized
            />
            <figcaption>FastRide · Original application</figcaption>
          </figure>
        )}
      </div>
      <div className="case-text">
        {study.sections.map(([heading, body]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <div className="evidence-links">
          {study.links.map(([label, url]) => (
            <a className="text-link" key={url} href={url}>
              {label} <Arrow direction="up" />
            </a>
          ))}
        </div>
      </div>
      <Link className="next-case" href={"/work/" + other.slug}>
        Next case{" "}
        <strong>
          {other.name} <Arrow />
        </strong>
      </Link>
    </article>
  );
}
