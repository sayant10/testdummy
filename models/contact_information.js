const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactInfoSchema = new Schema({
    phoneNumber: {
        type: Number
     },
     work: {
        type: Number
     },
     cell: {
        type: Number
     },
     other: {
        type: Number
     },
     personalEmail: {
        type: String
     },
     otherEmail: {
        type: String
     },
    maritalStatus: {
        type: String
    },
    language: {
        type: String
    },
    ethnicity: {
        type: String
    },
    priorityPopulation: {
        type: String
    },
    pregnancy: {
        type: String
    },
    teenParent: {
        type: String
    },
    deliveryDateInMonths: {
        type: Number
    },
    clientID: {
        type: Number, 
        required: true
    }
  }, {
    collection: 'contactInformation'
});

module.exports = mongoose.model('contactInformation', contactInfoSchema)

//versionKey: false 



