const mongoose= require('mongoose');

async function connectDataBase() {
    const dburi= "mongodb://localhost:27017/Pinterest";

    try {
        const response = await mongoose.connect(dburi);

        console.log("DataBase connectes succesfully");    
    } catch (err) {
     console.error("Error is occures while conecting to DataBase",err.message);
        throw err;
    }
}

module.exports={
    connectDataBase,
}