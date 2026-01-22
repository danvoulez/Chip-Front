import clsx from "clsx";

type ProgressLine = {
  state: "done" | "active" | "pending";
  text: string;
};

type ProgressLinesProps = {
  lines: ProgressLine[];
  maxLines?: number;
};

const stateColor: Record<ProgressLine["state"], string> = {
  done: "bg-accent-verify",
  active: "bg-accent-proof",
  pending: "bg-text-tertiary"
};

export default function ProgressLines({ lines, maxLines = 6 }: ProgressLinesProps) {
  return (
    <div className="space-y-2">
      {lines.slice(-maxLines).map((line, index) => (
        <div key={`${line.text}-${index}`} className="flex items-center gap-3 text-sm">
          <span className={clsx("h-2 w-2 rounded-full", stateColor[line.state])}>
            <span className="sr-only">{line.state}</span>
          </span>
          <span className="text-text-secondary">{line.text}</span>
        </div>
      ))}
    </div>
  );
}
