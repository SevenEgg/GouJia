angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
    })

    .state('okHome', {
        url: '/okHome',
        templateUrl: 'templates/okHome.html',
        controller: 'okHomeCtrl'
    })

    .state('balcList', {
        url: '/balcList',
        templateUrl: 'templates/balcList.html',
        controller: 'balcListCtrl'
    })

    .state('madeList', {
        url: '/madeList',
        templateUrl: 'templates/madeList.html',
        controller: 'madeListCtrl'
    })

    .state('pay', {
        url: '/pay',
        templateUrl: 'templates/pay.html',
        controller: 'payCtrl'
    })

    .state('loan', {
        url: '/loan',
        templateUrl: 'templates/loan.html',
        controller: 'loanCtrl'
    })

    .state('security', {
        url: '/security',
        templateUrl: 'templates/security.html',
        controller: 'securityCtrl'
    })

    .state('insurance', {
        url: '/insurance',
        templateUrl: 'templates/insurance.html',
        controller: 'insuranceCtrl'
    })

    $urlRouterProvider.otherwise('/home')



});
