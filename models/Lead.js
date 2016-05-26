var Lead = Class('Lead').inherits(Krypton.Model)({
  tableName : 'Leads',
  attributes : ['id', 'email', 'name', 'createdAt', 'updatedAt'],

  validations : {
    email : [
      'email',
      {
        rule : function(val) {
          var query = Lead.query()
            .where({
              email : val
            });

          return query.then(function(result) {
            if (result.length > 0) {
              throw new Error('The email already exists.');
            }
          })
        },
        message : 'The email already exists.'
      },
      'required',
      'maxLength:255'
    ]
  }
});

module.exports = Lead;
