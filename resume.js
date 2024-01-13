document.addEventListener("DOMContentLoaded", async () => {
  const fix_links = () => {
    for (let el of document.querySelectorAll(".autolink")) {
      el.href = el.innerText;
    }
  };

  await Promise.all([...document.querySelectorAll(".include")].map(el => {
    const src = "snippets/" + el.dataset.src;
    return fetch(src).then(resp => {
      resp.text().then(content => {
        el.innerHTML = content;
      });
    })
  }));

  fix_links();
});
