(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={control:"AddMovie_control__2ENNX"}},,,,,,function(e,t,n){e.exports={movie:"Movie_movie__27rBX"}},function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__lMnXQ"}},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=(n(18),n(12)),i=n(7),s=n(2),u=n.n(s),m=n(6),p=n(5),f=(n(20),n(10)),v=n.n(f),b=function(e){return r.a.createElement("li",{className:v.a.movie},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,e.releaseDate),r.a.createElement("p",null,e.openingText))},d=n(11),E=n.n(d),h=function(e){return r.a.createElement("ul",{className:E.a["movies-list"]},e.movies.map((function(e){return r.a.createElement(b,{key:e.id,title:e.title,releaseDate:e.release,openingText:e.openingText})})))},x=n(4),j=n.n(x);var g=function(e){var t=Object(a.useRef)(""),n=Object(a.useRef)(""),c=Object(a.useRef)("");return r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var r={title:t.current.value,openingText:n.current.value,releaseDate:c.current.value};e.onAddMovie(r)}},r.a.createElement("div",{className:j.a.control},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",ref:t})),r.a.createElement("div",{className:j.a.control},r.a.createElement("label",{htmlFor:"opening-text"},"Opening Text"),r.a.createElement("textarea",{rows:"5",id:"opening-text",ref:n})),r.a.createElement("div",{className:j.a.control},r.a.createElement("label",{htmlFor:"date"},"Release Date"),r.a.createElement("input",{type:"text",id:"date",ref:c})),r.a.createElement("button",null,"Add Movie"))};var O=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),s=Object(p.a)(l,2),f=s[0],v=s[1],b=Object(a.useState)(null),d=Object(p.a)(b,2),E=d[0],x=d[1];Object(a.useEffect)((function(){j()}),[]);var j=Object(a.useCallback)(Object(m.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),x(null),e.prev=2,e.next=5,fetch("https://react-guide-9f34b.firebaseio.com/movies.json");case 5:if(!(t=e.sent).ok){e.next=15;break}return e.next=9,t.json();case 9:for(r in n=e.sent,a=[],n)a.push(n[r]);c(a),e.next=16;break;case 15:throw new E("Something went wrong!");case 16:v(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(2),x(e.t0),v(!1),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,19]])}))),[]);function O(){return(O=Object(m.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)(Object(i.a)({},t),{},{id:1e3*Math.random()}),v(!0),x(null),e.next=5,fetch("https://react-guide-9f34b.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 5:e.sent,(r=Object(o.a)(n)).unshift(a),c(r),v(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=r.a.createElement("p",null,"Found no movies.");return n.length>0&&(k=r.a.createElement(h,{movies:n})),E&&(k=r.a.createElement("p",null,E)),f&&(k=r.a.createElement("p",null,"Loading...")),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement(g,{onAddMovie:function(e){return O.apply(this,arguments)}})),r.a.createElement("section",null,r.a.createElement("button",{onClick:function(e){e.preventDefault(),j()}},"Fetch Movies")),r.a.createElement("section",null,k))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ffced3f2.chunk.js.map