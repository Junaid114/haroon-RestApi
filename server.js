// const express = require('express');
// const server = express();

// server.use(express.json());

// const PORT = 3001;

// const user={
//     Name : "haroon",
//     Last : "Rasheed"
// }

// server.get('/', (req, res) => {
//     res.send(user);
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


// Example


const express = require ('express');

const acess = express();

acess.use(express.json());

const PORT = 3000;

// const user = {
//     Name:"Haroon",
//     Last:"Rasheed",
//     Email:"haroonrasheed211f@gmail.com"

// }


acess.get('/', (req,res) => {
    res.send("It's good experience to start backend");
} )

acess.listen(PORT, ()=> {
    console.log(`server is running on the port ${PORT}`)
})

