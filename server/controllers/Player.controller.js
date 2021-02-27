const {Player} = require('../models/Player.model');

module.exports.createPlayer = (request, response) => {
    const { name,position } = request.body;
    Player.create({
        name,position
    })
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err))
};

module.exports.findAllPlayers= (request, response) => {
    Player.find({})
        .then(allPlayers=> response.json(allPlayers))
        .catch(err => response.json(err))
}

module.exports.deletePlayer= (request, response) => {
    Player.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}
