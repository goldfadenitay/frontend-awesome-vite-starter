import image from './steve-after-a-workshop.jpg?h=400;800&format=webp&as=metadata';
import image1 from './favicon-16x16.png';

import { name } from './characters/gandorf.json';

console.log(import.meta.glob('./logos/**/*.svg'), { eager: true });

// for (const [path, module] of Object.entries(
//   import.meta.glob('./logos/**/*.svg'),
// )) {
//   console.log('path', path);
//   console.log('module', module);

//   module().then((img) => {
//     const imgElement = document.createElement('img');
//     imgElement.src = img.default;
//     imgElement.height = 200;
//     document.body.appendChild(imgElement);
//   });
// }

console.log('name', name);

console.log('image', image);

const img = document.createElement('img');
img.src = image[0].src;
document.body.appendChild(img);
import { initializeCounter } from './counter';

console.log(image);
console.log(image1);

initializeCounter();
