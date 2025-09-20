let todos = [];

function addTodo() {}

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
// Get the task list container
const taskList = document.querySelector('.todo-list');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the filter type from the data-filter attribute
        const filterType = button.getAttribute('data-filter');

        // Remove 'active' class from all buttons and add it to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get all task items
        const tasks = taskList.querySelectorAll('li');

        tasks.forEach(task => {
            // Get the task's status from its class
            const isCompleted = task.classList.contains('completed');

            // Show or hide the task based on the filter type
            if (filterType === 'all') {
                task.style.display = 'flex';
            } else if (filterType === 'active') {
                task.style.display = isCompleted ? 'none' : 'flex';
            } else if (filterType === 'completed') {
                task.style.display = isCompleted ? 'flex' : 'none';
            }
        });
    });
});