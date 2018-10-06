const sidebar = document.getElementById('sidebar');
const sidebarButton = document.getElementById('sidebar-button');
const marker = document.getElementById('bars-marker');
const barlinks = document.getElementsByClassName('bar-link');

const handleEvents = () => {
    sidebar.style.display = "none";
    sidebarButton.addEventListener('click', () => {
        if (marker.classList.contains("fa-bars")) {
            sidebar.style.display = "block";
            marker.classList.replace("fa-bars", "fa-times");
            sidebarButton.style.backgroundColor = "rgba(3, 3, 3, 0.7)";
            sidebarButton.style.borderColor = "rgba(3, 3, 3, 0.7)";
        }
        else {
            sidebar.style.display = "none";
            marker.classList.replace("fa-times", "fa-bars");
            sidebarButton.style.backgroundColor = "transparent";
            sidebarButton.style.borderColor = "white";
        }
    });
    for (let i = 0; i < barlinks.length; i++) {
        barlinks[i].addEventListener('click', () => {
            sidebar.style.display = "none";
            marker.classList.replace("fa-times", "fa-bars");
            sidebarButton.style.backgroundColor = "transparent";
            sidebarButton.style.borderColor = "white";
        });
    }

};


handleEvents();