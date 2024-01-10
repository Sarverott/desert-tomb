/*#   Sarverott @ 2k23 - vue.js components generator   #*/
class DesertTomb{
  static enter(elementLabel){
    this.el=elementLabel;
    this.props=[];
    return this;
  }
  static fromPapyrus(dataObject){
    if(!this.hasOwnProperty("data"))this.data={};
    Object.assign(this.data, dataObject);
    return this;
  }
  static pyramiding(componentName, rootTag, attrBook={}){
    if(!this.hasOwnProperty("pyramideverse")){
      this.pyramideverse={};
    }else if(this.pyramideverse.hasOwnProperty(componentName)){
      throw "component alredy exists!";
    }
    return this.pyramideverse[componentName]=new this(componentName, rootTag, attrBook);
  }
  static setTrap(label, action){
    if(!this.hasOwnProperty("methods"))this.methods={};
    this.methods[label]=action;
    return this;
  }
  static sealing(){
    window.onload=function(){
      DesertTomb.gate=new Vue({
        el:DesertTomb.el,
        data:DesertTomb.data,
        methods:DesertTomb.methods
      });
    }
  }
  constructor(name, rootTag, attrBook={}){
    this.scrollName=name;
    this.scrollType=rootTag;
    this.scrollDescription=attrBook;
    this.data=function(){return {}};
    this.props=[];
    this.methods={};
    this.innerTemplate=`<slot></slot>`;
  }
  structureInside(innerTemplate){
    this.innerTemplate=innerTemplate;
    return this;
  }
  mummify(...props){
    this.props=props;
    return this;
  }
  supplyCrypt(tresure){
    this.data=tresure;
    return this;
  }
  get entumb(){
    if(!this.scrollDescription.hasOwnProperty("class"))this.scrollDescription.class="";
    this.scrollDescription.class+=" "+this.scrollName;
    this.template="<"+this.scrollType.toLowerCase();
    for(var i in this.scrollDescription){
      this.template+=` ${i}="${this.scrollDescription[i]}"`
    }
    this.template+=`>
      ${this.innerTemplate}
    </${this.scrollType.toLowerCase()}>`;
    Vue.component(this.scrollName, this);
    return this.constructor;
  }
}
