import axios from 'axios';
import { useState, useCallback } from 'react';
export default function FormLogIn() {
    const [signUpData, setSignUpData] = useState({ email: '', password: ''})
    const userSignUpSubmit = useCallback(async (e) => {
        e.preventDefault();
        const response = await axios.post("https://marketplace-back-production-3756.up.railway.app/auth/login",
            {
                email: signUpData.email,
                password: signUpData.password,
            })
    }, [signUpData.email, signUpData.password])
    return (
        <div className='container'>
            <form action="" className='formContainer' onSubmit={userSignUpSubmit}>
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

                <input type="submit" value="Submit" required />
            </form>
        </div>
    )
}