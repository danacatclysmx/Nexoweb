import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    return window.innerWidth < MOBILE_BREAKPOINT;
  });
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(mql.matches);
    };
    
    mql.addEventListener("change", onChange);
     arriba
    return () => mql.removeEventListener("change", onChange);
  }, []); 

  return !!isMobile;
}
