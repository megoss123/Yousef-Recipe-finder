
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('forms');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('text-input').value;
        const password = document.getElementById('password-input').value;
        const showPassword = document.getElementById('show-password').checked;

        const user = {
            username: username,
            password: password,
            showPassword: showPassword
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.find(u => u.username === username && u.password === password);

        if (userExists) {
            localStorage.setItem('loggedInUser', JSON.stringify(userExists)); // Store logged-in user info

            if (userExists.isAdmin) {
                window.location.href = adminUrl;
            } else {
                window.location.href = userUrl;
            }
        } else {
            alert('You should sign up first');
        }
    });
});
