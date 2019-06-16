(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(4),o=t.n(i),s=t(10),u=t(9),l=t(5),c=t(6),d=t(11),m=t(7),g=t(2),k=t(12),h=t(1),y=t(8),f=t.n(y),b=(t(19),function(e,a,t){if("button"===t){var r=a?e:"blank";return n.a.createElement("button",{"aria-label":r,disabled:a},e)}return a?n.a.createElement("span",null,e):n.a.createElement("span",null,"\xa0")}),p=function(e){var a=e.disabled,t=e.letter,r=e.onClick,i=e.role,o=f()("Letter",{space:" "===t},{dash:"-"===t},{disabled:a});return n.a.createElement("li",{className:o,role:i,onClick:function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(){return r(t)}),"aria-disabled":!!a&&"true"},b(t,a,i))},w=(t(20),function(e){var a=e.letters,t=e.onClick;return n.a.createElement("ul",{className:"Alphabet"},Object(h.a)(a).map(function(e,a){return n.a.createElement(p,{key:a,letter:e.letter,disabled:e.disabled,onClick:t,role:"button"})}))}),v=(t(21),function(e){var a=e.category,t="Category: ".concat(a.category,".");return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"Category","aria-label":t,"aria-describedby":"category-description"},a.category),n.a.createElement("p",{id:"category-description",className:"sr-only"},"This is the category of the word to guess. Use keyboard to guess letters."))}),S=(t(22),function(e){var a=e.guessedTheWord,t=e.guessesLeft,r=n.a.createElement("i",{className:"fa fa-smile-o","aria-hidden":"true"}),i=n.a.createElement("i",{className:"fa fa-meh-o","aria-hidden":"true"}),o=n.a.createElement("i",{className:"fa fa-frown-o","aria-hidden":"true"}),s=n.a.createElement("i",{className:"fa fa-thumbs-o-up","aria-hidden":"true"});return a?n.a.createElement("div",{className:"GameResult","aria-label":"You won the game! Congratulations!"},s):t>1?n.a.createElement("div",{className:"GameResult","aria-label":"Game is in progress."},r):1===t?n.a.createElement("div",{className:"GameResult","aria-label":"You can guess wrong only one more time."},i):n.a.createElement("div",{className:"GameResult","aria-label":"You lost the game. Try again!"},o)}),L=(t(23),function(e){var a=e.guessesLeft,t="Guesses left: ".concat(a);return n.a.createElement("div",{className:"GuessesLeft","aria-label":t},a)}),E=(t(24),t(25),function(e){var a=e.language,t=e.onClick,r='Change language to "'.concat(a,'"'),i="flag-icon flag-icon-".concat(a);return n.a.createElement("button",{className:"Flag",onClick:function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(){return t(a)}),"aria-label":r},n.a.createElement("span",{className:i},"\xa0"))}),K=(t(26),function(e){var a=e.languages,t=e.onClick;return n.a.createElement("div",{className:"LanguageSwitcher"},Object(h.a)(a).map(function(e){return n.a.createElement(E,{key:e,language:e,onClick:t},e)}))}),C=(t(27),function(e){var a=e.onClick;return n.a.createElement("button",{className:"NewWord",onClick:function(e){function a(){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(){return a()}),"aria-label":"Start a new game"},n.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"}))}),M=(t(28),function(e,a){var t=a?e:Object(h.a)(e).map(function(e,a){return e.disabled?e.letter:"blank"}).join(", ");return"Word: ".concat(t)}),N=function(e){var a=e.guessedTheWord,t=e.word,i=M(t,a);return n.a.createElement(r.Fragment,null,n.a.createElement("ul",{className:"Word","aria-label":i,"aria-describedby":"word-description"},Object(h.a)(t).map(function(e,a){return n.a.createElement(p,{key:a,letter:e.letter,disabled:e.disabled,onClick:function(){}})})),n.a.createElement("p",{id:"word-description",className:"sr-only"},'This is the word to be guessed. Correctly guessed letters are pronounced. Other letters are pronounced as "blank" until guessed correctly.'))},T=[{category:"Months",words:["January","February","March","April","May","June","July","August","September","October","November","December"]},{category:"Seasons",words:["Spring","Summer","Autumn","Winter"]},{category:"Days of week",words:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},{category:"Pets",words:["Dog","Cat","Hamster","Guinea pig","Turtle","Parrot","Budgerigar"]},{category:"African animals",words:["Lion","Camel","Elephant","Giraffe","Zebra","Rhino","Hippo","Antelope","Hyena","Scorpion","Baboon","Gorilla","Chimpanzee","Constrictor"]},{category:"Food",words:["Pasta","Pizza","Lasagne","Meatballs","Chicken soup","Fish soup","Hamburger","Cooked salmon"]},{category:"Drinks",words:["Lemonade","Strawberry juice","Apple juice","Water","Milk","Buttermilk","Orange juice","Pineapple juice","Mineral water","Beer","Whiskey","Rum","Kvass"]},{category:"Furniture",words:["Desk","Sofa","Chair","Bed","Bookshelf","Dresser","Armchair"]},{category:"Sports",words:["Soccer","Basketball","Handball","Volleyball","Ice hockey","Javelin throw","Floorball","Discus throw","Figure skating","Ski jumping","Triathlon"]},{category:"Star Wars characters",words:["Jango Fett","Boba Fett","Anakin Skywalker","Luke Skywalker","Han Solo","Chewbacca","Darth Maul","Darth Vader","Jabba the Hutt","Jar Jar Binks","Obi-Wan Kenobi","Yoda","Finn","Kylo Ren","Darth Sidious"]},{category:"Colors",words:["Red","Green","Black","Blue","Yellow","White","Grey","Pink","Orange","Purple","Brown","Violet","Turquoise"]}],j=[{category:"Kuukaudet",words:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukukuu","Kes\xe4kuu","Hein\xe4kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]},{category:"Vuodenajat",words:["Kev\xe4t","Kes\xe4","Syksy","Talvi"]},{category:"Viikonp\xe4iv\xe4t",words:["Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai","Sunnuntai"]},{category:"Lemmikkiel\xe4imet",words:["Koira","Kissa","Hamsteri","Marsu","Kilpikonna","Papukaija","Undulaatti"]},{category:"Mets\xe4nel\xe4imet",words:["Karhu","Susi","Kettu","Hirvi","Peura","Orava","J\xe4nis","P\xf6ll\xf6","Siili","Hiiri","Myyr\xe4","Liito-orava"]},{category:"Kalat",words:["Made","S\xe4rki","Ahven","Muikku","Taimen","Hauki","Siika","Lohi","Silakka","Kirjolohi","Harjus","Kampela","Lahna","Kiiski","Kuha"]},{category:"Kukat",words:["Orkidea","P\xe4iv\xe4nkakkara","Kielo","Ruusu","Kissankello","Voikukka","Leskenlehti","Tulppaani","Sinivuokko","Valkovuokko","Keltavuokko","Apila","Narsissi","Lupiini"]},{category:"Ruuat",words:["Makaronilaatikko","Lasagne","Pizza","Lihapullat","Kalakeitto","Pinaattikeitto","Pinaattiletut","Siskonmakkarakeitto","Poronk\xe4ristys","Lihakeitto","Kanakeitto","Pasta"]},{category:"Afrikan el\xe4imet",words:["Leijona","Kameli","Norsu","Kirahvi","Seepra","Sarvikuono","Virtahepo","Antilooppi","Hyeena","Gebardi","Skorpioni","Paviaani","Gorilla","Simpanssi","Kuristajak\xe4\xe4rme"]},{category:"Juomat",words:["Limonadi","Mansikkamehu","Omenamehu","Vesi","Maito","Piim\xe4","Appelsiinimehu","Ananasmehu","Kivenn\xe4isvesi","Olut","Viski","Rommi","Kotikalja"]},{category:"Huonekalut",words:["P\xf6yt\xe4","Sohva","Tuoli","S\xe4nky","Kirjahylly","Lipasto","Nojatuoli"]},{category:"Puut",words:["Kuusi","M\xe4nty","Koivu","Vaahtera","Tammi","Haapa","Pihlaja","Saarni","Tuomi"]},{category:"Ajoneuvot",words:["Linja-auto","Henkil\xf6auto","Kuorma-auto","Moottoripy\xf6r\xe4","Skootteri"]},{category:"Urheilulajit",words:["Jalkapallo","Koripallo","K\xe4sipallo","Lentopallo","J\xe4\xe4kiekko","Keih\xe4\xe4nheitto","Salibandy","Kiekonheitto","Taitoluistelu","M\xe4kihyppy","Triathlon"]},{category:"Star Wars -hahmot",words:["Jango Fett","Boba Fett","Anakin Skywalker","Luke Skywalker","Han Solo","Chewbacca","Darth Maul","Darth Vader","Jabba the Hutt","Jar Jar Binks","Obi-Wan Kenobi","Yoda","Finn","Kylo Ren","Darth Sidious"]},{category:"V\xe4rit",words:["Punainen","Vihre\xe4","Sininen","Musta","Valkoinen","Keltainen","Vaaleanpunainen","Oranssi","Turkoosi","Violetti","Harmaa","Ruskea"]}],O=[{category:"Meses del a\xf1o",words:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},{category:"D\xedas de la semana",words:["Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado","Domingo"]}],P=(t(29),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state=t.initialState(),t.changeLanguage=t.changeLanguage.bind(Object(g.a)(t)),t.selectLetter=t.selectLetter.bind(Object(g.a)(t)),t.startNewGame=t.startNewGame.bind(Object(g.a)(t)),t.addKeyPressListener(),t}return Object(k.a)(a,e),Object(c.a)(a,[{key:"initialState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gb",a=this.getAlphabet(e),t=Array.from(a).map(function(e){return{letter:e,disabled:!1}}),r=this.getDictionaries().get(e),n=this.randomCategory(r);return{alphabet:a,letters:t,language:e,category:n,word:Array.from(this.randomWord(n)).map(function(e){return{letter:e,disabled:!1}}),guessedLetters:new Set,guessesLeft:5,guessedTheWord:!1}}},{key:"getAlphabet",value:function(e){return"gb"===e?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"fi"===e?"ABCDEFGHIJKLMNOPQRSTUVWXYZ\xc5\xc4\xd6":"es"===e?"A\xc1BCDE\xc9FGHI\xcdJKLMN\xd1O\xd3PQRSTU\xda\xdcVWXYZ":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},{key:"getDictionaries",value:function(){var e=new Map;return e.set("fi",j),e.set("gb",T),e.set("es",O),e}},{key:"randomCategory",value:function(e){var a=[],t=!0,r=!1,n=void 0;try{for(var i,o=e.entries()[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var s=i.value,l=Object(u.a)(s,2),c=(l[0],l[1]);a.push(c)}}catch(d){r=!0,n=d}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}return a[Math.floor(Math.random()*a.length)]}},{key:"randomWord",value:function(e){return e.words[Math.floor(Math.random()*e.words.length)].toUpperCase()}},{key:"changeLanguage",value:function(e){this.setState(this.initialState(e))}},{key:"selectLetter",value:function(e){this.updateGameStatus(this.state,e)}},{key:"updateGameStatus",value:function(e,a){if(e.guessesLeft>0&&!e.guessedTheWord){var t=Object(s.a)({},e),r=e.guessedLetters.has(a);if(!r){t.guessedLetters.add(a);var n=t.letters.find(function(e){return e.letter===a});n&&(n.disabled=!0)}var i=t.word.filter(function(e){return!["-"," "].includes(e.letter)}).every(function(e){return t.guessedLetters.has(e.letter)}),o=t.word.filter(function(e){return e.letter===a}).length>0;i?t.guessedTheWord=!0:r||o||t.guessesLeft--,t.word.forEach(function(e){return e.letter===a?e.disabled=!0:""}),this.setState(t)}}},{key:"startNewGame",value:function(){this.setState(this.initialState(this.state.language))}},{key:"addKeyPressListener",value:function(){var e=this;document.addEventListener("keydown",function(a){var t=a.key.toUpperCase();e.state.alphabet.includes(t)&&e.selectLetter(t)})}},{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("p",{className:"sr-only"},"Welcome to play word guess game. Try to guess the word from the given category. Use keyboard to guess the letters."),n.a.createElement(w,{letters:this.state.letters,onClick:this.selectLetter}),n.a.createElement(v,{category:this.state.category}),n.a.createElement(N,{word:this.state.word,guessedTheWord:this.state.guessedTheWord}),n.a.createElement("div",{className:"footer"},n.a.createElement(L,{guessesLeft:this.state.guessesLeft}),n.a.createElement(S,{guessedTheWord:this.state.guessedTheWord,guessesLeft:this.state.guessesLeft}),n.a.createElement(K,{languages:["fi","gb","es"],onClick:this.changeLanguage}),n.a.createElement(C,{onClick:this.startNewGame})))}}]),a}(r.Component));o.a.render(n.a.createElement(P,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.c4c8e6ea.chunk.js.map