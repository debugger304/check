// home.js

document.getElementById("logoutBtn").addEventListener("click", function() {

    // remove the user key from local storage
    localStorage.removeItem('IsLoggedIn');
    // redirect to the sign-in page 
    window.location.href = 'signIn.html'; 

})
