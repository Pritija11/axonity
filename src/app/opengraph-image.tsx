import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Axonity — AI Agents & Workflow Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f6fc",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(47,95,255,0.14), transparent 55%), radial-gradient(circle at 85% 15%, rgba(124,79,224,0.12), transparent 55%), radial-gradient(circle at 50% 90%, rgba(15,148,136,0.08), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={190}
          height={190}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 20,
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#10142b",
          }}
        >
          axonity
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 26,
            color: "#4e5578",
          }}
        >
          AI agents &amp; workflow automation
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 10,
            background:
              "linear-gradient(90deg, #2f5fff 0%, #7c4fe0 55%, #0f9488 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
