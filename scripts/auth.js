async function login(usernameOrEmail, password) {
    const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username_or_email: usernameOrEmail,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
}

// Пример вызова функции login
// login('user@example.com', 'password')
//     .then(() => console.log('Login successful'))
//     .catch(err => console.error(err));


async function login(usernameOrEmail, password) {
    const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username_or_email: usernameOrEmail,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
}

// Пример вызова функции login
// login('user@example.com', 'password')
//     .then(() => console.log('Login successful'))
//     .catch(err => console.error(err));


async function logout() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        console.error('No refresh token available');
        return;
    }

    const response = await fetch('http://127.0.0.1:8000/api/user/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ refresh: refreshToken })
    });

    if (response.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('Logged out successfully');
    } else {
        console.error('Logout failed');
    }
}
    
    // Пример вызова функции logout
    // logout();