youRadioApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/home.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html"
    })
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html"
    })
    .state('channels', {
      url: "/channels",
      templateUrl: "templates/channels.html"
    })
    .state('programs', {
      url: "/programs/:channelId",
      templateUrl: "templates/programs.html"
    })
    .state('messageprograms', {
      url: "/messageprograms/:programId",
      templateUrl: "templates/messageprograms.html"
    });
});