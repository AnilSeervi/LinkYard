console.log(
  "Thanks piyush for such an awesome idea - https://github.com/officialpiyush/linkyard "
);
console.log("Checkout piyush - https://github.com/officialpiyush");
console.log(
  "also checkout druv who designed it - https://instagram.com/acedesyne"
);
async function handleLinks() {
  const res = await fetch("./links.json").then((r) => r.json());
  const mainDiv = document.querySelector(".links-list");
  for (const [key, value] of Object.entries(res)) {
    const link = `<a href="${value}" target="_blank" rel="noopener noreferrer">
      <div class="link-list-item">
        <p>${key}</p>
        <i class="material-icons">open_in_new</i>
      </div>
    </a> <!-- Link End -->
          `.trim();
    mainDiv.innerHTML += link;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  handleLinks();
});
