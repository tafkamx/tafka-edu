var HomeController = Class('HomeController').inherits(BaseController)({

  prototype : {
    index : function(req, res, next) {
      res.render('home/index.html', {layout : 'application' });
    },

    capture : function(req, res, next) {
      var lead = new Lead(req.body);

      lead.save().then(function(result) {
        res.json(lead);
      })
      .catch(function(err) {
        res.status(400).json(err);
      });

    },
  }
});

module.exports = new HomeController();
