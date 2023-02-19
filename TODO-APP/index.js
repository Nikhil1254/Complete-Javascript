const ulEle = document.querySelector('.todo-list');
const formEle = document.querySelector('form');
const todoInput = document.querySelector('form input[type="text"]')


// Add new todo -
formEle.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = todoInput.value;
    todoInput.value = "";

    if (input.trim() === "")
        return;

    const liEle = document.createElement('li');
    const innerHTML = `<span>
                        ${input}
                    </span>
                    <div class="btn-group">
                        <button class="btn done">Done</button>
                        <button class="btn remove">Remove</button>
                    </div>`;
    liEle.innerHTML = innerHTML;

    ulEle.append(liEle);
});

// done and remove todo
ulEle.addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {
        const span = e.target.parentNode.previousElementSibling;
        span.style.textDecoration = 'line-through';
    } else if (e.target.classList.contains('remove')) {
        const liEle = e.target.parentNode.parentNode;
        liEle.remove();
    }
})