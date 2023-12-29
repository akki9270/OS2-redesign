import React, { useEffect } from "react";
import { isValidToken  } from "./Utility";

const AuthVerify:any = (props) => {
  useEffect(() => {    
    if (!isValidToken()) {      
        props.logOut();      
    }
  }, [props]);
  return ;
};

export default AuthVerify;