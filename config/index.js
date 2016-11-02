var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds141937.mlab.com:41937/nodetodo';
    }
}
