const { JWT_HEADER_KEY, JWT_KEY } = require("../config");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");

function authenticationHandler( req, res, next ){

    try{
        const token = req.header( JWT_HEADER_KEY );

        const data = jwt.verify( token, JWT_KEY );
        
        if( data ){
            req.user_data = data;
            next();
        }else{
            res.status(401).json({
                status: "error",
                message: "You have to log in first in order to use this function!"
            });
        }
    }catch( e ){

        res.status(401).json({
            status: "error",
            message: "You have to log in first in order to use this function!"
        });
    }
}

module.exports = { authenticationHandler }