import { callAPI } from '../../helpers/network';
import { useEffect } from 'react';

const LoginContainer = () => {
  const test = async () => {
    const submitLogin = await callAPI({
      url: '/user/list?page=0&size=10',
      method: 'get',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgyLXJlc291cmNlIl0sInVzZXJfbmFtZSI6Imhhc2FuaW5kcmE3MUBnbWFpbC5jb20iLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjUwMzA1ODExLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiLCJST0xFX1JFQUQiLCJST0xFX1dSSVRFIl0sImp0aSI6IjU2ZWU2OGY0LWE2MGUtNDNkYy04ODkwLTI2MjhiNjIyMDk5ZiIsImNsaWVudF9pZCI6Im15LWNsaWVudC13ZWIifQ.d1gP4wotQGH8tzJHzsn3beppbLQX26OOE7jC5w4I5NY`,
      },
    });
    console.log(submitLogin);
    // if (submitLogin.status === 200) {
    //   setLoading(false);
    //   alert('Create posts success!');
    //   push('/Homepage');
    // }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
};
export default LoginContainer;
