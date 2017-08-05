'use strict';

var quoteTest;

$(document).ready(function() {
	$(".quote-me").on("click", function(){
		
		// Collect the form inputs and create full name
		var firstName = $("#first-name").val();
		var lastName = $("#last-name").val();
		var wholeName = firstName + " " + lastName;

		// API call url
		var quoteUrl = "https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=" + wholeName;
		
		// AJAX call
		$.ajax({
			url: quoteUrl,
			dataType: 'json',
			success: function(data){
				quoteTest = data.message;
				console.log("I am quoteTest INSIDE ajax call: " + quoteTest);
				$(".quote").html(quoteTest);
				$(".quoted-person").html("<p>Donald Trump said this!</p>");
				//$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + data.message);
				//console.log("I am testTwitter: " + $(".twitter-share-button").attr("data-text"));
				//console.log("I am data.message: " + data.message);
			}
		});
	});
});


$(".twitter-share-button").click(function() {
	console.log(this);
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteTest);
});
