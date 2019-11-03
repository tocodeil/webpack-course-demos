export default function createButton() {
  const b = document.createElement('button');
  b.textContent = 'Blue';
  b.style.backgroundColor = 'blue';
  b.style.color = 'white';
  document.body.appendChild(b);
}
