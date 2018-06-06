import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(bodyParser.json())
app.use(cors())

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/secondhandStore"
mongoose.connect(mongoUrl, { useMongoClient: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Store = mongoose.model("Store", {
  id: String,
  name: String,
  lat: Number,
  long: Number,
  street: String,
  zipcode: Number,
  city: String,
  phoneNumber: Number,
  description: String,
  site: String,
  openinghours: String,
  category: String
})

//get the model and saves it on the database
app.post("/stores", (req, res) => {
  const store = new Store(req.body)

  store.save()
  .then(() => { res.status(201).send("Store created") })
  .catch(err => { res.status(400).send(err) })
})

app.get("/store", (req, res) => {
  Store.find().then(store => {
    res.json(store)
  })
})

app.get("/stores/:skip", (req, res) => {
  console.log(req.params.skip, "hej")
  const skip = parseInt(req.params.skip)
  Store.find().sort( { "name": 1 } ).limit(5).skip(skip).then(store => {
    res.json(store)
  })
  // Store.find().sort( { "name": 1 } ).then(store => {
  //   res.json(store)
  // })
})


const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`Server running on port ${port}`)
)
