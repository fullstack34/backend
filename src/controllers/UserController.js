const UserModel = require('../models/UserModel');

const CreateUser = async (request, response) => {
    try {
        let user = await UserModel.create(request.body);
        user.setDataValue('password', undefined);
        response.status(201);
        return response.json(user);
    } catch (error) {
        console.log(error);
        response.status(400);
        if(Array.isArray(error.errors) && error.errors.length > 0) {
            return response.json({message: error.errors[0].message})
        }
        return response.json({message: "Erro ao criar usuario"});
    }
}

const ListUsers = async (request, response) => {
    try {
        const users = await UserModel.findAll({
            attributes: {
                exclude: ["password"]
            }
        });
        return response.json(users);
    } catch (error) {
        response.status(500);
        return response.json({message: "Ocorreu um erro no servidor. Entre em contato com o suporte"})
    }
}

const UserById = async (request, response) => {
    try {
        let {id} = request.params;
        let user = await UserModel.findByPk(id, {
            attributes: {
                exclude: ["password"]
            }
        });

        if(!user) {
            response.status(404);
            return response.json({
                message: "Usuario não encontrado"
            });
        }

        return response.json(user);
    } catch(error) {
        response.status(500);
        return response.json({
            message: "Ocorreu um erro no servidor. Entre em contato com o suporte"
        });
    }
}

const UpdateUser = async (request, response) => {
    try {
        let {id} = request.params;
        let {body} = request;
        let [total] = await UserModel.update(body, {
            where: {id}
        });

        if(total <= 0) {
            response.status(404);
            return response.json({
                message: "Usuario não encontrado"
            });
        }

        return response.status(204).end()        
    } catch (error) {
        response.status(500);
        return response.json({
            message: "Ocorreu um erro no servidor. Entre em contato com o suporte"
        });
    }
}

const DeleteUser = async (request, response) => {
    try {
        let {id} = request.params;
        let total = await UserModel.destroy({
            where: {id}
        });

        if(total <= 0) {
            response.status(404);
            return response.json({
                message: "Usuario não encontrado"
            });
        }
        return response.json({
            message: "Usuario deletado com sucesso"
        });
    } catch (error) {
        response.status(500);
        return response.json({
            message: "Ocorreu um erro no servidor. Entre em contato com o suporte"
        });
    }
}

module.exports = {
    ListUsers, UserById, CreateUser,
    UpdateUser, DeleteUser
};