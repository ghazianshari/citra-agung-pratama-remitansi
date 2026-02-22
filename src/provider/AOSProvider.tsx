"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 300,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
