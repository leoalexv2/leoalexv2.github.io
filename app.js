// app.js

// Toggle sidebar
document.getElementById('check').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('sidebar').style.transform = 'translateX(0)';
    } else {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    }
});
