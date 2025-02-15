// Function to open modal
function openModal(cookieType) {
    document.getElementById(`${cookieType}-modal`).style.display = 'flex';
}

// Function to close modal
function closeModal(cookieType) {
    document.getElementById(`${cookieType}-modal`).style.display = 'none';
}

// Close modal if clicked outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}