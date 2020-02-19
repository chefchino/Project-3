(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),c=a.n(l),o=(a(59),a(60),a(27)),s=a(20),i=a(28),u=(a(61),a(108)),m=a(109),d=a(110),h=a(111),p=a(112),g=a(113),f=a(114),E=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(m.a,{href:"/"},"Home"),r.a.createElement(d.a,{onClick:function(){return c(!l)}}),r.a.createElement(h.a,{isOpen:l,navbar:!0},r.a.createElement(p.a,{className:"mr-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(f.a,{href:"/electronics"},"Electronics"))),r.a.createElement(f.a,{href:"/cart"},"Cart"))))},b=a(29),v=a(50),N=a(15),C=a(16),y=a(18),I=a(17),S=a(19);a(75);var O=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search Stuff...",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"find stuff")))};a(76);var j=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};function k(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}var w=a(115),x=a(119),F=a(116),P=a(117),L=a(118),W=(a(77),function(e){var t=e.className,a=Object(n.useState)(!1),l=Object(i.a)(a,2),c=l[0],o=l[1],s=function(){return o(!c)},u=r.a.createElement("button",{className:"close",style:{position:"absolute",top:"15px",right:"15px"},onClick:s},"\xd7");return r.a.createElement("div",null,r.a.createElement(w.a,{id:"BtnDetail",color:"success",onClick:s},"Details"),r.a.createElement(x.a,{isOpen:c,toggle:s,className:t,external:u},r.a.createElement(F.a,null,e.title),r.a.createElement(P.a,null,r.a.createElement("div",{className:"img-container",style:{backgroundImage:"url(".concat(e.image,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}),r.a.createElement("h3",null,"$",e.price),r.a.createElement("h4",null,"Rating: ",e.rating),r.a.createElement("h4",null,"Description"),r.a.createElement("p",null,e.description)),r.a.createElement(L.a,null,r.a.createElement(w.a,{className:"btn btn-success",id:"detailBtn",onClick:s},"Close"))))});a(78),a(79);var A=function(e){return r.a.createElement("span",Object.assign({className:"btn btn-success",id:"BtnCart"},e,{role:"button",tabIndex:"0"}),"AddToCart")};var D=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container",style:{backgroundImage:"url(".concat(e.image,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}),r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",{id:"titleInfo"},r.a.createElement("strong",null,e.title)),r.a.createElement("li",null,r.a.createElement("strong",null,"Rating: ",e.rating)),r.a.createElement("li",null,r.a.createElement("strong",null,"$",e.price)))),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement(A,{onClick:function(){e.handleAddToCart(e.id)}}),r.a.createElement(W,{id:"BtnDetail",image:e.image,title:e.title,price:e.price,rating:e.rating,description:e.description})))},T=a(22),z=a.n(T),U={getAllProducts:function(){return z.a.get("api/products")},getProduct:function(e){return z.a.get("/api/products/"+e)},logIn:function(e){return z.a.post("api/login",e)},signUp:function(e){return z.a.post("api/signup",e)},addCartItems:function(e,t){return z.a.post("api/cart/"+t,e)},getCartItems:function(e){return z.a.get("api/cart/"+e)},Purchase:function(e){return z.a.delete("api/cart/"+e)}},B=(a(97),function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],search:"",results:[],cart:[],modalOpen:!0},a.setProducts=function(){var e=[];e.forEach((function(t){var a=Object(v.a)({},t);e=[].concat(Object(b.a)(e),[a])}))},a.loadProduct=function(){U.getAllProducts().then((function(e){return a.setState({products:e.data,title:"",image:"",category:"",rating:"",price:"",description:""})})).catch((function(e){return console.log(e)}))},a.loadSearch=function(){U.getProduct(a.state.search).then((function(e){return a.setState({products:e.data,title:"",image:"",category:"",rating:"",price:"",description:""})}))},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.search),a.loadSearch()},a.getItem=function(e){return a.state.products.find((function(t){return t.id===e}))},a.handleDetail=function(e){var t=a.getItem(e);a.setState((function(){return{Product:t}}),(function(){console.log(a.state)}))},a.handleAddToCart=function(e){console.log(e);var t=Object(b.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];a.setState({cart:[].concat(Object(b.a)(a.state.cart),[r])},(function(){console.log(a.state);var e=sessionStorage.getItem("Logged In");U.addCartItems(a.state.cart,e),console.log({User:e})}))},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.setProducts(),this.loadProduct()}},{key:"render",value:function(){var e=this;return r.a.createElement(k,{fluid:!0},r.a.createElement("h1",{className:"title"},"Ecommerce"),r.a.createElement(O,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement("hr",null),r.a.createElement(j,null,this.state.products.map((function(t){return r.a.createElement(D,{className:"productCards",id:t.id,key:t.id,title:t.title,rating:t.rating,price:t.price,image:t.image,description:t.description,handleAddToCart:e.handleAddToCart,handleDetail:e.handleDetail})}))))}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={cart:[],subtotal:0,total:0},a.deleteItem=function(){var e=sessionStorage.getItem("Logged In");U.deleteItem(e).then((function(e){return a.setState({cart:e.data,title:"",image:"",category:"",rating:"",price:"",description:""})}))},a.handleGetFromCart=function(){var e=sessionStorage.getItem("Logged In");U.getCartItems(e).then((function(e){return a.setState({cart:e.data,title:"",image:"",category:"",rating:"",price:"",description:""})})).then((function(){return a.getsubTotal()})).then((function(){return a.getTotal()})).catch((function(e){return console.log(e)}))},a.getsubTotal=function(){var e=a.state.cart.map((function(e){return e.price}));console.log(e,e.reduce((function(e,t){return e+t}),0)),a.setState({subtotal:Math.ceil(100*e.reduce((function(e,t){return e+t}),0))/100})},a.getTotal=function(){var e=1.0475*a.state.subtotal;a.setState({total:Math.ceil(100*e)/100})},a.handlePurchase=function(e){e.preventDefault(),a.deleteCart()},a.deleteCart=function(){var e=sessionStorage.getItem("Logged In");U.Purchase(e).then((function(e){console.log("RES!!!!!!!",e)})),a.setState({cart:[],subtotal:0,total:0}),alert("You purchased the item(s) in your cart!")},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.handleGetFromCart(),console.log("this.state",this.state)}},{key:"render",value:function(){return r.a.createElement(k,{fluid:!0},r.a.createElement("h1",{className:"title"},"Ecommerce"),r.a.createElement(k,null,r.a.createElement("h7",null,"SubTotal: ",this.state.subtotal),r.a.createElement("br",null),r.a.createElement("h7",null,"Tax: 4.75%"),r.a.createElement("h4",null,"Total: ",this.state.total),r.a.createElement("button",{type:"submit",onClick:this.handlePurchase,className:"btn btn-success"},"Buy IT!")),r.a.createElement("hr",null),r.a.createElement(j,null,this.state.cart.map((function(e){return r.a.createElement(D,{id:e.id,key:e.id,title:e.title,rating:e.rating,price:e.price,image:e.image})}))))}}]),t}(n.Component),M=a(24);a(98);var G=function(e){return r.a.createElement("form",{className:"sigup-form"},r.a.createElement("div",{className:"form"},r.a.createElement("label",{htmlFor:"username"},"Username:"),r.a.createElement("input",{value:e.userName,onChange:e.handleInputChange,name:"userName",type:"text",className:"form-control",placholder:"userName",id:"username"}),r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{value:e.passWord,onChange:e.handleInputChange,name:"passWord",type:"password",className:"form-control",placholder:"Password",id:"password"}),r.a.createElement("h2",null,"Name"),r.a.createElement("label",{htmlFor:"firstname"},"First Name:"),r.a.createElement("input",{value:e.firstName,onChange:e.handleInputChange,name:"firstName",type:"text",className:"form-control",placholder:"First Name",id:"firstname"}),r.a.createElement("label",{htmlFor:"lastname"},"Last Name:"),r.a.createElement("input",{value:e.lastName,onChange:e.handleInputChange,name:"lastName",type:"text",className:"form-control",placholder:"Last Name",id:"lastname"}),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{value:e.email,onChange:e.handleInputChange,name:"email",type:"email",className:"form-control",placholder:"Email",id:"email"}),r.a.createElement("h2",null,"Address"),r.a.createElement("div",{className:"address"},r.a.createElement("label",{htmlFor:"street"},"Street:"),r.a.createElement("input",{value:e.street,onChange:e.handleInputChange,name:"street",type:"text",className:"form-control",placholder:"Street",id:"street"}),r.a.createElement("label",{htmlFor:"city"},"City:"),r.a.createElement("input",{value:e.city,onChange:e.handleInputChange,name:"city",type:"text",className:"form-control",placholder:"City",id:"city"}),r.a.createElement("label",{htmlFor:"state"},"State:"),r.a.createElement("input",{value:e.state,onChange:e.handleInputChange,name:"state",type:"text",className:"form-control",placholder:"State",id:"state"}),r.a.createElement("label",{htmlFor:"zipcode"},"Zipcode:"),r.a.createElement("input",{value:e.zipcode,onChange:e.handleInputChange,name:"zipcode",type:"text",className:"form-control",placholder:"Zipcode",id:"zipcode"})),r.a.createElement("button",{typr:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Create")))},$=(a(99),function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",userName:"",passWord:"",email:"",street:"",city:"",state:"",zipcode:""},a.handleSignUp=function(){a.state.firstName&&a.state.lastName&&a.state.email&&a.state.userName&&a.state.passWord&&a.state.street&&a.state.city&&a.state.state&&a.state.zipcode&&U.signUp({firstName:a.state.firstName,lastName:a.state.lastName,userName:a.state.userName,passWord:a.state.passWord,email:a.state.email,street:a.state.street,city:a.state.city,state:a.state.state,zipcode:a.state.zipcode}).then((function(e){console.log("Added new User!"),sessionStorage.setItem("NewUser!!!",e.id),window.location.replace("/electronics")})).catch((function(e){return console.log(e)})),console.log("firstName:",a.state.firstName,"lastName:",a.state.lastName,"userName:",a.state.userName,"passWord:",a.state.passWord,"email:",a.state.email,"street:",a.state.street,"city:",a.state.city,"state:",a.state.state,"zipcode:",a.state.zipcode)},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(M.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.handleSignUp()},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"ECommerce"),r.a.createElement(G,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}))}}]),t}(n.Component));a(100);var J=function(e){return r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("h1",{className:"title"},"Login"),r.a.createElement("input",{value:e.username,onChange:e.handleInputChange,name:"userName",type:"text",className:"form-control",placeholder:"Username",id:"userLogin"}),r.a.createElement("hr",null),r.a.createElement("input",{value:e.password,onChange:e.handleInputChange,name:"passWord",type:"password",className:"form-control",placeholder:"password",id:"passwordLogin"}),r.a.createElement("hr",null),r.a.createElement("button",{type:"submit",onClick:e.handleLoginSubmit,className:"btn btn-success"},"Let me in")))},Z=(a(101),function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",passWord:""},a.handleLogin=function(){a.state.userName&&a.state.passWord&&U.logIn({userName:a.state.userName,passWord:a.state.passWord}).then((function(e){console.log({res:e}),sessionStorage.setItem("Logged In",e.data._id),window.location.replace("/electronics")})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(M.a)({},n,r))},a.handleLoginSubmit=function(e){e.preventDefault(),a.handleLogin()},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{handleLoginSubmit:this.handleLoginSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(o.b,{to:"/signup",role:"button",className:"btn btn-link"},"SIGN UP")," ",r.a.createElement(s.a,{exact:!0,path:"/signup",component:$}))}}]),t}(n.Component));a(48);var H=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(s.a,{exact:!0,path:"/",component:Z}),r.a.createElement(s.a,{exact:!0,path:"/Signup",component:$}),r.a.createElement(s.a,{exact:!0,path:"/Electronics",component:B}),r.a.createElement(s.a,{exact:!0,path:"/Cart",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a(107)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.e710eaf9.chunk.js.map