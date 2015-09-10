/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.MailCategory = {PERSO: 1, PRO: 2};

    self.Mail = function(mail, mail_category) {
        var _mail;
        var _mail_category;

        this.address = function () {
            return _mail;
        };
        this.category = function () {
            return _mail_category;
        };

        var init = function (mail, mail_category) {
            _mail = mail;
            _mail_category = mail_category;
        };

        init(mail, mail_category);

    };
    
    return self;

}(Contact || {}));