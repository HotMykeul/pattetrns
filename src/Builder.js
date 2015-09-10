/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Builder = function() {
        var contact;

        this.createMinimalContact = function(gender, firstname, lastname) {
            contact = new Contact.Contact(gender, firstname, lastname);
            return contact;
        };

        this.createContactWithProfessionalMail = function(gender, firstname, lastname, mail) {
            contact = new Contact.Contact(gender, firstname, lastname);
            contact.add_mail(new Contact.Mail(mail,Contact.MailCategory.PRO));
            return contact;
        };

        this.createContactWithProfessionalMobile = function(gender, firstname, lastname, phone_number) {
            contact = new Contact.Contact(gender, firstname, lastname);
            contact.add_phone(new Contact.Phone(phone_number, Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));
            return contact;
        };

    };

    return self;

}(Contact || {}));