const notes = {
  "about-me": {
    folder: "Today",
    title: "About me",
    metaTop: "Today · 3:12 PM",
    metaSecondary: "Today · Personal",
    body: [
      "Swedish content writer & editor based in Lisbon.",
      "",
      "I blend creative storytelling with smart SEO to help brands grow through content that informs, inspires and performs.",
      "",
      "Struggling to find the right words? Let’s craft website copy, blogs, guides and optimized content that works for your audience.",
    ].join("\n"),
  },
  "learning-in-public": {
    folder: "Thoughts",
    title: "Grocery list",
    metaTop: "Today",
    metaSecondary: "Thoughts · List",
    body: "",
    htmlBody: [
      "<ul class=\"checklist\">",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Eggs</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Potatoes</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Garbage bags</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Greek yoghurt</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">1 red onion</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Bananas</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Strawberry jam</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Popcorn</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Fuet</span></li>",
      "  <li class=\"checklist-item checked\"><span class=\"check-bullet\"></span><span class=\"check-text\">Paprika</span></li>",
      "  <li class=\"checklist-item\"><span class=\"check-bullet\"></span><span class=\"check-text\">Red lentils</span></li>",
      "  <li class=\"checklist-item\"><span class=\"check-bullet\"></span><span class=\"check-text\">Zucchini</span></li>",
      "</ul>",
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
    title: "What I do",
    metaTop: "Now",
    metaSecondary: "Work experience · Product & development",
    body: [
      "I create and optimize website content for a wide range of brands, from startups to established companies, including crypto, sports, and other industries.",
      "",
      "My work combines creative storytelling with SEO to ensure content is engaging, clear, and effective.",
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

  if (note.htmlBody) {
    bodyEl.innerHTML = note.htmlBody;
  } else {
    bodyEl.textContent = note.body;
  }
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

  document.querySelectorAll(".nav-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const value = event.target.value;
      if (!value) return;

      if (value.startsWith("mailto:") || value.startsWith("tel:")) {
        window.location.href = value;
      } else {
        window.open(value, "_blank", "noopener,noreferrer");
      }

      event.target.value = "";
    });
  });
});


