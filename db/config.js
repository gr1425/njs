const mongoose=require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.createConnection(process.env.MONGO_DB_CONNECTION)
        console.log('Base de datos OK');
    } catch(error){
        console.log(error);
        throw new Error("error de la Database ")
    }
}

module.exports=dbConnection;
