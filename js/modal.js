const orderButton = document.getElementById('order-button');
const modal = document.getElementById('modal');
const terminate = document.getElementById('close-modal');
//const sidebarButton = document.getElementById('sidebar-button');

const addEvents = () => {
    orderButton.addEventListener('click', () => {
        modal.style.display = "block";
        modal.style.transform = "scale(1.0)"
        sidebarButton.disabled = true;
        if (marker.classList.contains('fa-times')) {
            marker.classList.replace('fa-times', 'fa-bars');
            sidebar.style.display = "none";
            sidebarButton.style.backgroundColor = "transparent";
            sidebarButton.style.borderColor = "white";
        }
    });
    terminate.addEventListener('click', () => {
        modal.style.display = "none";
        sidebarButton.disabled = false;
    });
};

addEvents();