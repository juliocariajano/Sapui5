sap.ui.define([
    "./Base.controller",
],
    function (Controller,) {
        "use strict";

        return Controller.extend("appviewcatalog.controller.Form", {
            onInit: function () {
            
            },
          getValues: function(){
            let productId = this.getById("txtProductId").getValue();
            let mainCategory = this.getById("cboMainCategory").getValue();
            let category = this.getById("cboCategory").getValue();
            let name = this.getById("txtName").getValue();
            let description = this.getById("txtDescription").getValue();
            let supplier = this.getById("txtSupplier").getValue();
            let weightMeasure = this.getById("txtWeightMeasure").getValue();
            let weightUnit = this.getById("rbgWeightUnit").getSelectIndex() == 0 ? "RG" : "LB";
            let dateOfSale = this.getById("dtSale").getValue();
            let quantity = this.getById("txtQuantity").getValue();
            let currencyCode = this.getById("rbgCurrency").getSelectIndex() == 0 ? "EUR" : "USD";
            let price = this.getById("txtPrice").getValue();
            debugger;
          }
        });
    });
