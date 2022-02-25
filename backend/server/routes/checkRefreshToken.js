const router = require("express").Router();
const tokens = require('../auth/tokens');


router.post('/checkrefreshtoken', (req, res, next) => {
    const refreshToken = req.body.refreshToken;

    tokens.decodeRefreshToken(refreshToken)
        .then((newTokens) => {
            res.json(newTokens);
            next();
        })
        .catch((err) => {
            //TODO: Catch errors in getUserFromRefreshToken, generateAccessToken, generateRefreshToken
            res.status(401).json(err);
            next();
        })
});

module.exports = router