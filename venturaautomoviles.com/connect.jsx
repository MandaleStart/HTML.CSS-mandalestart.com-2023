const mongoose = require('mongoose');
const username = process.env.IMVITED_USER;
const password = process.env.IMVITED_USER_PASS;
const uri = `mongodb+srv://<${username}>:<${password}>@cluster0.gd0p3tc.mongodb.net/?retryWrites=true&w=majority`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);