(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{50477:()=>{},6160:(e,t,r)=>{Promise.resolve().then(r.bind(r,14627)),Promise.resolve().then(r.bind(r,34010)),Promise.resolve().then(r.bind(r,98192)),Promise.resolve().then(r.t.bind(r,65688,23)),Promise.resolve().then(r.t.bind(r,39432,23)),Promise.resolve().then(r.t.bind(r,19324,23))},14627:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>s});var a=r(95155);r(12115);var o=r(67113);function s(e){let{children:t,...r}=e;return(0,a.jsx)(o.N,{...r,children:t})}},34010:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>n});var a=r(95155),o=r(67113),s=r(30814);let n=e=>{let{...t}=e,{theme:r="system"}=(0,o.D)();return(0,a.jsx)(s.l$,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})}},98192:(e,t,r)=>{"use strict";r.d(t,{SessionProvider:()=>i});var a=r(95155),o=r(12115),s=r(76046),n=r(30814),l=r(41748);function i(e){let{children:t}=e,r=(0,s.useRouter)(),i=(0,s.usePathname)(),[c,u]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{let e=async()=>{if("/login"===i||"/"===i){u(!1);return}try{let e=await (0,l.mj)();if(!e){r.push("/login");return}let t=await fetch("https://blue-lion-79.telebit.io/api/auth/session",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(t.ok){let e=await t.json();await (0,l.Ui)(e.accessToken)}else await (0,l.WY)(),n.oR.error("Session Expired",{description:"Please log in again.",duration:3e3}),r.push("/login")}catch(e){console.error("Session check failed:",e),n.oR.error("Network Error",{description:"Unable to validate session. Please try again.",duration:3e3}),await (0,l.WY)(),r.push("/login")}finally{u(!1)}};e();let t=setInterval(e,36e5);return()=>clearInterval(t)},[r,i]),c)?(0,a.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-black",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})}):(0,a.jsx)(a.Fragment,{children:t})}},41748:(e,t,r)=>{"use strict";r.d(t,{Ui:()=>i,WY:()=>u,mj:()=>c});var a=r(7478),o=r.n(a);let s="123slatt",n=e=>o().AES.encrypt(e,s).toString(),l=e=>o().AES.decrypt(e,s).toString(o().enc.Utf8),i=e=>{try{let t=n(e);localStorage.setItem("accessToken",t)}catch(e){console.error("Failed to store token",e)}},c=()=>{try{let e=localStorage.getItem("accessToken");return e?l(e):null}catch(e){return console.error("Failed to retrieve token",e),null}},u=()=>{localStorage.removeItem("accessToken")}},76046:(e,t,r)=>{"use strict";var a=r(66658);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},19324:()=>{},65688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},39432:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},67113:(e,t,r)=>{"use strict";r.d(t,{D:()=>u,N:()=>m});var a=r(12115),o=(e,t,r,a,o,s,n,l)=>{let i=document.documentElement,c=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&s?o.map(e=>s[e]||e):o;r?(i.classList.remove(...a),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(a)u(a);else try{let e=localStorage.getItem(t)||r,a=n&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(a)}catch(e){}},s=["light","dark"],n="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=a.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=a.useContext(i))?e:c},m=e=>a.useContext(i)?a.createElement(a.Fragment,null,e.children):a.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=d,defaultTheme:m=o?"system":"light",attribute:h="data-theme",value:y,children:v,nonce:S,scriptProps:w}=e,[k,E]=a.useState(()=>p(c,m)),[T,P]=a.useState(()=>p(c)),_=y?Object.values(y):u,x=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=b());let a=y?y[t]:t,n=r?g(S):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(..._),a&&i.classList.add(a)):e.startsWith("data-")&&(a?i.setAttribute(e,a):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=s.includes(m)?m:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==n||n()},[S]),C=a.useCallback(e=>{let t="function"==typeof e?e(k):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[k]),N=a.useCallback(e=>{P(b(e)),"system"===k&&o&&!t&&x("system")},[k,t]);a.useEffect(()=>{let e=window.matchMedia(n);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),a.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?E(e.newValue):C(m))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),a.useEffect(()=>{x(null!=t?t:k)},[t,k]);let j=a.useMemo(()=>({theme:k,setTheme:C,forcedTheme:t,resolvedTheme:"system"===k?T:k,themes:o?[...u,"system"]:u,systemTheme:o?T:void 0}),[k,C,t,T,o,u]);return a.createElement(i.Provider,{value:j},a.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:o,enableColorScheme:l,defaultTheme:m,value:y,themes:u,nonce:S,scriptProps:w}),v)},f=a.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:n,enableColorScheme:l,defaultTheme:i,value:c,themes:u,nonce:m,scriptProps:d}=e,h=JSON.stringify([s,r,i,t,u,c,n,l]).slice(1,-1);return a.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(h,")")}})}),p=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(n)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[261,478,814,441,517,358],()=>t(6160)),_N_E=e.O()}]);