import { useEffect } from "react";

function useOutsideClick(ref, handleFunc) {
  useEffect(() => {
    const listenFunc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleFunc(e);
      }
    };
    document.addEventListener("mousedown", listenFunc);
    document.addEventListener("touchstart", listenFunc);
    return () => {
      document.removeEventListener("mousedown", listenFunc);
      document.removeEventListener("touchstart", listenFunc);
    };
  }, [ref, handleFunc]);
}

export default useOutsideClick;
