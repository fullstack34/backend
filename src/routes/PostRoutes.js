const PublicRoutes = require('./PublicRoutes');
const PrivateRoutes = require('./PrivateRoutes');

const {
    CreatePost,
    ListPosts,
    PostBySlug
} = require('../controllers/PostController');

PublicRoutes.get('/posts', ListPosts);
PrivateRoutes.post("/posts", CreatePost);
PublicRoutes.get('/posts/:slug', PostBySlug);

module.exports = [PublicRoutes, PrivateRoutes];