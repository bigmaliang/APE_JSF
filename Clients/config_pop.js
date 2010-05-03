/***
 * APE JSF Setup
 */
APE.Config.baseUrl = 'http://js.bmoon.com/ape'; //APE JSF 
APE.Config.domain = 'bmoon.com'; //Your domain, must be the same than the domain in aped.conf of your server
APE.Config.server = 'push.bmoon.com'; //APE server URL

(function(){
	for (var i = 0; i < arguments.length; i++)
		APE.Config.scripts.push(APE.Config.baseUrl + '/Build/' + arguments[i] + '.js');
})('apeCore');
