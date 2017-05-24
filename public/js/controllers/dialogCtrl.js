/**
 * Created by lu1 on 5/22/17.
 */
app.controller('dialogCtrl', ['$scope', '$uibModal', '$localStorage', 'getData', 'shareData', function($scope, $uibModal, $localStorage, getData, shareData){
    getData.getAllList(function (res) {
        $localStorage.playlists = res.data.data
        $scope.playlists = res.data.data;
    }, function (err) {
        console.log(err);
    });
    $scope.playlists = $localStorage.playlists;
    $scope.createPL = function() {
        $uibModal.open({
            templateUrl: 'views/pop_up_create_list.html',
            controller: 'dialogContentCtrl'
        })
            .result.then(
            function () {
                console.log($scope.playlists);
            },
            function () {

            }
        );
    };

    $scope.deletePL = function (index) {
        $scope.playlists.splice($scope.playlists.indexOf($scope.playlists[index]), 1);

        var deletedata = {name: $scope.playlists[index]};
        console.log(deletedata);

        getData.deleteList(deletedata, function (res) {
            console.log(res.data);
        }, function (err) {
            console.log(err);
        });



    }
}]);