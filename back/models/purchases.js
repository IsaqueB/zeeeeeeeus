const mongoose = require('../database')

const PurchaseSchema = new mongoose.Schema({    
    weight:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Purchase = mongoose.model('Purchase', PurchaseSchema)

module.exports = Purchase