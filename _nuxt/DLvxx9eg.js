import{W as j,u as p,X as f,r as _,Y as O,Z as M,D as B,$ as x,b as z,I as H,a0 as P,a1 as N,a2 as R,Q as V}from"./DF8krTJk.js";const E=s=>s==="defer"||s===!1;function K(...s){var g;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,d,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=p(),w=d,b=()=>f.value,C=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server??(a.server=!0),a.default??(a.default=b),a.getCachedData??(a.getCachedData=C),a.lazy??(a.lazy=!1),a.immediate??(a.immediate=!0),a.deep??(a.deep=f.deep),a.dedupe??(a.dedupe="cancel");const u=a.getCachedData(e,t),D=u!=null;if(!t._asyncData[e]||!a.immediate){(g=t.payload._errors)[e]??(g[e]=f.errorValue);const o=a.deep?_:O;t._asyncData[e]={data:o(D?u:a.default()),pending:_(!D),error:M(t.payload._errors,e),status:_("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(o={})=>{if(t._asyncDataPromises[e]){if(E(o.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(o._initial||t.isHydrating&&o._initial!==!1){const c=o._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,i)=>{try{c(w(t))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=T(i,a.pick)),t.payload.data[e]=i,n.data.value=i,n.error.value=f.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=R(c),n.data.value=V(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>S(t,e);const h=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const o=B();if(o&&m&&a.immediate&&!o.sp&&(o.sp=[]),o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;x(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),z(()=>i.splice(0,i.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=N();if(a.watch){const i=H(a.watch,()=>n.refresh());l&&P(i)}const c=t.hook("app:data:refresh",async i=>{(!i||i.includes(e))&&await n.refresh()});l&&P(c)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(v,n),v}async function Y(s){await new Promise(e=>j(e)),await p().hooks.callHookParallel("app:data:refresh",void 0)}function S(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=f.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=f.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function T(s,r){const e={};for(const d of r)e[d]=s[d];return e}const q={content:"v3.3.0--OY1z4GM2xz",translations:"v3.3.0--CVTN1jqzxy"},F={content:"_content_content",translations:"_content_translations",info:"_content_info"},G={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},translations:{type:"data",fields:{id:"string",stem:"string",extension:"string",meta:"json",en:"json",fr:"json"}},info:{type:"data",fields:{}}};export{G as a,q as c,Y as r,F as t,K as u};
