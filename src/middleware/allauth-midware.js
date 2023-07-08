// import dependencies
import errorHandler from "../config/errorhandler.config.js";
import {loginSchema,registerSchema} from "../schema/auth-Schema.js";
import billSchema from "../schema/bill-Schema.js"
import jobSchema from "../schema/job-schema.js"

// define handler
 export const loginValidationMid= function ( req, res, next )
{
    const errors = errorHandler( req.body, loginSchema );
    
    if ( typeof errors === 'object' && errors !== null && !Array.isArray( errors ) )
    {
        return res.status( 422 ).json( {
            success: false,
            error: errors
        })
    }
    next();
 }

 export const RegisterValidationMid= function ( req, res, next )
{
    const errors = errorHandler( req.body, registerSchema );
    
    if ( typeof errors === 'object' && errors !== null && !Array.isArray( errors ) )
    {
        return res.status( 422 ).json( {
            success: false,
            error: errors
        })
    }
    next();
 }


 export const billValidMiddleware = function (req,res,next){

    const errors = errorHandler( req.body, billSchema );
    
    if ( typeof errors === 'object' && errors !== null && !Array.isArray( errors ) )
    {
        return res.status( 422 ).json( {
            success: false,
            error: errors
        })
    }
    next();

 }



 export const jobValidMiddleware = function (req,res,next){

    const errors = errorHandler( req.body, jobSchema );
    
    if ( typeof errors === 'object' && errors !== null && !Array.isArray( errors ) )
    {
        return res.status( 422 ).json( {
            success: false,
            error: errors
        })
    }
    next();

 }


