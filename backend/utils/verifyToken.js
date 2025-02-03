
import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next) => {

 const token = req.cookies.accessToken

 if(!token){
  return res.status(401).json({success:'false', message: 'you are not authorize'})
 }

 //if token is exist then verify the token
 jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
  if(err){
   return res.status(401).json({success:'false', message: 'token is invalid'})
  }

  //if token is valid then attach the user to the request object
  req.user = user;
  next();
 });
};

//verify user
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next,() => {
      if(req.user.id === req.params.id || req.user.role === 'admin') {
        next();
      } else {
        return res.status(401).json({success:'false', message: 'you are not authenticated'})
      }
    });
};

//verify admin
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next,() => {
      if( req.user.role === 'admin') {
        next();
      } else {
        return res.status(401).json({success:'false', message: 'you are not authorize'})
      }
    });
};