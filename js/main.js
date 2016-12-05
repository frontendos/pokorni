document.addEventListener('DOMContentLoaded', function() {

    var form        = $('#Form'),
        firstName   = form.find('#firstName'),
        lastName    = form.find('#lastName'),
        email       = form.find('#email'),
        honepotElem = form.find('#h1dd3nF13ld'),
        button      = form.find('#Send');

    // Submit form
    form.on('submit', function(e) {
        e.preventDefault();

        // Cache form inputs
        var firstNameValue  = firstName.val(),
            lastNameValue   = lastName.val(),
            emailValue      = email.val(),
            honeyValue      = honepotElem.val();

        // If hidden element has value, return  
        if ( honeyValue !== undefined || honeyValue !== '' ) {
            return;
        }

        // Check is element is empty
        if ( firstNameValue === undefined || firstNameValue === '' ) {
            firstName.addClass('hasError');
        }

        if ( lastNameValue === undefined || lastNameValue === '' ) {
            flastName.addClass('hasError');
        }

        if ( emailValue === undefined || emailValue === '' ) {
            email.addClass('hasError');
        }

    });

}, false);
