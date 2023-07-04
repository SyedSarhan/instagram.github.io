import instagramlogo from "../Images/instagram.png";
// import style from "../App.css"
import microsoft from "../Images/microsoft.png";
import play from "../Images/play.png";
import facebook from "../Images/facebook.png";
import { useState } from "react";
const Login=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



//  to show errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPaswordError] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  

  const submit = (event) => {
    event.preventDefault();
    // console.log(email,password)

    let validate = {email:false,password:false};
    if (email.length === 0) {
        setEmailError("please enter your email");
        validate.email = false;
      } else if (!emailRegex.test(email)) {
        setEmailError("enter valid email address");
        validate.email = false;
      } else {
        validate.email = true;
        setEmailError("");
      }
      if (password.length === 0) {
        setPaswordError("please enter your password");
        validate.password = false;
      } else if (password.length < 4) {
        setPaswordError("your password must be greater than four charaters");
        validate.password = false;
      } else if (password.length > 10) {
        setPaswordError("your password exceeding 10 charaters");
        validate.password = false;
      } else {
        validate.password = true;
        setPaswordError("");
      }
  
      if (validate.email && validate.password) {
        setEmail("");
        setPassword("");
        setIsSubmit(true);
      }
    }

    return(
<div className="login-container" >
    <div className="box-1">
        <div className="box-1-logo">
            <img src={instagramlogo} alt="#" className="instagram-logo"/>
        </div>
        <div className="input-box"onSubmit={submit}>
       
            <input type="text" placeholder="Phone number , username or email" 
             value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}/>
        </div>
        <p style={{ color: "red" }}>{emailError}</p>
        <div className="input-box">
            <input type="password"placeholder="Password"
             value={password}
             onChange={(e) => {
               setPassword(e.target.value);
             }} />
        </div>
        <p style={{ color: "red" }}>{passwordError}</p>
        <div className="login-button-box">
            <button className="login-button" onClick={submit}>Log in</button>
        </div>
        <div className="lines-box">
            <div className="line-1"></div>
            <div className="or-box">OR</div>
            <div className="line-2"></div>
        </div>
        <div className="fb-box">
            <span>
                <img src={facebook} alt="#" className="fb-logo" />
            </span>
            <p className="fb-link">Log in with Facebook</p>
        </div>
        <div className="forgotten-passwoed-box">
        <p className="forgotten-password-link">Forgot password?</p>
        </div>
    </div>
    <div className="box-2">
        <p>
            Don't have an account? <span className="sign-up-span">Sign up</span>
        </p>
    </div>
    <div className="get-app-box">
        <p>Get the app.</p>
    </div>
    <div className="app-store-google-play-box">
        <img src={play} alt="#" className="google-play-image" />
        <img src={microsoft} alt="#" className="microsoft-store-image" />
        
    </div>
</div>
    )
}
export default Login;