const express = require('express');
const schema = require('./schema');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

schema.applyMiddleware({
    app,
    path: '/api'
});

app.listen(PORT, () => console.log(`GraphQL playground is running on http://localhost:${PORT}/api/playground`));
