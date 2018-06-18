
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first_name: 'Greg',last_name: 'O',email: 'hidemail@somemail.com',hashed_pw: '2094509348059askdaksdjasdi'},
        {id: 2,first_name: 'Jefe',last_name: 'S',email: 'showmail@somemail.com',hashed_pw: 'fhejngnasdf456n4n4'},
        {id: 3,first_name: 'Ty',last_name: 'O',email: 'whosmail@somemail.com',hashed_pw: '9sdif933j4jwefjk'},
        {id: 4,first_name: 'Johnny',last_name: 'C',email: 'whatmail@somemail.com',hashed_pw: '323nrnso97ydfg'},
        {id: 5,first_name: 'John',last_name: 'SW',email: 'wheresmail@somemail.com',hashed_pw: '349hfv949gh9v7s9hud'}
      ]);
    });
};
