const Express = require("express"); // Gateway to using Express methods.
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { LogModel } = require("../models");

// Create log
router.post("/create", validateJWT, async (req, res) => {
<<<<<<< HEAD:controllers/logcontroller.js
    const { title, description, date, location } = req.body.log;
=======
    const { date, title, location, description } = req.body.log;
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19:controllers/logController.js
    const { id } = req.user;
    const logEntry = {
        date,
        title,
        location,
        description,
        owner_id: id
    }
    try {
        const newLog = await LogModel.create(logEntry);
        res.status(200).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err })
    }
<<<<<<< HEAD:controllers/logcontroller.js
=======
    LogModel.create(logEntry)
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19:controllers/logController.js
});

// Get all logs
router.get("/all", async (req, res) => {
    try {
        const events = await LogModel.findAll();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Get logs by user_id
router.get("/mine", validateJWT, async (req, res) => {
    const { id } = req.user;
    try {
        const userLog = await LogModel.findAll({
            where: {
                owner_id: id
            }
        });
        res.status(200).json(userLog);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Update a log
router.put("/update/:id", validateJWT, async (req, res) => {
<<<<<<< HEAD:controllers/logcontroller.js
    const { title, description, date, location } = req.body.log;
=======
    const { date, title, location, description } = req.body.log;
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19:controllers/logController.js
    const logId = req.params.id;
    const userId = req.user.id;

    const query = {
        where: {
            id: logId,
            owner_id: userId
        }
    };

    const updatedLog = {
<<<<<<< HEAD:controllers/logcontroller.js
        title: title, 
        description: description,
=======
>>>>>>> a1ddfba2c45c1ed50c16330df2a773727aeddb19:controllers/logController.js
        date: date,
        title: title,
        location: location,
        description: description
    };

    try {
        const update = await LogModel.update(updatedLog, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err});
    }
});

// Delete a log
router.delete("/delete/:id", validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const logId = req.params.id;

    try {
        const query = {
            where: {
                id: logId,
                owner_id: ownerId
            }
        };

        await LogModel.destroy(query);
        res.status(200).json({ message: "Log Entry Removed" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router;