// import { useEffect, useState } from 'react';
// const AuthProvider = ({ children }) => {
//   const [mounted, setMounted] = useState(false);
//   const getJwt = () => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('jwt');
//     }
//     return null;
//   };
//   useEffect(() => {
//     const jwt = getJwt();
//     console.log('jwt', jwt);
//     // if (!jwt) {
//     //   window.location.href = '/login';
//     // }
//     setMounted(true);
//   }, []);
//   if (mounted) {
//     return children;
//   }
//   return <></>;
// };
// export default AuthProvider;

import { useEffect, useState } from 'react';
import { getJwt } from '../../helpers/auth';
const NoAuthProvider = ({ children }) => {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      window.location.href = '/';
    }
    setMounted(true);
  }, []);
  if (mounted) {
    return children;
  }
  return <></>;
};
export default NoAuthProvider;
