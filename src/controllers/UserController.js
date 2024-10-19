const UserModel = require('../models/UserModel');

const CreateUser = async (request, response) => {
    console.log(123)
    try {
        await UserModel.create(request.body);
        response.status(201);
        response.json({message: "Usuario criado com sucesso"});
    } catch (error) {
        console.log(error.message);
        response.status(400);
        response.json({message: "Erro ao criar usuario"});
    }
}

const ListUsers = async (request, response) => {
    try {
        const users = await UserModel.findAll();
        return response.json(users);
    } catch (error) {
        response.status(500);
        response.json({message: "Ocorreu um erro no servidor. Entre em contato com o suporte"})
    }
}

const UserById = (request, response) => {
    // Essa função deve retorna apenas 1 usuario, e esse usuario deve ser o mesmo do ID que
    // for passado no url
    response.end("GET /users/:id");
}

const UpdateUser = (request, response) => {
    // Essa função deve receber um body e um ID na url, e com essas informações deve
    // atualizar o usuario que é dono do ID que foi passado na url
    response.end("PUT /users/:id")
}

const DeleteUser = (request, response) => {
    // Essa função deve receber um ID na url e deletar do banco o usairo que tiver o mesmo ID
    response.end("DELETE /users/:id");
}

module.exports = {
    ListUsers, UserById, CreateUser,
    UpdateUser, DeleteUser
};