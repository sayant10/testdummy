const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let generalInfoSchema = new Schema({
    firstName: {
      type: String
    },
    lastName: {
        type: String
    },
    middleName: {
        type: String
    },
    birthDate: {
      type: String
    },
    socialSecurity: {
        type: Number,
        required: true
      },
      otherDocument: {
        type: String
      },
    gender: {
        type: String
      },
    dlNumber: {
        type: Number
      },
    
  }, {
    collection: 'generalInformation'
});

module.exports = mongoose.model('generalInformation', generalInfoSchema)

//versionKey: false 



