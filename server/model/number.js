var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NumberSchema = new Schema({
  num: {
    name:{ type: String},
    value:{ type: String}
  }
});

module.exports = mongoose.model('Number', NumberSchema);