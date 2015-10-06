/**
 * Created by mdurieux on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Chain = function (handler) {

        this.processRequest = function(request){
            handler.processRequest(request);
        };

    };

});