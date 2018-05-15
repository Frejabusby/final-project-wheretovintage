import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.listen(8080, () =>
  console.log("Example app listening on port 3000!")
)
