const mongoose = require('mongoose');
const URL = process.env.data_base;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection Sucessful');
}).catch((err) =>{
    console.log(err);
})