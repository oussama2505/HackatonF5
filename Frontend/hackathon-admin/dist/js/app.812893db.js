(function(){"use strict";var e={938:function(e,t,o){var a=o(751),l=o(641);const n={id:"app"};function r(e,t,o,a,r,s){const i=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(i)])}var s={name:"App"},i=o(262);const u=(0,i.A)(s,[["render",r]]);var c=u,d=o(220),m=o(33),p=o(153),b=o(953),v=o(682);const g=e=>((0,l.Qi)("data-v-37236188"),e=e(),(0,l.jt)(),e),f={class:"bg-beige border-gray-200 dark:bg-gray-900"},h={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-6"},k=g((()=>(0,l.Lk)("img",{src:p,class:"h-8",alt:"Flowbite Logo"},null,-1))),w={class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},x=g((()=>(0,l.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,l.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1))),y=[x],L={class:"relative md:order-2"},A=g((()=>(0,l.Lk)("svg",{"aria-hidden":"true",class:"h-3.5 w-3.5 rounded-full me-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},null,-1))),C=g((()=>(0,l.Lk)("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,l.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))),E={class:"py-1 flex"},F=["src"],_=["src"];var S={__name:"Header",setup(e){const t=(0,d.rd)(),n=(0,v.s9)(),{t:r}=n,s=(0,b.KR)(o(275)),i=(0,b.KR)(o(355)),u=(0,b.KR)(!1),c=(0,b.KR)(!1),p=()=>{u.value=!u.value},g=()=>{u.value=!1},x=e=>{n.locale.value=e,localStorage.setItem("language",e),g()},S=()=>{localStorage.removeItem("token"),t.push("/login")},j=()=>{c.value=!c.value};return(e,t)=>{const o=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("nav",f,[(0,l.Lk)("div",h,[(0,l.bF)(o,{to:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},{default:(0,l.k6)((()=>[k,(0,l.Lk)("span",w,(0,m.v_)(e.$t("header.title")),1)])),_:1}),(0,l.Lk)("button",{onClick:j,class:"md:hidden text-gray-700 dark:text-white focus:outline-none"},y),(0,l.Lk)("div",{class:(0,m.C4)([{hidden:!c.value,block:c.value},"w-full md:flex md:w-auto md:order-1"])},[(0,l.bF)(o,{to:"/",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(e.$t("header.home")),1)])),_:1}),(0,l.bF)(o,{to:"/dashboard",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(e.$t("header.dashboard")),1)])),_:1}),(0,l.bF)(o,{to:"/groups",class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(e.$t("header.groups")),1)])),_:1}),(0,l.Lk)("button",{onClick:S,class:"block w-full md:inline md:w-auto justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"},(0,m.v_)(e.$t("header.logout")),1)],2),(0,l.Lk)("div",L,[(0,l.Lk)("button",{type:"button",onClick:p,class:"inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"},[A,(0,l.Lk)("span",null,(0,m.v_)(e.$t("header.language")),1),C]),(0,l.bo)((0,l.Lk)("div",{onClick:g,class:"absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300"},[(0,l.Lk)("ul",E,[(0,l.Lk)("li",null,[(0,l.Lk)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.D$)((e=>x("en")),["stop","prevent"])),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[(0,l.Lk)("img",{src:s.value,alt:"English",class:"w-4 h-4 mr-2"},null,8,F),(0,l.eW)(" English")])]),(0,l.Lk)("li",null,[(0,l.Lk)("a",{href:"#",onClick:t[1]||(t[1]=(0,a.D$)((e=>x("es")),["stop","prevent"])),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[(0,l.Lk)("img",{src:i.value,alt:"Español",class:"w-4 h-4 mr-2"},null,8,_),(0,l.eW)(" Español")])])])],512),[[a.aG,u.value]])])])])}}};const j=(0,i.A)(S,[["__scopeId","data-v-37236188"]]);var T=j,R=o(335);const I={class:"flex min-h-0 mb-5 mt-20 flex-col justify-center px-6 lg:px-8"},X={class:"sm:mx-auto sm:w-full sm:max-w-sm"},B=["src"],O={class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},P={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},D={for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},G={class:"mt-2"},K=["placeholder"],V={class:"flex items-center justify-between"},U={for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},W={class:"mt-2"},M=["placeholder"],J={type:"submit",class:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"};var Y={__name:"Login",setup(e){const{t:t}=(0,v.s9)(),n=(0,d.rd)(),r=(0,b.KR)(""),s=(0,b.KR)(""),i=o(153),u=async()=>{if(r.value&&s.value)try{const e=await R.A.post("http://localhost:4000/api/login",{email:r.value,password:s.value});localStorage.setItem("token",e.data.access_token),n.push("/dashboard")}catch(e){alert(t("login.invalidCredentials"))}};return(e,o)=>((0,l.uX)(),(0,l.CE)("div",I,[(0,l.Lk)("div",X,[(0,l.Lk)("img",{class:"mx-auto h-10 w-auto",src:(0,b.R1)(i),alt:"Logo"},null,8,B),(0,l.Lk)("h2",O,(0,m.v_)((0,b.R1)(t)("login.title")),1)]),(0,l.Lk)("div",P,[(0,l.Lk)("form",{class:"space-y-6",onSubmit:(0,a.D$)(u,["prevent"])},[(0,l.Lk)("div",null,[(0,l.Lk)("label",D,(0,m.v_)((0,b.R1)(t)("login.email")),1),(0,l.Lk)("div",G,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>r.value=e),id:"email",name:"email",type:"email",autocomplete:"email",required:"",placeholder:(0,b.R1)(t)("login.emailPlaceholder"),class:"block w-full p-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,K),[[a.Jo,r.value]])])]),(0,l.Lk)("div",null,[(0,l.Lk)("div",V,[(0,l.Lk)("label",U,(0,m.v_)((0,b.R1)(t)("login.password")),1)]),(0,l.Lk)("div",W,[(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.value=e),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",placeholder:(0,b.R1)(t)("login.passwordPlaceholder"),class:"block w-full p-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,M),[[a.Jo,s.value]])])]),(0,l.Lk)("div",null,[(0,l.Lk)("button",J,(0,m.v_)((0,b.R1)(t)("login.signIn")),1)])],32)])]))}};const q=(0,i.A)(Y,[["__scopeId","data-v-6e8e3872"]]);var N=q,Q=o.p+"img/f5.50007ee4.png";const z={class:"fixed bottom-0 left-0 bg-beige shadow p-4 dark:bg-gray-800 w-full mt-6"},H={class:"max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between"},Z={class:"text-sm text-gray-500 dark:text-gray-400"},$=(0,l.Lk)("a",{href:"/",class:"hover:underline"},"Hackaton F5",-1),ee=(0,l.Lk)("img",{src:Q,alt:"Logo",class:"h-10 w-auto mx-auto md:mx-0"},null,-1),te={class:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0"},oe={href:"#",class:"hover:underline me-4 md:me-6"},ae={href:"#",class:"hover:underline me-4 md:me-6"};function le(e,t,o,a,n,r){const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("footer",z,[(0,l.Lk)("div",H,[(0,l.Lk)("span",Z,[(0,l.eW)((0,m.v_)(e.$t("footer.copyright"))+" ",1),$,(0,l.eW)(". "+(0,m.v_)(e.$t("footer.all_rights_reserved"))+". ",1)]),ee,(0,l.Lk)("ul",te,[(0,l.Lk)("li",null,[(0,l.bF)(s,{to:"/contact",class:"hover:underline me-4 md:me-6"},{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(e.$t("footer.contact")),1)])),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(s,{to:"/about",class:"hover:underline me-4 md:me-6"},{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(e.$t("footer.aboutUs")),1)])),_:1})]),(0,l.Lk)("li",null,[(0,l.Lk)("a",oe,(0,m.v_)(e.$t("footer.privacy_policy")),1)]),(0,l.Lk)("li",null,[(0,l.Lk)("a",ae,(0,m.v_)(e.$t("footer.licensing")),1)])])])])}var ne={name:"Footer"};const re=(0,i.A)(ne,[["render",le]]);var se=re,ie={__name:"Home",setup(e){return(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(T),(0,l.bF)(N),(0,l.bF)(se)],64))}};const ue=ie;var ce=ue;function de(e,t,o,a,n,r){const s=(0,l.g2)("Header"),i=(0,l.g2)("UploadCsv"),u=(0,l.g2)("Footer");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(s),(0,l.Lk)("div",null,[(0,l.bF)(i)]),(0,l.bF)(u)],64)}var me={__name:"ArrowUp",setup(e){const t=(0,b.KR)(!1),o=()=>{window.scrollTo({top:0,behavior:"smooth"})},a=()=>{window.scrollY>300?t.value=!0:t.value=!1};return(0,l.sV)((()=>{window.addEventListener("scroll",a)})),(0,l.xo)((()=>{window.removeEventListener("scroll",a)})),(e,a)=>{const n=(0,l.g2)("font-awesome-icon");return(0,l.uX)(),(0,l.CE)("button",{onClick:o,class:(0,m.C4)(["scroll-top-button",{"show-scroll-button":t.value}]),title:"Go to top"},[(0,l.bF)(n,{icon:"arrow-up",class:"fa-2x"})],2)}}};const pe=(0,i.A)(me,[["__scopeId","data-v-ead34d36"]]);var be=pe,ve=o(809),ge=o.n(ve);const fe=e=>((0,l.Qi)("data-v-b344a16e"),e=e(),(0,l.jt)(),e),he={class:"upload-file-container"},ke={class:"upload-content"},we=fe((()=>(0,l.Lk)("i",{class:"fa fa-upload upload-icon"},null,-1))),xe={key:0,class:"upload-message"},ye={key:0,class:"csv-preview"},Le={class:"mb-12"};var Ae={__name:"UploadCsv",setup(e){const{t:t}=(0,v.s9)(),o=(0,b.KR)(null),n=(0,b.KR)(""),r=(0,b.KR)([]),s=e=>{const t=e.target.files[0];t&&(o.value=t,u(t))},i=e=>{const t=e.dataTransfer.files[0];t&&(o.value=t,u(t))},u=e=>{ge().parse(e,{complete:e=>{r.value=e.data},header:!1})},c=async()=>{if(!o.value)return void(n.value=t("upload.selectCSVFile"));const e=new FormData;e.append("file",o.value);try{const o=await fetch("http://localhost:4000/api/upload",{method:"POST",body:e}),a=await o.json();o.ok?n.value=t("upload.successfulUpload"):n.value=a.error}catch(a){n.value=t("upload.errorUpload")}};return(e,t)=>((0,l.uX)(),(0,l.CE)("div",he,[(0,l.Lk)("div",{class:"upload-file-box",onDrop:(0,a.D$)(i,["prevent"]),onDragover:t[0]||(t[0]=(0,a.D$)((()=>{}),["prevent"]))},[(0,l.Lk)("div",ke,[we,(0,l.Lk)("input",{class:"upload-button",type:"file",onChange:s},null,32),(0,l.Lk)("button",{class:"upload-button",onClick:c},(0,m.v_)(e.$t("upload.uploadButton")),1),n.value?((0,l.uX)(),(0,l.CE)("p",xe,(0,m.v_)(n.value),1)):(0,l.Q3)("",!0)])],32),r.value.length>0?((0,l.uX)(),(0,l.CE)("div",ye,[(0,l.Lk)("table",Le,[(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.value[0],((e,t)=>((0,l.uX)(),(0,l.CE)("th",{key:t},(0,m.v_)(e),1)))),128))])]),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.value.slice(1),((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:t},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,((e,t)=>((0,l.uX)(),(0,l.CE)("td",{key:t},(0,m.v_)(e),1)))),128))])))),128))])])])):(0,l.Q3)("",!0),(0,l.bF)(be)]))}};const Ce=(0,i.A)(Ae,[["__scopeId","data-v-b344a16e"]]);var Ee=Ce,Fe=(0,l.pM)({name:"Dashboard",components:{Header:T,Footer:se,UploadCsv:Ee},setup(){const e=(0,b.KR)([]),t=t=>{e.value=t};return{participants:e,handleFileParsed:t}}});const _e=(0,i.A)(Fe,[["render",de]]);var Se=_e,je=o(263),Te=o(500),Re=o(103),Ie=o(241);const Xe={key:0,class:"modal"},Be={class:"modal-content"},Oe={class:"modal-buttons"};var Pe={__name:"ConfirmationModal",props:{visible:Boolean,title:String,message:String},emits:["confirm","cancel"],setup(e,{emit:t}){const o=t,a=()=>o("confirm"),n=()=>o("cancel");return(t,o)=>e.visible?((0,l.uX)(),(0,l.CE)("div",Xe,[(0,l.Lk)("div",Be,[(0,l.Lk)("h3",null,(0,m.v_)(e.title),1),(0,l.Lk)("p",null,(0,m.v_)(e.message),1),(0,l.Lk)("div",Oe,[(0,l.Lk)("button",{onClick:a},(0,m.v_)(t.$t("buttons.yes")),1),(0,l.Lk)("button",{onClick:n},(0,m.v_)(t.$t("buttons.no")),1)])])])):(0,l.Q3)("",!0)}};const De=(0,i.A)(Pe,[["__scopeId","data-v-3d674653"]]);var Ge=De;const Ke=e=>((0,l.Qi)("data-v-8449318e"),e=e(),(0,l.jt)(),e),Ve={key:0},Ue=Ke((()=>(0,l.Lk)("br",null,null,-1))),We=Ke((()=>(0,l.Lk)("br",null,null,-1))),Me={class:"group-title"};var Je={__name:"TeamDetail",setup(e){const{t:t}=(0,v.s9)(),o=(0,b.KR)([]),a=(0,b.KR)(""),n=(0,b.KR)([]),r=(0,b.KR)(null),s=(0,b.KR)(!1),i=async()=>{try{const e=await R.A.get("http://localhost:4000/api/grupos");o.value=e.data}catch(e){console.error("Error fetching groups:",e)}},u=async()=>{try{let e="data:text/csv;charset=utf-8,";o.value.forEach(((t,o)=>{e+=`Grupo ${o+1}\n`,e+="Nombre,Apellido,Email,Front,Back,Bootcamp\n",t.forEach((t=>{e+=`${t.nombre},${t.apellido},${t.email},${t.front},${t.back},${t.bootcamp}\n`})),e+="\n"}));const t=encodeURI(e),a=document.createElement("a");a.setAttribute("href",t),a.setAttribute("download","grupos.csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(e){console.error("Error al descargar el archivo CSV:",e)}},c=async()=>{try{await R.A.delete("http://localhost:4000/api/clear");location.reload()}catch(e){console.error("Error clearing table:",e),alert("There was an error clearing the table.")}finally{s.value=!1}},d=((0,l.EW)((()=>o.value.flatMap(((e,t)=>e.map((e=>({...e,groupIndex:t+1}))))))),(0,l.EW)((()=>o.value.map((e=>e.filter((e=>f(e,{column:{key:n.value.join()}})))))))),p=[{key:"groupIndex",label:"table.group"},{key:"nombre",label:"table.name"},{key:"apellido",label:"table.surname"},{key:"email",label:"table.email"},{key:"front",label:"table.front"},{key:"back",label:"table.back"},{key:"bootcamp",label:"table.bootcamp"}],g=(0,l.EW)((()=>p.map((e=>({...e,label:t(e.label)}))))),f=(t("table.group"),t("table.name"),t("table.surname"),t("table.email"),t("table.front"),t("table.back"),t("table.bootcamp"),(e,t)=>{if(!a.value)return!0;if(n.value.length>=1){const e=n.value.some((e=>t.column.key===e));if(!e)return!1}const o=new RegExp(a.value,"i");return Object.values(e).some((e=>o.test(e)))});return(e,t)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("button",{class:"button-view",onClick:i},(0,m.v_)(e.$t("buttons.showGroups")),1),(0,l.Lk)("button",{class:"clear-button",onClick:t[0]||(t[0]=e=>s.value=!0)},(0,m.v_)(e.$t("buttons.deleteAll")),1),o.value.length?((0,l.uX)(),(0,l.CE)("div",Ve,[Ue,(0,l.Lk)("h4",null,(0,m.v_)(e.$t("buttons.revision_P1")),1),(0,l.Lk)("h4",null,(0,m.v_)(e.$t("buttons.revision_P2")),1),We,(0,l.Lk)("button",{class:"button-view",onClick:u},(0,m.v_)(e.$t("buttons.downloadGroups")),1),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(d.value,((e,o)=>((0,l.uX)(),(0,l.CE)("div",{key:o},[(0,l.bF)((0,b.R1)(je.d),{class:"mb-8 border-b-2"},{default:(0,l.k6)((()=>[(0,l.Lk)("h3",Me,"Grupo "+(0,m.v_)(o+1),1),e.length?((0,l.uX)(),(0,l.Wv)((0,b.R1)(Te.V),{key:0,class:"bg-light-beige text-l mb-12",items:e,columns:g.value,filter:a.value,"filter-method":f,"header-class":"custom-header",onFiltered:t[1]||(t[1]=e=>r.value=e.items.length)},null,8,["items","columns","filter"])):(0,l.Q3)("",!0)])),_:2},1024)])))),128)),null!==r.value?((0,l.uX)(),(0,l.Wv)((0,b.R1)(Re.V),{key:0,class:"!mt-6",color:"info",outline:""},{default:(0,l.k6)((()=>[(0,l.eW)(" Number of filtered items: "),(0,l.bF)((0,b.R1)(Ie.V),null,{default:(0,l.k6)((()=>[(0,l.eW)((0,m.v_)(r.value),1)])),_:1})])),_:1})):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0),(0,l.bF)(Ge,{visible:s.value,title:e.$t("modals.confirmDeleteTitle"),message:e.$t("modals.confirmDeleteMessage"),onConfirm:c,onCancel:t[2]||(t[2]=e=>s.value=!1)},null,8,["visible","title","message"])]))}};const Ye=(0,i.A)(Je,[["__scopeId","data-v-8449318e"]]);var qe=Ye;const Ne={class:"flex flex-col min-h-full"},Qe={class:"flex-grow"},ze={class:"content-buttons"};var He={__name:"Groups",setup(e){return(e,t)=>((0,l.uX)(),(0,l.CE)("div",Ne,[(0,l.bF)(T),(0,l.Lk)("main",Qe,[(0,l.Lk)("div",ze,[(0,l.bF)(be),(0,l.bF)(qe)])]),(0,l.bF)(se)]))}};const Ze=(0,i.A)(He,[["__scopeId","data-v-ea265f8e"]]);var $e=Ze;const et={class:"about-us container mx-auto p-6"},tt={class:"text-4xl font-bold text-center mb-8"},ot={class:"text-lg text-justify mb-4"},at={class:"text-lg text-justify mb-4"},lt={class:"text-lg text-justify mb-4"},nt={class:"text-lg text-center font-semibold mt-6"},rt={class:"linkedin-links mt-10"},st={class:"text-2xl font-bold text-center mb-6"},it={class:"flex flex-wrap justify-center space-x-4"},ut=["href"],ct=["src"],dt={class:"block text-indigo-600 hover:text-indigo-800"};var mt={__name:"About",setup(e){const{t:t}=(0,v.s9)(),a=[{name:t("Elías Riquelme"),linkedin:"https://www.linkedin.com/in/elias-javier-riquelme-b62655297/",photo:o(191)},{name:t("Oussama Brahmi"),linkedin:"https://www.linkedin.com/in/oussama-brahmi-b1551a280/",photo:o(796)},{name:t("Sebastián Rodriguez"),linkedin:"https://www.linkedin.com/in/johan-sebastian-rodriguez-g/",photo:o(601)},{name:t("Tina Calleja"),linkedin:"https://www.linkedin.com/in/tina-calleja/",photo:o(175)}];return(e,t)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(T),(0,l.Lk)("div",et,[(0,l.Lk)("h1",tt,(0,m.v_)(e.$t("about.title")),1),(0,l.Lk)("p",ot,(0,m.v_)(e.$t("about.description1")),1),(0,l.Lk)("p",at,(0,m.v_)(e.$t("about.description2")),1),(0,l.Lk)("p",lt,(0,m.v_)(e.$t("about.description3")),1),(0,l.Lk)("p",nt,(0,m.v_)(e.$t("about.slogan")),1),(0,l.Lk)("div",rt,[(0,l.Lk)("h2",st,(0,m.v_)(e.$t("about.team")),1),(0,l.Lk)("ul",it,[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(a,(e=>(0,l.Lk)("li",{key:e.name,class:"text-center"},[(0,l.Lk)("a",{href:e.linkedin,target:"_blank"},[(0,l.Lk)("img",{src:e.photo,alt:"Profile Photo",class:"rounded-full w-32 h-32 mx-auto mb-2"},null,8,ct),(0,l.Lk)("span",dt,(0,m.v_)(e.name),1)],8,ut)]))),64))])])]),(0,l.bF)(se)]))}};const pt=(0,i.A)(mt,[["__scopeId","data-v-7cc9f858"]]);var bt=pt;const vt={class:"contact-us container mx-auto p-6"},gt={class:"text-4xl font-bold text-center mb-8"},ft={for:"name",class:"block text-lg font-medium mb-2"},ht={for:"email",class:"block text-lg font-medium mb-2"},kt={for:"subject",class:"block text-lg font-medium mb-2"},wt={for:"message",class:"block text-lg font-medium mb-2"},xt={type:"submit",class:"w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-800"};var yt={__name:"Contact",setup(e){const{t:t}=(0,v.s9)(),o=(0,b.KR)({name:"",email:"",subject:"",message:""}),n=()=>{alert("Formulario enviado:\n"+JSON.stringify(o.value,null,2)),o.value.name="",o.value.email="",o.value.subject="",o.value.message=""};return(e,t)=>((0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(T),(0,l.Lk)("div",vt,[(0,l.Lk)("h1",gt,(0,m.v_)(e.$t("contact.title")),1),(0,l.Lk)("form",{onSubmit:(0,a.D$)(n,["prevent"]),class:"space-y-4 max-w-lg mx-auto"},[(0,l.Lk)("div",null,[(0,l.Lk)("label",ft,(0,m.v_)(e.$t("contact.name")),1),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.value.name=e),type:"text",id:"name",class:"w-full p-2 border rounded",required:""},null,512),[[a.Jo,o.value.name]])]),(0,l.Lk)("div",null,[(0,l.Lk)("label",ht,(0,m.v_)(e.$t("contact.email")),1),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.value.email=e),type:"email",id:"email",class:"w-full p-2 border rounded",required:""},null,512),[[a.Jo,o.value.email]])]),(0,l.Lk)("div",null,[(0,l.Lk)("label",kt,(0,m.v_)(e.$t("contact.subject")),1),(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.value.subject=e),type:"text",id:"subject",class:"w-full p-2 border rounded",required:""},null,512),[[a.Jo,o.value.subject]])]),(0,l.Lk)("div",null,[(0,l.Lk)("label",wt,(0,m.v_)(e.$t("contact.message")),1),(0,l.bo)((0,l.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.value.message=e),id:"message",class:"w-full p-2 border rounded",rows:"5",required:""},null,512),[[a.Jo,o.value.message]])]),(0,l.Lk)("button",xt,(0,m.v_)(e.$t("contact.submit")),1)],32)]),(0,l.bF)(se)]))}};const Lt=(0,i.A)(yt,[["__scopeId","data-v-25c0b881"]]);var At=Lt;const Ct=[{path:"/login",name:"Login",component:N},{path:"/dashboard",name:"Dashboard",component:Se,meta:{requiresAuth:!0}},{path:"/groups",name:"Groups",component:$e,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:bt,meta:{requiresAuth:!0}},{path:"/",name:"Home",component:ce,meta:{requiresAuth:!0}},{path:"/contact",name:"Contact",component:At,meta:{requiresAuth:!0}}],Et=(0,d.aE)({history:(0,d.LA)("/"),routes:Ct});Et.beforeEach(((e,t,o)=>{if(e.matched.some((e=>e.meta.requiresAuth))){const t=localStorage.getItem("token");t?o():o({path:"/login",query:{redirect:e.fullPath}})}else o()}));var Ft=Et,_t=JSON.parse('{"about":{"title":"About Us","description1":"We are students from a bootcamp working on a project to create an app that forms groups from a list of people.","description2":"Our company, NextGen Technology, is dedicated to providing innovative solutions that help our clients succeed.","description3":"With our app, you can easily create and manage groups to enhance collaboration and productivity.","slogan":"Boost your success with our company","team":"Meet Our Team","member1":"Elías Riquelme","member2":"Oussama Brahmi","member3":"Sebastián Rodriguez","member4":"Tina Calleja"},"header":{"home":"Home","dashboard":"Dashboard","groups":"Groups","logout":"Logout","language":"Language","title":"NextGen Technology"},"contact":{"title":"Contact Us","name":"Name","email":"Email","subject":"Subject","message":"Message","submit":"Submit"},"footer":{"copyright":"© 2024","all_rights_reserved":"All Rights Reserved","aboutUs":"About us","privacy_policy":"Privacy Policy","licensing":"Licensing","contact":"Contact"},"groups":{"name":"Name","group":"Group","front":"Front","back":"Back","email":"Email","bootcamp":"Bootcamp"},"login":{"title":"Sign in to your account","email":"Email address","password":"Password","emailPlaceholder":"Enter your email address","passwordPlaceholder":"Enter your password","emailRequired":"Please enter your email address.","passwordRequired":"Please enter your password.","signIn":"Sign in","invalidCredentials":"Invalid credentials"},"upload":{"uploadButton":"Upload CSV","selectCSVFile":"Please select a CSV file.","successfulUpload":"CSV loaded successfully.","errorUpload":"Error loading CSV."},"buttons":{"deleteAll":"Delete All","showGroups":"Show Groups","downloadGroups":"Download CSV","revision_P1":"Review the generated groups.","revision_P2":"If you agree with these groups, you can download them in CSV format for later use in the following button","yes":"Yes","no":"No"},"table":{"group":"Group","name":"Name","surname":"Surname","email":"Email","front":"Front","back":"Back","bootcamp":"Bootcamp"},"modals":{"confirmDeleteTitle":"Confirm Deletion","confirmDeleteMessage":"Are you sure you want to delete all items?"}}'),St=JSON.parse('{"about":{"title":"Sobre Nosotros/as","description1":"Somos estudiantes de un bootcamp trabajando en un proyecto para crear una aplicación que forma grupos a partir de una lista de personas.","description2":"Nuestra empresa, NextGen Technology, se dedica a proporcionar soluciones innovadoras que ayudan a nuestros clientes a tener éxito.","description3":"Con nuestra aplicación, puedes crear y gestionar grupos fácilmente para mejorar la colaboración y la productividad.","slogan":"Impulsa tu éxito con nuestra empresa","team":"Conoce a nuestro equipo","member1":"Elías Riquelme","member2":"Oussama Brahim","member3":"Sebastián Rodriguez","member4":"Tina Calleja"},"header":{"home":"Inicio","dashboard":"Tablero","groups":"Grupos","language":"Idioma","logout":"Cerrar sesión","title":"NextGen Technology"},"login":{"title":"Inicia sesión en tu cuenta","email":"Correo electrónico","password":"Contraseña","emailPlaceholder":"Ingresa tu correo electrónico","passwordPlaceholder":"Ingresa tu contraseña","emailRequired":"Por favor ingresa tu correo electrónico.","passwordRequired":"Por favor ingresa tu contraseña.","signIn":"Iniciar sesión","invalidCredentials":"Credenciales inválidas"},"footer":{"copyright":"© 2024","all_rights_reserved":"Todos los derechos reservados","aboutUs":"Sobre nosotr@s","privacy_policy":"Política de privacidad","licensing":"Licencias","contact":"Contacto"},"groups":{"name":"Nombre","group":"Grupo","front":"Front","back":"Back","email":"Correo electrónico","bootcamp":"Bootcamp"},"upload":{"uploadButton":"Subir CSV","selectCSVFile":"Por favor, selecciona un archivo CSV.","successfulUpload":"CSV cargado exitosamente.","errorUpload":"Error al cargar el CSV."},"buttons":{"deleteAll":"Borrar Todos","showGroups":"Mostrar Grupos","downloadGroups":"Descargar CSV","revision_P1":"Revise los grupos generados.","revision_P2":"Si está de acuerdo con estos grupos puede descargarlos en formato CSV para su posterior utilización en el siguiente botón","yes":"Sí","no":"No"},"contact":{"title":"Contáctenos","name":"Nombre","email":"Correo Electrónico","subject":"Asunto","message":"Mensaje","submit":"Enviar"},"table":{"group":"Grupo","name":"Nombre","surname":"Apellido","email":"Correo","front":"Front","back":"Back","bootcamp":"Bootcamp"},"modals":{"confirmDeleteTitle":"Confirmar eliminación","confirmDeleteMessage":"¿Estás seguro de que deseas eliminar todos los elementos?"}}');const jt={en:_t,es:St},Tt=(0,v.hU)({locale:"en",messages:jt});var Rt=Tt,It=o(107),Xt=o(273),Bt=o(188);It.Yv.add(Bt.INu);const Ot=(0,a.Ef)(c);Ot.component("font-awesome-icon",Xt.gc),Ot.use(Ft),Ot.use(Rt),Ot.mount("#app")},275:function(e){e.exports="data:image/png;base64,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"},355:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEU0lEQVR4nO1ZfUxVZRh/Kr0HuHzcXeBaMbOZ4+u8xhaS9UfDsD/KUCFta7lJc2xtpiXK+gMWFhYrkwxYFHWbzHvl8lXg+BQQ7jVIRYtBpAnnDTAx/KOtWsh//do5I61LznM/zrnXxm97trNz3ufZ7/c+z7O953mJFrGIRfgMEN31YxKt5Yz2cUa1nNGoxGhaEum6YoymuUjfcUYOeY28VvahQONSCsVJIpVIIk1wRvDEZB+J0TtTCXS/7sR/iKcYzuiwxGjOU+L/IeS6HEuOqQt5idEGpSR8JL7ARLomMcrWjDiep3skkSr8TpwtEFIGorv9Sv7yYxTKRfpSc/Lshn0xsYJC/EJe3g05oI7kofQGoxY56z4L4CKV602e32zwD3wlvzFQ5PnNTHjX2BMpZOIiXQkCAVcvJ5PZYwFwCaVwCQgSK/WMfI9xGZzCbBAQh2Iylx7jMvUCnMKBgJN2LRBR7EH5GMYDTtjlbgYJUHEAhHNJ2u2C/ekMxXDTcnzfHKc86yaib8kaNbuff6sAv3ZHYKrVhP6jMThbFY0zH0XgtC0Gk60m/NEdoUMZGfaqECDU3SrAaF0kmh+PwecZ0Tj2lAW2jFhYM8xoSTfjYmOkHlmoUVFCwqi7429NIRj5MEx57ioIhyM/ArWFYagpCIMjLxy9b4Qr36ZsoZjrCNFSwIiaEvrZ3XGgUoB1v4DfG0MxmGNCy3ORaF1vRr99D1x1uzHSuQezfXE4sl/AYJWGApyGaTUlNOfueO1EEgZbd2PGakT1WhNKdiyFbaUFvQ1tOFVQie6jDvxykuGbjtcw3Z6oZQbmvBIwfDAJbbnrcWZHFKxPWFCQvwrVK2Jxwl6PgeJqfF3fjm9LUtC5cx2G3tNQgFOYVdEDhqvujid3rUJHVSHOF4bjkzVReDMnETkZmdj+9Fa02x1oszkwUpWMLmsRenY9pGEGDFe8auJzryfi+EvZOFf+AOpfDIcjKxK56zLxcnom2jeY0Z5pwoWyBLTmbsHZ/KQAN7FTcLg7XjySitPdlRiqXK4IqM2KRN12I5qfjEbzThM6N5kw9nECzjs/xchnj2jZxHY1JbTP3XGs0YJeWxoma8yofSFCEWDbFouWLQ+ic3MUOrLNmKmNRZ89DZcaLNoJOGXI8+ooUVG6CUVvb8NQXTz6341H0yuPwlaRB3tFEbpeTcfQwYeVb/Ka8vc3aifgq6WptxWgiHAJYxrWsZdmkFSRD9rjtEt4687+oRkwWlQLmC+jQwEn7rphh8hT8FSK4iL9dMf+1MvgjJ4NtIBxRlnkC+TJccB2XyTPSyeIRosNfhvyyoNWPUVIjBr8Ntz9VyZEKtNBwGG/j9f/CWk1PaPFBYck0sz4atpMeuBCIkXLk+P56yFfic9KIpXKMUlvTCbSfZzRAS4S94K8xEUqnkimeykYwEVK44z2ckY1kkjD8mT772vW+Wf53TGeTHny2kDzXcQi/i/4CxS7S/c22kG3AAAAAElFTkSuQmCC"},191:function(e,t,o){e.exports=o.p+"img/elias.7036c918.jpeg"},153:function(e,t,o){e.exports=o.p+"img/logo.0687e82d.png"},796:function(e,t,o){e.exports=o.p+"img/oussama.d75833b4.jpeg"},601:function(e,t,o){e.exports=o.p+"img/sebastian.ca13d95d.jpeg"},175:function(e,t,o){e.exports=o.p+"img/tina.2ac2f472.jpeg"}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,l,n){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],n=e[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(s=!1,n<r&&(r=n));if(s){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,l,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,r=a[0],s=a[1],i=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(i)var c=i(o)}for(t&&t(a);u<r.length;u++)n=r[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},a=self["webpackChunkhackathon_admin"]=self["webpackChunkhackathon_admin"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(938)}));a=o.O(a)})();
//# sourceMappingURL=app.812893db.js.map