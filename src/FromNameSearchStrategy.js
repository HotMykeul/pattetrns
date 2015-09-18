/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromNameSearchStrategy = function(firstname, lastname) {

        this.get = function(contacts) {
            var contacts_list = contacts.get_contact_list();
            var i;
            for(i = 0; i < contacts_list.length; i++) {
                if (contacts_list[i].firstName() == firstname && contacts_list[i].lastName() == lastname) {
                    return contacts_list[i];
                }
            }
            return null;
        };
    };

    return self;

}(Contact || {}));