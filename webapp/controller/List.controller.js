sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
    function (Controller,JSONModel,MessageToast,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("appviewcatalog.controller.List", {
            onInit: function () {
            
            },
            onPressProduct: function(oEvent){
                let oItem= oEvent.getSource().getSelectedItem().getBindingContext("mProduct").getObject();
                MessageToast.show(oItem.Name)
            },
            onSearch: function(oEvent){
                let aFilters = [];
                let sQuery = oEvent.getSource().getValue();

                if(sQuery && sQuery.length > 0){
                    let oFilter = new Filter("Name", FilterOperator.Contains,sQuery);
                    aFilters.push(oFilter)
                }

                let oList = this.byId("listProducts");
                console.log("olist",oList)
                let oBinding = oList.getBinding("items")
                oBinding.filter(aFilters)
            }
        });
    });
