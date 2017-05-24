/**
 * Created by lu1 on 5/24/17.
 */
app.controller('detailCtrl', ['$localStorage','$scope', '$routeParams', 'getData', function ($localStorage, $scope, $routeParams, getData) {
    var query = {
        title: $localStorage.playlists[$routeParams.playlistId]
    };

    getData.getSong(query, function (res) {
        $scope.queryResult = res.data.data;
        console.log(res.data.data);
    }, function (err) {
        throw err;
    });

    


}]);