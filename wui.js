const bodyBuilder = (elem, struct) => {
  if (struct.constructor.name == 'Array') {
    struct.forEach(v => {
      bodyBuilder(elem, v)
    })
  } else if (struct.constructor.name == 'Object') {

    let newElem = document.createElement(struct.tag);
    for (p in struct) {
      if (p != 'tag' && p != 'content' && p != 'style')
        newElem.setAttribute(p, struct[p]);
      if (struct.style)
        for (s in struct.style)
          newElem.style[s] = struct.style[s];
    }

    elem.appendChild(newElem);

    bodyBuilder(newElem, struct.content);

  } else {
    elem.append(struct);
  }
}

const stylist = () => {
  for (style in styles) {
    elements = document.querySelectorAll(style);
    Array.from(elements, element => {
      for (item in styles[style]) {
        if (!element.style[item])
          element.style[item] = styles[style][item]
      }
    })
  }
}

window.addEventListener('load', () => {
  /* Filling the head */
  document.title = wui.head.title;
  // ........ to be continued
  bodyBuilder(document.body, wui.body);
  stylist();

  //just because
  tds = document.querySelectorAll('td');
  [].forEach.call(tds, x => {
    x.addEventListener('click', e => { e.target.innerHTML = (e.target.innerHTML) == 'X' ? 'O' : 'X' })
  })
})
