export default [
  {
    images: {
      x1: getImageUrl('../../img/my-projects/wallet@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/wallet@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'Wallet webservice',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/organic@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/organic@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'Green harvest webservice',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/english@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/english@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'English Exellence webservice',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/power-pulse@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/power-pulse@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'power pulse webservice',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/mimino@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/mimino@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'mimino website',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/ukraine@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/ukraine@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'vyshyvanka vibes Landing Page',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/chego@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/chego@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'chego jewelry website',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/energy@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/energy@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'energy flow webservice',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/fruitbox@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/fruitbox@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'fruitbox online store',
    url: '#',
  },
  {
    images: {
      x1: getImageUrl('../../img/my-projects/starlight@1x.jpg'),
      x2: getImageUrl('../../img/my-projects/starlight@2x.jpg'),
    },
    tags: 'React, JavaScript, Node JS, Git',
    name: 'starlight studio landing page',
    url: '#',
  },
];

function getImageUrl(src) {
  return new URL(src, import.meta.url).href;
}
