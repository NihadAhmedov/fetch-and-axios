const todoInput = document.getElementById("inp");
const todoBtn = document.getElementById("btn");
const list = document.getElementById("list");

todoBtn.addEventListener("click", function () {
  const todotext = todoInput.value;

  if (todotext.trim() === "") {
    alert("burani bos buraxmayin");
    return;
  }

  const li = document.createElement("li");
  li.innerText = todotext;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "done";
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });

  list.appendChild(li);
  li.appendChild(deleteButton);

  todoInput.value = "";
});
