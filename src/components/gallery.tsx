"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/lib/content";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div className="gallery-grid" data-reveal-group>
      {items.map((item, index) => (
        <figure className="gallery-tile" data-group-item key={item.id}>
          <button className="gallery-open" type="button" aria-label={`Ampliar: ${item.caption}`} aria-haspopup="dialog"
            onClick={() => {
              setSelected(item);
              dialogRef.current?.showModal();
            }}>
            <Image {...item.image} alt={item.image.alt}
              sizes={index === 0 ? "(min-width: 75rem) 520px, (min-width: 48rem) 47vw, 92vw" : "(min-width: 75rem) 510px, (min-width: 48rem) 43vw, 46vw"} />
            <span className="gallery-enlarge"><Maximize2 aria-hidden="true" size={17} /></span>
          </button>
          <figcaption className="sr-only">{item.caption}</figcaption>
        </figure>
      ))}
      <dialog className="gallery-dialog" ref={dialogRef} aria-label="Imagem ampliada"
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <div className="gallery-dialog-panel">
          <button className="icon-button gallery-close" type="button" aria-label="Fechar imagem" autoFocus
            onClick={() => dialogRef.current?.close()}><X aria-hidden="true" size={23} /></button>
          {selected && (
            <figure>
              <Image {...selected.image} alt={selected.image.alt} sizes="(min-width: 54rem) 770px, 94vw" />
              <figcaption>{selected.caption}</figcaption>
            </figure>
          )}
        </div>
      </dialog>
    </div>
  );
}
