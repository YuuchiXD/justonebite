// Function to open modal with animation
function openModal(cookieType) {
    const modal = document.getElementById(`${cookieType}-modal`);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Function to close modal with animation
function closeModal(cookieType) {
    const modal = document.getElementById(`${cookieType}-modal`);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal if clicked outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id.split('-')[0]);
    }
}