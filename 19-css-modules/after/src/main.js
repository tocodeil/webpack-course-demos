import { paint as paintRedbox } from './redbox/redbox';
import { paint as paintBluecircle } from './bluecircle/bluecircle';
import './style.scss';

const e1 = document.createElement('div');
const e2 = document.createElement('div');

document.body.appendChild(e1);
document.body.appendChild(e2);

paintRedbox(e1);
paintBluecircle(e2);
