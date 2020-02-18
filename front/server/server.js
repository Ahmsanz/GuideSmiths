const express = require ('express');

const app = express();



const port = process.env.PORT || 5000;

//listen to port

app.listen(port, () => console.log('listening on port ' + port));



// using routes defined

app.use ('/phones', require('./routes/phones'))
