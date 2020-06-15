const seasons = [
  {
    id: 1,
    title: "spring 1",
    category: "spring",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "spring 2",
    category: "spring",
    desc:
      "Minus optio nobis deserunt, praesentium fugit iure molestiae enim accusantium blanditiis voluptatem possimus non eum culpa",
  },
  {
    id: 3,
    title: "spring 3",
    category: "spring",
    desc:
      "Fuga ducimus ea officiis! Beatae maxime recusandae ab inventore veniam itaque iusto reprehenderit earum vel commodi.",
  },
  {
    id: 4,
    title: "summer 1",
    category: "summer",
    desc:
      "Quas numquam nesciunt libero fuga ab eaque ipsa, necessitatibus natus magnam quaerat. Iusto, ipsum.",
  },
  {
    id: 5,
    title: "summer 2",
    category: "summer",
    desc:
      "Veritatis consectetur quidem assumenda, quas rem officiis omnis aliquam qui voluptatum eum odio atque cumque ut exercitationem velit autem.",
  },
  {
    id: 6,
    title: "summer 3",
    category: "summer",
    desc:
      "Ex aliquid veniam deserunt nulla inventore cupiditate nam velit quaerat? Alias vero dicta voluptates voluptatem tempora delectus vel aliquid.",
  },
  {
    id: 7,
    title: "autumn 1",
    category: "autumn",
    desc:
      "Et reprehenderit dignissimos sequi fuga quis illum perspiciatis corporis tempore eos fugiat. Earum, id totam? Facere, suscipit!",
  },
  {
    id: 8,
    title: "autumn 2",
    category: "autumn",
    desc:
      "At eveniet iure labore ullam unde, deserunt, ab incidunt sapiente culpa eos consectetur dolores dolor, repudiandae hic.",
  },
  {
    id: 9,
    title: "autumn 3",
    category: "autumn",
    desc:
      "Sit eligendi fugit quasi quisquam atque reprehenderit dolor iure, accusantium maiores tempore nulla et, aliquam, consequuntur laudantium voluptas cum quibusdam vero aut adipisci.",
  },
  {
    id: 10,
    title: "winter 1",
    category: "winter",
    desc:
      "Doloremque dolores neque tempore perferendis assumenda ratione ex quasi facilis ab unde voluptate mollitia minima deserunt blanditiis perspiciatis quaerat.",
  },
  {
    id: 11,
    title: "winter 2",
    category: "winter",
    desc: "Voluptas tempora repellendus sit veniam aspernatur.",
  },
];

const uniqueCate = ["all"].concat(
  seasons.map((x) => x.category).filter((x, i, a) => a.indexOf(x) === i)
);

window.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelector(".buttons");
  const wrapper = document.querySelector(".wrapper");
  btns.innerHTML = genButtonsHtml(uniqueCate);
  wrapper.innerHTML = genCardHtml(seasons);

  const filterBtns = document.querySelectorAll(".button");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const curCat = e.currentTarget.dataset["cat"];
      let displayCards;
      if (curCat !== "all") {
        displayCards = genCardHtml(
          seasons.filter(
            (item) => item.category === e.currentTarget.dataset["cat"]
          )
        );
      } else {
        displayCards = genCardHtml(seasons);
      }

      wrapper.innerHTML = displayCards;
    });
  });
});

function genCardHtml(list) {
  const allCards = list.map(
    (item, idx) => `<article class="card">
  <img class="card__img" src="https://picsum.photos/1000?random=${
    item.id + 1
  }" alt="${item.desc.slice(0, 10)}">
  <h2 class="card__title">${item.title}</h2>
  <p class="card__text">${item.desc}</p>
</article>`
  );
  return allCards.join("");
}

function genButtonsHtml(list) {
  const allBtns = list.map(
    (x) => `<li class="button" role="button" data-cat="${x}">${x}</li>`
  );
  return allBtns.join("");
}
