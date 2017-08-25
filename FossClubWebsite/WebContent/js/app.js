var website = angular.module('website', []);
website.controller('ContentListController', function contentListController($scope){
$scope.contents = [
{
    description: 'Free and Open-Source software(FOSS) is computer software that can be classified as both free software and open-source software. That is anyone is freely licensed to use, copy, study, and change the software. Foss Club includes mentors who guide you in every step towards your success. Come join the club, explore things, interact with people, get exposed to the professional world',
		image: '1.jpeg'
}
];
});