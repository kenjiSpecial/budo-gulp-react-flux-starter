
var AppDispatcher = require('../dispatcher/dispatcher');
var CONSTANTS     = require('../utils/constants');

var AppAction = {
    increment : function(){
        AppDispatcher.dispatch({
            actionType : CONSTANTS.INCREMENT
        })
    }
};

module.exports = AppAction;
