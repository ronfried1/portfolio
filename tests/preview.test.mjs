import test from "node:test";
import assert from "node:assert/strict";

const origin = process.env.PORTFOLIO_PREVIEW_URL || "http://127.0.0.1:4176";

test("the index, experience and case routes render their content on the server", async () => {
  for (const [path, text] of [
    ["/", "Explore my work"],
    ["/about", "Before I built software"],
    ["/work/firefly", "Streaming infrastructure code"],
    ["/work/landly", "A parcel in context"],
    ["/work/fastride", "Remembering a ride reservation"],
  ]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    assert.ok((await response.text()).split("</main>")[0].includes(text), path);
  }
  assert.equal((await fetch(new URL("/work/unknown-project", origin))).status, 404);
});

test("the current CV and the share image return valid file signatures", async () => {
  for (const [path, signature] of [
    ["/files/Ron-Fried-cv.pdf", Buffer.from("%PDF-")],
    ["/atlas/social.jpg", Buffer.from([0xff, 0xd8, 0xff])],
  ]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.deepEqual(bytes.subarray(0, signature.length), signature);
  }
});

test("the terrain readout covers the scan in whole-metre samples", async () => {
  const { readFile } = await import("node:fs/promises");
  const samples = JSON.parse(await readFile(new URL("../src/app/data/arbel-profiles.json", import.meta.url), "utf8"));
  assert.equal(samples.length, 101);
  assert.deepEqual(samples[0], []);
  assert.deepEqual(samples[100], []);
  assert.ok(samples[68].length === 48 && Math.max(...samples[68]) > Math.min(...samples[68]));
  assert.ok(samples.flat().every(Number.isInteger));
});
