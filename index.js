const express = require ("express")
const cors = require ("cors")
const app = express ()
const mercadopago = require ("mercadopago")


// SDK de Mercado Pago
const { MercadoPagoConfig, Preference } = require ("mercadopago")
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'TEST-971084871442737-022411-d81fd0587ec5f10aa3d0e183b3f0ae9a-514237186' });


const preference = new Preference(client);


app.use(express.json())
app.use(cors())

app.get ("/hola", (req,res) => {
    res.send("funcion")

})
app.post ("/create-preference", (req,res) => {

    preference.create({
        body: {
          items: [
            {
              title: 'Mi producto',
              quantity: 1,
              unit_price: 4500
            }
          ],
        }
      })
      .then((respuesta) => {
        console.log (respuesta.id)
        res.json ({
            id:respuesta.id
        })
      })
      .catch(console.log);

})






app.listen(8080, () => {
    console.log ("Servidor Corriendo")
})
