function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}