import twice from './common';

export default function clicked() {
  this.textContent = twice('two');
}

