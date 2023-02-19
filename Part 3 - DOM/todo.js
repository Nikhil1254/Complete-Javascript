const ulEle = document.querySelector('.todo-list');
const formEle = document.querySelector('.form-todo');
const todoInput = document.querySelector('.form-todo input[type="text"]');


// add new todo functionality
formEle.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = todoInput.value;
    todoInput.value = "";

    if (input.trim() === "")
        return;

    const liEle = document.createElement('li');
    const innerHTML = `<span class="text">${input}</span>
    <div class="buttons">
        <button class="list-btn done">Done</button>
        <button class="list-btn remove">Remove</button>
    </div>`
    liEle.innerHTML = innerHTML;
    ulEle.append(liEle);
});

// done and remove functionality
ulEle.addEventListener('click', (event) => {
    if (event.target.classList.contains('done')) {
        const span = event.target.parentNode.previousElementSibling;
        span.style.textDecoration = 'line-through';
    } else if (event.target.classList.contains('remove')) {
        const liEle = event.target.parentNode.parentNode;
        liEle.remove();
    }
});