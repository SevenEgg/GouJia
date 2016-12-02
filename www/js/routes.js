angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('page1', {
        url: '/home',
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
    })

    .state('page2', {
        url: '/contact',
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
    })

    .state('page3', {
        url: '/okHome',
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
    })

    .state('page4', {
        url: '/balcList',
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
    })

    .state('page5', {
        url: '/madeList',
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
    })

    .state('page6', {
        url: '/pay',
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
    })

    .state('page9', {
        url: '/loan',
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
    })

    .state('page7', {
        url: '/security',
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
    })

    .state('page8', {
        url: '/insurance',
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
    })

    $urlRouterProvider.otherwise('/home')



});
