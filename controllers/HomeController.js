var HomeController = Class('HomeController').inherits(BaseController)({

  prototype : {
    index : function(req, res, next) {
      res.render('home/index.html', {layout : 'application', status: {}, params: { email: '', name: '', role: '' } });
    },

    capture : function(req, res, next) {
      var lead = new Lead(req.body);

      lead.save().then(function(result) {
        res.render('home/index.html', {layout : 'application', status: { ok: 1 }, params: req.body});
      })
      .catch(function(err) {
        res.status(400).render('home/index.html', {layout : 'application', status: { err: err }, params: req.body});
      });

    },
  }
});

module.exports = new HomeController();
