/* ======= Hidden Bar Script ======= */

$(document).ready(function() {

	$(".username").focus(function() {
		$(".user-icon").css("left","-47px");
	});
	$(".username").blur(function() {
		$(".user-icon").css("left","0px");
	});
		
	
	$(".secondname").focus(function() {
		$(".secondname-icon").css("left","-47px");
	});

	$(".secondname").blur(function() {
		$(".secondname-icon").css("left","0px");
	});

	
	$(".position").focus(function() {
		$(".position-icon").css("left","-47px");
	});

	$(".position").blur(function() {
		$(".position-icon").css("left","0px");
	});


	$(".email").focus(function() {
		$(".email-icon").css("left","-47px");
	});

	$(".email").blur(function() {
		$(".email-icon").css("left","0px");
	});


	$(".login").focus(function() {
		$(".login-icon").css("left","-47px");
	});

	$(".login").blur(function() {
		$(".login-icon").css("left","0px");
	});


	$(".pass").focus(function() {
		$(".pass-icon").css("left","-47px");
	});

	$(".pass").blur(function() {
		$(".pass-icon").css("left","0px");
	});


	$(".confpass").focus(function() {
		$(".confpass-icon").css("left","-47px");
	});

	$(".confpass").blur(function() {
		$(".confpass-icon").css("left","0px");
	});


	$(".companyname").focus(function() {
		$(".companyname-icon").css("left","-47px");
	});

	$(".companyname").blur(function() {
		$(".companyname-icon").css("left","0px");
	});


	$(".tel").focus(function() {
		$(".tel-icon").css("left","-47px");
	});

	$(".tel").blur(function() {
		$(".tel-icon").css("left","0px");
	});


	$(".site").focus(function() {
		$(".site-icon").css("left","-47px");
	});

	$(".site").blur(function() {
		$(".site-icon").css("left","0px");
	});


	$(".credit").focus(function() {
		$(".credit-icon").css("left","-47px");
		$(".creditdate, .cvv").show();
	});

	$(".credit").blur(function() {
		$(".credit-icon").css("left","0px");
	});


	$(".creditdate").focus(function() {
		$(".credit_time-icon").css("left","-47px");
	});

	$(".creditdate").blur(function() {
		$(".credit_time-icon").css("left","0px");
	});


	$(".cvv").focus(function() {
		$(".credit_cvv-icon").css("left","-47px");
	});

	$(".cvv").blur(function() {
		$(".credit_cvv-icon").css("left","0px");
	});


});



/* ====== Check Valid Confirm Password ======= */

window.onload = function () {
    document.getElementById("pass").onchange = validatePassword;
    document.getElementById("confpass").onchange = validatePassword;
}
function validatePassword(){
	var pass2=document.getElementById("pass").value;
	var pass1=document.getElementById("confpass").value;
	if (pass1!=pass2)
    document.getElementById("confpass").setCustomValidity("Passwords Don't Match");
	else
    document.getElementById("confpass").setCustomValidity('');
}


/* ====== Check Valid Space of Credit Number ======= */

var cc = loginform.creditcard;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

/* ====== Check Valid Telephone Number ======= */

$(document).ready(function() {
    $(".tel").inputmask("+38(999)999-99-99");
});



/* ====== Check Valid Email ======= */

var domains = ['hotmail.com', 'gmail.com', 
								'aol.com', 'yahoo.com',
								'mail.ru'];
var topLevelDomains = ["com", "net", "org", "ru"];

$('#email').on('blur', function(event) {
  console.log("event ", event);
  console.log("this ", $(this));
  $(this).mailcheck({
    domains: domains,                       
    topLevelDomains: topLevelDomains,       
    suggested: function(element, suggestion) {
      // callback code
      console.log("suggestion ", suggestion.full);
      $('#suggestion').html("Ви мали на увазі <b><i>" + suggestion.full + "</b></i>?");
      $("#suggestion").fadeOut(5000);
    },
  });
});


/* ====== Bootstrap Popover ======= */

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    	placement : 'right',
   		trigger: 'focus'
    });   
});
