/**
 * Created by lu1 on 5/24/17.
 */
app.factory('shareData', ['$http', 'getData', function ($http, getData) {
    var shareddata = {};
    getData.getAllList(function (res) {
        shareddata = res;
    }, function (err) {
        console.log(err);
    });
    return {
        data: "hello"
    };
}]);