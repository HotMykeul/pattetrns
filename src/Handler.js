/**
 * Created by mdurieux on 06/10/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Handler = function (list_of_contacts, next_handler) {
        var _list_of_contacts = list_of_contacts;
        var _next_handler = next_handler;

        this.handle = function (request) {
            var contact = request.get_contact();

        };

        this.processRequest = function(request) {
            var contact = request.get_contact();
            if (_list_of_contacts.length == 0) {
                _list_of_contacts.add(contact);
            }
            else if (_list_of_contacts[0].get_tag() == contact.get_tag()) {
                _list_of_contacts.add(contact);
            }
            else if(_next_handler != null){
                _next_handler.processRequest(request);
            }
        };

    };

    return self;

}(Contact || {}));
