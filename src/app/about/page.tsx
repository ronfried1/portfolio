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
          At Firefly I build Go services, implement AI agents in the product,
          and lead the Full-Stack Guild. Alongside that work, I lead technology
          at Landly, a working startup for people researching land in Israel.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/#experience">
            Experience <Arrow />
          </Link>
          <a className="text-link" href={profile.cv}>
            CV · PDF <Arrow direction="down" />
          </a>
        </div>
        <section className="map-credits" id="terrain-sources">
          <h2>Terrain sources</h2>
          <p>
            The homepage compares two views of Mount Arbel near the Sea of
            Galilee. The relief is exaggerated and the contours are 20 metres
            apart. Contains modified Copernicus Sentinel data (2024). Elevation
            data courtesy of the U.S. Geological Survey via Mapzen Terrain
            Tiles.
          </p>
          <p>
            <a
              className="text-link"
              href="https://earth-search.aws.element84.com/v1/collections/sentinel-2-l2a/items/S2B_36SYB_20240509_0_L2A"
            >
              Satellite scene <Arrow direction="up" />
            </a>{" "}
            <a
              className="text-link"
              href="https://registry.opendata.aws/terrain-tiles/"
            >
              Terrain source <Arrow direction="up" />
            </a>
          </p>
        </section>
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
