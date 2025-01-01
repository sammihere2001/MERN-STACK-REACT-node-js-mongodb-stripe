import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })


    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

      const onLogin = async (event) => {
        event.preventDefault();
        let newURL = url;
        if (currState === "Login") {
          newURL += "/api/user/login";
        }
        else{
          newURL += "/api/user/register";
        }

        const response = await axios.post(newURL,data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          setShowLogin(false);
        }
        else{
          alert(response.data.message)
        }
      }


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required/>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login in"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By creating an account you agree to our Terms & Conditions</p>
        </div>
        {currState==="Login"
        ?<p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span> </p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
        
        
      </form>
    </div>
  )
}


export default LoginPopup
