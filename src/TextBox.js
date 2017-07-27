class TextBox {
 constructor(id,type) {
   this.id =id;
   this.type=type;
   this.element = document.createElement('input');
  }
   
  create() {
    this.element.setAttribute('id',this.id);
    this.element.setAttribute('type',this.type);
  }
}


export default Form;