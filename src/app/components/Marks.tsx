export function Arrow({
  direction = "right",
}: {
  direction?: "right" | "up" | "down";
}) {
  return (
    <svg
      aria-hidden="true"
      className={"arrow arrow-" + direction}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 10h13m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mark() {
  return (
    <svg aria-hidden="true" className="mark" viewBox="0 0 34 34" fill="none">
      <path d="m3 12 14-8 14 8-14 8z" fill="currentColor" />
      <path
        d="m3 18 14 8 14-8m-28 6 14 8 14-8"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
