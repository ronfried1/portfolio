# Terrain study

The opening pairs Ron’s name and role with a relief model of Mount Arbel. Dragging the scan line exposes a contour survey underneath the satellite image. The elevation profile follows the same cut through the landscape. This is an original portfolio study. The separate Landly case explains the startup and links to its live product.

## Visual system

The opening uses dark survey green (#152221), paper (#f3f3e4) and a chartreuse highlight (#dbf39a). Below it, warm paper (#f8f8f1) and green ink (#18271f) support longer reading. Local DM Sans and Instrument Serif italic carry the name, headings and navigation. The hero and featured-work rules live in `src/app/fieldwork.css`. Shared navigation, articles, contact and the Landly diagram use `src/app/globals.css`.

On desktop, Ron’s name stacks next to the landscape. On phones the name moves onto one line, then the introduction, the instrument and the case studies follow. Firefly and Landly get the first two project links. The earlier FastRide project remains directly accessible through its original case route.

## Interaction and assets

- `TerrainStudy.tsx` reveals two registered WebP plates with a native range input. The thumb tracks the pointer directly. Arrow, Home and End keys work, touch can scroll vertically, and nothing plays on entry. The initial comparison and its description render as HTML with scripting disabled. Small screens receive 720px plates. There are no map-service requests at runtime.
- The profile contains 101 horizontal scan positions, with up to 48 elevation samples along each cut. Sample heights are rounded to metres. At either end, the line is outside the relief block. Both the readout and screen-reader value reflect this. Store revised samples in `src/app/data/arbel-profiles.json` together with any replacement for the plates.
- `StreamReplay.tsx` is a local, illustrative replay of ten text fragments becoming one Terraform declaration. Visitors start it explicitly. In reduced-motion mode or without JavaScript, the completed example remains readable.
- The Landly article retains the separate product/system diagram. Its Californian stand-in imagery comes from USDA and USGS The National Map. [Source service](https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer)

## Terrain provenance

Contains modified Copernicus Sentinel data (2024). The optical image uses a May 9 Sentinel-2 L2A true-color scene. The bounds in longitude and latitude are 35.436°–35.552° E and 32.799°–32.896° N. Elevation uses Mapzen Terrarium tiles at zoom 12, with global terrain data courtesy of the U.S. Geological Survey. The optical and elevation grids were aligned to the same geographic extent, then projected through the same camera. The displayed contour interval is 20 m. The vertical scale is exaggerated and the exposed sides are illustrative. [Satellite scene](https://earth-search.aws.element84.com/v1/collections/sentinel-2-l2a/items/S2B_36SYB_20240509_0_L2A) · [Elevation dataset](https://registry.opendata.aws/terrain-tiles/) · [Terrain attribution](https://github.com/tilezen/joerd/blob/master/docs/attribution.md)

For a replacement render, the study used a 145 × 145 mesh over a 1024 × 1024 source raster. At normalized geographical coordinates (u, v) running east and south, the 1456 × 878 cropped image has pixel coordinates x = 470 + 975u − 452v and y = 220 + 295u + 302v − 0.43(h + 215), with h in metres. Cross-sections vary v over the intersection of each constant-x line with the geographic square. The background topographic lines are derived from the same elevation grid.

## Previews

[Desktop](docs/review/desktop.jpg) · [Mobile](docs/review/mobile.jpg) · [Terrain scan](docs/review/terrain-scan.jpg) · [Firefly case](docs/review/firefly.jpg) · [Earlier editorial alternative](docs/directions/edition.html)
