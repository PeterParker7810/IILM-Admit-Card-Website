function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (password === 'iilm@123' && username !== '') {
        const msg = document.querySelector('.message');
        msg.textContent = `Login Successful!`;
        msg.style.color = "green";

        const proceed = document.createElement('a');
        proceed.href = "index1.html";
        proceed.textContent = "Click here to proceed";
        proceed.style.marginTop = "0px";
        const parentDiv = document.querySelector('.admit-card-box');
        parentDiv.appendChild(proceed);
    } else {
        const msg = document.querySelector('.message');
        msg.textContent = "Invalid credentials. Please try again.";
        msg.style.color = "red";
    }
    console.log(`Username: ${username}, Password: ${password}`);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

document.getElementById('login-btn').addEventListener('click', login);