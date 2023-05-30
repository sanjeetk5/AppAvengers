const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token =  req.headers.authorization;
    if(token){
        try{
            const decode = jwt.verify(token.split(" ")[1],"blogscap");
            if(decode){
                console.log(decode)
                req.body.authorID = decode.authorID;
                next()
            }else{
                res.status(404).send({"Error" : "Invalid access token"})
            }
        }catch(err){
        res.status(404).send({"error" : err.message})
        }
    }else{
        res.status(401).send({"ERROR":"Please login!!"})
    }
}

module.exports = {
    auth
}