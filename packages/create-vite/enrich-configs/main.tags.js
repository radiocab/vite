import 'the-new-css-reset/css/reset.css';

const dependencies = [
  'ESlint',
  'Prettier',
  'PostCSS',
  'PostCSS Nesting',
  'Autoprefixer',
  'CSS Nano',
  'CSS Reset',
];

document.querySelector('#app').innerHTML += `
  <div>
    <h2>Template by <cite><a class="author" href="https://github.com/radiocab" target="_blank" rel="noopener noreferrer">Vadim Durresiou</a></cite></h2>
    <div class="card">
      <button id="counter" type="button"></button>
      <a class="gitRepo" href="https://github.com/radiocab/create-vite-enriched" target="_blank" rel="noopener noreferrer">Repository</a>
    </div>
    <div class="tags">
    </div>
  </div>
`;
 
 
document.querySelector('.tags').innerHTML = dependencies
  .map((dependency) => `<p>${dependency}</p>`)
  .join('');
