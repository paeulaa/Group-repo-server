const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://fortunecookie:fortunecookie123@cluster0.3evzisf.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
var dataBase;

module.exports = {
  connectToServer: async function () {
    client.connect();
    // Send a ping to confirm a successful connection
    client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    dataBase = client.db("FortuneCookies");
    
  },

  getDb: function () {
    return dataBase;
  },
};
