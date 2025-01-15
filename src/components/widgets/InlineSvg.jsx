import React, { useEffect, useState } from "react";

const InlineSvg = ({ path }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    // Fetch the SVG file and set its content
    fetch(path)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
  }, [path]);

  return (
    <div
      className="inline-svg"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    ></div>
  );
};

export default InlineSvg;
