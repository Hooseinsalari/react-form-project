import React from 'react';

const LogIn = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        isAccept: false,
      });
    
      // this state using for when user touch input
      const [touched, setTouched] = useState({});
    
      const [errors, setErrors] = useState({});
    
      useEffect(() => {
        setErrors({})
      }, [])
    
      useEffect(() => {
        setErrors(validation(data));
      }, [data, touched]);
    
      const changeHandler = (event) => {
        if (event.target.name === "isAccept") {
          setData({ ...data, [event.target.name]: event.target.checked });
        } else {
          setData({ ...data, [event.target.name]: event.target.value });
        }
      };
    
      const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
      };
    
      const submitHandler = (event) => {
          event.preventDefault()
          if(!Object.keys(errors).length) {
              notify("ثبت نامت انجام شد خوش اومدی", 'success')
          }
          else {
            notify("یه جای کار میلنگه", 'error')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true,
                gender: true,
            })
          }
      }
    
      return (
        <div className="container bg-white p-5 my-10 w-full sm:w-96 rounded-md shadow-md mx-4 border">
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
            <div className="flex flex-col my-7 font-bold text-lg ">
              <label className="text-right" htmlFor="confirmPassword">
                تکرار پسورد
              </label>
              <input
                name="confirmPassword"
                onChange={changeHandler}
                onFocus={focusHandler}
                value={data.confirmPassword}
                type="password"
                className={`rounded-md border-2 font-bold ${
                    errors.confirmPassword && touched.confirmPassword ? "animate-shake border-red-500" : ""
                  }`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="flex flex-col my-7 font-bold text-lg ">
              <label className="text-right" htmlFor="confirmPassword">
                جنسیت
              </label>
              <select
                name="gender"
                className={`rounded-md border-2 font-bold ${
                    errors.gender && touched.gender ? "animate-shake border-red-500" : ""
                  }`}
                onChange={changeHandler}
                onFocus={focusHandler}
              >
                <option className="font-bold" value="">انتخاب کن</option>
                <option className="font-bold" value="women">زن</option>
                <option className="font-bold" value="men">مرد</option>
                <option className="font-bold" value="other">دیگر</option>
              </select>
              {errors.gender && touched.gender && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1">
                  {errors.gender}
                </span>
              )}
            </div>
            <div className="flex items-center flex-col my-6">
              <div className="flex items-center flex-row-reverse justify-center">
                <label htmlFor="name" className="mr-2 font-bold">
                  قوانین را خواندم و قبول کردم
                </label>
                <input
                  name="isAccept"
                  onChange={changeHandler}
                  onFocus={focusHandler}
                  value={data.isAccept}
                  type="checkbox"
                  className={`${data.isAccept && 'rounded-full transition-all ease-in-out duration-500'} cursor-pointer ring-0`}
                />
              </div>
              {errors.isAccept && touched.isAccept && (
                <span className="bg-red-200 py-0.5 px-1 rounded-sm text-slate-800 text-sm lg:text-base w-fit mt-1 mr-1 font-bold">
                  {errors.isAccept}
                </span>
              )}
            </div>
            <div className="flex items-center flex-col">
              <button type="submit" className="bg-blue-500 w-full p-2 rounded-md text-slate-200 text-lg my-2">
                ثبت نام
              </button>
                <div className="flex items-center justify-center">
                    <span className="font-bold ml-1">اکانت داری؟</span>
                    <a className="text-blue-800 font-bold" href="#">
                ورود
              </a>
                </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      );
};

export default LogIn;