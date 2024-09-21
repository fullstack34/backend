const UserModel = require('../models/UserModel');
const UserAddresModel = require('../models/UserAddressModel');

UserModel.sync();
UserAddresModel.sync();