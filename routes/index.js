
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'keithmazanec.com', first_name: 'Keith', last_name: 'Mazanec' });
};