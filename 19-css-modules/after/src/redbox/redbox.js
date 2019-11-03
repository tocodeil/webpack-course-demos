import style from './redbox.module.scss';

export function paint(el) {
  el.textContent = "I'm a red box";
  el.setAttribute('class', style.redbox);
}
