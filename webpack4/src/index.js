import css from './css/index.css';
import sass from './style/common.scss';
// import $ from 'jquery';

let oDiv1 = document.querySelector('#div1');
oDiv1.innerHTML='hello world';
let json =require ('../author.json');
document.querySelector('#json').innerHTML = `作者：${json.name},年龄:${json.age}`