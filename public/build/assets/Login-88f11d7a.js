import{a as e,j as r}from"./app-9a7107f0.js";const d=()=>e("form",{onSubmit:l=>{l.preventDefault();let s={email:l.target.email.value,password:l.target.password.value};console.log(s);var o=new Headers;o.append("Content-Type","application/json");var c=JSON.stringify(s),n={method:"POST",headers:o,body:c,redirect:"follow"};fetch("/api/api-login",n).then(a=>a.text()).then(a=>{a=JSON.parse(a),a.success?(localStorage.setItem("token",a.token),window.location.href="/"):alert(a.message)}).catch(a=>console.log("error",a))},className:"flex flex-col w-full h-screen bg-accent/30 py-4 justify-center",children:e("div",{className:"flex flex-col max-w-screen-sm bg-white mx-auto w-full py-10 rounded",children:r("div",{action:"",className:"w-full p-4 space-y-2",children:[e("div",{className:"flex flex-col items-center py-5",children:e("h2",{className:"font-bold text-xl",children:"Please login to continue"})}),e("div",{className:"flex flex-col items-center",children:e("img",{src:"/logo.png",className:"w-1/2"})}),e("div",{className:"flex flex-col ",children:e("input",{type:"email",name:"email",placeholder:"Email",className:"px-4 py-2.5 rounded border  mb-4"})}),e("div",{className:"flex flex-col",children:e("input",{type:"password",name:"password",placeholder:"password",className:"px-4 py-2.5 rounded border mb-4"})}),e("div",{className:"flex flex-col",children:e("button",{className:"px-4 py-2.5 rounded border  mb-4 bg-accent",children:"Login"})})]})})});export{d as default};
