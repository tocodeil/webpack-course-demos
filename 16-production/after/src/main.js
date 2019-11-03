
function displayBanner() {
  const topBar = document.createElement('div');
  topBar.style.backgroundColor = 'orange';
  topBar.style.color = 'white';
  topBar.style.textAlign = 'center';
  topBar.position = 'fixed';
  topBar.top = 0;
  topBar.textContent = 'Hello World';

  document.body.appendChild(topBar);
}

displayBanner();

const header = document.createElement('h1');
header.textContent = 'Hello World';
document.body.appendChild(header);

console.log('hello world');

