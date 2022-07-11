let x = () => {
  document.querySelector('xmp').innerText = document.querySelector('#hamburger').outerHTML;
}
x();

const genF = (elem) => {
  return document.createElement(elem);
};

let connect = () => {
  if (location.href.includes('github')) {
    let baseUrl = genF('BASE');
    document.head.insertBefore(baseUrl, null);
    baseUrl.href = 'https://molnaristvan95.github.io/Lesson-12---Flexbox-Maket/';
  }
}
connect();
