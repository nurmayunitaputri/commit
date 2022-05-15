import { useEffect, useState } from "react";
import { getJwt } from "../../helpers/auth";
export const NoAuthProvider = ({ children }) => {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      window.location.href = "/home";
    }
    setMounted(true);
  }, []);
  if (mounted) {
    return children;
  }
  return <></>;
};
