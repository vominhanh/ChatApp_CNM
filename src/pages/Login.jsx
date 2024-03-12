import React from 'react';
import Add from '../img/addAvatar.png'
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat App</span>
                <span className='title'>Dang Ky</span>
                <form >
                    <input type="email" placeholder='Nhap email' />
                    <input type="password" placeholder='Nhap Mat Khau' />
                    <button>Sign in</button>
                </form>
                <p>Ban khong co tai khoan khong? Resgister</p>
            </div>
        </div>
    );
};

export default Login;