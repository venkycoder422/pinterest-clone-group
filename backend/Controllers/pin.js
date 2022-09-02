const Pin = require("../Database/pins");

async function addPin(req, res) {
    const {
        title,
        description,
        image,
        email
    } = req.body

    await Pin.create({
        title,
        description,
        image,
        email
    });

    return res.status(200).send({
        status: "success",
        message: "Pin Created"
    })
}

module.exports = addPin