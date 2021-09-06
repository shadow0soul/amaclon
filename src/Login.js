import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import { auth } from './firebase';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {

                    history.push('/')
                
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth   
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
                
            })
            .catch(error => alert(error.message))

    }
    
    return (
     
        <div className="login">
             <Link to='/'>
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
                alt=""
                className="login__logo"
                />
                </Link>
        
     

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className='login__signInButton' type='submit' onClick={signIn}>Sign-in</button>
                </form>

                <p>
                By continuing, you agree to Amaclon's Conditions of Use and Privacy Notice.
                please note that this is not the real site but a clone. do not disclose sensitive information
                </p>
                
                <button onClick={register} className='login__RegisterButton'>Create account</button>
            </div>
        </div>

    );
}

export default Login
