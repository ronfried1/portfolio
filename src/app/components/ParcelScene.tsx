import { Arrow, Mark } from "./Marks";

const plane = "matrix(.55 -.255 .50 .266 32 198)";
const edge = "M32 198 362 45 610 177 280 330Z";
const side = "M32 198 280 330 610 177v5L280 335 32 203Z";
const parcel = "183,297 239,274 265,312 204,340";

export function ParcelDrawing() {
  return (
    <svg
      className="parcel-drawing"
      viewBox="0 0 644 402"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="coordinates"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <path d="M18 0H0v18" fill="none" stroke="#96aa83" strokeWidth="1.4" />
        </pattern>
        <pattern
          id="hatching"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(37)"
        >
          <path d="M0 0v10" stroke="#f8ff83" strokeWidth="2.5" />
        </pattern>
      </defs>
      <g className="sheet base-sheet">
        <path d={edge} fill="#60785a" />
        <g transform={plane}>
          <rect width="600" height="495" fill="url(#coordinates)" />
        </g>
        <path d={side} fill="#899575" />
      </g>
      <g className="sheet data-sheet">
        <path d={edge} fill="#c7c99e" />
        <g transform={plane} stroke="#54705a" fill="none" strokeWidth="2">
          <path d="M0 152q48-45 155 0t196 21q110 0 157-173M0 204q40-57 92-42l173 47q184 33 238-63l51-146M0 363q99-52 176-30t160-20l100-71 164-75M15 0l76 155m93-155-41 146m134-146-7 189m96-189 45 165M38 202l-9 293m121-299-25 299m109-278-72 74 88 204m83-275-52 122 154 153m88-314-140 176 150 131M65 260l136-14m-163 83 155-13m148 41 94 30m20-137 145 54m-200 8 200 79" />
          <polygon points={parcel} fill="#739268" />
        </g>
        <path d={side} fill="#9d9f7a" />
      </g>
      <g className="sheet photo-sheet">
        <path d={side} fill="#b5a97b" />
        <g transform={plane}>
          <image
            href="/atlas/valley.webp"
            width="600"
            height="495"
            preserveAspectRatio="none"
          />
          <polygon
            points={parcel}
            fill="#e7ff74"
            fillOpacity=".62"
            stroke="#f1ff9a"
            strokeWidth="4"
          />
          <polygon points={parcel} fill="url(#hatching)" />
        </g>
        <path d={edge} fill="none" stroke="#e0e3b4" strokeWidth=".9" />
      </g>
      <g className="parcel-callout">
        <path
          d="M305 224v-49l36-31h45"
          stroke="#eff99c"
          strokeWidth="1.3"
          fill="none"
        />
        <circle cx="305" cy="224" r="4" fill="#eff99c" />
        <rect x="384" y="132" width="111" height="25" rx="3" fill="#edf4bf" />
        <text x="395" y="149" fill="#203429">
          Selected parcel
        </text>
      </g>
      <g className="layer-names">
        {[
          ["Parcel view", 112],
          ["Lookup", 211],
          ["Geographic data", 305],
        ].map(([label, y]) => (
          <g key={label} transform={"translate(418 " + y + ")"}>
            <path d="M-33 9 -17 0H0" fill="none" stroke="#e9efbf" />
            <rect
              x="0"
              y="-13"
              width={label === "Geographic data" ? 123 : 86}
              height="25"
              rx="3"
              fill="#edf4bf"
            />
            <text x="9" y="4" fill="#203429">
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function ParcelScene({ inCase = false }: { inCase?: boolean }) {
  return (
    <figure className="scene">
      <div className="scene-body">
        <div className="scene-heading">
          <Mark />
          <strong>Landly</strong>
          <span>Parcel explorer</span>
        </div>
        <fieldset className="explorer">
          <legend className="sr-only">Explore the Landly illustration</legend>
          <input
            className="sr-only"
            defaultChecked
            type="radio"
            aria-describedby="product-description"
            name="scene"
            id="product"
          />
          <input
            className="sr-only"
            type="radio"
            aria-describedby="system-description"
            name="scene"
            id="system"
          />
          <div className="scene-controls">
            <label htmlFor="product">Product view</label>
            <label htmlFor="system">Under the hood</label>
          </div>
          <ParcelDrawing />
          <p
            id="product-description"
            className="scene-description product-description"
          >
            One parcel, placed in its geographic context.
          </p>
          <p
            id="system-description"
            className="scene-description system-description"
          >
            The parcel view uses a lookup to connect an identifier to geographic
            data.
          </p>
        </fieldset>
      </div>
      <figcaption>
        <span>Illustrative reconstruction</span>
        {inCase ? (
          <a href="https://landly.co.il/en/about-us">
            Landly’s team <Arrow direction="up" />
          </a>
        ) : (
          <a href="/work/landly">
            Read the case <Arrow />
          </a>
        )}
      </figcaption>
    </figure>
  );
}
