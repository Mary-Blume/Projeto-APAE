document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const calendarCells = document.querySelectorAll("td"); 
    const events = {};

    function updateCalendar() {
        calendarCells.forEach(cell => {
            cell.innerHTML = ''; 
            const date = cell.dataset.date; 
            if (events[date]) {
                events[date].forEach(event => {
                    const eventDiv = document.createElement("div");
                    eventDiv.textContent = event.time + " - " + event.task;
                    eventDiv.style.backgroundColor = "#0074B7";
                    eventDiv.style.color = "white";
                    eventDiv.style.padding = "2px";
                    eventDiv.style.margin = "2px 0";
                    cell.appendChild(eventDiv);
                });
            }
        });
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const task = document.getElementById("task").value;

        if (!date || !time || !task) return;

        if (!events[date]) {
            events[date] = [];
        }
        events[date].push({ time, task });

        const li = document.createElement("li");
        li.innerHTML = `<span>${date} - ${time}: ${task}</span>
            <button class="remove">Remover</button>
            <button class="edit">Alterar</button>`;
        taskList.appendChild(li);

        updateCalendar();

        form.reset();
    });

    taskList.addEventListener("click", e => {
        if (e.target.classList.contains("remove")) {
            const li = e.target.parentElement;
            const [date, timeTask] = li.querySelector("span").textContent.split(" - ");
            const [time] = timeTask.split(": ");
            events[date] = events[date].filter(event => event.time !== time);
            if (events[date].length === 0) delete events[date];
            li.remove();
            updateCalendar();
        }

        if (e.target.classList.contains("edit")) {
            const li = e.target.parentElement;
            const [date, timeTask] = li.querySelector("span").textContent.split(" - ");
            const [time, task] = timeTask.split(": ");
            document.getElementById("date").value = date;
            document.getElementById("time").value = time;
            document.getElementById("task").value = task;
            li.remove();
            events[date] = events[date].filter(event => event.time !== time);
            if (events[date].length === 0) delete events[date];
            updateCalendar();
        }
    });
});
