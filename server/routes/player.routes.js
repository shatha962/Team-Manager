const PlayerController = require("../controllers/Player.controller");

module.exports = (app) =>{
    app.post("/api/player", PlayerController.createPlayer);
    app.get("/api/players", PlayerController.findAllPlayers);
    app.delete("/api/player/:id", PlayerController.deletePlayer);
}