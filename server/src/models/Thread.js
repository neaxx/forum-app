const slug = require('slug');




const mongoose = require('../mongoose');



const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;



const ThreadSchema = new Schema({

title: {

	type: String,

	required: true,
},

body:  {

	type: String,

	required: true,
},

slug: {

	type: String,

	lowercase: true,
},

});



ThreadSchema.pre('save', function(next) { 

	this.slug = slug(this.title);



	return next();
});



const Thread = mongoose.model('Thread', ThreadSchema);



module.exports = Thread;