import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    if (isNaN(numericValue)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const obj = { value: 0 };

    gsap.to(obj, {
      value: numericValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          const currentValue = obj.value;
          const formatted = suffix.includes("%") 
            ? currentValue.toFixed(1) 
            : Math.round(currentValue);
          ref.current.textContent = formatted + suffix;
        }
      },
    });
  }, [value]);

  return <div ref={ref} className={className}>{value}</div>;
}
