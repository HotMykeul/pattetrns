/**
 * Created by mdurieux on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Handler = function (list_of_contacts, handler) {
        var _list_of_contacts;
        var _next_handler;

        this.handle = function (_request) {
            var request = request.contact();

        };

        this.processRequest = function(request){
            var contact = request.get_contact();
            if(list_of_contacts.length == 0){
                list_of_contacts.add(contact);
            }
            else if(list_of_contacts[0].get_tag() == contact.get_tag())(
                list_of_contacts.add(contact);
            )
            else if(_next_handler != null){
                _next_handler.processRequest(request);
            }
        };

        var init = function (list_of_contacts, next_handler) {
            _list_of_contacts = list_of_contacts;
            _next_handler = next_handler;
        };

        init(list_of_contacts, handler);
    };
    return self;
}(Contact || {}));
