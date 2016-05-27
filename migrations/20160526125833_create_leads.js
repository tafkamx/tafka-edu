
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Leads', function(t) {
    t.increments('id').primary();
    t.string('email').unique();
    t.string('role');
    t.string('name');
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Leads');
};
