(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6785)}])},7303:function(e,t,a){"use strict";var n=a(5893),s=a(7294),i=a(5675),l=a.n(i);let r=["/andy13.png","/andysteam21.png","/andysteam13.png"],o=()=>{let[e,t]=(0,s.useState)("/andy13.png"),[a,i]=(0,s.useState)(0),[o,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=setInterval(()=>{c(!0),setTimeout(()=>{c(!1),i(e=>(e+1)%r.length)},500)},5e3);return()=>clearInterval(e)}),(0,s.useEffect)(()=>{t(r[a])},[a]),(0,n.jsx)("div",{className:"hidden xl:flex xl:max-w-none",children:(0,n.jsx)(l(),{src:e,width:737,height:678,alt:"",className:"translate-z-0 w-full h-full img-src ".concat(o?"transitioning":"")})})};t.Z=o},6785:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(5893),s=a(4875),i=a(7918),l=a(7294);let r=()=>{let e=(0,l.useCallback)(async e=>{await (0,i.R)(e)},[]),t=(0,l.useCallback)(async()=>{},[]);return(0,n.jsx)(s.D,{className:"w-full h-full absolute translate-z-0",id:"tsparticles",init:e,loaded:t,options:{fullScreen:{enable:!1},background:{color:{value:""}},fpsLimit:60,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:50},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#E5AA70"},links:{color:"#C2B280",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:3}}},detectRetina:!0}})};var o=a(5675),c=a.n(o),d=a(1664),u=a.n(d),m=a(9274);let x=()=>(0,n.jsx)("div",{className:"mx-auto xl:mx-0 z-20 max-lg:pb-20",children:(0,n.jsxs)(u(),{href:"/work",className:"relative w-[11em] h-[11em] flex justify-center items-center bg-circlesStar bg-cover  bg-center bg-no-repeat group",children:[(0,n.jsx)(c(),{src:"/nothing-everything-white6.png",width:141,height:148,alt:"",className:"animate-[spinner_6s_linear_infinite] w-full h-full max-w-[8.8125em] max-h-[9.25em]"}),(0,n.jsx)(m.WY3,{className:"absolute text-4xl group-hover:translate-x-2 transition-all duration-300"})]})});var h=a(7303),p=a(9844),f=a(2951),g=a(6356);let y=()=>{let e=()=>{console.log("Animation completed!")};return(0,n.jsxs)("div",{className:"w-full h-full max-lg:h-auto max-sm:pb-[16em] max-sm:pt-12",children:[(0,n.jsxs)("div",{className:"text-center flex flex-col justify-center xl:pt-0 xl:text-left h-full container mx-auto max-lg:pt-8",children:[(0,n.jsxs)(f.E.h1,{variants:(0,g.yu)(.3),initial:"hidden",animate:"show",exit:"hidden",onAnimationComplete:e,className:"h1 mb-4",children:["Transforming Ideas",(0,n.jsx)("br",{})," Into",(0,n.jsx)("span",{className:"text-orange",children:" Digital Reality"})]}),(0,n.jsxs)(f.E.p,{variants:(0,g.h9)("down",.5),initial:"hidden",animate:"show",exit:"hidden",className:"max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 max-xl:mb-0 text-[1.5em]",children:[(0,n.jsx)("span",{className:"mr-4",children:"I am"}),(0,n.jsx)(p.e,{sequence:["a Developer",2e3,"a Designer",2e3,"an Investor",2e3],speed:70,className:"text-orange",wrapper:"span",repeat:1/0}),(0,n.jsx)("span",{children:"."})]}),(0,n.jsx)("div",{className:"flex justify-center xl:hidden relative",children:(0,n.jsx)(x,{})}),(0,n.jsx)(f.E.div,{variants:(0,g.Ji)("down",.4),initial:"hidden",animate:"show",exit:"hidden",className:"hidden xl:flex",children:(0,n.jsx)(x,{})})]}),(0,n.jsxs)("div",{className:"w-[62.5vw] h-full absolute right-0 bottom-0",children:[(0,n.jsx)("div",{className:"bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"}),(0,n.jsx)(r,{}),(0,n.jsx)(f.E.div,{variants:(0,g.Ji)("up",.5),initial:"hidden",animate:"show",exit:"hidden",transition:{duration:1,ease:"easeInOut"},className:"w-full h-full max-w-[55%] max-h-[40vw] absolute -bottom-32 lg:bottom-0 lg:right-[8%]  max-sm:-bottom-[40%] max-sm:right-0",children:(0,n.jsx)(h.Z,{})})]})]})};var w=y},6356:function(e,t,a){"use strict";a.d(t,{Ji:function(){return n},h9:function(){return s},yu:function(){return i}});let n=(e,t)=>({hidden:{y:"up"===e?80:"down"===e?-80:0,opacity:0,x:"left"===e?80:"right"===e?-80:0,transition:{type:"tween",duration:1.5,delay:t,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.4,delay:t,ease:[.25,.25,.25,.75]}}}),s=(e,t)=>({hidden:{y:"up"===e?80:"down"===e?-80:0,opacity:0,x:"left"===e?80:"right"===e?-80:0,transition:{type:"spring",damping:10,stiffness:100,delay:t,ease:[.25,.6,.3,.8]}},show:{y:0,x:0,opacity:1,transition:{type:"spring",damping:10,stiffness:100,delay:t,ease:[.25,.25,.25,.75]}}}),i=e=>({hidden:{opacity:0,scale:.5,y:-1e3,transition:{type:"spring",delay:e,ease:[.175,.885,.32,1]}},show:{opacity:1,scale:1,y:0,transition:{type:"spring",delay:e,ease:[.175,.885,.32,1]}}})}},function(e){e.O(0,[827,412,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);