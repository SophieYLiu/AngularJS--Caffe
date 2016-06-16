/**
 * Created by tjgrst on 6/16/2016.
 */
"use strict";
angular.
module("caffeApp").
component("coffeeList", {
    templateUrl: "javascripts/coffee-list/coffee-list.template.html",
    controller: function CoffeeListController() {
        this.coffees = [
            {
                name: "Java Time",
                description: "Java Time is the creme de la creme of Indonesian coffees.",
                roast: "Medium"
            }, {
                name: "Express Espresso",
                description: "Express will give you he jolt you need at 2pm.",
                roast: "Dark"
            },{
                name: "Morning Jo",
                description: "One of our most popular morning brews.",
                roast: "Light"
            }, {
                name: "Exquisite Roast",
                description: "Java Time is the creme de la creme of Indonesian coffees.",
                roast: "Medium"
            }, {
                name: "Guatemalan",
                description: "Express will give you he jolt you need at 2pm.",
                roast: "Light"
            },{
                name: "Madagascar",
                description: "One of our most popular morning brews.",
                roast: "Dark"
            }
        ];
    }
});