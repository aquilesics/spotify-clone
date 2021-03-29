import React from 'react'
import './Login.css';
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className='login'>
           <img src="https://cdn-0.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg" alt=""/>
             {/* spotify logo */}

             {/* login with spotify */}
            <a href={loginUrl}>login with spotify</a>
            
      
        </div>
    );
}

export default Login;
