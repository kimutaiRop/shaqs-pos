import{R as n,r as d,j as a,a as e}from"./app-d2b2c7d6.js";import m from"./Sidebar-6152b741.js";import{f as p}from"./helper-76ebf62d.js";import{CreateCegory as f}from"./CreateCegory-1e606122.js";import{AddDish as h}from"./AddDish-00755e98.js";import u from"./MenuCategories-46ea2b04.js";import{EditDish as x}from"./EditDish-2debd376.js";import"./Dialog-9f8d7ad9.js";const A=()=>{const[o,i]=n.useState([]),[t,c]=n.useState(null);return d.exports.useEffect(()=>{let l=new Headers;l.append("Content-Type","application/json"),l.append("Authorization",`Bearer ${localStorage.getItem("token")}`);let s="/api/menu";window.location.search&&(s+=window.location.search),fetch(s,{headers:l}).then(r=>r.json()).then(r=>i(r.data)).catch(r=>console.log("error",r))},[]),a("div",{className:"grid grid-cols-7 h-screen w-full",children:[e(m,{}),a("main",{className:"bg-primary w-full col-span-6 h-full grid grid-cols-7 xl:grid-cols-9 max-h-screen min-h-screen",children:[a("div",{className:"col-span-2 bg-secondary flex flex-col overflow-auto px-2 space-y-4",children:[e("div",{className:"flex justify-end items-end p-2",children:e(f,{})}),e(u,{})]}),a("div",{className:"col-span-5 xl:col-span-7 flex flex-col overflow-auto",children:[a("div",{className:"flex bg-secondary py-4 justify-between items-center px-3",children:[e("h2",{className:"text-4xl",children:(l=>{var s,r;return console.log(window.location.search),window.location.search?(console.log(l),(r=(s=l[0])==null?void 0:s.category)==null?void 0:r.name):"All Menu"})(o)}),e(h,{}),t&&e(x,{dish:t,setEditItem:c})]}),e("div",{className:"flex overflow-auto flex-col",children:e("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-6 p-6",children:o&&o.map((l,s)=>a("div",{className:"flex flex-col space-y-3",children:[a("div",{className:"border border-accent aspect-[9/6] rounded-xl flex flex-col justify-between items-center py-2",children:[e("div",{className:"relative w-full",children:e("div",{className:"absolute -top-8 -left-4 aspect-square w-2/3",children:e("img",{src:`/${l.image}`})})}),a("div",{className:"flex flex-col p-2 w-full",children:[e("h2",{className:"text-accent text-xl font-semibold capitalize",children:l.name}),e("span",{className:"text-xs",children:l.description})]})]}),a("div",{className:"border justify-between items-center flex space-x-2 border-accent rounded-full w-full py-1 px-3 font-bold",children:[e("span",{children:p(Number(l.price))}),e("button",{onClick:()=>c(l),className:"bg-accent rounded-full py-1 px-2 text-white",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})})]})]},s))})})]})]})]})};export{A as default};
