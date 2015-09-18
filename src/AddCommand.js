/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.AddCommand = function() {

        var added_contacts = [];

        this.execute = function(contact) {
            added_contacts.push(contact);
            Contact.Contacts.instance().add(contact);
        };

        this.undo = function() {
            var contact_to_delete = added_contacts.pop();
            Contact.Contacts.instance().remove(contact_to_delete.id());
        };

    };

    return self;

}(Contact || {}));