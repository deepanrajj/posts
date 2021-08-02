const cors = require('cors');
const express = require('express');
const postBackendApp = express();
postBackendApp.use(express.json());
postBackendApp.use(cors());
const postRoutes = require('./routes/post');

// post
postBackendApp.use('/api/posts', postRoutes);

postBackendApp.listen(4000);
