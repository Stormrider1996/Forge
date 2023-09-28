
let http = require('http');
let express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let msg = "Hello Word";
    if (process.env.NAME) {
        msg = msg.concat(`, ${process.env.NAME} here`);
    }
    res.send(msg);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
