import clsx from "clsx";

type ReceiptVizProps = {
  src: string | null;
  blurhash: string | null;
  alt: string;
};

export default function ReceiptViz({ src, blurhash, alt }: ReceiptVizProps) {
  const placeholder = blurhash ? "bg-bg-surface-hover" : "bg-bg-surface";
  return (
    <div className={clsx("relative overflow-hidden rounded-card", placeholder)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-200"
        />
      ) : (
        <div className="flex h-40 items-center justify-center text-sm text-text-tertiary">
          Sem preview
        </div>
      )}
    </div>
  );
}
