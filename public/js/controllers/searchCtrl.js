/**
 * Created by lu1 on 5/21/17.
 */
app.controller('searchCtrl', ['$scope', 'Spotify', '$uibModal', '$localStorage', function ($scope, Spotify, $uibModal, $localStorage) {
    $scope.getMusic = function(){
        $scope.err = '';
        $scope.searchResult = '';
        var type = $scope.typeSelector;
        var content = $scope.searchContent;
        console.log(type);
        console.log(content);
        Spotify.search(content, type).then(function (data) {
            if (type === 'track') {
                $scope.searchResult = data.data.tracks.items;
                $localStorage.searchResult = $scope.searchResult;
                console.log(data.data.tracks.items);
            }
            if (type === 'artist'){

            }

        }, function (err) {
            $scope.err = 'Sorry, no result can be found. Please search again.';
            console.log(err);

        })
    };

    $scope.openDialog = function(index){
        $localStorage._index = index;
        $uibModal.open({
            templateUrl: 'views/pop_up_add_to_list.html',
            controller: 'dialogContentCtrl'
        }).result.then(
            function () {

            },
            function () {

            }
        );
    }


}]);