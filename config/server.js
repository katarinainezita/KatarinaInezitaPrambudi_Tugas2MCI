const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const userRoute = require('../app/routes/userRoute');
const bookingRoute = require('../app/routes/bookingRoute');
const pembayaranRoute = require('../app/routes/pembayaranRoute');
const seminarRoute = require('../app/routes/seminarRoute');
const tempatdudukRoute = require('../app/routes/tempatdudukRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json({strict:false,type:'mixed'}))

app.use('/users', userRoute);
app.use('/bookings', bookingRoute);
app.use('/pembayarans', pembayaranRoute);
app.use('/seminars', seminarRoute);
app.use('/tempatduduks', tempatdudukRoute);

app.get('/', (req, res) => res.send('Welcome to Tugas 2 MCI'));

app.listen(port, () => console.log(`App listening on port ${port}!`));