sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
function (Controller,UIComponent) {
    "use strict";

    return Controller.extend("appviewcatalog.controller.Main", {
        onInit: function () {

        },
        onPressTile: function(oEvent){
            let viewRoute = oEvent.getSource().getBindingContext("mTile").getObject().view;

            let oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo(viewRoute)
        }
    });
});
