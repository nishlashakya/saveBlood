
var mongoose = require('mongoose')

// create schema

var bloodSchema = mongoose.Schema({
    blood_group: String,
    blood_type: String,
    collected_date: String,
    expiry_date: String,
    invoice_no: Number,
    patient_name: String,
    purpose: String,
    hospital_name: String,
})

var Profile = module.exports = mongoose.model('blood_detail', bloodSchema)