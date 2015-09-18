/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.RemoveCommand = function() {

        var removed_contacts = [];

        this.execute = function(contact_id) {
            var contact_to_remove = Contact.Contacts.instance().get(contact_id);
            removed_contacts.push(contact_to_remove);
            Contact.Contacts.instance().remove(contact_id);
        };

        this.undo = function() {
            var contact_to_restore = removed_contacts.pop();
            Contact.Contacts.instance().add(contact_to_restore);
        };

    };

    return self;

}(Contact || {}));