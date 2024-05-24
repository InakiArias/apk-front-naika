import { FC } from "react";

export interface MaterialIconProps {
  name: string;
  className?: string;
}

export default function MaterialIcon({
  name,
  className = "",
  ...props
}: MaterialIconProps) {
  return (
    <span
      {...props}
      className={className + " align-bottom leading-[inherit] material-icons"}
    >
      {name}
    </span>
  );
}
