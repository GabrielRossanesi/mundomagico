"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { navigation } from "@/lib/business";

export function MobileMenu({ contact }: { contact: ReactNode }) {
  const menuRef = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktop = () => {
      if (desktop.matches) menuRef.current?.close();
    };
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  function openMenu() {
    menuRef.current?.showModal();
    setExpanded(true);
  }

  return (
    <div className="mobile-menu">
      <button className="icon-button mobile-menu-trigger" type="button" aria-label="Abrir menu"
        aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={expanded} onClick={openMenu}>
        <Menu aria-hidden="true" size={23} />
      </button>
      <dialog className="menu-dialog" id="mobile-navigation" ref={menuRef} aria-labelledby="mobile-menu-title"
        onClose={() => setExpanded(false)} onClick={(event) => {
          if (event.target === event.currentTarget) menuRef.current?.close();
        }}>
        <div className="menu-panel">
          <div className="menu-panel-heading">
            <h2 id="mobile-menu-title">Menu</h2>
            <button type="button" className="icon-button" aria-label="Fechar menu" autoFocus
              onClick={() => menuRef.current?.close()}>
              <X aria-hidden="true" size={23} />
            </button>
          </div>
          <nav aria-label="Navegação móvel">
            {navigation.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => menuRef.current?.close()}>{label}</a>
            ))}
          </nav>
          {contact}
        </div>
      </dialog>
    </div>
  );
}
