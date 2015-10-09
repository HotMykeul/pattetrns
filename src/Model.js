/**
 * Created by mdurieux on 09/10/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Model = function () {
        var singleton;

        this.get_contacts = function () {
            return singleton.get_contact_list();
        };

        var init = function () {
            singleton = Contact.Contacts.instance();
        };

        init();
    };

    return self;

}(Contact || {}));