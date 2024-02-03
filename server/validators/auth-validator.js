const z = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error: "Name should be required..."})
    .trim()
    .min(3,{message: "Name should contain min 3 characters..."})
    .max(255,{message: "Name should contain max 255 characters..."}),

    email: z
    .string({required_error: "Email should be required..."})
    .trim()
    .email({message: "Invalid email address..."})
    .min(3,{message: "Email should contain min 3 characters..."})
    .max(255,{message: "Email should contain max 255 characters..."}),

    phone: z
    .string({required_error: "Phone number required..."})
    .trim()
    .min(10,{message: "Phone should be of 10 digits..."})
    .max(12,{message: "Phone no should contain max 12 digits..."}),

    password: z
    .string({required_error: "Name should be required..."})
    .min(4,{message: "Password min size should be 4..."})
    .max(88,{message: "max size of the password should be 88..."}),
});

const loginSchema = z.object({
    
    email: z
    .string({required_error: "Email should be required..."})
    .trim()
    .email({message: "Invalid email address..."})
    .min(3,{message: "Email should contain min 3 characters..."})
    .max(255,{message: "Email should contain max 255 characters..."}),

    password: z
    .string({required_error: "Name should be required..."})
    .min(4,{message: "Password min size should be 4..."})
    .max(88,{message: "max size of the password should be 88..."}),
});

module.exports = {signupSchema,loginSchema};
// module.exports = loginSchema;