const UserModel = require('./models/UserModel');
const PostsModel = require('./models/PostsModel');
const { Op } = require('sequelize');

PostsModel.belongsTo(UserModel, {foreignKey: 'user_id'});

async function execute() {

  await PostsModel.create({
    user_id: 1,
    title: "Aprendendo CSS",
    content: "Lorem ipsum dolor sit amet, consectetur adip"
  });

  let post = await PostsModel.findOne({
    include: UserModel
  });

  console.log(post.UserModel.email);












    /*await UserModel.create({
      firstname: 'Joaquim',
      surname: 'da Silva',
      username: 'joaquim' + Math.random(),
      email: 'joaquim@gmail.com.' + Math.random(),
      password: '1234'
    });

    let users = await UserModel.findAll({
      where: {
        [Op.or]: [{username: 'joaquim'}, {id: 1}]
      }
    });

    let result = await UserModel.destroy({
      where: {
        id: {
          [Op.gte]: 15
        }
      }
    });

    console.log(result);*/
}

execute();