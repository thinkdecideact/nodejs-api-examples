import * as express from "express"
import { myDataSource } from "./app-data-source"
import { setStoreRouter } from "./modules/store/store.router"

const app = express()
const port = 8080

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
app.locals.myDataSource = myDataSource

app.use(express.json())  // Handle application/json
app.use(express.urlencoded({ extended: true }))  // Handle application/x-www-form-urlencoded

app.use('/api/store', setStoreRouter());

// Start express server
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})