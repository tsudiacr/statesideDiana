var app = angular.module('dianaApp',['ngRoute']);

app.controller('BodyCtrl', ['$scope','$http', function($scope,$http){

	$scope.principalcontent = "templates/principal.html";
	$scope.footercontent = "templates/footer.html";


}])

app.controller('MenuCtrl', ['$scope','$http', function($scope,$http){
	console.log('Menu');
	$scope.tituloabout = 'Lorem Ipsum';
	$scope.desabout = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown';
	$scope.desmedia = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown';
	
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500);
			event.preventDefault();
		});
	});


	Math.easeInOutQuad = function (t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};
}])


app.controller('FooterCtrl', ['$scope','$http', function($scope,$http){
	$scope.copyright = 'Copyright 2009-2013 Cssauthor.com';
	$scope.JQuery ='JQuery';
	$scope.Magento ='Magento';
	$scope.Mobile ='Mobile';
	$scope.Pjotoshop = 'Photoshop';
	$scope.Plugins = 'Plugins';
	$scope.Resource = 'Resource';
	$scope.Templates = 'Templates';

	$scope.Drupal ='Drupal';     
	$scope.Fonts ='Fonts';     
	$scope.Freebies ='Freebies';     
	$scope.Greetings ='Greetings';     
	$scope.Icons ='Icons';    
	$scope.Illustrator ='Illustrator';     
	$scope.Inspiration ='Inspiration';    

	$scope.Freebies = 'Freebies';
	$scope.Greetings = 'Greetings';
	$scope.Icons = 'Icons';
	$scope.Illustrator = 'Illustrator';
	$scope.Inspiration = 'Inspiration';
	$scope.iPad = 'iPad';
	$scope.iPhone = 'iPhone';

	$scope.Android = 'Android';
	$scope.Apps = 'Apps';
	$scope.Articles = 'Articles';
	$scope.Backgrounds = 'Backgrounds';
	$scope.Blogger = 'Blogger';
	$scope.Books = 'Books';
	$scope.Coding = 'Coding';

}])

;




