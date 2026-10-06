/** Orbit: the selected circular Samaritan mark, drawn as scalable geometry. */
export const orbitSegments = [
  "M60 8.14A56 56 0 0 0 8.3 58.2C32 52.8 52.4 34.6 60 8.14Z",
  "M68 8.14A56 56 0 0 1 119.7 58.2C105.1 47.4 88 40.8 68 36.2Z",
  "M119.7 69.8A56 56 0 0 1 68 119.86C68.3 97.8 88.9 78.5 119.7 69.8Z",
  "M60 119.86A56 56 0 0 1 8.3 69.8C24.6 79.3 41.7 85.8 60 91.8Z",
];
export const orbitCentre = "M60.4 46.4 88.3 56.1 67.6 81.6 39.7 71.9Z";

export function OrbitMark({
  size = 42,
  monochrome = false,
}: {
  size?: number;
  monochrome?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="orbit-mark"
    >
      <g fill={monochrome ? "#ffffff" : "#182238"}>
        {orbitSegments.map((d) => <path key={d} d={d} />)}
      </g>
      <path d={orbitCentre} fill={monochrome ? "#ffffff" : "#2452bd"} />
    </svg>
  );
}
