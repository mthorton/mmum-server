const Express = require("express"); // Gateway to using Express methods.
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");

const { LogModel } = require("../models");

// Create log
router.post("/create", validateJWT, async (req, res) => {
    const { description, title, date, location } = req.body.log;
    const { id } = req.user;
    const logEvent = {
        description,
        title,
        date,
        location,
        owner: id
    }
    try {
        const newLog = await LogModel.create(logEvent);
        res.status(200).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err })
    }
    LogModel.create(logEvent)
});

// Get all events
router.get("/", validateJWT, async (req, res) => {
    try {
        const entries = await LogModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Get events by user_id
router.get("/mine", validateJWT, async (req, res) => {
    const { id } = req.user;
    try {
        const userEvent = await LogModel.findAll({
            where: {
                owner: id
            }
        });
        res.status(200).json(userEvent);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Update an event
router.put("/update/:id", validateJWT, async (req, res) => {
    const { description, title, date, location } = req.body.log;
    const logId = req.params.entryId;
    const userId = req.user.id;

    const query = {
        where: {
            id: logId,
            owner_id: userId
        }
    };

    const updatedEvent = {
        description: description,
        title: title,
        date: date,
        location: location
    };

    try {
        const update = await LogModel.update(updatedEvent, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
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