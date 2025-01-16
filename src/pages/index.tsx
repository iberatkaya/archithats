import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Logo from "../images/archithats-logo.jpg";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "white", // Add this line
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main
      style={pageStyles}
      className="min-h-screen flex items-center justify-center bg-white" // Add bg-white class
    >
      <div className="w-full">
        <img
          className="h-96 sm:h-[100vh] w-72 sm:w-96 object-contain mx-auto animate-pulse"
          src={Logo}
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Archithats</title>;
