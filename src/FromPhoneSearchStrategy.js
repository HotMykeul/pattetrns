/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.FromPhoneSearchStrategy = function(phone_number) {

        var _phone_number = phone_number;

        this.get = function(contacts) {
            var contacts_list = contacts.get_contact_list();
            var i;
            for(i = 0; i < contacts_list.length; i++){
                var phones_list_of_contact = contacts_list[i].phones();
                var j;

                for(j = 0; j < phones_list_of_contact.length; j++) {
                    if (phones_list_of_contact[j].number() == phone_number) {
                        return contacts_list[i];
                    }
                }
            }
            return null;
        };

        this.get_attribute = function(){
            return _phone_number;
        };
    };

    return self;

}(Contact || {}));