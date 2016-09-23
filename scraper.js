function getImages(subreddit) {
	$.getJSON("https://www.reddit.com/r/" + subreddit + "/.json?jsonp=?", 
	function(data) { 
	    $.each(data.data.children, function(i,item){
	    	//If image link is valid, run this function and append to page
	    	var appendImage = function(url, validUrl) {
	    		if (validUrl) {
	    			$("<img/>").attr("src", url).appendTo("#images");
	    		}
	    	}
	    	var image = new Image();
	    	var isValid = false;
	    	image.onerror = image.onabort = function() {
	    		appendImage(item.data.url, false);
	    	};
	    	image.onload = function() {
	    		appendImage(item.data.url, true);
	    	};
	    	image.src = item.data.url;
	    });
	});
}
window.onload = getImages("anime_irl");