
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'templates/principal.html'
    })
    .when('/home',{
        templateUrl: 'templates/home.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
