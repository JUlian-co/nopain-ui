import React from "react";

export const GradientText = ({
  children,
  as: Tag = "span",
  colors = {},
  // from = "#ff6b00",
  // to = "#ff0075",
  direction = "r",
  underline = false,
  underlineOffset = "2px",
  className = "",
}) => {
  const { from = "#ff6b00", to = "#ff0075", via } = colors;

  const gradientDirectionMap = {
    t: "to top",
    tr: "to top right",
    r: "to right",
    br: "to bottom right",
    b: "to bottom",
    bl: "to bottom left",
    l: "to left",
    tl: "to top left",
  };

  const gradient = via
    ? `linear-gradient(to right, ${from}, ${via}, ${to})`
    : `linear-gradient(to right, ${from}, ${to})`;

  const gradientDirection = gradientDirectionMap[direction] || "to right";

  const gradientStyle = {
    backgroundImage: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    position: "relative",
  };

  return (
    <Tag style={gradientStyle} className={className}>
      {children}
      {underline && (
        <span
          style={{
            display: "block",
            height: "2px",
            backgroundImage: `linear-gradient(${gradientDirection}, ${from}, ${to})`,
            marginTop: underlineOffset,
          }}
        />
      )}
    </Tag>
  );
};
