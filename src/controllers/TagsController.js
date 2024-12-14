const TagsModel = require('../models/TagsModel');

const CreateTag = async (request, response) => {
    let tag = await TagsModel.create(request.body);
    return response.json(tag);
}

const ListTags = async (request, response) => {
    let tags = await TagsModel.findAll();
    return response.json(tags);
}

const UpdateTag = async (request, response) => {
    let {id} = request.params;

    let tag = await TagsModel.update(request.body, {
        where: {id}
    });

    return response.status(204).end()
}

const DeleteTag = async (request, response) => {
    let {id} = request.params

    await TagsModel.destroy({
        where: {id}
    });

    return response.status(204).end()
}

module.exports = {
    CreateTag,
    ListTags,
    UpdateTag,
    DeleteTag
}