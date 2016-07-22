/**
 * Created by Evgen on 20.07.2016.
 */
var movieShakerApp = angular.module("MovieShaker", ["ui.router", "angularSpinner"]);
    movieShakerApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // For any unmatched url, redirect to /toprated
        $urlRouterProvider.otherwise("/toprated");

        // Set up the states
        $stateProvider
            .state('toprated', {
                url: "/toprated",
                templateUrl: "/app/views/toprated.html",
                controller: function($scope, topRatedData) {
                    $scope.topRatedRecords = topRatedData.results;
                },
                resolve: {
                    topRatedData: function(dataService){
                        return dataService.sendRequest({
                            method: "GET",
                            url: "https://api.themoviedb.org/3/movie/top_rated"
                        });
                    }
                }
            })
            .state('moviedetails', {
                url: "/moviedetails",
                templateUrl: "/app/views/moviedetails.html",
                params:{ recordData: null },
                controller: function($scope, $stateParams) {
                    $scope.record = $stateParams.recordData;
                }
            })
            .state('popularactors', {
                url: "/popularactors",
                templateUrl: "/app/views/popularactors.html",
                controller: function($scope, popularActorsData) {
                    $scope.popularActorsRecords = popularActorsData.results;
                },
                resolve: {
                    popularActorsData: function(dataService){
                        return dataService.sendRequest({
                            method: "GET",
                            url: "http://api.themoviedb.org/3/person/popular"
                        });
                    }
                }
            })
            .state('actordetails', {
                url: "/actordetails",
                templateUrl: "/app/views/actordetails.html",
                params:{ personData: null },
                controller: function($scope, $stateParams) {
                    $scope.person = $stateParams.personData;
                }
            })
            .state('searchbyname', {
                url: "/searchbyname",
                templateUrl: "/app/views/searchbyname.html",
                controller: function($scope, $stateParams, dataService) {
                    $scope.query = "";
                    $scope.searchByName = function(){
                        dataService.sendRequest({
                            method: "GET",
                            url: "https://api.themoviedb.org/3/search/multi",
                            params: { query: $scope.query }
                        }).then(function(data){
                            $scope.results = data;
                        });
                    }
                }
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: true
        })
    });