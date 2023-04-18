import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PDF from "../assets/pdfs/demo.pdf";
import Logo from "../images/archithats.jpg";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div
        style={{
          paddingLeft: 96,
          paddingRight: 96,
        }}
      >
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginBottom: "2vh",
          }}
        >
          <img
            src={Logo}
            style={{
              width: "20vw",
            }}
          />
        </div>
        <iframe
          src={PDF}
          style={{ width: "100%", height: "60vh" }}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Archithats</title>;
