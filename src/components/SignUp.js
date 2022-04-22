import React, { useState } from 'react';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        isAccept: false
    })

    // this state using for when user touch input
    const [touched, setTouched] = useState({})

    const [error, setError] = useState({})

    const changeHandler = (event) => {
        if(event.target.name === "isAccept") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
        console.log(touched)
    }

    return (
        <div className='container bg-white p-5 my-10 w-full sm:w-96 rounded-md shadow-md mx-14'>
            <form className=''>
                <div className='flex flex-col my-7 font-bold text-lg '>
                    <label className='text-right' htmlFor="name">نام</label>
                    <input name='name' onChange={changeHandler} onFocus={focusHandler} value={data.name} type="text" className='rounded-md border-2' />
                </div>
                <div className='flex flex-col my-7 font-bold text-lg '>
                    <label className='text-right' htmlFor="email">ایمیل</label>
                    <input name='email' onChange={changeHandler} onFocus={focusHandler} value={data.email} type="email" className='rounded-md border-2' />
                </div>
                <div className='flex flex-col my-7 font-bold text-lg '>
                    <label className='text-right' htmlFor="password">پسورد</label>
                    <input name='password' onChange={changeHandler} onFocus={focusHandler} value={data.password} type="password" className='rounded-md border-2' />
                </div>
                <div className='flex flex-col my-7 font-bold text-lg '>
                    <label className='text-right' htmlFor="confirmPassword">تکرار پسورد</label>
                    <input name='confirmPassword' onChange={changeHandler} onFocus={focusHandler} value={data.confirmPassword} type="password" className='rounded-md border-2' />
                </div>
                <div className='flex flex-col my-7 font-bold text-lg '>
                    <label className='text-right' htmlFor="confirmPassword">جنسیت</label>
                    <select name="gender" className='rounded-md border-2' onChange={changeHandler} onFocus={focusHandler}>
                        <option value="women">زن</option>
                        <option value="men">مرد</option>
                        <option value="other">دیگر</option>
                    </select>
                </div>
                <div className='flex items-center flex-row-reverse justify-center my-6'>
                    <label  htmlFor="name" className='mr-2'>قوانین را خواندم و قبول کردم</label>
                    <input name='isAccept' onChange={changeHandler} onFocus={focusHandler} value={data.isAccept} type="checkbox" />
                </div>
                <div className='flex items-center flex-col'>
                    <button className='bg-blue-300 w-full p-2 rounded-md text-slate-100 my-2'>ثبت نام</button>
                    <a className='text-blue-500' href="#">ورود</a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;