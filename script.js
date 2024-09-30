window.onload = function() {
    //event listener for submission.
    document.getElementById("subscribeForm").addEventListener("submit", alertSubFunc);
}

// function for form submission
function alertSubFunc(event) {
    event.preventDefault();

    // get email val. 
    const email = document.getElementById('email').value;

    alert('Thank you for subscribing: ' + email);
}
