const createIsomorphicEnv = require('./browserEnv')
const express = require('express');
const PORT = process.env.PORT || 7789;
const app = express();
const statusHandler = require('./statusHandler').default;
const path = require('path')

createIsomorphicEnv()

app.use(express.static('build'))

app.get('*', (req, res) => {

    const status = statusHandler(req);
    console.log("Server Status ", status)

    if(status === 404)
        res.status(404)
    else
        res.status(200)
   
    res.sendFile(path.join(process.cwd(),'build', 'index.html'));
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
