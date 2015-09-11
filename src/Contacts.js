/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var temp = {
        t: [],
        s: 0,

        clear: function () {
            temp.t = [];
            temp.s = 0;
        },

        size: function () {
            return temp.s;
        },

        add: function (contact) {
            temp.t.push(contact);
            temp.s++;
        },

        get: function (id) {
            var contact;
            var i;
            for (i = 0; i < temp.t.length; i++){
                if(temp.t[i].id() == id){
                    contact = temp.t[i];
                }
            }
            return contact;
        },

        getFromName: function (firstname, lastname) {
            var contact = [];
            var i;
            for (i = 0; i < temp.t.length; i++){
                if(temp.t[i].lastName() == lastname && temp.t[i].firstName() == firstname){
                     contact.push(temp.t[i]);
                }
            }
            return contact;
        },

        remove: function (id) {
            var contact = [];
            var i;

            for (i = 0; i < temp.t.length; i++){
                if(temp.t[i].id() !== id){
                    contact.push(temp.t[i]);
                }
            }
            temp.t = contact;
            temp.s = temp.t.length;
        },

    };

    self.Contacts = {

        instance : function () {
            return temp;
        }


    };

    return self;

}(Contact || {}));