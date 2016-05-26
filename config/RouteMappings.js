var RouteMappings = require('route-mappings');

var routeMappings = RouteMappings()
  .get('/', 'Home#index')
  .post('/capture', { to : 'Home#capture' })


module.exports = routeMappings;
