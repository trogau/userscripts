// ==UserScript==
// @namespace     https://www.ausgamers.com
// @name          AusGamersExt
// @description   AusGamers Extensions
// @include       https://*ausgamers.com/*
// @version  1
// @grant    none
// ==/UserScript==
//
(function()
{
	var posts = document.querySelectorAll('.Thread');
	Array.prototype.forEach.call(posts, function(elements, index) 
	{
		// Case sensitive list of user nicknames that you wish to hide, separated by pipe characters (|)
    var ignoreNames = "MrToxicPerson|TrainwreckPoster";
    
    var re = new RegExp("<div class=\"nick\">("+ignoreNames+")<\/div>", "g");
    
    if (re.test(elements.innerHTML))  
		{
			elements.style.height = "2px";
			elements.style.overflow = "auto";
			
			var body = elements.querySelector('.RightSide');
			body.style.filter = 'blur(3px)';
		}	
	});
}
)();
