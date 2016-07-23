/**
 * Created by Evgen on 23.07.2016.
 */
/*TODO:temporary disabled*/
/*
var TopRatedController = function ($http, $state, dataService) {
    var _self = this;

    this.movies = null;

    this.init = function () {
        alert("controller init");
        dataService.getMovies().then(function (res) {
            _self.movies = res.data;
        }, function (err) {
            // error handling
        }).finally(function(){
            $rootScope.showAjaxSpinner = false;
        });
    };
    alert("controller before init");
    this.init();
};
alert("controller before initgf");
TopRatedController.$inject = ['$http', '$state', 'dataService'];

movieShakerApp.controller('TopRatedController', TopRatedController);*/
