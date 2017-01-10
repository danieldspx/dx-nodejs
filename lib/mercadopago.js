var configurations = require('./configurations');

module.exports = function(){

    function configure(options){
        configurations.configure(options);
    };

    return {
        configure: configure,
        configurations: configurations
    };
};