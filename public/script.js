const API_URL = "http://localhost:3000/api";
let token = localStorage.getItem("token");

// ✅ Show/Hide Sections Helper
function showSection(sectionId) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("noteForm").style.display = "none";
  document.getElementById("notesSection").style.display = "none";

  if (sectionId) {
    document.getElementById(sectionId).style.display = "block";
  }
}

// ✅ Signup
async function signup() {
  event.preventDefault(); // stop form refresh
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  alert(data.message || "Signup complete!");
  showSection("loginForm"); // after signup, show login
}

// ✅ Login
async function login() {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data.token) {
    token = data.token;
    localStorage.setItem("token", token);
    alert("Login successful ✅");

    // Show Notes UI
    showSection("noteForm");
    document.getElementById("notesSection").style.display = "block";

    loadNotes();
  } else {
    alert(data.message || "Login failed");
  }
}

// ✅ Create or Update Note
async function createNote() {
  event.preventDefault();
  const title = document.getElementById("noteTitle").value;
  const description = document.getElementById("noteDescription").value;

  const editingId = document.getElementById("noteForm").getAttribute("data-editing");

  if (editingId) {
    // 🔹 Update existing note
    const res = await fetch(`${API_URL}/notes/update-note/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    const updatedNote = await res.json();
    if (updatedNote._id) {
      alert("Note updated ✅");
      document.getElementById("noteForm").removeAttribute("data-editing");
      document.querySelector("#noteForm button").innerText = "Add Note";
      document.getElementById("noteTitle").value = "";
      document.getElementById("noteDescription").value = "";
      loadNotes();
    } else {
      alert(updatedNote.message || "Error updating note");
    }
  } else {
    // 🔹 Create new note
    const res = await fetch(`${API_URL}/notes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    const note = await res.json();
    if (note._id) {
      alert("Note added ✅");
      document.getElementById("noteTitle").value = "";
      document.getElementById("noteDescription").value = "";
      loadNotes();
    } else {
      alert(note.message || "Error creating note");
    }
  }
}

// ✅ Load Notes
async function loadNotes() {
  const res = await fetch(`${API_URL}/notes/get-notes`, {
    headers: { "Authorization": `Bearer ${token}` },
  });

  const notes = await res.json();
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = `note ${note.pinned ? "pinned" : ""}`;
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.description}</p>
      <button onclick="togglePin('${note._id}')"class="btn-pin">${note.pinned ? "Unpin" : "Pin"}</button>
      <button onclick="editNote('${note._id}', '${note.title}', '${note.description}')" class="btn-edit">Edit</button>
      <button onclick="deleteNote('${note._id}')"class="btn-delete">Delete</button>
    `;
    notesList.appendChild(div);
  });
}

// ✅ Edit Note (prefill form for update)
function editNote(id, title, description) {
  document.getElementById("noteTitle").value = title;
  document.getElementById("noteDescription").value = description;

  // store current editing note id
  document.getElementById("noteForm").setAttribute("data-editing", id);

  // Change button text to "Update Note"
  document.querySelector("#noteForm button").innerText = "Update Note";
}

// ✅ Toggle Pin
async function togglePin(id) {
  const res = await fetch(`${API_URL}/notes/toggle-pin/${id}`, {
    method: "PATCH",
    headers: { "Authorization": `Bearer ${token}` },
  });
  const data = await res.json();
  alert(data.message);
  loadNotes();
}

// ✅ Delete Note
async function deleteNote(id) {
  const res = await fetch(`${API_URL}/notes/delete-note/${id}`, {
    method: "DELETE",
    headers: { "Authorization": `Bearer ${token}` },
  });
  const data = await res.json();
  alert(data.message);
  loadNotes();
}

// ✅ Navbar Links
document.getElementById("loginLink").addEventListener("click", () => showSection("loginForm"));
document.getElementById("signupLink").addEventListener("click", () => showSection("signupForm"));
document.getElementById("logoutLink").addEventListener("click", () => {
  localStorage.removeItem("token");
  token = null;
  alert("Logged out");
  showSection("loginForm");
});