import{R as n,j as a,F as h,a as e}from"./app-d2b2c7d6.js";import p from"./Dialog-9f8d7ad9.js";const g=()=>{const[o,c]=n.useState(!1),[d,i]=n.useState(null);return a(h,{children:[a("button",{onClick:()=>c(!0),className:"bg-[#fae886] px-5 py-1.5 rounded shadow flex items-center space-x-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("span",{children:"Add Dish"})]}),o&&e(p,{close:()=>c(!1),children:e("div",{className:"max-w-screen-md mx-auto bg-white h-full w-full overflow-auto",children:a("form",{onSubmit:l=>{l.preventDefault();const m=new URLSearchParams(window.location.search).get("category_id"),s=new FormData;s.append("name",l.target.name.value),s.append("price",l.target.price.value),s.append("description",l.target.description.value),s.append("image",d),s.append("category_id",m);let t=new Headers;t.append("Authorization",`Bearer ${localStorage.getItem("token")}`),fetch("/api/menu",{method:"POST",body:s,headers:t}).then(r=>r.json()).then(r=>{setTimeout(()=>{c(!1),window.location.reload()},2e3)}).catch(r=>console.log("error",r))},className:"flex flex-col space-y-4 p-4",children:[e("div",{className:"flex justify-center items-center py-10",children:e("h1",{className:"font-bold text-xl",children:"Add New Dish"})}),a("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Name"}),e("input",{name:"name",className:"w-full border-2 border-black/70 rounded p-2"})]}),a("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Price"}),e("input",{type:"number",name:"price",className:"w-full border-2 border-black/70 rounded p-2"})]}),a("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Image"}),e("input",{onChange:l=>i(l.target.files[0]),type:"file",className:"w-full border-2 border-black/70 rounded p-2"})]}),a("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Short Description"}),e("textarea",{name:"description",className:"w-full border-2 border-black/70 rounded p-2"})]}),e("div",{className:"w-full",children:e("button",{className:"w-full bg-accent rounded p-2",children:"Add Dish"})})]})})})]})};export{g as AddDish,g as default};
