function handleReset() {
    // Reset the input fields to empty
    document.getElementById('fullName').value = ''; 
    document.getElementById('collegeName').value = '';
}

function wellcome() {
    let fullName = document.getElementById("fullName").value;
    let collegeName = document.getElementById("collegeName").value;

    // Check if the fields are not empty before storing
    if (fullName.trim() === "" || collegeName.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Store the data in localStorage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("collegeName", collegeName);

    // Redirect to the welcome page
    window.open("wellcome.html", "_blank");
}
