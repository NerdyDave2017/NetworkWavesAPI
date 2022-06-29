import mongoose from "mongoose"


const connectionString = ""


export const connectDB = async() => {
  try{
    // mongodb connection string
    const con = await mongoose.connect(connectionString)
    console.log(`MongoDB connected; ${con.connection.host}`)
  }catch(err : any ){
    console.log(err.message)
    process.exit(1)
  }
}


