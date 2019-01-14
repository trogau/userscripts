// ==UserScript==
// @name     	PubPeer Killfile
// @version  	0.1
// @namespace	https://github.com/trogau/userscripts/pubpeerKillfile
// @description	A simple killfile to remove posts from specific users from PubPeer
// @include		https://*pubpeer.com/*
// @grant		none
// ==/UserScript==

//

(function()
{
	var posts = document.querySelectorAll('.vertical-timeline-block');

	Array.prototype.forEach.call(posts, function(elements, index)
	{
		//console.log("LOG: " + elements.style.display);
		//console.log("LOG " + index + ": " + elements.innerHTML);

		// Replace nameToBanGoesHere with the name of the person you want to killfile.
		// Note that this is a regular expression, so if there are regexp characters in the name (e.g., ".")
		// you will need to escape them. For example, if the person's name is "Toasty K. McExample", the
		// replacement would be "Toasty K\. McExample".
		//
		// Being a regular expression you can add multiple names, separated by a "|" character.

		if (/(nameToBanGoesHere)/.test(elements.innerHTML))
		{
			//elements.style.height = "3px";
			elements.style.overflow = "auto";

			var body = elements.querySelector('.ibox-content');
			body.style.filter = 'blur(3px)';
		}
	});
}
)();
