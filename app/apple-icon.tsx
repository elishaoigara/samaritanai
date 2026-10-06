import { ImageResponse } from "next/og";
import { OrbitMark } from "@/components/orbit-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2452bd",
      }}
    >
      <OrbitMark size={156} monochrome />
    </div>,
    size,
  );
}
