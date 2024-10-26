document.querySelector('.login-btn').addEventListener('click', () => {
    const username = document.getElementById('UserNameId').value; 
    
    if (username === '173712709') {
        window.location.href = '/login/';
    }
})