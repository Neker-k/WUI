aTable = {
  tag: 'table',
  id: 'aTable',
  content: [{
    tag: 'tr',
    content: [{
      tag: 'td',
      content: 'O'
    },
    {
      tag: 'td',
      content: 'X'
    },
    {
      tag: 'td',
      content: 'X'
    }
    ]
  },
  {
    tag: 'tr',
    content: [{
      tag: 'td',
      content: 'X'
    },
    {
      tag: 'td',
      content: 'O'
    },
    {
      tag: 'td',
      content: 'O'
    }
    ]
  },
  {
    tag: 'tr',
    content: [{
      tag: 'td',
      content: 'X'
    },
    {
      tag: 'td',
      content: 'O'
    },
    {
      tag: 'td',
      content: 'O'
    }
    ]
  }
  ]
}

aDiv = {
  tag: 'div',
  id: 'myDiv',
  content: [
    'this is content',
    aTable,
    {
      tag: 'a',
      href: 'http://www.example.com/',
      target: '_blank',
      content: 'The famous Example website'
    }
  ]
}

cat = {
  tag: 'img',
  src: 'https://www.caregiverproducts.com/thumbnail.asp?file=assets/images/chi300-companion-cat-silver-close-7w.jpg',
  id: 'someCat',
  title: 'Kitten !',
  content: ''
}

other = {
  tag: 'div',
  id: 'other',
  data: 'some embedded data',
  style: {
    border: '2px dotted gold',
    borderRadius: '3px'
  },
  content: [
    'something, ',
    {
      tag: 'span',
      id: 'thatSpan',
      content: 'other thing'
    },
    ' and more.',
    cat
  ]
}

myHeader = {
  tag: 'header',
  content: ['Here be Title']
}

zeFoot = {
  tag: 'footer',
  id: 'footer',
  content: 'The small print',
  'class': 'pageBottom'
}

wui = {
  "head": {
    "title": "Example of Web User Interface",
    "meta": [{
      "charset": "utf-8"
    },
    {
      "http-equiv": "content-type",
      "content": [
        "text/html",
        {
          "charset": "utf-8"
        }
      ]
    },
    [{
      "name": "viewport",
      "content": {
        "width": "device-width",
        "initial-scale": 1
      }
    }]
    ]
  },

  "body": [myHeader, aDiv, other, zeFoot]
}
