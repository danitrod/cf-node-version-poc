const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send(process.version);
});

app.listen(process.env.PORT || 8080);

