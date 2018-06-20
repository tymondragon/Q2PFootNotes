
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first_name: 'Greg',last_name: 'O',email: 'g@o.com',hashed_pw: 'go'},
        {id: 2,first_name: 'Jefe',last_name: 'S',email: 'j@s.com',hashed_pw: 'js'},
        {id: 3,first_name: 'Ty',last_name: 'M',email: 't@m.com',hashed_pw: 'tm'},
        {id: 4,first_name: 'Johnny',last_name: 'C',email: 'j@c.com',hashed_pw: 'jc'},
        {id: 5,first_name: 'John',last_name: 'SW',email: 'j@sw.com',hashed_pw: 'jsw'}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
