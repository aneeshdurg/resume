document.addEventListener("DOMContentLoaded", async () => {
  const fix_links = () => {
    for (let el of document.querySelectorAll(".autolink")) {
      el.href = el.innerText;
    }
  };
  for (let el of document.querySelectorAll(".include")) {
    const src = "snippets/" + el.dataset.src;
    const resp = await fetch(src);
    const content = await resp.text();
    el.innerHTML = content;
  }

  fix_links();
});
