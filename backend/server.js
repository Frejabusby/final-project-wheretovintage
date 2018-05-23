import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(bodyParser.json())
app.use(cors())


mongoose.connect("mongodb://localhost/secondhandStore", { useMongoClient: true })
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
  category: String,
  openinghours: String
})

//get the model and saves it on the database
app.post("/stores", (req, res) => {
  const store = new Store(req.body)

  store.save()
  .then(() => { res.status(201).send("Store created") })
  .catch(err => { res.status(400).send(err) })
})

app.get("/stores", (req, res) => {
  Store.find().then(store => {
    res.json(store)
  })
})

app.listen(8080, () =>
  console.log("Example app listening on port 3000!")
)
