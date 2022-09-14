const btnShowPopup = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
const btnClosePopup = document.querySelector("header i");
const popupTitle = document.querySelector("header p");
const btnAdd = document.querySelector("button");
const newTitle = document.querySelector("input");
const newDescription = document.querySelector("textarea");

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

function showNotes() {
  document.querySelectorAll(".note").forEach((note) => note.remove());

  notes.forEach((note ,index) => {
    const newNote = `<div class="note">
                            <div>
                            <p class="note-title">${note.title}</p>
                            <p class="content">${note.description}</p>
                            </div>
                            <div class="footer">
                            <div>${note.date}</div>
                            <div class="menu-container">
                                <i class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                                <li onclick="updateNote(${index},${note.title})" ><i class="uil uil-pen"></i>Edit</li>

                                </ul>
                            </div>
                            </div>
                        </div>`;

    btnShowPopup.insertAdjacentHTML("afterend", newNote);
  });
}


function deleteNote(index){
    notes.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

function updateNote(index,title) {

     alert(title);

    // btnShowPopup.click();

    // popupTitle.innerText = "Update a note";
    // btnAdd.innerText = "Update";

    // let note = {
    //     title: title,
    //     description: description,
    //     date: `${
    //       months[todayDate.getMonth()]
    //     }  ${todayDate.getDate()}, ${todayDate.getFullYear()}`,
    //   };

    //   notes[index] = note;
    //   localStorage.setItem("notes", JSON.stringify(notes));
    //   btnClosePopup.click();
    //   showNotes();
}

showNotes();

btnShowPopup.addEventListener("click", () => {
  overlay.classList.add("show");
});

btnClosePopup.addEventListener("click", () => {
  newTitle.value = "";
  newDescription.value = "";
  popupTitle.innerText = "Add a note";
  btnAdd.innerText = "Add";
  overlay.classList.remove("show");
});

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const title = newTitle.value;
  const description = newDescription.value;
  if (title || description) {
    let todayDate = new Date();

    let note = {
      title: title,
      description: description,
      date: `${
        months[todayDate.getMonth()]
      }  ${todayDate.getDate()}, ${todayDate.getFullYear()}`,
    };

    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    btnClosePopup.click();
    showNotes();
  }
});
