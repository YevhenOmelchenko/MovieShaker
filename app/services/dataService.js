/**
 * Created by Evgen on 21.07.2016.
 */
movieShakerApp.service("dataService", function($rootScope, $http){
        var apiKey = "?api_key=26ef474575e9ee1433333bb34ff0b878";

        this.sendRequest = function(config){
            $rootScope.showAjaxSpinner = true;
            config.url = config.url + apiKey;
            return $http(config).then(function(res){
                return res.data;
            }, function(err){
                alert("Houston, we have a problem " + err.status);
            }).finally(function(){
                $rootScope.showAjaxSpinner = false;
            });
        }
    });