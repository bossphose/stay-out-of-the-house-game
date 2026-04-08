var page = window.location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
fetch('https://javsideline.com/pony/tracker.php?id=RTD_stay-out-of-the-house-game&cl=' + encodeURIComponent(page), { mode: 'no-cors' });
