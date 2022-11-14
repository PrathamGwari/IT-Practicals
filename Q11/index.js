const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "success"
    })
})

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})
