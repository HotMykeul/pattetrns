/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {MR: 1, Melle: 2, Mme: 3};

    self.Contact = function(gender, firstname, lastname) {
        var _id;
        var _gender;
        var _firstname;
        var _lastname;
        var _mails;
        var _phones = [];
        var _tag;

        this.gender = function () {
            return _gender;
        };

        this.firstName = function () {
            return _firstname;
        };

        this.lastName = function () {
            return _lastname;
        };

        this.id = function() {
            return _id;
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

        this.get_tag = function (){
            return _tag;
        };

        this.set_phone = function(i, phone){
            _phones[i] = phone;
        };

        this.add_tag = function(tag){
            _tag = tag;
        };

        this.add_mail = function(mail) {
            _mails.push(mail);
        };

        this.mails = function() {
            return _mails;
        };

        this.addPhone = function(number) {
            _phones.push(number);
        };

        this.phones = function() {
            return _phones;
        };

        this.get_id = function() {
            return _id;
        };

        var init = function (gender, firstname, lastname) {
            _gender = gender;
            _firstname = firstname;
            _lastname = lastname;
            _id = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function(c){
              var r = Math.random()*16| 0, v = c == 'x' ? r  : (r&0x3|0x8);
                return v.toString(16);
            });
            _mails = [];
            _phones = [];
        };

        init(gender, firstname, lastname);
    };

    return self;

}(Contact || {}));