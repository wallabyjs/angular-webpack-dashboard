module.exports.config = /*@ngInject*/ function($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add(__dirname);

    $stateProvider.state('app.layout-sidebar.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title': {
                template: '{{ "FEATUREB.HEADING" | translate }}'
            },
            '': {
                template: '<div class="md-whiteframe-z1 white" layout-margin><feature-b></feature-b></div>'
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function(menuService) {

    menuService.addMenu({
        name: 'FEATUREB.HOME',
        icon: 'adjust',
        state: 'app.layout-sidebar.feature-b',
        type: 'link'
    });

};
