const app = angular.module('app', [])

app.directive('bgColor', function () {
    return {
        controller: function ($scope, $element, $attrs) {
            this.bgColor = $attrs.bgColor
        }
    }
})

app.directive('container', function () {
    return {
        restrict: 'E',
        require: ['?bgColor'],
        link: {
            pre: function preLink($scope, $element, $attrs, ctrls) {
                const bgColorCtrl = ctrls[0]
                $scope.config = {
                    bgColor: bgColorCtrl && bgColorCtrl.bgColor
                }
            }
        }
    }
})

app.directive('row', function () {
    return {
        restrict: 'A',
        template: '<div>Hello, PreLink</div>',
        link: function ($scope, $element) {
            const bgColor = $scope.config.bgColor
            if (bgColor) {
                $element.css('background-color', bgColor)
            }
        }
    }
})
