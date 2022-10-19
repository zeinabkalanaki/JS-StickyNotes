const btnShowPopup = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const btnClosePopup = document.querySelector("header i");
const popupTitle = document.querySelector(".popup-title");
const btnFormButton = document.querySelector("form button");
const title = document.querySelector(".note-title input");
const description = document.querySelector(".note-content textarea");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let updateIndex = 0;

function getNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());

  if (notes) {
    notes.forEach((note, index) => {
      const element = `<div class="note">
                        <div class="test">
                          <p class="title">${note.title}</p>
                          <p class="description">${note.content}</p>
                        </div>
                        <div class="footer">
                          <div>${note.date}</div>
                          <div class="settings">
                            <i class="uil uil-ellipsis-h"></i>
                            <ul class="menu">
                              <li onclick="deleteNote(${index})"><i class="uil uil-trash" ></i>Delete</li>
                              <li onclick="showUpdatePopup(${index})"><i class="uil uil-pen"></i>Edit</li>
                            </ul>
                          </div>
                        </div>
                      </div>`;

      btnShowPopup.insertAdjacentHTML("afterend", element);
    });
  }
}

function showAddPopup() {
  overlay.classList.add("show");
  btnFormButton.innerText = "Add";
  popupTitle.innerText = "Add note";

  title.value = "";
  description.value = "";
}

function showUpdatePopup(index) {
  overlay.classList.add("show");
  btnFormButton.innerText = "Update";
  popupTitle.innerText = "Update note";

  description.value = notes[index].content;
  title.value = notes[index].title;
  updateIndex = index;
}

function deleteNote(index) {
  let confirmDelete = confirm("Are you sure you want to delete this note?");
  if (confirmDelete == false) return;

  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  getNotes();
}

function addNote() {
  const noteDate = new Date();
  const newNote = {
    content: description.value,
    title: title.value,
    date: `${
      months[noteDate.getMonth()]
    } ${noteDate.getDate()}, ${noteDate.getFullYear()}`,
  };

  notes.push(newNote);
}

function updateNote(params) {
  const noteDate = new Date();
  notes[updateIndex].content = description.value;
  notes[updateIndex].title = title.value;
  notes[updateIndex].date = `${
    months[noteDate.getMonth()]
  } ${noteDate.getDate()}, ${noteDate.getFullYear()}`;
}

getNotes();

btnShowPopup.addEventListener("click", () => {
  showAddPopup();
});

btnClosePopup.addEventListener("click", () => {
  overlay.classList.remove("show");
});

btnFormButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (btnFormButton.innerText.toLowerCase() == "add") {
    addNote();
  }

  if (btnFormButton.innerText.toLowerCase() == "update") {
    updateNote();
  }

  localStorage.setItem("notes", JSON.stringify(notes));

  getNotes();

  btnClosePopup.click();
});
