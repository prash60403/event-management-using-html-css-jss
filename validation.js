function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var event = document.getElementById("event").value;

    if (name == "" || email == "" || phone == "" || event == "") {
        alert("All fields must be filled out");
        return false;
    }

    // Additional validation logic can be added here
    return true;
}
