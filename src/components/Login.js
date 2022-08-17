import React from 'react'
import {ReactComponent as Logo} from '../media/logo.svg';
import { useNavigate }  from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/authActions' 

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const auth = useSelector(state => state.auth)
  console.log(auth)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
    const username = emailRef.current.value
    const password = passwordRef.current.value
    if(username==='test' && password==='test'){
      console.log("SUCCESS")
      dispatch(loginAction())
      navigate('/', { replace: false })
    }else{
      console.log("BAD")
    }
  }

  return (
    <div className='login-page'>
        <div className='logo'><Logo /></div>
        <div className='form-space'>
          <div className='form-container'>
            <div className='form-title'>
              Sign In
            </div>
            <form>
              <div className='form-group'>
                <div className='input-text'>
                  <input ref={emailRef} type='text' name='em25' placeholder='Email or phone number' />
                </div>
                  <div className='input-text'>
                  <input ref={passwordRef} type='password' name='pw25'  placeholder='Password' autoComplete="on"/>
                </div>
              </div>
              <button className='form-submit' onClick={handleSubmit}>Sign In</button>
              <div className='form-items'>
                <div className='remember-me'>
                  <input type='checkbox' name="remember" /> 
                  Remember me
                </div>
                <div className='help-me'>
                  Need help?
                </div>
              </div>
            </form>
            <div className='register-now'>
              New to Netflix? <span className='register'>Sign up now</span>
            </div>
            <div className='below-text'>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='learn-more'>Learn more.</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login