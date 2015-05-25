angular
    .module('amigo-secreto', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })

            .when('/usuario', {
                templateUrl: 'views/novoUsuario.html',
                controller: 'UsuarioController'
            })

            .when('/usuario/:id', {
                templateUrl: 'views/novoUsuario.html',
                controller: 'UsuarioController'
            })

            .when('/sorteio', {
                templateUrl: 'views/sorteio.html',
                controller: 'SorteioController'
            })
			
			.when('/sobre', {
                templateUrl: 'views/sobre.html',
                controller: 'UsuarioController'
            })
			.when('/telefone', {
                templateUrl: 'views/telefone.html',
                controller: 'TelefoneController'
            })

            .otherwise({
                redirectTo: '/'
            });

    });

var $SERVICES_CONTEXT = "http://localhost:8080/api/";