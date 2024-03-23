import{R as l,j as s,F as f,a as e}from"./app-77b91c57.js";import h from"./Dialog-76cd114e.js";const y=()=>{document.cookie.split(";").map(a=>a.split("="));const[i,r]=l.useState(!1),[n,c]=l.useState(!1),[m,u]=l.useState(null);return s(f,{children:[s("button",{onClick:()=>r(!0),className:"bg-[#fae886] px-5 py-1.5 rounded shadow flex items-center space-x-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("span",{children:"Add Category"})]}),i&&e(h,{close:()=>r(!1),children:e("div",{className:"max-w-screen-md mx-auto bg-white h-full w-full overflow-auto",children:s("form",{onSubmit:a=>{a.preventDefault();let g=a.target.name.value;c(!0);let d=new Headers;d.append("Authorization",`Bearer ${localStorage.getItem("token")}`);var o=new FormData;o.append("name",g),o.append("image",m);var p={method:"POST",headers:d,body:o,redirect:"follow"};fetch("/api/menu-category",p).then(t=>t.text()).then(t=>{setTimeout(()=>{r(!1),c(!1),window.location.reload()},2e3)}).catch(t=>console.log("error",t))},className:"flex flex-col space-y-4 p-4",children:[e("div",{className:"flex justify-center items-center py-10",children:e("h1",{className:"font-bold text-xl",children:"Add Category"})}),e("div",{children:e("label",{className:"font-bold",children:"Category Name"})}),e("input",{name:"name",className:"w-full border-2 border-black/70 rounded p-2"}),e("input",{name:"image",type:"file",onChange:a=>{console.log(a.target.files),u(a.target.files[0])},accept:"image/*",className:"w-full border-2 border-black/70 rounded p-2"}),e("div",{className:"w-full",children:e("button",{disabled:n,type:"submit",className:"w-full bg-accent rounded p-2",children:n?"Adding Category...":"Add Category"})})]})})})]})};export{y as CreateCegory,y as default};