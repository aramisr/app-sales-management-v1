import { Schema, model } from "mongoose"

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique: true},
    login_code: {type: String, length: 6},
    roles: {
        type:{
            admin: Boolean,
            seller: Boolean
        },
        required: true
    },
})

export default model("User", userSchema, "users")