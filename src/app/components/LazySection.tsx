import { ReactNode, Suspense } from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { SectionLoader } from "./LoadingSpinner";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export function LazySection({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = "100px",
  className = "",
}: LazySectionProps) {
  const { elementRef, isVisible } = useLazyLoad({ threshold, rootMargin });

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback || <SectionLoader />}>
          {children}
        </Suspense>
      ) : (
        <div className="py-20">
          {fallback || <SectionLoader />}
        </div>
      )}
    </div>
  );
}