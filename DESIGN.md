# Parcel atlas

A parcel is the most specific object shared by Ron’s work and a visitor’s curiosity. The home page pairs a direct professional introduction with a map that opens into layers. The same object remains recognizable as the reader switches from a product question to a system question.

## Visual system

The page uses paper (#f8f8f1), dark green ink (#18271f), muted text (#445245), hairlines (#cdd2c5) and a survey-board green (#263d32). The lime highlight (#e3f398) identifies the selected view and parcel. All page-level tokens live at the beginning of `src/app/globals.css`. DM Sans carries prose, navigation and the first part of the display titles. Instrument Serif italic supplies the second voice. Both are local WOFF2 files with their licenses in `public/fonts`.

The desktop opening uses two columns. At 740px it becomes a reading sequence with the introduction first, then the interactive parcel. Project rows, the experience list and the article template share one content width. Inline links, a skip link and persistent navigation keep the longer pages traversable.

## Interaction

Two native radio controls show a composed parcel or an exploded view. Arrow keys move between them after focus enters the group. The CSS moves three geometric layers over 340ms. Reduced motion switches them instantly. Both descriptions are HTML, and the narrow layout uses an explanatory sentence in place of small in-diagram labels. The illustration and switch work with scripting disabled. Each case has its own URL.

The scene is a teaching illustration. Its selected outline and system layers are illustrative. The aerial is of California’s Sacramento–San Joaquin Delta, used as a stand-in. The public Landly case describes the actual product and team scope. Imagery credit belongs to USDA and USGS The National Map, Orthoimagery. [Source service](https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer)

## Direction comparison

- **Parcel atlas, selected.** A visitor can inspect what sits behind a geographic lookup in one action, then move into the public product. [Product view](docs/review/desktop.jpg) · [System view](docs/review/system.jpg)
- **Engineering edition.** A type-led broadsheet builds an entire opening around FastRide’s PIN validator. It gives one code decision more space, but puts an older project ahead of Ron’s current work. [Rendered direction](docs/directions/edition.jpg) · [Interactive prototype](docs/directions/edition.html)

The browser prototypes let us judge keyboard, touch and reduced-motion behavior in the same medium as the deliverable. They served as the design review surface.
