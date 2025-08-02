const hostname = window.location.hostname;
const startTime = Date.now();

// When the tab is closed or navigated away
window.addEventListener('beforeunload', () => {
  const timeSpent = Date.now() - startTime;

  // Get token from Chrome local storage
  chrome.storage.local.get('token', ({ token }) => {
    if (!token) return;

    // Send time data to backend with Authorization header
    fetch('http://localhost:5000/api/activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ hostname, timeSpent })
    }).catch(err => console.error('Failed to send activity:', err));
  });
});

