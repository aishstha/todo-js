import axios from 'axios';
import * as httpUtil from './httpUtil';
import Form from './Form';


const BASE_URL = 'https://todo-simple-api.herokuapp.com';
const TODO_URL = `${BASE_URL}/todos?page_size=300`; //todos?page_size=300
let form = new Form(300, 400);
console.log('form=', form);
//form.create();
form.addTextBox('title');
//form.getTextBox('title');

form.addDes('dec');
form.addButton('1');

//let textbox= new TextBox(1);
//console.log('textbox',textbox);
//textbox.create(id);

let body = document.getElementsByTagName('body')[0];
console.log('body', body);
let container = document.getElementsByClassName('container')[0];

container.appendChild(form.element);
body.appendChild(container);

form.element.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('val', form.textbox.value);
  let data = {
    'title': form.textbox.value,
    'description': form.desc.value
  };
  postData(TODO_URL, data);
});

// GET ALL
// DISPLAY
// POST
// DELETE
// UPDATE

function postData(TODO_URL, data) {
  httpUtil.post(TODO_URL, data)
    .then((response) => {
      console.log('hello', response);

      let container = document.createElement('div');
      container.style.height = 90 + 'px';
      container.style.width = 400 + 'px';
      container.style.background = "wheat";
      container.style.border = "thin solid #000000";

      let div = document.createElement('div');
      div.setAttribute('id', 'titleid');

      div.innerHTML = response.data.data.title;
      div.style.width = 400 + 'px';
      div.style.height = 20 + 'px';

      let div2 = document.createElement('div');
      div2.style.backgroundColor = "pink";
      div2.setAttribute('id', 'descriptiondisplay');
      div2.innerHTML = response.data.data.description;

      let delbutton = document.createElement('button');
      delbutton.innerHTML = "remove";
      delbutton.style.float = "right";
      delbutton.style.backgroundColor = "#F5B7B1  ";
      delbutton.style.borderColor = "#B03A2E  ";
      delbutton.addEventListener('click', (e) => {
        remove('https://todo-simple-api.herokuapp.com/todos/', todo.id)
      })
      div2.appendChild(delbutton);

      let m = container.appendChild(div);
      let n = container.appendChild(div2);
      document.getElementsByTagName('body')[0].appendChild(container);

      console.log(n);
      //     //div append
      //     response.id
      //     //give div id
    })
}

getdata();

function getdata() {
  httpUtil.get(TODO_URL).then(response => {

    response.data.data.forEach((todo) => {
      let title = document.createElement('div');
      title.setAttribute('id', `merodiv-${todo.id}`);
      title.style.height = 90 + 'px';
      title.style.width = 400 + 'px';
      title.style.backgroundColor = 'wheat';
      title.style.border = "thin solid #000000";
      title.innerHTML = todo.title;
      document.getElementsByTagName('body')[0].appendChild(title);

      let description = document.createElement('div');
      description.setAttribute('id', `contdiv-${todo.id}`);
      description.setAttribute('description', `descriptiondiv-${todo.description}`);
      description.style.backgroundColor = 'pink';
      description.innerHTML = todo.description;
      title.appendChild(description);

      let delbutton = document.createElement('button');
      delbutton.innerHTML = "remove";
      delbutton.style.float = "right";
      delbutton.style.backgroundColor = "#F5B7B1  ";
      delbutton.style.borderColor = "#B03A2E  ";
      delbutton.addEventListener('click', (e) => {
        remove('https://todo-simple-api.herokuapp.com/todos/', todo.id)
      })
      title.appendChild(delbutton);

      let updatebutton = document.createElement('button');
      updatebutton.style.float = "right";
      updatebutton.style.backgroundColor = "#ABEBC6";
      updatebutton.style.borderColor = "green";

      updatebutton.setAttribute('id', 'update-add' + todo.id);
      updatebutton.innerHTML = "update";
      title.appendChild(updatebutton);

      updatebutton.addEventListener('click', (e) => {
        update('https://todo-simple-api.herokuapp.com/todos/', todo.id)
        console.log('update clicked');
      })
    })
  })
}

function remove(url, id) {
  httpUtil.remove(url + id);
  body.removeChild(document.getElementById('merodiv-' + id));
}

function update(url, id) {
  let description = document.getElementById(`contdiv-${id}`);
  let title = document.getElementById(`merodiv-${id}`);
  let editHere = document.createElement('textarea');
  editHere.setAttribute('placeholder', description);
  //  editHere.innerHTML(description);

  editHere.setAttribute('id', 'edit' + id);
  editHere.setAttribute('cols', 30);
  editHere.setAttribute('rows', 1);
  title.appendChild(editHere);

  document.getElementById("update-add" + id).style.display = "none";

  let donebtn = document.createElement('button');
  donebtn.setAttribute('id', 'done' + id);
  donebtn.innerHTML = "Done";
  title.appendChild(donebtn);

  donebtn.addEventListener('click', (e) => {
    let data = {
      "title": editHere.value
    };

    httpUtil.put(url + id, data).then(response => {

      console.log(response.data.data);

      //delete the previous div
      //create new
      // add the updated div


      //      document.getElementsByTagName('body')[0].removeChild(document.getElementById('merodiv-' + id));

      let h = document.getElementById('meroDiv' + id);
      console.log(response.data.data.title);

      let container = document.createElement('div');
      container.style.height = 90 + 'px';
      container.style.width = 400 + 'px';
      container.style.background = "wheat";
      container.style.border = "thin solid #000000";
      //      
      //      let newtitle = document.createElement("div");
      //      let newdescription = document.createElement("div");
      //      newdescription.style.backgroundColor="pink";
      //      newtitle.innerHTML=response.data.data.title;
      //      
      //      body.removeChild(title);
      //      remove('https://todo-simple-api.herokuapp.com/todos/', response.data.data.id);

      title.innerHTML = response.data.data.title;
      container.innerHTML = response.data.description;

      container.appendChild(newdescription);
      container.appendChild(newtitle);
      document.getElementsByTagName('body')[0].appendChild(container);

    })


  })





}
