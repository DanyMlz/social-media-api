const mongoose = require('mongoose');

const connectionMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conection a MongoDB");
        });
    }catch(e){
        console.log(e);
        console.log("Error conection with mongoDB");
    }
}

module.exports = connectionMongoDB