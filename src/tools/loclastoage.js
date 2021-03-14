
export const GetToken = () =>{
    try {
        return window.localStorage.getItem("token")
    }catch (e){
        console.log(e)
        return ""
    }

}


export const SetToken = (t) =>{
    try {
        window.localStorage.setItem("token", t)
    }catch (e){
        console.log(e)
    }
}