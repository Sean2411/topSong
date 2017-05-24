/**
 * Created by lu1 on 5/23/17.
 */
app.factory('getData', ['$http', '$localStorage', function($http, $localStorage){
    var baseUrl = "http://localhost:3001";

    return {
        saveSong: function(data, success, error) {
            $http.post(baseUrl + '/addSong', data).then(success, error)
        },
        getSong: function(data, success, error) {
            $http.post(baseUrl + '/getSong', data).then(success, error)

        },
        saveList: function(data, success, error) {
            $http.post(baseUrl + '/addPlaylist', data).then(success, error)

        },
        getAllList: function(success, error) {
            $http.get(baseUrl + '/addPlaylist').then(success, error)

        },
        deleteList: function(data, success, error) {
            $http.delete(baseUrl + '/delPlaylist', data).then(success, error);
        }


    };
}
]);

