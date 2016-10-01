PreguntadosApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/initial.html"
    })
    .state('preguntas', {
      url: "/preguntas/:Categoria",
      templateUrl: "templates/preguntas.html"
    });
});