import{c as s,d,e as f}from"./chunk-6MEDLWZL.js";import{n as a}from"./chunk-5BCGV6OH.js";import{a as l}from"./chunk-7VVHNCZT.js";var S=(m,h)=>{let e,o,u=(t,n,c)=>{if(typeof document>"u")return;let r=document.elementFromPoint(t,n);if(!r||!h(r)){i();return}r!==e&&(i(),p(r,c))},p=(t,n)=>{e=t,o||(o=e);let c=e;a(()=>c.classList.add("ion-activated")),n()},i=(t=!1)=>{if(!e)return;let n=e;a(()=>n.classList.remove("ion-activated")),t&&o!==e&&e.click(),e=void 0};return l({el:m,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>u(t.currentX,t.currentY,s),onMove:t=>u(t.currentX,t.currentY,d),onEnd:()=>{i(!0),f(),o=void 0}})};export{S as a};
