// const express = require('express');
// const server = express();

// server.use(express.json());

// const PORT = 3001;

// server.get('/', (req, res) => {
//     res.send('harron is here');
// });

// server.get('/login',(req,res)=>{
//     res.send(user)
// })


// server.post('/login', (req, res) => {
//     const { name, pass } = req.body;
//     if (name && pass) {
//         res.send(`Welcome ${name}, your password is ${pass}`);
//     } else {
//         res.status(400).send('Bad Request: Please provide a name and password in the request body.');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`);
// });



const express = require('express');

const app =express();

const PORT =3000;



app.get('/',(req,res)=>{
    res.send('hello chemay')
})




app.listen(PORT,()=>{
    console.log(`Server is listenin on PORT ${PORT}`)
})