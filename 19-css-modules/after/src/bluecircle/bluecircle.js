import style from './bluecircle.module.scss';
import '../style.scss';

export function paint(el) {
  el.textContent = "I'm a blue circle";
  el.setAttribute('class', style.bluecircle);
}
