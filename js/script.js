
$(document).ready(function(){
	
/* -------------------------------------------------- Script for Home Page ----------------------------------------*/
	if ($('body').hasClass('homePage') || $('body').hasClass('buyPage') || $('body').hasClass('sellPage')){
		$('.signInBtn').click(function(){
			$('.signInBox').toggle('medium');
		});
	}
/* -------------------------------------------------- Script for Sign Up Page ----------------------------------------*/

    if ($('body').hasClass('signUpPage')){
        $('.phoneNumber').keydown(function(e){
           if(e.keyCode > 57)
                return false;
            });
         $('.phoneNumber').keyup(function(e){
            if(!((e.keyCode < 48 || e.keyCode > 57)) && ($(this).hasClass('goToNext') && $(this).val().length == ($(this)[0].getAttribute('maxlength'))))
                   $(this).next().focus();
         });
		 $('.email').blur(function(e){
			 if(validateEmail($(this).val()) == false)
			 $(".emailError").show();
			 else
			 $(".emailError").hide();
		 });
    }
	
/* -------------------------------------------------- Script for Buy Page ----------------------------------------*/
	if ($('body').hasClass('buyPage')){
		$(window).scroll(function(){
			if($(window).scrollTop() >= 148)
				$('.categories').addClass('fixedcategories');
			else if($(window).scrollTop() < 148)
				$('.categories').removeClass('fixedcategories');
		});
		$('.buyBodyContent .sortByUserRating button').click(function(){
			$(this).addClass('selectedOption');
			$(this).siblings().removeClass('selectedOption');
		});
		
		
		$('.buyButton').click(function(){
			document.location.href = "postDetails.html";
		});
		
		var allPosts = $('.sellerPostWrapper').html();
		
		$('.searchInput').keyup(function(){
			var inputVal = $(this).val().toLowerCase();
			$('.sellerPostWrapper').empty().append(allPosts);
			if(inputVal != "")
			{
				$('.postHeading').each(function(){
					var postHeading = $(this).html().toLowerCase();
					
					if(postHeading.search(inputVal) == -1)
						$(this).parent().parent().remove();
				});
			}
			if($('.sellerPostWrapper .postHeading').length == 0)
			{
				$('.sellerPostWrapper').html('<div class="noRecordsFound">No Items Found.</div>');
			}
		});
	}
/* -------------------------------------------------- Script for Sell Page ----------------------------------------*/	
	if ($('body').hasClass('sellPage')){
		$('.itemName').focus();
	}
	
	
});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateSignUpForm(){
	if($('.emailError').style('display')=='block')
	return false;
}