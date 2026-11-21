"use client";

import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    const container = document.getElementById("main-content");
    if (!container) return;

    let mounted = true;
    let heroMedia: gsap.MatchMedia | undefined;
    let revealContext: gsap.Context | undefined;
    let scrollTimer: number | undefined;
    let scrollIdle: number | undefined;
    let heroPlayed = false;

    void import("gsap").then(({ gsap }) => {
      if (!mounted) return;

      heroMedia = gsap.matchMedia(container);
      heroMedia.add({ wide: "(min-width: 48rem)", motion: "(prefers-reduced-motion: no-preference)" }, ({ conditions }) => {
        if (!conditions?.motion || heroPlayed || window.scrollY > 80) return;
        heroPlayed = true;

        const timeline = gsap.timeline({ defaults: { ease: "power2.out", clearProps: "opacity,transform" } });
        timeline.fromTo("[data-hero-copy]", { y: conditions.wide ? 18 : 9, opacity: 0.82 },
          { y: 0, opacity: 1, duration: 0.58, stagger: 0.075 }, 0);
        timeline.fromTo("[data-hero-image]", { scale: 1.045 }, { scale: 1, duration: 0.9 }, 0);
        timeline.fromTo("[data-hero-spark]", { scale: 0.66, opacity: 0.6, rotation: -12 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.7, stagger: 0.1 }, 0.19);
      });

      const loadScrollMotion = () => {
        void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          if (!mounted) return;
          gsap.registerPlugin(ScrollTrigger);

          revealContext = gsap.context(() => {
            const responsive = gsap.matchMedia(container);
            responsive.add({ wide: "(min-width: 48rem)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
              const { conditions } = context;
              if (!conditions?.motion) return;
              const groups = container.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]");
              const distance = conditions.wide ? 20 : 12;

              groups.forEach((group) => {
                if (group.getBoundingClientRect().top < window.innerHeight - 16) return;

                ScrollTrigger.create({
                  trigger: group,
                  start: "top 96%",
                  once: true,
                  onEnter: () => context.add(() => {
                    const items = group.hasAttribute("data-reveal-group")
                      ? group.querySelectorAll<HTMLElement>("[data-group-item]")
                      : group;

                    gsap.fromTo(items, { y: distance, opacity: 0.72 }, {
                      y: 0, opacity: 1, duration: 0.55, stagger: conditions.wide ? 0.085 : 0.04,
                      ease: "power2.out", clearProps: "opacity,transform", overwrite: "auto",
                    });
                  }),
                });
              });

              let frame = 0;
              const observer = new ResizeObserver(() => {
                cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => ScrollTrigger.refresh());
              });
              observer.observe(container);

              return () => {
                observer.disconnect();
                cancelAnimationFrame(frame);
              };
            });
            return () => responsive.revert();
          }, container);
        }).catch(() => { /* Content is visible when the animation chunk is unavailable. */ });
      };

      if (typeof window.requestIdleCallback === "function") {
        scrollIdle = window.requestIdleCallback(loadScrollMotion, { timeout: 1400 });
      } else {
        scrollTimer = window.setTimeout(loadScrollMotion, 400);
      }
    }).catch(() => { /* Content is visible when the animation chunk is unavailable. */ });

    return () => {
      mounted = false;
      window.clearTimeout(scrollTimer);
      if (scrollIdle !== undefined) window.cancelIdleCallback(scrollIdle);
      revealContext?.revert();
      heroMedia?.revert();
    };
  }, []);

  return null;
}
