import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">نام</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">ایمیل</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">پسورد</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">تکرار پسورد</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label htmlFor="name">قوانین را خواندم و قبول کردم</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <button>ثبت نام</button>
                        <a href="#">ورود</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;