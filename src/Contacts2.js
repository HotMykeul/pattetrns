/**
 * Created by mdurieux on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Contacts2 = function() {
        var contact_list = [];
        var size = 0;

        this.clear =  function () {
            contact_list = [];
            size = 0;
        };

        this.size = function () {
            return contact_list.length;
        };

        this.add = function (contact) {
            contact_list.push(contact);
            size++;
        };

        this.get = function (id) {
            var contact;
            var i;
            for (i = 0; i < contact_list.length; i++){
                if(contact_list[i].id() == id){
                    contact = contact_list[i];
                }
            }
            return contact;
        };

        this.getFromName = function (firstname, lastname) {
            var contacts = [];
            var i;
            for (i = 0; i < contact_list.length; i++){
                if(contact_list[i].lastName() == lastname && contact_list[i].firstName() == firstname){
                     contacts.push(contact_list[i]);
                }
            }
            return contacts;
        };

        this.remove = function (id) {
            var contact = [];
            var i;

            for (i = 0; i < contact_list.length; i++){
                if(contact_list[i].id() !== id){
                    contact.push(contact_list[i]);
                }
            }
            contact_list = contact;
            size = contact_list.length;
        };

        this.search = function (strategy) {
            return strategy.get(this);
        };

        this.get_contact_list = function (){
            return contact_list;
        };

        this.change = function(strategy) {
            strategy.change(this);
        };
    };

    return self;

}(Contact || {}));