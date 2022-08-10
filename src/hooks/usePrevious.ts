import { useRef, useEffect } from "react";

function usePrevious(value: string | number) {
  const ref = useRef<string | number>();
  useEffect(() => {
    if (value) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}
export default usePrevious;
