export const validateEmail = (email) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if(!isEmailValid){
        return "❌Please enter a valid email address";
    }
    return null;
}

export const validatePassword = (password) =>{
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isPasswordValid){
        return "❌Your password must contain between 8 to 60 characters";
    }
}

export const validateData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return "❌Please enter a valid email address";
    }  if(!isPasswordValid){
        return "❌Your password must contain between 8 to 60 characters";
    }
    return null;
}