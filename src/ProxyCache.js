/**
 * Created by mdurieux on 11/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.ProxyCache = function(list_of_contacts_list) {

        var cache_contact = {};

        this.search = function(strategy){
            if(!this.inCache(strategy)){
                var i;
                for(i = 0; i < list_of_contacts_list.length; i++){
                    var contact = strategy.get(list_of_contacts_list[i]);
                    if(contact != null){
                        cache_contact[strategy.get_attribute()] = contact;
                        return contact;
                    }
                }
            }
            else {
                return cache_contact[strategy.get_attribute()];
            }
        };

        this.inCache = function(strategy){
            var phone_number = strategy.get_attribute();
            if (cache_contact.hasOwnProperty(phone_number)) {
                return true;
            }
            return false;
        };

    };

    return self;

}(Contact || {}));