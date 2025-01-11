const express = require('express');
const UserModel = require('../models/UserModel');
const jwt = require("jsonwebtoken");

const PrivateRoutes = express.Router();

PrivateRoutes.use(async (request, response, next) => {
    let token = request.headers["authorization"];
    token = token?.replace('Bearer ', '');
    
    if(!token) {
        return response.json({
            message: "Não autorizado"
        });
    }

    try {

        let decoded = jwt.verify(token, process.env.SECRET);
        let user = await UserModel.findByPk(decoded.id);

        if(!user?.id) {
            throw new Error("Usuario não autorizado");
        }

        return next();

    } catch(error) {
        return response.json({
            message: error.message
        });
    }
})

module.exports = PrivateRoutes;