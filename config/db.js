import mongoose from "mongoose"


export const connectDb = async(url)=>{
    try{
        await mongoose.connect(url, {
            serverSelectionTimeoutMS:10000
        })

        console.log("MongoDb Connected");

    }
    catch(err)
    {
        console.error("mongo connection error")
        process.exit(1);

    }
}