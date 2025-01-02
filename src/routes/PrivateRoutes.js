const express = require('express');
const UserModel = require('../models/UserModel');

const PrivateRoutes = express.Router();

PrivateRoutes.use(async (request, response, next) => {
    let token = request.headers["token"];
    
    if(!token) {
        return response.json({
            message: "Não autorizado"
        });
    }

    token = atob(token);

    let [email, password, expirate] = token.split(':');

    if(expirate < Date.now()) {
        return response.json({
            message: "Não autorizado"
        });
    }

    let user = await UserModel.findOne({
        where: {email, password}
    });

    if(user.id) {
        return next()
    }

    return response.json({
        message: "Não autorizado"
    });
})

module.exports = PrivateRoutes;