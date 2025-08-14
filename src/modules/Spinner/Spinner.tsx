import { ProgressSpinner } from "primereact/progressspinner";
import type { SpinnerProps } from "./spinner.types";

export function Spinner(props: SpinnerProps) {
  const { size = 40, strokeWidth = 6, className } = props;

  return (
    <div className="flex justify-center py-8">
      <ProgressSpinner
        style={{ width: `${size}px`, height: `${size}px` }}
        strokeWidth={String(strokeWidth)}
        className={className}
      />
    </div>
  );
}
