import './index.css'
import axios from 'axios';
import { useState, useCallback } from 'react';
export default function FormSignUp() {
    const [signUpData, setSignUpData] = useState({ name: '', lastname: '', username: '', email: '', password: '', phone: '', address: '', birth: '', avatar: '' })
    const userSignUpSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("https://marketplace-back-production-3756.up.railway.app/auth/signup",
            {
                name: signUpData.name,
                lastname: signUpData.lastname,
                username: signUpData.username,
                email: signUpData.email,
                password: signUpData.password,
                phone: signUpData.phone,
                address: signUpData.address,
                birth: signUpData.birth,
                avatar: signUpData.avatar
            })
    }, [signUpData.name, signUpData.lastname, signUpData.username, signUpData.email, signUpData.password])
    return (
        <div className='container'>
            <form action="" className='formContainer' onSubmit={userSignUpSubmit}>
                <input type="text" name="name" placeholder='Name' required value={signUpData.name}
                    onChange={(e) =>
                        setSignUpData((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }))}/>

                <input type="text" name="lastname" placeholder='Lastname' required value={signUpData.lastname} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        lastname: e.target.value,
                    }))}/>

                <input type="text" name="username" placeholder='Username' required value={signUpData.username} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        username: e.target.value,
                    }))}/>

                <input type="email" name="email" placeholder='Email' required value={signUpData.email} 
                onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                    }))}/>

                <input type="password" name="password" placeholder='Password' required value={signUpData.password} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                    }))}/>

                <input type="text" name="phone" placeholder='Phone' required value={signUpData.phone} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        phone: e.target.value,
                    }))}/>

                <input type="text" name="address" placeholder='Address' required value={signUpData.address} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        address: e.target.value,
                    }))}/>

                <input type="date" name="birth" placeholder='Date of Birth' required value={signUpData.birth} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        birth: e.target.value,
                    }))}/>

                <input type="text" name="avatar" placeholder='Avatar' required value={signUpData.avatar} onChange={(e) =>
                    setSignUpData((prevState) => ({
                        ...prevState,
                        avatar: e.target.value,
                    }))}/>

                <input type="submit" value="Submit" required />
            </form>
        </div>
    )
}