const todos = [];

const addtable = () => {
  const comment = document.getElementById("comment").value;
  const todo = { task: comment, status: "作業中", deletion: "削除" }
  todos.push(todo);

  let table = document.getElementById("table-contents");
  document.getElementById("table-contents").innerHTML = "";

  todos.forEach(function (value, index) {
    const statusbtn = document.createElement("input");
    statusbtn.type = "button";
    statusbtn.value = value.status;
    const deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = value.deletion;

    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(index);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(value.task);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newCell.appendChild(statusbtn);

    newCell = newRow.insertCell();
    newCell.appendChild(deletebtn);
  }
  );

  const commentvalue = document.getElementById("comment");
  commentvalue.value = "";
}