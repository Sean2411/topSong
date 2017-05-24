/**
 * Created by lu1 on 5/23/17.
 */
app.controller('dialogContentCtrl', ['$scope', '$uibModalInstance', '$localStorage', 'getData', function ($scope, $uibModalInstance, $localStorage, getData) {

    $scope.ok = function () {
        var postData = {
            name: $scope.plName
        };
        console.log($localStorage.playlists);

        getData.saveList(postData, function (res) {
            $localStorage.playlists.push($scope.plName);
        }, function (err) {
            console.log(err);
        });
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.dialogPlaylists = $localStorage.playlists;

    $scope.addToList = function (index) {
        var _index = $localStorage._index;
        var query = {
            title: $scope.dialogPlaylists[index],
            track: $localStorage.searchResult[_index].name,
            artist: $localStorage.searchResult[_index].artists[0].name,
            album: $localStorage.searchResult[_index].album.name,
            note: "take a note",
            customImage: $localStorage.searchResult[_index].album.images[2].url

        };
        getData.saveSong(query, function (res) {
            console.log(res);
        }, function (err) {
            throw err;
        });
        $uibModalInstance.close();

    }

}]);