import mongoose from "mongoose";


let initialize = false;
export async function connect() {
    if (initialize) 
    {
        console.log('already initialized');
        return;
    }
       
    
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'nextjs',
            useNewUrlParser: true,
            useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
    initialize = true;
    } catch (error) {
        console.log("Error being connect",error);
    }
    
}