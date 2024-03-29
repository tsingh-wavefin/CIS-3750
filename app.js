(function () {

angular.module('app',['ui.router']);

angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/login');

    // Set up UI states
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.view.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.view.html'
        })

        .state('contact-form', {
            url: '/contact/form',
            templateUrl: 'contact/contact-form.view.html'
        })

        .state('error', {
            url: '/error',
            urlTemplate: 'app-content/error.view.html'
        })

        .state('edit', {
            url: '/edit',
            templateUrl: 'edit/edit.view.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'login/login.view.html'
        })

        .state('resource', {
            url: '/resource',
            templateUrl: 'resource/resource.view.html'
        })

        .state('survey', {
            url: '/survey',
            templateUrl: 'survey/survey.view.html'
        })

        .state('samplesurvey', {
            url: '/samplesurvey',
            templateUrl: 'survey/surveysample.view.html'
        })

        .state('pests', {
            url: '/pests',
            templateUrl: 'survey/pests.view.html'
        })

        .state('crops', {
            url: '/crops',
            templateUrl: 'survey/cropsurvey.view.html'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'search/search.view.html'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'signup/signup1.view.html'
        });
}


})();
