import test from "node:test";
import assert from "node:assert/strict";

const origin = process.env.PORTFOLIO_PREVIEW_URL || "http://127.0.0.1:4176";

test("the index, experience and case routes render their content on the server", async () => {
  for (const [path, text] of [
    ["/", "Explore my work"],
    ["/about", "Before I built software"],
    ["/work/landly", "A parcel in context"],
    ["/work/fastride", "Remembering a ride reservation"],
  ]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, 200, path);
    assert.ok((await response.text()).split("</main>")[0].includes(text), path);
  }
  assert.equal((await fetch(new URL("/work/unknown-project", origin))).status, 404);
});

test("the original CV and the share image return valid file signatures", async () => {
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
