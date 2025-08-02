// On page load: check for token
window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('token', ({ token }) => {
    if (token) {
      document.getElementById('auth-section').style.display = 'none';
      document.getElementById('report-section').style.display = 'block';
      loadReport(token);
    }
  });
});

// Login button click
document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const authMessage = document.getElementById('authMessage');

  if (!email || !password) {
    authMessage.textContent = 'Please fill in both fields.';
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.token) {
      chrome.storage.local.set({ token: data.token }, () => {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('report-section').style.display = 'block';
        loadReport(data.token);
      });
    } else {
      authMessage.textContent = data.message || 'Login failed.';
    }
  } catch (err) {
    authMessage.textContent = 'Error logging in.';
  }
});

// Load report with token
async function loadReport(token) {
  try {
    const res = await fetch('http://localhost:5000/api/activity', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    const data = await res.json();
    const reportDiv = document.getElementById('report');

    if (res.ok) {
      reportDiv.innerHTML = Object.entries(data).map(
        ([site, time]) => `<p><b>${site}</b>: ${(time / 1000).toFixed(1)} sec</p>`
      ).join('');
    } else {
      reportDiv.innerHTML = `<p>${data.message || 'Failed to fetch report.'}</p>`;
    }
  } catch (err) {
    document.getElementById('report').innerHTML = '<p>Error loading report.</p>';
  }
}
