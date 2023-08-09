import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://user:FOgnZfCOHTtFBD42@whatsapp-clone.yxoqbdg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;


// mongodb://user:shivam@ac-p2qicfh-shard-00-00.yxoqbdg.mongodb.net:27017,ac-p2qicfh-shard-00-01.yxoqbdg.mongodb.net:27017,ac-p2qicfh-shard-00-02.yxoqbdg.mongodb.net:27017/?ssl=true&replicaSet=atlas-13pig8-shard-0&authSource=admin&retryWrites=true&w=majority