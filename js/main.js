
// Map des logos par produit (doit correspondre aux fichiers dans /img)
const productLogos = {
  tiptap: "logo tip TAP.jpeg",
  bibtap: "logo BIB TAP.jpeg",
  airtap: "logo AIR TAP.jpeg",
  griptap: "logo GRIP TAP.jpeg"
};

fetch("data/products.json")
  .then(r => r.json())
  .then(data => {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    // Tri par priority (1 = TipTap, 2 = BibTap, 3 = AirTap, 4 = GripTap)
    const products = (data.products || []).slice().sort((a,b) => (a.priority||99)-(b.priority||99));

    products.forEach(p => {
      const card = document.createElement("article");
      card.className = "tt-card";

      const logoFile = productLogos[p.id];

      card.innerHTML = `
        ${logoFile ? `<img src="img/${logoFile}" alt="${p.title}" class="tt-card-logo">` : ""}
        <div class="tt-card-title-row">
          <h3>${p.title}</h3>
        </div>
        <p class="tt-card-tagline">${p.tagline || ""}</p>
        <p class="tt-card-description">${p.description || ""}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Erreur chargement JSON produits:", err);
  });
