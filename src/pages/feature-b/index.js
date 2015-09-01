var angular = require('angular');

module.exports = angular
    .module('app.feature-b', [
        require('../../components/menu-service'),
        require('../../components/counter-ui')
    ])
    .directive('scopeOverload', function() {
        return {
            require: '^uiUserInfo',
            restrict: 'A',
            link: function($scope, $element, attrs, ctrl) {

                if (attrs['scopeOverload'].length > 0) {
                    angular.extend(ctrl, angular.fromJson(attrs['scopeOverload'].replace(/'/g, '"')));
                } else {
                    ctrl.name = 'Donald, Demo';
                }

            }
        };
    })
    .config(require('./feature-b.route.js').config)
    .run(require('./feature-b.route.js').run)
    .name;

