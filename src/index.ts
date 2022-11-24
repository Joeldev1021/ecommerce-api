import express from 'express'

const app = express()

//Connection to database

//app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Public directory


app.listen(3000, () => {
    console.log('server running in port ', 3000)
})