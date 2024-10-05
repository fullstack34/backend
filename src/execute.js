const UserModel = require('./models/UserModel');
const PostsModel = require('./models/PostsModel');
const { Op } = require('sequelize');
const connection = require('./database/connection');

PostsModel.belongsTo(UserModel, {foreignKey: 'user_id'});

async function execute() {

  let recentUser = await UserModel.create({
    firstname: 'Joaquim',
    surname: 'da Silva',
    username: 'joaquim' + Math.random().toString(16).slice(2),
    email: 'joaquim@gmail.com.' + Math.random().toString(16).slice(2),
    password: '1234'
  });

  await PostsModel.create({
    user_id: recentUser.id,
    title: "Aprendendo CSS",
    content: "Lorem ipsum dolor sit amet, consectetur adip"
  });

  let post = await PostsModel.findOne({
    include: UserModel
  });









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