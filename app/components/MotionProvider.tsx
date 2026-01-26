"use client";

import { MotionConfig } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <MotionConfig transition={isMobile ? { duration: 0 } : undefined}>
      {children}
    </MotionConfig>
  );
}
