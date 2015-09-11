/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromMailSearchStrategy = function(mail) {

        this.get = function(contacts) {
            var contacts_list = contacts.get_contact_list();
            var i;
            for(i = 0; i < contacts_list.length; i++){
                var mails_list_of_contact = contacts_list[i].mails();
                var j;

                for(j = 0; j < mails_list_of_contact.length; j++) {
                    if (mails_list_of_contact[j].address() == mail) {
                        return contacts_list[i];
                    }
                }
            }
            return null;
        };
    };

    return self;

}(Contact || {}));