import{a as u}from"./chunk-TSA2G7LE.js";import{c as n,d as r,g as l,h as a,k as h}from"./chunk-5BCGV6OH.js";import"./chunk-A3URFJNY.js";import{d as s}from"./chunk-FQ65QLOX.js";var b=":host(.tab-hidden){display:none !important}",f=class{constructor(t){h(this,t),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}componentWillLoad(){return s(this,null,function*(){this.active&&(yield this.setActive())})}setActive(){return s(this,null,function*(){yield this.prepareLazyLoaded(),this.active=!0})}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&this.component!=null){this.loaded=!0;try{return u(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){let{tab:t,active:e,component:i}=this;return n(r,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":i===void 0,"tab-hidden":!e}},n("slot",null))}get el(){return l(this)}static get watchers(){return{active:["changeActive"]}}};f.style=b;var g=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}",m=class{constructor(t){h(this,t),this.ionNavWillLoad=a(this,"ionNavWillLoad",7),this.ionTabsWillChange=a(this,"ionTabsWillChange",3),this.ionTabsDidChange=a(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=e=>{let{href:i,tab:o}=e.detail;if(this.useRouter&&i!==void 0){let d=document.querySelector("ion-router");d&&d.push(i)}else this.select(o)},this.selectedTab=void 0,this.useRouter=!1}componentWillLoad(){return s(this,null,function*(){if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),!this.useRouter){let t=this.tabs;t.length>0&&(yield this.select(t[0]))}this.ionNavWillLoad.emit()})}componentWillRender(){let t=this.el.querySelector("ion-tab-bar");if(t){let e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}}select(t){return s(this,null,function*(){let e=c(this.tabs,t);return this.shouldSwitch(e)?(yield this.setActive(e),yield this.notifyRouter(),this.tabSwitch(),!0):!1})}getTab(t){return s(this,null,function*(){return c(this.tabs,t)})}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(t){return s(this,null,function*(){let e=c(this.tabs,t);return this.shouldSwitch(e)?(yield this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}})}getRouteId(){return s(this,null,function*(){var t;let e=(t=this.selectedTab)===null||t===void 0?void 0:t.tab;return e!==void 0?{id:e,element:this.selectedTab}:void 0})}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){let t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){let t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){let e=this.selectedTab;return t!==void 0&&t!==e&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return n(r,{onIonTabButtonClick:this.onTabClicked},n("slot",{name:"top"}),n("div",{class:"tabs-inner"},n("slot",null)),n("slot",{name:"bottom"}))}get el(){return l(this)}},c=(t,e)=>{let i=typeof e=="string"?t.find(o=>o.tab===e):e;return i||console.error(`tab with id: "${i}" does not exist`),i};m.style=g;export{f as ion_tab,m as ion_tabs};
