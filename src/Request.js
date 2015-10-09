/**
 * Created by mdurieux on 06/10/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Request = function (contact) {
        var _contact = contact;

        this.get_contact = function () {
            return _contact;
        };
    };

    return self;

}(Contact || {}));