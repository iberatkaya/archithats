import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import PDF from "../assets/pdfs/demo.pdf";
import Logo from "../images/archithats.jpg";

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles} className="bg-black">
      <div>
        <div className="bg-black w-full align-middle justify-center">
          <img
            className="h-96 sm:h-[100vh] w-72 sm:w-96 object-contain mx-auto"
            src={Logo}
          />
        </div>
        <p className="px-6 text-white text-xl sm:text-3xl mb-2 sm:mb-6 sm:px-64 sm:ml-4">
          April 2023
        </p>
        <iframe
          src={PDF}
          allowFullScreen
          frameBorder="0"
          className="w-full px-4 sm:px-64 h-[90vh]"
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Archithats</title>;
