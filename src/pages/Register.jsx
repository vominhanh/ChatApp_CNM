import React from 'react';
import Add from '../img/addAvatar.png'
const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat App</span>
                <span className='title'>Dang Ky</span>
                <form >
                    <input type="text" placeholder='Nhap ten' />
                    <input type="email" placeholder='Nhap email' />
                    <input type="password" placeholder='Nhap Mat Khau' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign</button>
                </form>
                <p>Ban co tai khoan khong? Login</p>
            </div>
        </div>
    );
};

export default Register;