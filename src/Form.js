class Form {
 constructor(height, width) {
    this.name = 'Form1';
    this.height = height;
    this.width = width;
   this.element = document.createElement('form');
   this.textbox;
   this.desc;
  }
  
 
  create() {
    this.element.setAttribute('name',this.name);
    this.element.style.color='pink';
    this.element.style.width=this.width;
   this.element.style.height=this.height;
  }
  addTextBox(id){
    this.textbox = document.createElement('input');
    this.textbox.setAttribute('id',id);
    this.textbox.setAttribute('type','input');
//    this.textbox.style.placeholder="enter title";
    this.element.appendChild(this.textbox);
    }
 addDes(id)
  {
    this.desc = document.createElement('input');
    this.desc.setAttribute('id',id);
    this.desc.setAttribute('type','input');
    this.desc.style.marginLeft=12+'px';
    this.element.append(this.desc);
    
  }
  getDes(id)
  {
    return document.getElementById(id);
  }
  getTextBox(id) {
    return document.getElementById(id);
  }
  addButton(id){
    let btn = document.createElement('input');
    btn.setAttribute('id',id);
    btn.setAttribute('type','submit');
    btn.setAttribute('name',"btnsend");
    this.element.appendChild(btn);
//    btn.preventDefault();
  }
  
}


export default Form;