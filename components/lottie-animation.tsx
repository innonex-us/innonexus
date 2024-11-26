"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className,
}: LottieAnimationProps) {
  const [isClient, setIsClient] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // For useInView
  const lottieRef = useRef<LottieRefCurrentProps>(null); // For controlling Lottie animation
  const isInView = useInView(wrapperRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isInView && lottieRef.current) {
      lottieRef.current.play();
    }
  }, [isInView]);

  if (!isClient) {
    return null;
  }

  return (
    <div ref={wrapperRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={false} // autoplay is handled manually
        initialSegment={[0, 1]}
      />
    </div>
  );
}
