"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import profiles from "../data/arbel-profiles.json";

export default function TerrainStudy() {
  const [ready, setReady] = useState(false);
  const [position, setPosition] = useState(68);
  useEffect(() => setReady(true), []);
  const samples = profiles[position];
  const profileLine = samples
    .map((height, i) => {
      const x = (i * 160) / (samples.length - 1);
      const y = 30 - ((height + 220) * 28) / 540;
      return (i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
    })
    .join(" ");
  const range = samples.length
    ? Math.min(...samples) + " to " + Math.max(...samples) + " m"
    : "Outside terrain";

  return (
    <figure className="terrain">
      <div className="terrain-heading">
        <div>
          <strong>Mount Arbel</strong>
          <span>Terrain study · Galilee</span>
        </div>
        <a
          className="coordinates"
          href="/about#terrain-sources"
        >
          32.85° N<br />
          35.49° E<span className="sr-only"> · Mount Arbel terrain sources</span>
        </a>
      </div>
      <div
        className="terrain-stage"
        style={{ "--scan": position + "%" } as CSSProperties}
      >
        <div className="terrain-plates" aria-hidden="true">
          {(["contour", "surface"] as const).map((layer) => (
            <picture key={layer}>
              <source
                media="(max-width: 600px)"
                srcSet={`/atlas/arbel-${layer}-small.webp`}
              />
              <Image
                className={
                  layer === "surface"
                    ? "terrain-plate optical"
                    : "terrain-plate"
                }
                src={`/atlas/arbel-${layer}.webp`}
                alt=""
                width={1456}
                height={878}
                loading="eager"
                unoptimized
              />
            </picture>
          ))}
        </div>
        {ready && (
          <>
            <div className="scan-cursor" aria-hidden="true">
              <span>‹ ›</span>
            </div>
            <input
              id="terrain-compare"
              type="range"
              className="terrain-slider"
              min="0"
              max="100"
              step="1"
              value={position}
              aria-valuetext={
                position + "% satellite imagery. Elevation along cut: " + range
              }
              onChange={(e) => setPosition(e.currentTarget.valueAsNumber)}
            />
          </>
        )}
      </div>
      <figcaption>
        <span className="terrain-key">
          <i /> Satellite
        </span>
        {ready ? (
          <label className="terrain-hint" htmlFor="terrain-compare">
            Drag to compare<span className="sr-only"> satellite imagery and elevation contours</span>
          </label>
        ) : (
          <span className="terrain-hint">Terrain comparison</span>
        )}
        <span className="terrain-key">
          <i /> Contours
        </span>
      </figcaption>
      <div className="elevation-readout">
        <span>Elevation along cut</span>
        <svg viewBox="0 0 160 32" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30h160" stroke="currentColor" opacity=".25" />
          {samples.length > 0 && (
            <>
              <path
                d={profileLine + " L160 31H0Z"}
                fill="currentColor"
                opacity=".14"
              />
              <path
                d={profileLine}
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
              />
            </>
          )}
        </svg>
        <span className="height-range">{range}</span>
      </div>
      <p className="sr-only">
        A relief model of Mount Arbel beside the Sea of Galilee. Both views show
        the same landscape. The contour lines represent 20-metre changes in
        elevation. Relief is exaggerated.
      </p>
    </figure>
  );
}
