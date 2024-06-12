import { useCallback, useEffect, useRef } from "react";

/**
 * For when you need to use a method inside another hook and you need the dependency array not to "flicker" because of renders.
 * @param method The method to stabilize
 * @returns The method stabilized
 */
export default function useStable<T extends Function>(method: T) {
  const methodRef = useRef(method);

  useEffect(() => {
    methodRef.current = method;
  }, [method]);

  const methodCallback = useCallback((...args: any[]) => {
    return methodRef.current(...args);
  }, []) as unknown as T;

  return methodCallback;
}
