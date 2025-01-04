const UserModel = require("../models/UserModel");
const { getImagesPath, makeDirIfNotExists } = require("../ultils/PathHandler");
const { saveByBase64, saveByUrl } = require("../service/ImageUpload");

const CreateUser = async (request, response) => {
    let { firstname, surname, username, email, password } = request.body;

    let directory = getImagesPath();
    let filename;
    try {
        if (request.body.image) {
            makeDirIfNotExists(directory);
            let { type, mime, content } = request.body.image;
            if (content && type) {
                filename = Math.random().toString(16).slice(2);
                if (type === "base64") {
                    if (!mime) {
                        throw new Error("mime é obrigatorio para o type base64");
                    }
                    filename = saveByBase64(filename, content, mime);
                } else if (type === "url") {
                    filename = await saveByUrl(filename, content);
                } else {
                    throw new Error("tipo de imagem inválido");
                }
            }
        }
        let user = await UserModel.create({
            firstname,
            surname,
            username,
            email,
            password,
            image: filename
        });

        user.setDataValue("password", undefined);
        response.status(201);
        return response.json(user);

    } catch (error) {
        console.log(error);
        response.status(400);
        if (Array.isArray(error.errors) && error.errors.length > 0) {
            return response.json({ message: error.errors[0].message });
        }
        return response.json({ message: "Erro ao criar usuario" });
    }
};

const CreateToken = async (request, response) => {
    let { email, password } = request.body;

    let user = await UserModel.findOne({
        where: { email, password },
    });

    if (!user.id) {
        return response.json({
            message: "Usuario não encontrado",
        });
    }

    let expirate = Date.now() + 3600;
    let current = Date.now();

    return response.json({
        token: btoa(`${user.email}:${user.password}:${expirate}:${current}`),
    });
};

const ListUsers = async (request, response) => {
    try {
        const users = await UserModel.findAll({
            attributes: {
                exclude: ["password"],
            },
        });
        return response.json(users);
    } catch (error) {
        response.status(500);
        return response.json({
            message:
                "Ocorreu um erro no servidor. Entre em contato com o suporte",
        });
    }
};

const UserById = async (request, response) => {
    try {
        let { id } = request.params;
        let user = await UserModel.findByPk(id, {
            attributes: {
                exclude: ["password"],
            },
        });

        if (!user) {
            response.status(404);
            return response.json({
                message: "Usuario não encontrado",
            });
        }

        return response.json(user);
    } catch (error) {
        response.status(500);
        return response.json({
            message:
                "Ocorreu um erro no servidor. Entre em contato com o suporte",
        });
    }
};

const UpdateUser = async (request, response) => {
    try {
        let { id } = request.params;
        let { body } = request;
        let total = 0;
        if (request.body.image) {
            let directory = getImagesPath();
            let filename;
            makeDirIfNotExists(directory);
            let { type, mime, content } = request.body.image;
            console.log(type);
            if (content && type) {
                filename = Math.random().toString(16).slice(2);
                if (type === "base64") {
                    if (!mime) {
                        throw new Error("mime é obrigatorio para o type base64");
                    }
                    filename = saveByBase64(filename, content, mime);
                } else if (type === "url") {
                    filename = await saveByUrl(filename, content);
                } else {
                    throw new Error("tipo de imagem inválido");
                }
                [total] = await UserModel.update(
                    { image: filename },
                    { where: { id } }
                );
                if (total <= 0) {
                    response.status(404);
                    return response.json({
                        message: "Usuario não encontrado",
                    });
                }
                delete body.image;
            }
        }
        if (Object.keys(body).length > 0) {
            [total] = await UserModel.update(body, {
                where: { id },
            });
            if (total <= 0) {
                response.status(404);
                return response.json({
                    message: "Usuario não encontrado",
                });
            }
        }

        return response.status(204).end();
    } catch (error) {
        response.status(500);
        return response.json({
            message:
                "Ocorreu um erro no servidor. Entre em contato com o suporte",
        });
    }
};

const DeleteUser = async (request, response) => {
    try {
        let { id } = request.params;
        let total = await UserModel.destroy({
            where: { id },
        });

        if (total <= 0) {
            response.status(404);
            return response.json({
                message: "Usuario não encontrado",
            });
        }
        return response.json({
            message: "Usuario deletado com sucesso",
        });
    } catch (error) {
        response.status(500);
        return response.json({
            message:
                "Ocorreu um erro no servidor. Entre em contato com o suporte",
        });
    }
};

module.exports = {
    ListUsers,
    UserById,
    CreateUser,
    UpdateUser,
    DeleteUser,
    CreateToken,
};
