function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timeString = `${hours}:${minutes} ${ampm}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
 