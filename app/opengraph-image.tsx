import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Flaiter - Diccionario de Chilenismos";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f1f0e5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background Decorative Circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#a37764",
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#56453f",
            opacity: 0.05,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            border: "2px solid #a37764",
            borderRadius: "40px",
            background: "white",
            boxShadow: "0 20px 50px rgba(163, 119, 100, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#56453f",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            Flaiter
            <span style={{ color: "#a37764", marginLeft: 10 }}>.</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a37764",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Diccionario de Chilenismos
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "#56453f",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Traductor y guía de supervivencia para el español chileno. Entiende la
          jerga callejera con IA.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#a37764",
            fontWeight: 600,
          }}
        >
          flaiter.netlify.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
