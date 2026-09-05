"use client";
import { useEffect, useRef } from "react";

export function GlobalReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observeAll = () => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
      );

      document.querySelectorAll(".reveal, .reveal-on-scroll, .card-reveal").forEach((el) => {
        observerRef.current!.observe(el);
      });
    };

    observeAll();

    // Re-observe on Next.js route changes (popstate)
    const handleRouteChange = () => {
      requestAnimationFrame(() => observeAll());
    };

    window.addEventListener("popstate", handleRouteChange);

    // Also use MutationObserver to catch dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(() => observeAll());
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
}
