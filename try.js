import axios from 'axios';
//import * as httpUtil from './httpUtil';
import Form from './Form';
//import Form from './Container';

// callback hell
// request('something', (response) => {
//   request(responst.data, (response) => {
//     request(responst.data, (response) => {
//       request(responst.data, (response) => {
//         request(responst.data, (response) => {
//           request(responst.data, (response) => {
//             request(responst.data, (response) => {
//               request(responst.data, (response) => {
//                 request(responst.data, (response) => {

//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// })

// // Promise = Things to study
// request('something').then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).catch(err => {

// })

const BASE_URL = 'https://todo-simple-api.herokuapp.com';
const TODO_URL = `${BASE_URL}/todos`;
let form = new Form(300, 400);
form.create();
let body= document.getElementsByTagName('body')[0];
debugger;

let container= document.getElementsByClassName('container')[0];
debugger;
container.appendChild(form.element);
body.appendChild(container);
//body.appendChild(container.element);
debugger;
//var list = document.getElementsByTagName("Form")[0];

console.log('The width of this form is ' + p.width);
console.log('The area of this form is ' + p.width*p.height);

//httpUtil.get(TODO_URL).then(response => {
//
//  response.data.data.forEach((todo) => {
//    let div = document.createElement('div');
//    div.innerHTML = todo.title;
//    document.getEledocmentsByTagName('body')[0].appendChild(div);
//  })
//})






