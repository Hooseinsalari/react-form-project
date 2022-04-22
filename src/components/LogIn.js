import React, { useEffect, useState } from "react";

// function
import { validation } from "../helper/Validation";

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../helper/toastify";
import { Link } from "react-router-dom";

const LogIn = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      // this state using for when user touch input
      const [touched, setTouched] = useState({});
    
      const [errors, setErrors] = useState({});
    
      useEffect(() => {
        setErrors(validation(data));
      }, [data, touched]);
    
      const changeHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
      };
    
      const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
      };
    
      const submitHandler = (event) => {
          event.preventDefault()
          if(!Object.keys(errors).length) {
              notify("خوش اومدی رفیق", 'success')
          }
          else {
            notify("یه جای کار میلنگه", 'error')
            setTouched({
                name: true,
                email: true,
                password: true,
            })
          }
      }
    
      return (
        <div className="container bg-white p-5 my-10 w-full sm:w-96 rounded-md shadow-md mx-4 border">
            <h1 className="text-2xl font-bold text-center">ورود به حساب</h1>
          <form className="" autoComplete="off" onSubmit={submitHandler}>
            <div className="flex flex-col my-7 font-bold text-lg ">
              <label className="text-right" htmlFor="name">
                نام
              </label>
              <input
                name="name"
                onChange={changeHandler}
                onFocus={focusHandler}
                value={data.name}
                type="text"
                className={`rounded-md border-2 font-bold ${
                  errors.name && touched.name ? "animate-shake border-red-500" : ""
                }`}
              />
              {errors.name && touched.name && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col my-7 font-bold text-lg ">
              <label className="text-right" htmlFor="email">
                ایمیل
              </label>
              <input
                name="email"
                onChange={changeHandler}
                onFocus={focusHandler}
                value={data.email}
                type="email"
                className={`rounded-md border-2 font-bold ${
                    errors.email && touched.email ? "animate-shake border-red-500" : ""
                  }`}
              />
              {errors.email && touched.email && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col my-7 font-bold text-lg ">
              <label className="text-right" htmlFor="password">
                پسورد
              </label>
              <input
                name="password"
                onChange={changeHandler}
                onFocus={focusHandler}
                value={data.password}
                type="password"
                className={`rounded-md border-2 font-bold ${
                    errors.password && touched.password ? "animate-shake border-red-500" : ""
                  }`}
              />
              {errors.password && touched.password && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1">
                  {errors.password}
                </span>
              )}
            </div>
            
            <div className="flex items-center flex-col">
              <button type="submit" className="bg-blue-500 w-full p-2 rounded-md text-slate-200 text-lg my-2">
                ورود
              </button>
                <div className="flex items-center justify-center">
                    <span className="font-bold ml-1">اکانت نداری؟</span>
                    <Link to="/" className="text-blue-800 font-bold" href="#">
                        ثبت نام
                    </Link>
                </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      );
};

export default LogIn;