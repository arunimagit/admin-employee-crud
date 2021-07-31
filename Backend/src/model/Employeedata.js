const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Employees');
const Schema = mongoose.Schema;

var NewEmployeeSchema = new Schema({

    name: String,
    email : String,
    qualification :String,
    
});

var Employeedata = mongoose.model('employee', NewEmployeeSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Employeedata;