var MainController = function ($scope) {
    var obj = { hello: null, cels: null, hello2: null, fehr: null }

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2")
    }

    var toCalc = function (likes) {
        // formulae
        obj.hello = roundToTwo(($scope.likes - 32) * (5 / 9));
        obj.cels = "Degrees Celsius"
    }

    var toFehr = function (number2) {
        // formulae
        obj.hello2 = roundToTwo(($scope.number2 * (9 / 5) + 32));
        obj.fehr = "Degrees Farenheit"
    }

    $scope.toFehr = toFehr;
    $scope.toCalc = toCalc;
    $scope.obj = obj;
};
