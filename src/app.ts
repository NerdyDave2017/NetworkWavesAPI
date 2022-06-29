import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"


import { connectDB } from "./connection"
import {router as routes} from "./server/routes"

const app = express()

dotenv.config({path: ".env"})



let corsOptions = {
  origin: "*",
  credentials: true,
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static("public"))
app.use(cookieParser())


// mongoDB Connection
connectDB()


// Load Routers
app.use("/api/v1", routes)

// const getArray = <T>(items: T[]) : T[] =>{
//   return items;
// }

// getArray([true,2,"5",undefined])

// type inputType =  String | Number | Boolean;

// function getElements<T = inputType, W = Number>(name:T, age:W) : (T|W)[] {
//   console.log(name, age)
//   return [name,age];
// }

// getElements(44,"hello")


export default app