import { useEffect, useRef, useState } from "react";

/**
 * Tracks which section is currently in view within a scrolling container,
 * using IntersectionObserver. Returns the active section id and a ref
 * registration function to attach to each <section id="...">.
 */
export default function useActiveSection(sectionIds, containerRef) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const elementsRef = useRef({});

  const registerSection = (id) => (el) => {
    if (el) elementsRef.current[id] = el;
  };

  useEffect(() => {
    const root = containerRef?.current || null;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = Object.keys(elementsRef.current).find((key) => elementsRef.current[key] === visible.target);
          if (id) setActiveId(id);
        }
      },
      { root, threshold: [0.4, 0.6] }
    );

    sectionIds.forEach((id) => {
      const el = elementsRef.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return { activeId, registerSection };
}
