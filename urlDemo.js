import url from 'url';

const urlString = "https://wwww.google.com/search?q=hello+world";

//URL OBJECT
const urlObj = new URL(urlString);
console.log(urlObj);

//format();
console.log(url.format(urlObj));

//import.meta.url - file URL();
console.log(import.meta.url);

//format();
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
console.log('limit','5');
params.delete('limit');
console.log(params);