(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{44:function(e,t,n){e.exports=n(83)},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),i=n.n(c),l=n(11),o=n(4),s=n(38),u=n(12),m=n(39),p=n.n(m),d=n(28),b=n(40),f=n.n(b),h=n(6),g="SET_CURRENT_USER";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={currentUser:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return v({},e,{currentUser:t.payload});default:return e}},j={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},w=n(43);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?N({},e,{quantity:e.quantity+1}):e})):[].concat(Object(w.a)(e),[N({},t,{quantity:1})])},C=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?N({},e,{quantity:e.quantity-1}):e}))},U=(n(55),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))});function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={hidden:!0,cartItems:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.TOGGLE_CART_HIDDEN:return S({},e,{hidden:!e.hidden});case j.ADD_ITEM:return S({},e,{cartItems:P(e.cartItems,t.payload)});case j.REMOVE_ITEM:return S({},e,{cartItems:C(e.cartItems,t.payload)});case j.CLEAR_ITEM_FROM_CART:return S({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},x={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type,e},A={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B={key:"root",storage:f.a,whitelist:["cart"]},_=Object(u.c)({user:y,cart:D,directory:R,shop:M}),G=Object(d.a)(B,_),H=[p.a],L=Object(u.d)(G,u.a.apply(void 0,H)),q=Object(d.b)(L),V=(n(56),n(9)),W=n.n(V),z=n(15),J=n(19),F=n(20),K=n(22),Q=n(21),Y=n(23),Z=n(17),X=n(3),$=Object(X.a)([function(e){return e.user}],(function(e){return e.currentUser})),ee=(n(58),n(16)),te=Object(X.a)([function(e){return e.directory}],(function(e){return e.sections})),ne=(n(59),Object(Z.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),ae=(n(61),Object(X.b)({sections:te})),re=Object(o.b)(ae)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(ee.a)(e,["id"]);return r.a.createElement(ne,Object.assign({key:t},n))})))})),ce=(n(62),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(re,null))}),ie=(n(63),function(){return{type:j.TOGGLE_CART_HIDDEN}}),le=function(e){return{type:j.ADD_ITEM,payload:e}},oe=(n(64),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(ee.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),se=(n(65),Object(o.b)(null,(function(e){return{addItem:function(t){return e(le(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(oe,{onClick:function(){return n(t)},inverted:!0}," Add to cart "))}))),ue=function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(se,{key:e.id,item:e})}))))},me=Object(X.a)([function(e){return e.shop}],(function(e){return e.collections})),pe=Object(X.a)([me],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),de=(n(66),Object(X.b)({collections:pe})),be=Object(o.b)(de)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,n=Object(ee.a)(e,["id"]);return r.a.createElement(ue,Object.assign({key:t},n))})))})),fe=(n(67),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(X.a)([me],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(se,{key:e.id,item:e})}))))}))),he=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(Z.b,{exact:!0,path:"".concat(t.path),component:be}),r.a.createElement(Z.b,{path:"".concat(t.path,"/:collectionId"),component:fe}))},ge=n(24),Ee=n.n(ge);n(68),n(72);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(){var e=Object(z.a)(W.a.mark((function e(t,n){var a,r,c,i,l;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=we.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(r=e.sent,console.log(r),r.exists){e.next=18;break}return c=t.displayName,i=t.email,l=new Date,e.prev=10,e.next=13,a.set(Oe({displayName:c,email:i,createdAt:l},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("setUserError",e.t0.message);case 18:return e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}();Ee.a.initializeApp({apiKey:"AIzaSyAuG3cnz9UNaK_-PLpl6xBSQ3ZI6QKe9bk",authDomain:"e-shop-db-5a05e.firebaseapp.com",databaseURL:"https://e-shop-db-5a05e.firebaseio.com",projectId:"e-shop-db-5a05e",storageBucket:"e-shop-db-5a05e.appspot.com",messagingSenderId:"16631494295",appId:"1:16631494295:web:98924c3780e5d4edc05bd2",measurementId:"G-MGREBKL0ZB"});var je=Ee.a.auth(),we=Ee.a.firestore(),ke=new Ee.a.auth.GoogleAuthProvider;ke.setCustomParameters({prompt:"select_account"});var Ne=function(){return je.signInWithPopup(ke)},Pe=(Ee.a,function(e){return e.cart}),Ce=Object(X.a)([Pe],(function(e){return e.cartItems})),Ue=Object(X.a)([Pe],(function(e){return e.hidden})),Ie=Object(X.a)([Ce],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Se=Object(X.a)([Ce],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var xe=r.a.createElement("g",null),Re=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Me=r.a.createElement("g",null),Be=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ge=r.a.createElement("g",null),He=r.a.createElement("g",null),Le=r.a.createElement("g",null),qe=r.a.createElement("g",null),Ve=r.a.createElement("g",null),We=r.a.createElement("g",null),ze=r.a.createElement("g",null),Je=r.a.createElement("g",null),Fe=r.a.createElement("g",null),Ke=function(e){var t=e.svgRef,n=e.title,a=De(e,["svgRef","title"]);return r.a.createElement("svg",Te({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),xe,Re,Ae,Me,Be,_e,Ge,He,Le,qe,Ve,We,ze,Je,Fe)},Qe=r.a.forwardRef((function(e,t){return r.a.createElement(Ke,Te({svgRef:t},e))})),Ye=(n.p,n(74),Object(X.b)({itemCount:Ie})),Ze=Object(o.b)(Ye,(function(e){return{toggleCartHidden:function(){return e(ie())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Qe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),Xe=(n(75),Object(X.b)({cartItems:Ce})),$e=Object(Z.g)(Object(o.b)(Xe)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(U,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"YOUR CART IS EMPTY")),r.a.createElement(oe,{onClick:function(){n.push("/checkout"),a(ie())}},"GO TO CHECKOUT"))})));function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function tt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var nt=r.a.createElement("title",null,"Group"),at=r.a.createElement("desc",null,"Created with Sketch."),rt=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ct=function(e){var t=e.svgRef,n=e.title,a=tt(e,["svgRef","title"]);return r.a.createElement("svg",et({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?nt:n?r.a.createElement("title",null,n):null,at,rt)},it=r.a.forwardRef((function(e,t){return r.a.createElement(ct,et({svgRef:t},e))})),lt=(n.p,n(76),Object(X.b)({currentUser:$,hidden:Ue})),ot=Object(o.b)(lt)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(it,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return je.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Ze,null)),n?null:r.a.createElement($e,null))})),st=(n(77),function(e){var t=e.handleChange,n=e.label,a=Object(ee.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),ut=(n(78),function(e){function t(e){var n;return Object(J.a)(this,t),(n=Object(K.a)(this,Object(Q.a)(t).call(this,e))).handleSubmit=function(){var e=Object(z.a)(W.a.mark((function e(t){var a,r,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,je.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(h.a)({},r,a))},n.state={email:"",password:""},n}return Object(Y.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(st,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(st,{name:"password",type:"password",value:this.state.password,label:"password",handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(oe,{type:"submit"},"Sign in"),r.a.createElement(oe,{onClick:Ne,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),mt=(n(79),function(e){function t(){var e;return Object(J.a)(this,t),(e=Object(K.a)(this,Object(Q.a)(t).call(this))).handleSubmit=function(){var t=Object(z.a)(W.a.mark((function t(n){var a,r,c,i,l,o,s;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=7;break}return alert("passwords don't match"),t.abrupt("return");case 7:return t.prev=7,t.next=10,je.createUserWithEmailAndPassword(c,i);case 10:return o=t.sent,s=o.user,t.next=14,ye(s,{displayName:r});case 14:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(7),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[7,17]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(Y.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(st,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(st,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(st,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(st,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(oe,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),pt=(n(80),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(ut,null),r.a.createElement(mt,null))}),dt=(n(81),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:j.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(le(t))},removeItem:function(t){return e(function(e){return{type:j.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),bt=n(42),ft=n.n(bt),ht=function(e){var t=e.price,n=100*t;return r.a.createElement(ft.a,{label:"Pay Now",name:"E-shop",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_jQ1gnE8THdHVTph5D5svZHt100ndCHijSg"})},gt=(n(82),Object(X.b)({cartItems:Ce,total:Se})),Et=Object(o.b)(gt)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"remove"))),t.map((function(e){return r.a.createElement(dt,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL $",n)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/02 - CVV: 123"),r.a.createElement(ht,{price:n}))}));function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vt(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var yt=function(e){function t(){var e,n;Object(J.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(K.a)(this,(e=Object(Q.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(Y.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=je.onAuthStateChanged(function(){var t=Object(z.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,ye(n);case 3:t.sent.onSnapshot((function(t){e(Ot({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ot,null),r.a.createElement(Z.d,null,r.a.createElement(Z.b,{exact:!0,path:"/e-shop/",component:ce}),r.a.createElement(Z.b,{path:"/e-shop/shop",component:he}),r.a.createElement(Z.b,{exact:!0,path:"/e-shop/signIn",render:function(){return e.props.currentUser?r.a.createElement(Z.a,{to:"/"}):r.a.createElement(pt,null)}}),r.a.createElement(Z.b,{exact:!0,path:"/e-shop/checkout",component:Et})))}}]),t}(r.a.Component),jt=Object(X.b)({currentUser:$}),wt=Object(o.b)(jt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(yt);i.a.render(r.a.createElement(o.a,{store:L},r.a.createElement(l.a,null,r.a.createElement(s.a,{persistor:q},r.a.createElement(wt,null)))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.acbbe8c9.chunk.js.map