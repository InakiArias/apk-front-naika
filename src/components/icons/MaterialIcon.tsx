import React, { FC } from "react";

export interface MaterialIconProps {
  name: string;
}

type Props = MaterialIconProps & React.ComponentProps<'span'>;

export default function MaterialIcon({
  name,
  className = "",
  ...props
}: Props) {
  return (
    <span
      {...props}
      className={("align-bottom leading-[inherit] material-icons " + className).trim()}
    >
      {name}
    </span>
  );
}
