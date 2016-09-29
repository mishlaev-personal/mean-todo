'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
    if (err) {
        console.log('Fail connecting MongoDB!');
    } else {
        console.log('Connecte to MongoDB');
    }
});
