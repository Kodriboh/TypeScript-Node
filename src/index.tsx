import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/test', (req, res) => {
    res.send('Hello from express!');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
