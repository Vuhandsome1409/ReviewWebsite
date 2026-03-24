import { Zap } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  text = "Loading...", 
  className = "" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} rounded-full border-2 border-slate-300 border-t-gold animate-spin`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-gold animate-pulse`} />
        </div>
      </div>
      {text && (
        <p className={`text-slate-muted ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center aurora-bg">
      <LoadingSpinner size="lg" text="Loading Ninja AI..." />
    </div>
  );
}

export function SectionLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner text={text} />
    </div>
  );
}