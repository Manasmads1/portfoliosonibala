import { useEffect, useRef, useState } from "react";

type NodePoint = { x: number; y: number; distance: number };

const ColorCursor = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<NodePoint[]>([]);
  const [active, setActive] = useState(false);
  const pointer = useRef({ x: -300, y: -300 });
  const eased = useRef({ x: -300, y: -300 });
  const previous = useRef({ x: -300, y: -300 });
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
    const root = document.documentElement;
    const onMove = (event: PointerEvent) => { pointer.current = { x: event.clientX, y: event.clientY }; setActive(true); };
    const onLeave = () => setActive(false);
    const tick = () => {
      eased.current.x += (pointer.current.x - eased.current.x) * .16;
      eased.current.y += (pointer.current.y - eased.current.y) * .16;
      const speed = Math.min(1, Math.hypot(eased.current.x - previous.current.x, eased.current.y - previous.current.y) / 30);
      root.style.setProperty("--cursor-x", `${eased.current.x}px`);
      root.style.setProperty("--cursor-y", `${eased.current.y}px`);
      root.style.setProperty("--cursor-speed", speed.toFixed(2));
      const next = Array.from(document.querySelectorAll<HTMLElement>("[data-cursor-node]"))
        .map((element) => { const rect = element.getBoundingClientRect(); const x = rect.left + rect.width / 2; const y = rect.top + rect.height / 2; return { x, y, distance: Math.hypot(x - eased.current.x, y - eased.current.y) }; })
        .filter((node) => node.distance < 250).sort((a, b) => a.distance - b.distance).slice(0, 5);
      setNodes(next);
      previous.current = { ...eased.current };
      frame.current = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    frame.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", onMove); document.documentElement.removeEventListener("pointerleave", onLeave); cancelAnimationFrame(frame.current); root.classList.remove("cursor-active"); };
  }, []);

  return <svg ref={svgRef} className={`cursor-network ${active ? "cursor-network--active" : ""}`} aria-hidden="true">
    {nodes.map((node, index) => <line key={`${node.x}-${node.y}-${index}`} x1="var(--cursor-x)" y1="var(--cursor-y)" x2={node.x} y2={node.y} opacity={Math.max(0, 1 - node.distance / 250) * .65} />)}
    {nodes.map((node, index) => <circle key={`dot-${node.x}-${node.y}-${index}`} cx={node.x} cy={node.y} r={3 + Math.max(0, 1 - node.distance / 250) * 5} />)}
    <circle className="cursor-network__ring" cx="var(--cursor-x)" cy="var(--cursor-y)" r="15" />
    <circle className="cursor-network__tail" cx="var(--cursor-x)" cy="var(--cursor-y)" r="36" />
  </svg>;
};

export default ColorCursor;