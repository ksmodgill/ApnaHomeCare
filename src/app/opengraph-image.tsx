import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apna Home Care - Home Nursing Services in Muzaffarpur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #f8ebe6 0%, #fff5f0 50%, #f8ebe6 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #fd4f24, #e03e15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            +
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e" }}>
            Apna Home Care
          </span>
        </div>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#1a1a2e",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Home Nursing Services in Muzaffarpur
        </h1>
        <p style={{ fontSize: "28px", color: "#6b7280", maxWidth: "800px" }}>
          Professional Nursing Care at Your Home
        </p>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "24px",
            fontSize: "22px",
            color: "#fd4f24",
            fontWeight: 600,
          }}
        >
          <span>24/7 Support</span>
          <span>•</span>
          <span>500+ Families Assisted</span>
          <span>•</span>
          <span>Verified Nurses</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
