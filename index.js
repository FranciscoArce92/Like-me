const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/posts.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use(routes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

