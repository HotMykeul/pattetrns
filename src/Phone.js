/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.PhoneCategory = {PERSO: 1, PRO: 2};
    self.PhoneType = {MOBILE: 1, PHONE: 2};

    self.Phone = function(phone_number, phone_category, phone_type) {
        var _phone_number;
        var _phone_category;
        var _phone_type;

        this.number = function () {
            return _phone_number;
        };
        this.category = function () {
            return _phone_category;
        };
        this.type = function () {
            return _phone_type;
        };

        var init = function (phone_number, phone_category, phone_type) {
            _phone_number = phone_number;
            _phone_category = phone_category;
            _phone_type = phone_type;
        };

        init(phone_number, phone_category, phone_type);

    };

    return self;

}(Contact || {}));