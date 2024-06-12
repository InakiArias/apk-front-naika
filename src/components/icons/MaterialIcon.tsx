import React, { FC } from "react";

export interface MaterialIconProps {
  name: string;
  type?: "outlined" | "round" | "sharp" | "two-tone" | "";
}

type Props = MaterialIconProps & React.ComponentProps<"span">;

export default function MaterialIcon({
  name,
  className = "",
  type = "",
  ...props
}: Props) {
  if (type) {
    type = "-" + type;
  }

  return (
    <span
      {...props}
      className={(
        `align-bottom leading-[inherit] material-icons${type} ` + className
      ).trim()}
    >
      {name}
    </span>
  );
}
