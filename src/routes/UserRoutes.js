const PublicRoutes = require('./PublicRoutes');
const PrivateRoutes = require('./PrivateRoutes');

const {
    ListUsers, 
    UserById, 
    CreateUser, 
    UpdateUser,
    DeleteUser,
    CreateToken
} = require('../controllers/UserController');

PrivateRoutes.get('/users', ListUsers);
PrivateRoutes.get('/users/:id', UserById);
PublicRoutes.post('/users', CreateUser);
PrivateRoutes.put('/users/:id', UpdateUser);
PrivateRoutes.delete('/users/:id', DeleteUser);
PublicRoutes.post('/users/token', CreateToken);

module.exports = [PublicRoutes, PrivateRoutes];