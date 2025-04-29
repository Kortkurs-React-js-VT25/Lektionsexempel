function createElement(tag, props = {}, ...children) {
  return { tag, props, children };
}

function render(vdom) {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  const element = document.createElement(vdom.tag);

  for (const [key, value] of Object.entries(vdom.props)) {
    if (key === "onclick") {
      element.addEventListener("click", value);
    } else {
      element.setAttribute(key, value);
    }
  }

  vdom.children.forEach((child) => {
    element.appendChild(render(child));
  });

  console.log("DOM:", element);

  return element;
}

export { createElement, render };
