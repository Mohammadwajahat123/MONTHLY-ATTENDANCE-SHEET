document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const daysInMonth = 31; // Adjust this based on the current month

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.className = 'day';
        dayDiv.addEventListener('click', function () {
            toggleAttendance(dayDiv);
        });
        calendar.appendChild(dayDiv);
    }
});

function toggleAttendance(dayDiv) {
    dayDiv.classList.toggle('present');
    if (dayDiv.classList.contains('present')) {
        dayDiv.classList.remove('absent');
    } else {
        dayDiv.classList.add('absent');
    }
}

function saveAttendance() {
    const presentDays = document.querySelectorAll('.day.present').length;
    const absentDays = document.querySelectorAll('.day.absent').length;

    // Here you can send this data to a server, save it locally, or process it as needed
    console.log(`Present: ${presentDays}, Absent: ${absentDays}`);
    alert('Attendance saved!');
}