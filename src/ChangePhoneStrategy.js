/**
 * Created by mdurieux on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.ChangePhoneStrategy = function(firstname, lastname, phone_remove, phone_replace) {

        this.change = function(contacts) {
            var contact = contacts.getFromName(firstname, lastname);
            var i;
            var phones_numbers = contact.phones();
            for(i = 0; i < phones_numbers.length; i++){
                if(phones_numbers[i] == phone_remove){
                    contact.change_phone(i,phone_replace);
                }
            }
        };

    };

    return self;

}(Contact || {}));