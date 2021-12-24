const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fec');

const questionSchema = new mongoose.Schema({
  id: {type: Number, unique: true}
});

const answerSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  helpful: {type: Boolean},
  reported: {type: Boolean}
});

const Question = mongoose.model('Question', questionSchema);

const Answer = mongoose.model('Answer', answerSchema);

const qFinder = () => {
  return Question.find();
}

const aFinder = () => {
  return Answer.find();
}

const qMarker = (id) => {
  Question.findOneAndUpdate({id: id}, {id: id}, {new: true, upsert: true}, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
}

const aHelpfulMarker = (id, cb) => {
  Answer.findOneAndUpdate({id: id, helpful: false}, {helpful: true}, {new: true}, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
}

const aReportedMarker = (id, cb) => {
  Answer.findOneAndUpdate({id: id, reported: false}, {helpful: true}, {new: true}, (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
}

module.exports.qMarker = qMarker;
module.exports.aHelpfulMarker = aHelpfulMarker;
module.exports.aReportedMarker = aReportedMarker;