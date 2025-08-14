import { ProgressSpinner } from "primereact/progressspinner";

export type SpinnerProps = {
  size?: number | string; // e.g. 40 or "40px"
  strokeWidth?: number | string; // e.g. 6
  className?: string;
};

export function Spinner(props: SpinnerProps) {
  const { size = 40, strokeWidth = 6, className } = props;

  const style =
    typeof size === "number"
      ? { width: `${size}px`, height: `${size}px` }
      : { width: size, height: size };

  return (
    <ProgressSpinner style={style} strokeWidth={String(strokeWidth)} className={className} />
  );
}

