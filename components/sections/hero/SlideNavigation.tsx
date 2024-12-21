"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SlideNavigation({ onPrevious, onNext }: SlideNavigationProps) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 transition-colors"
        onClick={onPrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 transition-colors"
        onClick={onNext}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </>
  );
}