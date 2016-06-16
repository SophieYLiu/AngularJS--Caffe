/**
 * Created by tjgrst on 6/16/2016.
 */
"use strict";
angular.
module("caffeApp").
component("coffeeList", {
    templateUrl: "javascripts/coffee-list/coffee-list.template.html",
    controller: function CoffeeListController($http) {
        var self = this;
        self.orderProp = "name";

        $http.get("coffees/coffees.json").then(function(response){
            self.coffees = response.data;
        });
    }
});