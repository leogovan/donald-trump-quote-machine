"use strict";var quoteTest;$(document).ready(function(){$(".quote-me").on("click",function(){var t="https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q="+($("#first-name").val()+" "+$("#last-name").val());$.ajax({url:t,dataType:"json",success:function(t){quoteTest=t.message,console.log("I am quoteTest INSIDE ajax call: "+quoteTest),$(".quote").html(quoteTest)}})})}),$(".twitter-share-button").click(function(){console.log(this),$(this).attr("href","https://twitter.com/intent/tweet?text="+quoteTest)});