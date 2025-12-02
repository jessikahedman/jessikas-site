const notes = {
  "about-me": {
    folder: "Today",
    title: "About me",
    metaTop: "Today · 3:12 PM",
    metaSecondary: "Today · Personal",
    body: [
      "Designer & developer based in Sweden, curious about calm, thoughtful digital experiences.",
      "",
      "I like working in the in‑between of product, design, and engineering – shaping ideas into interfaces that feel simple and kind.",
    ].join("\n"),
  },
  "learning-in-public": {
    folder: "Thoughts",
    title: "On learning in public",
    metaTop: "Ongoing · Notes",
    metaSecondary: "Thoughts · Writing",
    body: [
      "I use this space to collect experiments, small questions, and unfinished ideas.",
      "",
      "Shipping before it feels perfect has been the fastest way for me to learn, connect, and find the next step.",
    ].join("\n"),
  },
  "slow-productivity": {
    folder: "Thoughts",
    title: "Slow productivity",
    metaTop: "Reflection",
    metaSecondary: "Thoughts · Reflection",
    body: [
      "I’m interested in working with focus and spaciousness instead of urgency.",
      "",
      "Most good ideas seem to arrive when there is enough time to think, notice, and change direction.",
    ].join("\n"),
  },
  "current-role": {
    folder: "Work experience",
    title: "Current role",
    metaTop: "Now",
    metaSecondary: "Work experience · Product & development",
    body: [
      "I work across product, UX, and front‑end – helping teams move from rough idea to something people can actually use.",
      "",
      "Day‑to‑day that often looks like sketching, prototyping, pairing with engineers, and iterating in small, shippable steps.",
    ].join("\n"),
  },
  "previous-projects": {
    folder: "Work experience",
    title: "Previous projects",
    metaTop: "Highlights",
    metaSecondary: "Work experience · Selected work",
    body: [
      "A mix of client work, in‑house products, and side projects.",
      "",
      "I’m especially proud of the projects where we simplified something complex and made it feel more human.",
    ].join("\n"),
  },
};

function showNoteDetail(noteId) {
  const note = notes[noteId];
  if (!note) return;

  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  const titleEl = document.getElementById("detail-title");
  const metaTopEl = document.getElementById("detail-meta-top");
  const metaSecondaryEl = document.getElementById("detail-meta-secondary");
  const bodyEl = document.getElementById("detail-body");
  const folderTitleEl = document.getElementById("detail-folder-title");

  titleEl.textContent = note.title;
  metaTopEl.textContent = note.metaTop;
  metaSecondaryEl.textContent = note.metaSecondary;
  bodyEl.textContent = note.body;
  folderTitleEl.textContent = note.folder;

  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
}

function showListView() {
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".note-card").forEach((card) => {
    const id = card.getAttribute("data-note-id");
    if (!id) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", () => showNoteDetail(id));
  });

  const backButton = document.querySelector(".nav-back");
  if (backButton) {
    backButton.addEventListener("click", showListView);
  }
});


