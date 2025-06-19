import mongoose from "mongoose";
import dns, { setDefaultResultOrder } from 'dns'




setDefaultResultOrder("ipv4first")


// let mongodb_uri = "mongodb://localhost:27017"
let mongodb_uri = "mongodb+srv://ontimepaks:unK2IXidy8CKVBL1@cluster0.f4wzwti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let connection;
let connectionPromise;



if (!mongodb_uri) {
    throw new Error("The mongodb uri is not found")
}



export default async function dbConnection() {

    try {

        if (connection) {
            return connection;
        }




        if (!connectionPromise) {
            connectionPromise = await mongoose.connect(`${mongodb_uri}`,{
                serverSelectionTimeoutMS:30000
            });
            connection = await connectionPromise;



            return connection;
        }




    } catch (error) {
        console.error("Error from mongodb connection ontime next project", error)
    }



}