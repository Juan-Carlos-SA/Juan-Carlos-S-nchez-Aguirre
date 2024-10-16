const express = require("express")
const bodyparse = require("body-parser")
const cors = require("cors")

const app = express()
const ports = 3001

app.use(bodyparse.urlencoded({ extended: true }))
app.use(bodyparse.json())
app.use(cors())


app.post("/guardar", (req, res) => {
    try {
        //const (nombre) = req.body

        console.log(req.body);
    } catch (error) {
        console.log(error.message)
    }

}
)

app.get("/mensaje", (req, res) => {
    res.send("Servidor en linea")
})

app.listen(ports, () => {
    console.log("servidor ejecutado en el puerto 3001");
})
