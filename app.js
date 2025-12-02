const notes = {
  "about-me": {
    folder: "Today",
    title: "About me",
    dateTime: "Today at 3:12 PM",
    metaTop: "Today at 3:12 PM",
    metaSecondary: "",
    body: "",
    htmlBody: [
      "Swedish content writer & editor based in Lisbon.",
      "<br><br>",
      "I combine creative storytelling with smart SEO to help brands grow through content that informs, inspires and performs.",
      "<br><br>",
      "Struggling to find the right words? I create website copy, ad copy, blogs, guides, and SEO-friendly content that speaks to your audience.",
      "<br><br>",
      '<div class="note-image-container"><img src="about-me-photo.jpg" alt="Jessika Hedman" class="note-image" /></div>',
    ].join(""),
  },
  "learning-in-public": {
    folder: "Thoughts",
    title: "Grocery list",
    dateTime: "3 December 2024 at 09:15",
    metaTop: "3 December 2024 at 09:15",
    metaSecondary: "",
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
  "ins-and-outs": {
    folder: "Thoughts",
    title: "Ins and Outs",
    dateTime: "31 December 2024 at 23:44",
    metaTop: "31 December 2024 at 23:44",
    metaSecondary: "",
    body: "",
    htmlBody: [
      "<strong>In 2025</strong>",
      "<ul style=\"padding-left: 20px; margin-left: 0; margin-top: 4px;\">",
      "  <li>Scarves</li>",
      "  <li>Bob (the hairstyle)</li>",
      "  <li>Religion / spirituality</li>",
      "  <li>Keeping your wisdom teeth</li>",
      "  <li>Being a couch potato</li>",
      "  <li>Pubic hair (still in)</li>",
      "  <li>Slow travel</li>",
      "</ul>",
      "<strong>Out 2025</strong>",
      "<ul style=\"padding-left: 20px; margin-left: 0; margin-top: 4px;\">",
      "  <li>Putting yourself first</li>",
      "  <li>Being a DJ</li>",
      "  <li>Crochet</li>",
      "  <li>Italy</li>",
      "  <li>Aging</li>",
      "  <li>Complicated diets</li>",
      "</ul>",
    ].join("\n"),
  },
  "slow-productivity": {
    folder: "Thoughts",
    title: "Betrayal list",
    dateTime: "18 January 2025 at 16:47",
    metaTop: "18 January 2025 at 16:47",
    metaSecondary: "",
    body: [
      "H&M's fitting room",
      "My left wisdom tooth",
      "Oysters",
      "Any printer",
      "Me on Hinge",
      "Wet cobblestones",
      "Susan Miller",
      "My bangs when it's windy",
      "The clown sound my loafers make",
      "Depend eyebrow tint",
      "The way my tear duct betrays me when I'm angry",
      "Sunscreen SPF 30",
    ].join("\n"),
  },
  "books-to-read": {
    folder: "Thoughts",
    title: "Books people told me to read",
    dateTime: "22 March 2025 at 11:23",
    metaTop: "22 March 2025 at 11:23",
    metaSecondary: "",
    body: [
      "The Shadow of the Wind",
      "Fresh Water for Flowers",
      "Dead Women Don't Forgive",
      "Clean House",
      "The Year of Magical Thinking",
      "Never Be Alone Again",
      "The Sun Also Rises",
      "The Women I Think About at Night",
      "Body double",
    ].join("\n"),
  },
  "current-role": {
    folder: "Work experience",
    title: "What I do",
    dateTime: "8 September 2024 at 13:56",
    metaTop: "8 September 2024 at 13:56",
    metaSecondary: "",
    body: [
      "I create, publish and optimize website content for a wide range of brands, from startups to established companies, including crypto, sports, and other industries.",
      "",
      "My work blends a feel for tone and voice with a sense of how readers actually experience content. I pair this with thoughtful research and analysis to make sure everything I create is as engaging as it is effective.",
    ].join("\n"),
  },
  "previous-projects": {
    folder: "Work experience",
    title: "Previous projects",
    dateTime: "5 October 2024 at 10:08",
    metaTop: "5 October 2024 at 10:08",
    metaSecondary: "",
    body: [
      "A mix of client work, in‑house products, and side projects.",
    ].join("\n"),
  },
  passwords: {
    folder: "Thoughts",
    title: "Passwords",
    dateTime: "12 February 2025 at 20:14",
    metaTop: "12 February 2025 at 20:14",
    metaSecondary: "",
    body: "",
    locked: true,
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

  detailView.classList.toggle("is-locked-note", !!note.locked);

  titleEl.textContent = note.title;
  metaTopEl.textContent = note.metaTop;
  metaSecondaryEl.textContent = note.metaSecondary;

  if (note.locked) {
    bodyEl.innerHTML = [
      '<div class="locked-note-layout">',
      '  <div class="locked-note-icon"></div>',
      '  <div class="locked-note-text">This note is locked.</div>',
      '  <button class="locked-note-button" type="button">View Note</button>',
      "</div>",
    ].join("\n");
  } else if (note.htmlBody) {
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

function filterNotes(searchTerm) {
  const searchLower = searchTerm.toLowerCase().trim();
  const noteCards = document.querySelectorAll(".note-card");
  const sectionGroups = document.querySelectorAll(".section-group");

  if (!searchTerm.trim()) {
    // Show all notes and sections when search is empty
    noteCards.forEach((card) => {
      card.style.display = "";
    });
    sectionGroups.forEach((section) => {
      section.style.display = "";
    });
    return;
  }

  // Hide all sections initially
  sectionGroups.forEach((section) => {
    section.style.display = "none";
  });

  let hasMatches = false;

  noteCards.forEach((card) => {
    const noteId = card.getAttribute("data-note-id");
    const note = notes[noteId];
    if (!note) {
      card.style.display = "none";
      return;
    }

    // Search in title, meta, preview, and body
    const title = note.title.toLowerCase();
    const meta = note.metaSecondary?.toLowerCase() || "";
    const preview = card.querySelector(".note-preview")?.textContent.toLowerCase() || "";
    const body = note.body?.toLowerCase() || "";
    const folder = note.folder?.toLowerCase() || "";

    const matches =
      title.includes(searchLower) ||
      meta.includes(searchLower) ||
      preview.includes(searchLower) ||
      body.includes(searchLower) ||
      folder.includes(searchLower);

    if (matches) {
      card.style.display = "";
      // Show the parent section
      const section = card.closest(".section-group");
      if (section) {
        section.style.display = "";
        hasMatches = true;
      }
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate note-meta elements with date/time
  document.querySelectorAll(".note-card").forEach((card) => {
    const id = card.getAttribute("data-note-id");
    if (!id) return;
    const note = notes[id];
    if (note && note.dateTime) {
      const metaEl = card.querySelector(".note-meta");
      if (metaEl) {
        metaEl.textContent = note.dateTime;
      }
    }
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

  // Search functionality
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      filterNotes(event.target.value);
    });
  }
});


