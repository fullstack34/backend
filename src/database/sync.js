const UserModel = require('../models/UserModel');
const UserAddresModel = require('../models/UserAddressModel');
const PostsModel = require('../models/PostsModel');
const TagsModel = require('../models/TagsModel');
const PostsTagsModel = require('../models/PostsTagsModel');

async function migration() {
  await UserModel.sync();
  await UserAddresModel.sync();
  await PostsModel.sync();
  await TagsModel.sync();
  await PostsTagsModel.sync();
}

migration();