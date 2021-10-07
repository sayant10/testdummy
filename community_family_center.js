const express = require("express"); // setting our express app up
const mongoose = require("mongoose");  // setting up our mongoose library
const morgan = require("morgan"); // setting up morgan library for logging functionality
require("dotenv").config(); // setting up the module that allows the connection string to be read from the .env file
 
const app = express();

//Import the schema models for the three collections
let contactInfoModel = require('./models/contact_information');
let generalInfoModel = require('./models/general_information');
let residentInfoModel = require('./models/resident_information');

// Accessing the HTTP request as req.body and logging incoming request to console
app.use(express.json());
app.use(morgan("dev"));

// The database connection set up using mongoose
mongoose
  .connect(process.env.MONGO_URL) // connection string read from .env file
  .then(() => {
    console.log("Connected to MongoDB Successfully!");
  })
  .catch((err) => {
    console.error("Connection Not Successful.", err);
  });

/*-----------------------------------------
CRUD for Contact Information
-----------------------------------------*/
  //Creating the contact information
app.post('/contInfo', (req, res, next) => {
  contactInfoModel.create(req.body, (error) => {
    if (error) {
      return next(error)
    } else {
      // response is sent in order to verify if the data was added to the database
      res.send('Client Contact Information has been added to the database.');
    }
  });
});

// Reading the contact information
app.get('/clientContInfo', (req, res, next) => {
  contactInfoModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Updating contact information by clientID
app.put('/contInfo/:id', (req, res, next) => {
  contactInfoModel.findOneAndUpdate({ clientID: req.params.id }, {
    $set: req.body
  }, (error) => {
    if (error) {
      return next(error);
    } else {
      res.send('Client Contact Information has been updated.');
    }
  });
});

// Deleting contact information by clientID
app.delete('/contInfo/:id', (req, res, next) => {
  contactInfoModel.findOneAndRemove({ clientID: req.params.id}, (error) => {
    if (error) {
      return next(error);
    } else {
      res.send('Client Contact Information has been deleted.');
    }
  });
});

/*-----------------------------------------
CRUD for General Information
-----------------------------------------*/
  //Creating the general information
  app.post('/genInfo', (req, res, next) => {
    generalInfoModel.create(req.body, (error) => {
      if (error) {
        return next(error)
      } else {
        // response is sent in order to verify if the data was added to the database
        res.send('Client General Information has been added to the database.');
      }
    });
  });
  
  // Reading the general information
  app.get('/clientGenInfo', (req, res, next) => {
    generalInfoModel.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    });
  });
  
  // Updating general information by clientID
  app.put('/contInfo/:id', (req, res, next) => {
    generalInfoModel.findOneAndUpdate({ clientID: req.params.id }, {
      $set: req.body
    }, (error) => {
      if (error) {
        return next(error);
      } else {
        res.send('Client General Information has been updated.');
      }
    });
  });
  
  // Deleting general information by clientID
  app.delete('/genInfo/:id', (req, res, next) => {
    generalInfoModel.findOneAndRemove({ clientID: req.params.id}, (error) => {
      if (error) {
        return next(error);
      } else {
        res.send('Client General Information has been deleted.');
      }
    });
  });

  /*-----------------------------------------
CRUD for Resident Information
-----------------------------------------*/
  //Creating the resident information
app.post('/resInfo', (req, res, next) => {
  residentInfoModel.create(req.body, (error) => {
    if (error) {
      return next(error)
    } else {
      // response is sent in order to verify if the data was added to the database
      res.send('Client Resident Information has been added to the database.');
    }
  });
});

// Reading the resident information
app.get('/clientResInfo', (req, res, next) => {
  residentInfoModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});

// Updating resident information by clientID
app.put('/resInfo/:id', (req, res, next) => {
  residentInfoModel.findOneAndUpdate({ clientID: req.params.id }, {
    $set: req.body
  }, (error) => {
    if (error) {
      return next(error);
    } else {
      res.send('Client Resident Information has been updated.');
    }
  });
});

// Deleting resident information by clientID
app.delete('/resInfo/:id', (req, res, next) => {
  residentInfoModel.findOneAndRemove({ clientID: req.params.id}, (error) => {
    if (error) {
      return next(error);
    } else {
      res.send('Client Resident Information has been deleted.');
    }
  });
});

// port through which application will go live
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Community Family Center app live on port:", PORT);
});
