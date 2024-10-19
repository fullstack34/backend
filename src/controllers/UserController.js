
const ListUsers = (request, response) => {
    response.end("GET /users");
}

const UserById = (request, response) => {
    response.end("GET /users/:id");
}

const CreateUser = (request, response) => {
    response.end("POST /users")
}

const UpdateUser = (request, response) => {
    response.end("PUT /users/:id")
}

const DeleteUser = (request, response) => {
    response.end("DELETE /users/:id");
}

module.exports = {
    ListUsers, UserById, CreateUser,
    UpdateUser, DeleteUser
};