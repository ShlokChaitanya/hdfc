document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the form from submitting
    const passwordid = document.getElementById('passwordid').value;

    if (passwordid === 'Apex@7390') {
        window.location.href = '/entry';
    } else {
        alert('Incorrect Password');
    }
}); 