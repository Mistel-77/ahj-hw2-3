import info from './info';

const sortTables = document.getElementsByClassName('sortTable')[0];
const titles = document.getElementsByClassName('title');

const sortIdDown = [...info.sort((a, b) => (a.id > b.id ? 1 : -1))];
const sortIdUp = [...info.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()];
const sortTitleDown = [...info.sort((a, b) => (a.title > b.title ? 1 : -1))];
const sortTitleUp = [...info.sort((a, b) => (a.title > b.title ? 1 : -1)).reverse()];
const sortYearDown = [...info.sort((a, b) => (a.year > b.year ? 1 : -1))];
const sortYearUp = [...info.sort((a, b) => (a.year > b.year ? 1 : -1)).reverse()];
const sortImdbDown = [...info.sort((a, b) => (a.imdb > b.imdb ? 1 : -1))];
const sortImdbUp = [...info.sort((a, b) => (a.imdb > b.imdb ? 1 : -1)).reverse()];

export default function sortData(data) {
  sortTables.innerHTML = '';
  data.forEach((el) => {
    sortTables.insertAdjacentHTML('beforeend', `<tr><td>${el.id}</td><td>${el.title}</td><td>(${el.year})</td><td>imdb: ${el.imdb.toFixed(2)}</td></tr>`);
  });
}

sortData(info);
let counter = 1;
setInterval(() => {
  switch (counter) {
    case 1:
      sortData(sortIdDown);
      titles[0].classList.add('down');
      break;
    case 2:
      sortData(sortIdUp);
      titles[0].classList.remove('down');
      titles[0].classList.add('up');
      break;
    case 3:
      sortData(sortTitleDown);
      titles[0].classList.remove('up');
      titles[1].classList.add('down');
      break;
    case 4:
      sortData(sortTitleUp);
      titles[1].classList.remove('down');
      titles[1].classList.add('up');
      break;
    case 5:
      sortData(sortYearDown);
      titles[1].classList.remove('up');
      titles[2].classList.add('down');
      break;
    case 6:
      sortData(sortYearUp);
      titles[2].classList.remove('down');
      titles[2].classList.add('up');
      break;
    case 7:
      sortData(sortImdbDown);
      titles[2].classList.remove('up');
      titles[3].classList.add('down');
      break;
    case 8:
      sortData(sortImdbUp);
      titles[3].classList.remove('down');
      titles[3].classList.add('up');
      break;
    default:
      counter = 0;
      titles[3].classList.remove('up');
      break;
  }
  counter += 1;
}, 2000);
