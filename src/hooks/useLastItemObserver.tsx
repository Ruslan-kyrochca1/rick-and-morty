import { useEffect, useRef } from 'react';

type UseLastItemObserverProps = {
  onLastItemVisible: () => void;
  enabled?: boolean;
};

const useLastItemObserver = <T extends HTMLElement>({ onLastItemVisible, enabled = true }: UseLastItemObserverProps) => {
  const lastItemRef = useRef<T | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const el = lastItemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;
        if (!entry.isIntersecting) return;
        if (firedRef.current) return;
        firedRef.current = true;
        observer.unobserve(entry.target);
        onLastItemVisible();
      },
      { threshold: 1.0 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [onLastItemVisible, enabled]);

  useEffect(() => {
    if (enabled) firedRef.current = false;
  }, [enabled]);

  return lastItemRef;
};

export default useLastItemObserver;
