import React, {useState} from 'react';
import './Style.css';
import {Link} from 'react-router-dom';



function SignUp() {

    

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return (

        <div className="login">
     
        <div className='login_container'>
            <h3>SignUp Here</h3>
            <hr />
  
            <form>
            <h5>UserName</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>


                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
  
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
  
                <button
                // onClick={signIn}
                type='submit'
                className='signin_btn'>Login</button>
  
                <p>
                    If you have an Account Go to Login..
                </p>
  
                <Link to='/'>
                <button
                // onClick={register}
                type='submit'
                className='register_btn'>Back To Login</button>
                
                </Link>
            </form>
            
        </div>
      </div>
    )
}

export default SignUp;
