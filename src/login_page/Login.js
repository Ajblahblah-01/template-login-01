import './Login.css';
import React from 'react';

function Login() {

  return (
    <section className='page-wrapper'>
      <header className='page-header'></header>
      <section className='page-content'>
        <header className='login-heading'>Create your account</header>
        <section className='login-form-wrapper'>
          <form className='login-form'>
            <div className='login-form-row'>
              <input type='email' name='email' placeholder='Email'/>
            </div>
            <div className='login-form-row'>
              <input type='password' name='password' placeholder='Password'/>
            </div>
            <button type='submit' className='login-form-submit'>Continue</button>
          </form>
        </section>
        <footer className='login-footer'>Already a user then login in</footer>
      </section>
      <footer className='page-footer'></footer>
    </section>
  );
}

export default Login;