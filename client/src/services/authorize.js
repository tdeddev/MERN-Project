// เก็บ token / username => seesion storage

export const authenticate = (res, next) => {
    if(window !== "underfined"){
        // เก็บข้อมูลลง seesion storage
        // key > value
        sessionStorage.setItem("token", JSON.stringify(res.data.token)) // สร้างกล่องเก็บข้อมูล
        sessionStorage.setItem("user", JSON.stringify(res.data.username)) // สร้างกล่องเก็บข้อมูล
    }
    next()
}

// ดึง token
export const getToken = () => {
    if(window !== "undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}

// ดึง user
export const getUser = () => {
    if(window !== "undefined"){
        if(sessionStorage.getItem("user")){
            return JSON.parse(sessionStorage.getItem("user"))
        }else{
            return false
        }
    }
}