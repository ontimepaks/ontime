import jwt from 'jsonwebtoken'





export const jwtTokenCreater=  (data={})=>{
    try {

        let token= jwt.sign(data, "userSecretKey",{expiresIn:"5d"})

        if(token){
            return token;
        }

        
    } catch (error) {
        console.log(error)
    }
}








export const jwtTokenDecrypter= (token)=>{
    try {
        if(!token){
            return null;
        }else{
            let decryptedData= jwt.verify(token, "userSecretKey")
            if(!decryptedData){
                return null;
            }else{
                return decryptedData;
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}