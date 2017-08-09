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
			}
		});
	});
});

$(".twitter-share-button").click(function() {
	console.log(this);
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteTest);
});

var slider = document.querySelector(".tweet-section");
var button = document.querySelector(".quote-me");

button.addEventListener("click", function(e) {
	console.log("I am opening");
	slider.classList.toggle("open");
	e.stopPropagation();
});
