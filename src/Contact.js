/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR: 1, Melle: 2, Mme: 3};

    self.Contact = function (gender, firstname, lastname) {
        var _gender;
        var _firstname;
        var _lastname;

        this.gender = function () {
            return _gender;
        };
        this.firstName = function () {
            return _firstname;
        };
        this.lastName = function () {
            return _lastname;
        };

        this.set_gender = function (gender) {
            _gender = gender;
        };

        this.set_firstname = function (firstname) {
            _firstname = firstname;
        };

        this.set_lastname = function (lastname) {
            _lastname = lastname;
        };

        var process = function () {
        };

        var init = function (gender, firstname, lastname) {
            _gender = gender;
            _firstname = firstname;
            _lastname = lastname;
        };

        init(gender, firstname, lastname);
    };

    return self;

}(Contact || {}));