"use client";

import { useEffect, useState } from "react";

const fragments = [
  "variable ",
  '"region"',
  " {\n",
  "  type",
  "    = ",
  "string\n",
  "  default",
  " = ",
  '"eu-west-1"',
  "\n}",
];

export default function StreamReplay() {
  const [received, setReceived] = useState(fragments.length);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(true), []);
  useEffect(() => {
    if (received === fragments.length) return;
    const timer = window.setTimeout(() => setReceived(received + 1), 170);
    return () => window.clearTimeout(timer);
  }, [received]);

  return (
    <figure className="stream-replay">
      <figcaption>
        <span>Illustrative stream</span>
        <span>Terraform</span>
      </figcaption>
      <pre>
        <code aria-hidden="true">{fragments.slice(0, received).join("")}</code>
        <span className="sr-only">{fragments.join("")}</span>
      </pre>
      <div className="replay-footer">
        <span aria-hidden="true">
          {received} / {fragments.length} fragments
        </span>
        {enabled && (
          <button
            type="button"
            onClick={() =>
              setReceived(
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? fragments.length
                  : 0,
              )
            }
          >
            Replay stream <span aria-hidden="true">↻</span>
          </button>
        )}
      </div>
    </figure>
  );
}
