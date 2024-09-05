// Open the tab on click
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Set default tab to Login
document.getElementById("defaultOpen").click();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation
    if (username === 'admin' && password === 'password') {
        document.querySelector('.login-container').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        fetchSystemStatus();
    } else {
        alert('Invalid username or password');
    }
});

// Functionality to upload file (just a dummy)
function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    if (file) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${file.name}</td><td>Uploaded</td>`;
        document.getElementById('uploadedData').appendChild(newRow);
    } else {
        alert("Please select a file to upload.");
    }
}

// Dummy system status check (just placeholder text)
function fetchSystemStatus() {
    document.getElementById('systemStatus').innerText = 'System is running smoothly. CPU usage: 15%, Memory: 40%';
}

// Execute command functionality (just a dummy)
function executeCommand() {
    const command = document.getElementById('commandInput').value;
    document.getElementById('commandResult').innerText = `Command "${command}" executed successfully.`;
}

// Logout functionality
function logout() {
    document.getElementById('message').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
    openTab(null, 'Login');
}
