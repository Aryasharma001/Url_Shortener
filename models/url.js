const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
        
    },
    redirectUrl:{
        type:String,
        required:true,
       
    },
    visitHistory:[{timestamp: {type:Number}}],

},
{timestamps:true}
);


//Export the model
module.exports = mongoose.model('url', urlSchema);
