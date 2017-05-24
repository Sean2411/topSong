/**
 * Created by lu1 on 5/21/17.
 */
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');
    $routeProvider.
    when('/search', {
            templateUrl: './views/search.html',
            controller: 'searchCtrl'
    }).
    when('/', {
            templateUrl: './views/playlists.html',
            controller: 'dialogCtrl'
    }).
    when('/content/:playlistId', {
        templateUrl: './views/playlist_detail.html',
        controller: 'detailCtrl'
    }).
        otherwise({
            redirectTo: '/'
    });

}]);