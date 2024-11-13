const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI no está definida en el archivo .env");
    
    await mongoose.connect(uri, {
        maxPoolSize: 10,           // Máximo de conexiones en el pool
        minPoolSize: 5,            // Mínimo de conexiones en el pool
        socketTimeoutMS: 45000,    // Tiempo máximo de inactividad antes de desconectar
        serverSelectionTimeoutMS: 5000, // Tiempo para intentar conectar antes de fallar
      });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
}

module.exports = connectMongoDB;
