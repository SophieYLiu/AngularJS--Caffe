/**
 * Created by tjgrst on 6/16/2016.
 */
"use strict";
angular.
module("caffeApp").
component("coffeeList", {
    template:
            '<div ng-repeat="coffee in $ctrl.coffees">' +
                '<span>{{coffee.name}}</span>' +
                '<p>{{coffee.description}}</p>' +
            '</div>',
    controller: function CoffeeListController() {
        this.coffees = [
            {
                name: "Java Time",
                description: "Java Time is the creme de la creme of Indonesian coffees."
            }, {
                name: "Express Espresso",
                description: "Express will give you he jolt you need at 2pm."
            },{
                name: "Morning Jo",
                description: "One of our most popular morning brews."
            }
        ];
    }
});