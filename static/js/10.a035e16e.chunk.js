"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[10],{561:function(e,t,n){var r=n(4165),i=n(5861),o=(n(2791),n(6015)),a=n(3978),s=n(4565),c=n(5152),p=n(3811),u=n(4162),l=n(5209),d=n(277),g=n(5953),m=n(6650),h=n(580),f=n(5758),v=n(983),w=n(194),b=n(4456),y=n(4259),x=n(184),k=(0,d.ZP)(g.ZP)({}),Z=(0,d.ZP)(m.Z)({padding:"1em",height:"100%"}),j=(0,d.ZP)(o.Z)({display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginLeft:"auto"});t.Z=function(e){var t,n=(0,b.T)(),d=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.url);case 3:n((0,y.OV)({message:"".concat(e.name," URL Copied to Clipboard!"),type:"success"})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n((0,y.OV)({message:"Unable to copy URL, try again later.",type:"error"}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={url:e.url,title:"".concat(e.name," from Shiryoku by Kunal Keshan"),text:e.description},t.next=4,navigator.share(n);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return(0,x.jsx)(k,{item:!0,xs:12,lg:5,children:(0,x.jsxs)(Z,{elevation:3,children:[(0,x.jsxs)(o.Z,{display:"flex",alignItems:"center",width:"100%",flexWrap:"wrap",children:[(0,x.jsx)(a.Z,{src:null!==(t=null===e||void 0===e?void 0:e.icon)&&void 0!==t?t:null===e||void 0===e?void 0:e.name,sx:{mr:2,cursor:"pointer"},imgProps:{loading:"lazy"}}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(s.Z,{variant:"body1",fontWeight:600,maxWidth:"200px",sx:{display:"flex",alignItems:"center",gap:"0.2em"},children:[e.name,(0,x.jsx)(c.Z,{title:"Copy resource url to clipboard",children:(0,x.jsx)(w.Z,{onClick:d,sx:{fontSize:"1em",cursor:"pointer",borderRadius:"50%"}})})]}),(0,x.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:"20ch"},children:(0,x.jsx)(c.Z,{title:e.description,arrow:!0,followCursor:!0,placement:"bottom",children:(0,x.jsx)(s.Z,{variant:"caption",noWrap:!0,children:e.description})})})]}),(0,x.jsxs)(j,{children:[(0,x.jsx)(c.Z,{title:"Visit Website",arrow:!0,followCursor:!0,placement:"bottom",children:(0,x.jsx)(p.Z,{href:e.url,target:"_blank",children:(0,x.jsx)(v.Z,{})})}),e.github&&(0,x.jsx)(c.Z,{title:"View Open Source Code",arrow:!0,followCursor:!0,placement:"bottom",children:(0,x.jsx)(p.Z,{href:null===e||void 0===e?void 0:e.github,target:"_blank",children:(0,x.jsx)(f.Z,{})})}),(0,x.jsx)(c.Z,{title:"Share ".concat(e.name),arrow:!0,followCursor:!0,placement:"bottom",children:(0,x.jsx)(p.Z,{onClick:g,children:(0,x.jsx)(h.Z,{})})})]})]}),(0,x.jsx)(u.Z,{direction:"row",flexWrap:"wrap",mt:2,children:e.tags.map((function(e){return(0,x.jsx)(l.Z,{label:e,size:"small",sx:{fontSize:"0.6rem",padding:"0.1em 0.2em",fontWeight:"bold",margin:"0.2em"}},e)}))})]})})}},5506:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(4165),i=n(5861),o=n(5671),a=n(3144),s=JSON.parse('["learning","programming","web development","coding","frontend","backend","cloud computing","finance","notes","study","college","ece","cse","career","interview","graphic design","ui/ux","srmist","html","css","javascript","typescript","react","cpp","github","git","node","security","aptitude","courses","free","all","certification","practice","open source","documentation","youtube","framework","jsx","tools","productivity","typing","gadgets","databases","mongodb","sql","redis","library","competitive coding","dsa"]'),c=JSON.parse('[{"name":"30 Seconds Of Interviews","description":"A curated collection of common interview questions to help you prepare for your next interview.","url":"https://30secondsofinterviews.org/","github":"https://github.com/30-seconds/30-seconds-of-interviews","icon":"https://30secondsofinterviews.org/30s-favicon.107cc86d.ico","tags":["web development","html","css","javascript","react","node","security","career","interview","programming","coding","frontend","backend","learning","github","free"]},{"name":"freeCodeCamp","description":"freeCodeCamp is a community of millions of people around the world who are learning to code together. You can learn to code with free online courses, programming projects, and interview preparation for developer jobs.","url":"https://www.freecodecamp.org/","github":"https://github.com/freeCodeCamp","icon":"https://www.freecodecamp.org/icons/icon-512x512.png?v=6cba562cbd10e31af925a976f3db73f7","tags":["career","programming","web development","javascript","frontend","backend","coding","learning","courses","github","all","free","certification"]},{"name":"The Odin Project","description":"The Odin Project provides a free open source coding curriculum that can be taken entirely online.","url":"https://www.theodinproject.com/","github":"https://github.com/TheOdinProject","icon":"https://www.theodinproject.com/favicon-32x32.png","tags":["career","programming","web development","javascript","frontend","backend","coding","learning","courses","all","free","github","certification"]},{"name":"CSSBattle","description":"CSSBattle is an online CSS Code Golfing game. Here, players from all around the world try to visually replicate \\"Targets\\" in smallest possible CSS code and battle it out to get to the top of the leaderboard.","url":"https://cssbattle.dev/","icon":"https://cssbattle.dev/images/logo-square.png","tags":["programming","web development","javascript","frontend","coding","css","html","learning","free","practice"],"roadmap":{"ids":["001"],"subTopics":["001-2"]}},{"name":"B. Tech ECE Notes","description":"Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24.","url":"https://notes.kunalkeshan.dev","github":"https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24","icon":"https://notes.kunalkeshan.dev/logo192.png","tags":["open source","ece","github","free","notes","srmist","college","study"]},{"name":"CSS Grid Garden","description":"A game for learning CSS grid layout","url":"https://cssgridgarden.com/","github":"https://github.com/thomaspark/gridgarden/","icon":"https://raw.githubusercontent.com/thomaspark/gridgarden/master/favicon.ico","tags":["open source","css","github","frontend","web development","learning","study","free","practice"]},{"name":"Learn Git Branching","description":"An interactive Git visualization tool to educate and challenge!","url":"https://learngitbranching.js.org/","github":"https://github.com/pcottle/learnGitBranching","icon":"https://learngitbranching.js.org/assets/favicon.ico","tags":["open source","css","github","frontend","web development","learning","study","free","practice","git"]},{"name":"10 Fast Fingers (Typing Tests)","description":"Test & Improve your Typing Speed with our free Typing Games","url":"https://10fastfingers.com/","icon":"https://pbs.twimg.com/profile_images/517343049085485056/6ll-wjg5_400x400.png","tags":["practice","productivity","tools","typing","programming","coding","free"]},{"name":"Stack Overflow","description":"Stack Overflow is a question and answer website for professional and enthusiast programmers.","url":"https://stackoverflow.com/","icon":"https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a","tags":["practice","productivity","tools","web development","all","programming","coding","free","frontend","backend","react","javascript","html","css","git","github"]},{"name":"Geeks For Geeks","description":"A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.","url":"https://www.geeksforgeeks.org","icon":"https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png","tags":["practice","productivity","tools","web development","all","programming","coding","free","frontend","backend","react","javascript","html","css","git","github","dsa","competitive coding"]},{"name":"Checklist Design","description":"A collection of the best design practices.","url":"https://www.checklist.design/","icon":"https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f33ce6795b617814aa43eb1_checklist-favicon.png","tags":["practice","productivity","tools","graphic design","ui/ux","frontend","free","html"]},{"name":"remove.bg","description":"Remove Image Background. 100% Automatically and Free","url":"https://www.remove.bg/","icon":"https://www.remove.bg/apple-touch-icon.png?v=YAXaAv7pao","tags":["productivity","tools","graphic design","ui/ux","frontend","free"]},{"name":"Canva","description":"Canva is an Australian graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.","url":"https://www.canva.com/","icon":"https://static.canva.com/static/images/android-192x192-2.png","tags":["productivity","tools","graphic design","ui/ux","free"]},{"name":"Dribbble","description":"Dribbble is a self-promotion and social networking platform for digital designers and creatives.","url":"https://dribbble.com/","icon":"https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png","tags":["productivity","tools","graphic design","ui/ux","frontend","free","practice"]},{"name":"Behance","description":"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.","url":"https://www.behance.net/","icon":"https://a5.behance.net/3dcd67bd8b6dfcc3a5f57ce37aa58c5865e5e428/img/site/apple-touch-icon.png","tags":["productivity","tools","graphic design","ui/ux","frontend","free","practice"]},{"name":"React JS Documentation","description":"A JavaScript library for building user interfaces.","url":"https://reactjs.org/","github":"https://github.com/facebook/react","icon":"https://reactjs.org/logo-180x180.png","tags":["javascript","documentation","programming","coding","github","open source","typescript","framework","web development","jsx","react"]},{"name":"Coursera","description":"Coursera is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.","url":"https://www.coursera.org/","icon":"https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/android-chrome-v2-192x192.png","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Node JS","description":"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.","url":"https://nodejs.org/","icon":"https://nodejs.org/static/images/favicons/favicon-32x32.png","tags":["library","web development","tools","typing","programming","coding","backend","node","frontend","documentation","open source"]},{"name":"NPTEL (National Programme on Technology Enhanced Learning)","description":"NPTEL is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE) Government of India, and was launched in 2003.","url":"https://nptel.ac.in/","icon":"https://www.mooclab.club/showcase/nptel.174/cover-image","tags":["free","notes","college","study","notes","courses","certification"]},{"name":"edX","description":"edX is an American massive open online course provider created by Harvard and MIT.","url":"https://www.edx.org/","icon":"https://www.edx.org/favicon.ico","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Udemy","description":"Udemy is an online learning and teaching marketplace with over 204000 courses and 54 million students.","url":"https://www.udemy.com/","icon":"https://www.udemy.com/staticx/udemy/images/v8/favicon-32x32.png","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Varsity by Zerodha","description":"Varsity by Zerodha - Markets, Trading, and Investing Simplified.","url":"https://zerodha.com/varsity/","icon":"https://zerodha.com/varsity/wp-content/themes/varsity/images/favicon.png","tags":["learning","free","finance"]}]'),p=[],u=JSON.parse('[{"id":"001","name":"Web Development Basics","description":"Tools and resources that will boost your development productivity.","icon":"https://raw.githubusercontent.com/kunalkeshan/Shiryoku/main/assets/roadmaps/001/icon.png","cover":"https://raw.githubusercontent.com/kunalkeshan/Shiryoku/main/assets/roadmaps/001/cover.png","topics":[{"id":"001-0","name":"Introduction to Web Development"},{"id":"001-1","name":"Hyper Text Markup Language"},{"id":"001-2","name":"Cascading Style Sheet"},{"id":"001-3","name":"JavaScript"},{"id":"001-4","name":"Tools"}]}]'),l=localStorage.getItem("readNotifications")?JSON.parse(localStorage.getItem("readNotifications")||"{}"):[],d=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Resources",get:function(){var e={};return e.getResources=(0,i.Z)((0,r.Z)().mark((function e(){var t,n,i,o,a,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:20,i=s.length>2&&void 0!==s[2]?s[2]:[],o=s.length>3?s[3]:void 0,a=c,o&&(a=a.filter((function(e){o=o.replace(/([^a-zA-z0-9]+)/g,"");var t=new RegExp(o,"ig"),n=e.tags.join(" ");return t.test(e.name)||t.test(e.description)||t.test(e.url)||n.match(t)}))),(null===i||void 0===i?void 0:i.length)>0&&(a=a.filter((function(e){return e.tags.find((function(e){return i.includes(e)}))}))),e.abrupt("return",a.slice((t-1)*n,t*n));case 8:case"end":return e.stop()}}),e)}))),e.getSingleResource=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.find((function(e){return new URL(e.url).hostname.split(".").shift()===t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getTotalPages=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Math.ceil(c.length/20));case 1:case"end":return e.stop()}}),e)}))),e}},{key:"Tags",get:function(){var e={};return e.getTags=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s);case 1:case"end":return e.stop()}}),e)}))),e}},{key:"Notifications",get:function(){var e={};return e.getAllNotification=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.forEach((function(e){e.read=!1,l.find((function(t){return t===e.id}))&&(e.read=!0)})),e.abrupt("return",p);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),e.updateReadNotifications=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=p.find((function(e){return e.id===t}))){e.next=4;break}throw new Error("Notification with give Id does not exist!");case 4:if(!l.find((function(e){return e===t}))){e.next=6;break}return e.abrupt("return");case 6:return l.push(n.id),localStorage.setItem("readNotifications",JSON.stringify(l)),e.abrupt("return","Notification marked as read!");case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),e}},{key:"Roadmaps",get:function(){var e={};return e.getRoadmaps=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u);case 1:case"end":return e.stop()}}),e)}))),e.getSingleRoadmap=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.find((function(e){return e.id===t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getResourcesOfRoadmap=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.filter((function(e){return!!e.roadmap&&e.roadmap.ids.includes(t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}}]),e}(),g=d}}]);
//# sourceMappingURL=10.a035e16e.chunk.js.map