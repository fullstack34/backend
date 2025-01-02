const PublicRoutes = require('./PublicRoutes');
const PrivateRoutes = require('./PrivateRoutes');

const {
    CreateTag,
    ListTags,
    UpdateTag,
    DeleteTag
} = require('../controllers/TagsController');

PrivateRoutes.post("/tags", CreateTag);
PublicRoutes.get('/tags', ListTags);
PrivateRoutes.delete('/tags/:id', DeleteTag);
PrivateRoutes.put('/tags/:id', UpdateTag);

module.exports = [PublicRoutes, PrivateRoutes];