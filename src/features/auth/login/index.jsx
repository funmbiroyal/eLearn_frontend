// import { useCallback, useState, useEffect } from "react";
// import { loginPath } from "../../../api/AuthApi";

import Footer from "./footer";
import TopNav from "./topNav";

const Login = () => {

  // const [data, setData] = useState({
  //   userName: '',
  //     password: ''
  // })
  // useEffect(()=>{
  //   const credentails ={
  //     userName: data.userName,
  //     password: data.password
  //   }
  //   async function loginCall(){
  //     const response = await fetch(loginPath, {
  //       method: 'POST',
  //       headers: {
  //           'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(credentails)
  //   });
  //   return response;
  // }
  // loginCall()
  // },[data])

  return (
    <div>
      <TopNav />
      <p>Login</p>
      <Footer />
    </div>
  )
}

export default Login
