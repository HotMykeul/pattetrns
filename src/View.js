/**
 * Created by mdurieux on 09/10/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.View = function (model) {

        var init = function (model) {

            /* Hearder Tests */
            var tab = $("<table id='tabContacts' />");
            var line = $("<tr />");

            $("<th/>", { id: "cellFirstName", html: "First name" }).appendTo(line);
            $("<th/>", { id: "cellLastName", html: "Last name" }).appendTo(line);
            $("<th/>", { id: "cellPhones", html: "Phones" }).appendTo(line);
            $("<th/>", { id: "cellMails", html: "Mails" }).appendTo(line);
            $("<th/>", { id: "cellTags", html: "Tags" }).appendTo(line);
            $("<th/>", { id: "cellActions", html: "Actions" }).appendTo(line);

            line.appendTo(tab);
            tab.appendTo($("#contacts"));

            /* List Tests & First Entry Tests */
            var contacts = model.get_contacts();

            var i;
            for(i = 0; i < contacts.length; i++){
                var line2 = $("<tr />",  { id: "x" + contacts[i].id() });

                $("<td/>", { id: "cellFirstName", html: contacts[i].firstName() }).appendTo(line2);
                $("<td/>", { id: "cellLastName", html: contacts[i].lastName() }).appendTo(line2);
                var phones = contacts[i].phones();
                var j;
                var phonestring = "";
                for(j = 0; j < phones.length; j++){
                    var category = "";
                    var type ="";
                    switch(phones[j].category()) {
                        case 1:
                            category = "PERSO";
                            break;
                        case 2:
                            category ="PRO";
                            break;
                    }

                    switch(phones[j].type()) {
                        case 1:
                            type = "MOBILE";
                            break;
                        case 2:
                            type ="PHONE";
                            break;
                    }
                    if(j>0) phonestring += "/";
                    phonestring += phones[j].number() + "[" + category + "][" + type + "]";
                }
                $("<td/>", { id: "cellPhones", html: phonestring  }).appendTo(line2);

                var mails = contacts[i].mails();
                var k;
                var mailstring = "";
                for(k = 0; k < mails.length; k++){
                    var category = "";
                    switch(mails[k].category()) {
                        case 1:
                            category = "PERSO";
                            break;
                        case 2:
                            category ="PRO";
                            break;
                    }
                    if(k>0) mailstring += "/";
                    mailstring += mails[k].address() + "[" + category + "]";
                }
                $("<td/>", { id: "cellMails", html: mailstring }).appendTo(line2);
                $("<td/>", { id: "cellTags", html: contacts[i].get_tag() }).appendTo(line2);
                var button = $("<button/>", { id : "button_" + contacts[i].id(), html: "Supprimer"});
                $("<td/>", { id: "cellActions", html : button}).appendTo(line2);
                line2.appendTo(tab);
            };
        };

        init(model);
    };

    return self;

}(Contact || {}));