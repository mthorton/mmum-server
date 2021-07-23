const jwt = require("jsonwebtoken");
const { UserModel } = require("../models");

const validateJWT = async (req, res, next) => {
    if (req.method == "OPTIONS") {
        next();
    } else if (
        req.headers.authorization &&
        req.headers.authorization.includes("Bearer")
    ) {
        const { authorization } = req.headers;
<<<<<<< HEAD
        console.log("authorization -->", authorization);
        const payload = authorization
            ? jwt.verify(
                authorization.includes("Bearer")
                ? authorization.split(" ")[1]
                : authorization,
             process.env.JWT_SECRET
            )
            : undefined

        console.log("payload -->", payload);

        if (payload) {
            let foundUser = await UserModel.findOne({ where: { id: payload.id } });
            console.log("foundUser -->", foundUser);

            if (foundUser) {
                console.log("request -->", req);
=======
        const payload = authorization ? jwt.verify(authorization, process.env.JWT_SECRET) : undefined;

        if (payload) {
            let foundUser = await UserModel.findOne({ where: { id: payload.id } });

            if (foundUser) {
>>>>>>> 6509f70fe96da516a55c4321a7c857743c3b0351
                req.user = foundUser;
                next();
            } else {
                res.status(400).send({ message: "Not Authorized" });
            }
        } else {
            res.status(401).send({ message: "Invalid token" });
        }
    } else {
        res.status(403).send({ message: "Forbidden" });
    }
};

module.exports = validateJWT;