const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number },
    //registered: { type: [String] }
});

module.exports = mongoose.model('Event', eventSchema);
