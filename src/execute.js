const UserModel = require('./models/UserModel');

/*UserModel.create({
  firstname: 'Raimundo',
  surname: 'da Silva',
  username: 'raimundo',
  email: 'raimundo@gmail.com',
  password: '1234'
}).then(resultado => {
  console.log(resultado);
});*/

UserModel.findAll().then(resultado => console.log(resultado));