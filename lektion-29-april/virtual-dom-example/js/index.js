import { createElement, render } from "./virtualDom.js";

/*<section class="counter">
    <p class="counter-info">Räknare</p>
    <button>Klicka på mig</button>
</section> */

function handleClick() {
  alert("Du klickade");
}

const vdom = createElement(
  "section",
  { class: "counter" },
  createElement("p", { class: "counter-info" }, "Räknare"),
  createElement(
    "button",
    {
      onclick: handleClick,
    },
    "Klicka på mig"
  )
);

console.log(vdom);

const root = document.getElementById("root");
root.appendChild(render(vdom));
