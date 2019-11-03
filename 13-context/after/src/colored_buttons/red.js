export default function createButton() {
  const b = document.createElement('button');
  b.textContent = 'Red';
  b.style.backgroundColor = 'red';
  b.style.color = 'white';
  document.body.appendChild(b);
}

