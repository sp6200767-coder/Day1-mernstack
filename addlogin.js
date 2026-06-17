function login(email,password){


    if (email === "a@gmail.com"&& password ==="123456")  {
        return "login success";
    }
    return "invalid";

}

module.exports = login;
