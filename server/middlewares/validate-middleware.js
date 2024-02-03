


const validate = (schema) => async(req,res,next) =>{
    try {
        const paerseBody = await schema.parseAsync(req.body);
        req.body = paerseBody;
        next();
    } catch (err) {
        console.log(err);
        const message = err.errors[0].message;
        console.log(message);
        res.status(401).json({msg:message});
    }
}

module.exports = validate;