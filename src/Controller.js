/**
 * Created by mdurieux on 09/10/15.
 */

var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Controller = function (model, view) {

        var init = function (model, view) {

            var contacts = model.get_contacts();

            for(var i=0; i < contacts.length; i++) {
                $("#button_" + contacts[i].id()).on("click", function(e) {
                    var e = e || window.event;
                    var target = e.target || e.srcElement;
                    var id_to_remove = target.id.split("_")[1];
                    model.remove_contact(id_to_remove);
                    alert("Contact supprimé.");
                    view.refresh();
                    init(model,view);
                });
            }


        };

        init(model, view);
    };

    return self;

}(Contact || {}));
