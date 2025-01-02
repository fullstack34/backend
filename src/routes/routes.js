const express = require('express');
const UserRoutes = require('./UserRoutes');
const PostRoutes = require('./PostRoutes');
const TagRoutes = require('./TagRoutes');

const routes = express.Router();

routes.use(UserRoutes);
routes.use(PostRoutes);
routes.use(TagRoutes);

module.exports = routes;