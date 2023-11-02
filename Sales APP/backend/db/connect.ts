import { assert } from "console";
import mongoose from "mongoose";
import UserModel from "../models/user";

async function connectDB(){
    process.env.MONGODB_URL = 'mongodb://localhost:27017';
    if(!process.env.MONGODB_URL){
        throw new Error("Falta la variable de entorno MONGODB_URL");
    }
    try {
        const myAgent = {}; // TODO: set up agent

        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexion exitosa con MONGO DB")
        const newUser = new UserModel({
            firstname: "Marcelo",
            lastname: "Serpas",
            email: "marcelo91@gmail.com",
            login_code: "29089",
            roles: {
                admin: true,
                seller: true
            }
        })
        console.log({ newUser })
        await newUser.save();

    } catch (error){
        console.log("Hubo un error al conectarnos a la BBDD", error)
        //assert.isNotOK(error, 'Promise Error');
        //done();
    }
    
}

export default connectDB