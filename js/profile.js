// js/profile.js
function loadProfile(config) {
    document.getElementById('name').textContent = config.name;
    document.getElementById('title').textContent = config.title;
    document.getElementById('bio').textContent = config.bio;
    document.getElementById('location').textContent = config.location;
    document.getElementById('email').textContent = config.email;
    document.getElementById('profile-image').src = config.image || '/api/placeholder/150/150';
}

// Load profile when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadProfile(window.config);
});

function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadProfile,calculateSum };
}