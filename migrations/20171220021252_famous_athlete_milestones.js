
exports.up = function(knex, Promise) {
  return knex.schema.table("milestones", (table) => {
    table.integer("famous_athlete_id").unsigned();
    table.foreign("famous_athlete_id").references("famous_athletes.id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("milestones", (table) => {
    table.dropForeign("famous_athlete_id");
    table.dropColumn("famous_athlete_id");
  })
};
