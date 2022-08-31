const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/dist/missigs-portal'));

app.get('/*', (req, res) => {    
	res.sendFile(path.join(__dirname+'/dist/missigs-portal/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});