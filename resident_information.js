const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let residentInfoSchema = new Schema({
    address: {
        type: String
      },
    city: {
        type: String
      },
    state: {
        type: String
      },
    zip: {
        type: Number
     },
    county: {
        type: String
    },
    totalRent: {
        type: Number
    },
    utilitiesIncluded: {
        type: String
    },
    rentSubsidized: {
        type: String
    },
    singleParent: {
        type: String
    },
    
    
  }, {
    collection: 'residentInformation'
});

module.exports = mongoose.model('residentInformation', residentInfoSchema)

//versionKey: false 



