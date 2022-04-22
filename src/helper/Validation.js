export const validation = data => {
    const errors = {}

    if(!data.name.trim()) {
        errors.name = "اسمتو وارد کن"
    } else {
        delete errors.name
    }

    if(!data.email) {
        errors.email = "ایمیلتو وارد کن"
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "ایمیلت نامعتبره"
    } else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = "رمزتو وارد کن"
    } else if (data.password.length < 6) {
        errors.password = "رمزت خیلی کوتاهه"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = "رمزتو دوباره وارد کن"
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = "دوتا رمزت با هم یکی نیست"
    } else {
        delete errors.confirmPassword
    }

    if(!data.gender) {
        errors.gender = "لطفا جنسیتت رو انتخاب کن"
    } else {
        delete errors.gender
    }

    if(!data.isAccept) {
        errors.isAccept = "قوانین رو قبول کن"
    } else {
        delete errors.isAccept
    }

    return errors;
}