//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    // document is now ready for manipulation
	// start by populating states dropdown
	populate_states();
	
	// if they submit form, validate that the
	// zip field is filled if the address has
	// anything in line 1.
	$('.signup-form').submit(function(){
		// sign-up form submitted
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		
		if(addr1Value.length > 0) {
			var zipInput = signupForm.find('input[name="zip"]');
			var zipValue = zipInput.val();
			if(!zipValue.length > 0) {
				alert('The required ZIP code field is empty');
				return false;
			}
			return true;
		}
	}); // signup submit click
	
	// redirect to google.com if they cancel
	$('.cancel-signup').click(function(){
		window.location = 'http://www.google.com';
	}); // cancel-signup click
	
	// check to see if we need to show 'refer-other' 
	// element based on their refer answer
	$('select[name="refer"]').change(function(){
    //get a ref to the refer select
    //add the refer-other input
    var referSelect = $(this);
    var otherInput = $('[name="refer-other"]');

    //if the refer select's value in lower case is equal to "other"...
    if ('other' === referSelect.val().toLowerCase()) {
        //remove the disabled attribute from the
        //refer-other input, show it, and set focus to it
        otherInput.removeAttr('disabled');
        otherInput.show();
        otherInput.focus()
    }
    else {
        //otherwise, make the refer-other input disabled
        //and hide it
        otherInput.attr('disabled', true);
        otherInput.hide();
    }
}); //refer change function
}); //on document ready 

// populates the drop-down state selector 
// using an array from us-states.js
function populate_states() {
	var stateSelect = $('select[name="state"]');
	
	var index;
	var state;
	for(index = 0; index < usStates.length; ++index) {
		// create new option element, 
		// populate, and append to select element
		state = usStates[index];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}
}