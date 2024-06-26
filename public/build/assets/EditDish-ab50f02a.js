import{R as m,a as e,j as t,F as p}from"./app-71bfcee7.js";import u from"./Dialog-498f786d.js";const g=({dish:r,setEditItem:n})=>{const[o,d]=m.useState(null);return e(u,{close:()=>n(null),children:e("div",{className:"max-w-screen-md mx-auto bg-white h-full w-full overflow-auto",children:t("form",{onSubmit:a=>{a.preventDefault();const i=r.category_id,l=new FormData;l.append("name",a.target.name.value),l.append("price",a.target.price.value),l.append("description",a.target.description.value),l.append("image",o),l.append("category_id",i);let s=new Headers;s.append("Authorization",`Bearer ${localStorage.getItem("token")}`),fetch("/api/menu/"+r.id,{method:"POST",body:l,headers:s}).then(c=>c.json()).then(c=>{setTimeout(()=>{setShow(!1),window.location.reload()},2e3)}).catch(c=>console.log("error",c))},className:"flex flex-col space-y-4 p-4",children:[e("div",{className:"flex justify-center items-center py-10",children:e("h1",{className:"font-bold text-xl",children:"Add New Dish"})}),t("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Name"}),e("input",{name:"name",type:"text",defaultValue:r.name,className:"w-full border-2 border-black/70 rounded p-2"})]}),e(p,{}),t("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Price"}),e("input",{type:"number",name:"price",defaultValue:r.price,className:"w-full border-2 border-black/70 rounded p-2"})]}),t("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Dish Image"}),e("input",{onChange:a=>d(a.target.files[0]),type:"file",name:"image",className:"w-full border-2 border-black/70 rounded p-2"})]}),t("div",{className:"flex flex-col space-y-1",children:[e("label",{className:"",children:"Short Description"}),e("textarea",{defaultValue:r.description,name:"description",className:"w-full border-2 border-black/70 rounded p-2"})]}),e("div",{className:"w-full",children:e("button",{className:"w-full bg-accent rounded p-2",children:"Update Dish"})})]})})})};export{g as EditDish,g as default};
