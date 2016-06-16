
"use strict";
angular.
module("caffeApp").
component("sourcesList", {
    templateUrl: "javascripts/sources-list/sources-list.template.html",
    controller: function SourcesListController($http) {
        alert("hi");
        console.log("hello");
        var self = this;
        self.orderProp = "name";

        $http.get("sources/sources.json").then(function(response){
            self.sources = response.data;
        });
    }
});