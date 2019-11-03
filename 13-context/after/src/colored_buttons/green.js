export default function createButton() {
  const b = document.createElement('button');
  b.textContent = 'Green';
  b.style.backgroundColor = 'green';
  b.style.color = 'white';
  document.body.appendChild(b);
}

