"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[866],{4612:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","metadata":{"permalink":"/blog/JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","editUrl":"https://github.com/minsgy/minsgy.github.io/edit/main/blog/javascript-memory.md","source":"@site/blog/javascript-memory.md","title":"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","description":"\uc11c\ub860","date":"2022-09-18T10:51:29.000Z","formattedDate":"2022\ub144 9\uc6d4 18\uc77c","tags":[{"label":"JavaScript","permalink":"/blog/tags/java-script"},{"label":"DeepDive","permalink":"/blog/tags/deep-dive"},{"label":"Study","permalink":"/blog/tags/study"}],"readingTime":13.115,"hasTruncateMarker":false,"authors":[{"name":"Choi Minseok","title":"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","url":"https://github.com/minsgy","imageURL":"https://github.com/minsgy.png","key":"minsgy"}],"frontMatter":{"slug":"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","title":"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","authors":["minsgy"],"tags":["JavaScript","DeepDive","Study"]},"nextItem":{"title":"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","permalink":"/blog/JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec"}},"content":"## \uc11c\ub860\\n\\nJavaScript\uc758 \uba54\ubaa8\ub9ac \uad00\ub9ac\ub294 \uc5b4\ub824\uc6b4 \uc8fc\uc81c\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 JavaScript\ub294 GC(Garbage Collector)\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0\ub9cc, GC\uac00 \uc5b8\uc81c \uc5b4\ub5a4 \uba54\ubaa8\ub9ac\ub97c \ud574\uc81c\ud560\uc9c0\ub294 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. JavaScript\uc5d0\uc11c \uba54\ubaa8\ub9ac \uad00\ub9ac\ub97c \uc798 \ud558\ub824\uba74 \uc5b4\ub5a4 \uac83\ub4e4\uc744 \uc54c\uc544\uc57c \ud560 \uc9c0 \uc54c\uc544\ubcf4\uae30 \uc704\ud574 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.\\n\\n## JavaScript \ub370\uc774\ud130\uc640 \uba54\ubaa8\ub9ac\\n\\nJavaScript\uc5d0\uc11c \ub370\uc774\ud130\ub294 \ud06c\uac8c 2\uac00\uc9c0\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n**\ubcc0\uacbd \ubd88\uac00\ub2a5\ud55c \uac12(immutable value)\uc778 \uc6d0\uc2dc \ud0c0\uc785**\uacfc **\ubcc0\uacbd \uac00\ub2a5\ud55c(mutable value) \uac1d\uccb4 \ud0c0\uc785**\uc73c\ub85c \uad6c\ubd84\ud560 \uc218 \uc788\uc73c\uba70 \uc815\uc801 \ub370\uc774\ud130(Static Data)\ub97c \uc800\uc7a5\ud558\ub294 \ub370\uc774\ud130 \uad6c\uc870\uc778 \uc2a4\ud0dd(Stack)\uacfc \ub3d9\uc801 \ub370\uc774\ud130 \ud560\ub2f9\ud558\ub294 \ud799(Heap)\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4.\\n\\n\uc774\ub97c \uc880 \ub354 \uc790\uc138\ud558\uac8c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n### \uba54\ubaa8\ub9ac \uc0dd\uba85\uc8fc\uae30 \uacfc\uc815\\n\\n![image](https://user-images.githubusercontent.com/60251579/190898884-3f7d3777-8e62-4429-baf2-371f0ae23d66.png)\\n\uac04\ub2e8\ud558\uac8c \ud45c\ud604\ud558\uc5ec **JavaScript**\uc5d0\uc11c \ubcc0\uc218\ub098 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uace0 \ud544\uc694\uac00 \uc5c6\uc5b4\uc9c0\uba74 \uba54\ubaa8\ub9ac\uc5d0\uc11c \ud574\uc81c\ud569\ub2c8\ub2e4.\\n\\n\uc0dd\uc131\ud55c \uac1d\uccb4(Object)\uc5d0 \ud544\uc694\ud55c **\uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9**\ud558\uace0, \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \ud1b5\ud574 \ubcc0\uc218\ub97c \uc77d\uac70\ub098 \uc0ac\uc6a9\ud558\ub294 \uacfc\uc815\uc73c\ub85c **\uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9**\ud569\ub2c8\ub2e4. \uc774\ud6c4 JS \uc5d4\uc9c4\uc744 \ud1b5\ud574 **\ud560\ub2f9 \ub41c \uba54\ubaa8\ub9ac\uac00 \ud574\uc81c**\ub418\uc5b4 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\uac00\ub2a5\ud55c \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uac8c \ub429\ub2c8\ub2e4.\\n\\n### \uc6d0\uc2dc \ud0c0\uc785 (Primitive Type)\\n\\n![image](https://user-images.githubusercontent.com/60251579/190897442-875ae942-8993-41f0-b4f5-c73a3b2e16a3.png)\\n\\n\uc6d0\uc2dc \ud0c0\uc785\uc758 \uc885\ub958\ub85c `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, \ucc38\uc870\\n\\n\uc5ec\uae30\uc11c \ub9d0\ud558\ub294 \uc6d0\uc2dc \uac12\uc758 \ubcc0\uacbd\uc774 \ubd88\uac00\ub2a5\ud558\ub2e4\ub294 \uac74, **\\"\uba54\ubaa8\ub9ac \uc0c1 \ud560\ub2f9 \ub41c \ubcc0\uc218 \uac12\\"** \uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4.\\n\\n\uc774\ub7ec\ud55c \ud2b9\uc9d5\uc73c\ub85c \uc6d0\uc2dc \ud0c0\uc785\uc740 `\ubd88\ubcc0\uc131` \ud2b9\uc9d5\uc744 \uac16\uac8c \ub418\uace0, \uac12\uc744 \ubcf5\uc0ac\ud55c\ub2e4\uba74 \uc0c8\ub85c\uc6b4 \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \ud560\ub2f9\ud558\uc5ec **call by value** \ubc29\uc2dd\uc73c\ub85c \ubcf5\uc0ac\ub418\uc5b4 \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n\uc704\uc640 \uac19\uc740 \uc758\ubbf8\ub85c \uc544\ub798\uc640 \uac19\uc774 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```js\\n// \uae30\uc874 \uc800\uc7a5 \ub41c \uba54\ubaa8\ub9ac\uc5d0 \uac12\uc774 \uc800\uc7a5\ub418\ub294 \uac83\uc774 \uc544\ub2cc \uc0c8\ub85c\uc6b4 \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4.\\nlet example = 3;\\nexample = 5;\\nconsole.log(example); // 5\\n\\n// \uac19\uc740 \uac12\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0\ub9cc, \uc11c\ub85c \ub2e4\ub978 \uba54\ubaa8\ub9ac \uc8fc\uc18c\ub97c \uac16\uace0 \uc788\ub294 call by value\\nlet a = 1;\\nlet b = a;\\n\\nconsole.log(a === b); // true\\n```\\n\\n\uc774\uc5b4\uc11c \uac1d\uccb4(object)\uc640 \ud568\uc218(function)**\ub294 \ud799(heap)\uc5d0 \uc800\uc7a5\ub418\uc9c0\ub9cc, \ucc38\uc870(Reference)\ub294 \uc2a4\ud0dd(Stack)\uc5d0 \uc800\uc7a5\ud558\uc5ec \ud65c\uc6a9**\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n### \uac1d\uccb4(\ucc38\uc870) \ud0c0\uc785 (Object Type)\\n\\n\uac1d\uccb4\ub294 \ubcc0\uacbd \uac00\ub2a5\ud55c \uac12(mutable value)\uc785\ub2c8\ub2e4.\\n\\n\uc55e\uc11c \uc0ac\uc6a9\ud558\ub294 `const` \ud0a4\uc6cc\ub4dc\ub294 \uc0c1\uc218\ub97c \ub9cc\ub4dc\ub294 \uac78 \ubaa9\uc801\uc73c\ub85c \ud569\ub2c8\ub2e4.\\n\uc120\uc5b8\ud55c \ubcc0\uc218 \uc7ac\ud560\ub2f9\uc774 \ubd88\uac00\ub2a5\ud558\uc9c0\ub9cc **\uac1d\uccb4\uc5d0 \ud560\ub2f9\ud55c \ubcc0\uc218(property)** \ub294 \ubcc0\uacbd \uac00\ub2a5\ud569\ub2c8\ub2e4.\\n\\n```js\\nconst a = {};\\na = 3; // @ERROR \uc0c1\uc218\ub85c \uc120\uc5b8\ub418\uc5b4 \uc7ac\ud560\ub2f9\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\\na.name = \\"\ucd5c\ubbfc\uc11d\\"; // \uac1d\uccb4\ub97c \ud560\ub2f9\ud55c \ubcc0\uc218\uc5d0 \uc7ac\ud560\ub2f9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\uae30\ub54c\ubb38\uc5d0 \uac00\ub2a5\ud569\ub2c8\ub2e4.\\nconsole.log(a); // { name: \\"\ucd5c\ubbfc\uc11d\\" }\\n```\\n\\n\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc740 \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4e4\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c **\uac1d\uccb4\ub97c \ubcc0\uacbd \uac00\ub2a5\ud55c \uac12\uc73c\ub85c \uc124\uacc4**\ud588\uc2b5\ub2c8\ub2e4.\\nJavaScript\uc5d0\uc11c\ub294 \uc774\ub97c \ucd5c\uc18c\ud654\ud558\uc5ec **\uba54\ubaa8\ub9ac \ud6a8\uc728\uc801 \uc18c\ube44\ub97c \ub192\uc774\uace0 \uc131\ub2a5\uc744 \uac1c\uc120**\ud569\ub2c8\ub2e4.\\n\\n\uadf8\ub7ec\ub098 **\uc5ec\ub7ec \uac1c\uc758 \uc2dd\ubcc4\uc790\uac00 \ud558\ub098\uc758 \uac1d\uccb4\ub97c \uacf5\uc720**\ud558\uc5ec \uc601\ud5a5\uc744 \ub07c\uce58\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n\\n### \ucc38\uc870\uac12\uc73c\ub85c \uc778\ud55c \ubb38\uc81c\\n\\n![image](https://user-images.githubusercontent.com/60251579/190900382-bfc3ab00-be1f-4195-80e8-048a374833ac.png)\\n\\n\uadf8\ub9bc\uacfc \uac19\uc774 `getDeveloper()` \ud568\uc218\ub294 `developer` \uac1d\uccb4\uc758 `name` property\ub97c \uac00\ub9ac\ud0a4\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\uc774\ub97c \ud1b5\ud574 \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc810\uc744 \ud655\uc778\ud574\ubd05\ub2c8\ub2e4.\\n\\n```js\\n// \uc11c\ub85c \ub2e4\ub978 \uac12\uc774 \uc601\ud5a5\uc744 \ubc1b\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n// \uc774\ub97c \ud1b5\ud574 \ucf54\ub4dc \ubcf5\uc7a1\uc131\uc774 \ub298\uc5b4\ub098\uac8c \ub429\ub2c8\ub2e4.\\nconst developer = {\\n  name: \\"minsgy\\",\\n  age: \\"26\\",\\n};\\n\\nfunction getDeveloperName() {\\n  return developer.name;\\n}\\nconsole.log(getDeveloperName()); // \\"minsgy\\"\\ndeveloper.name = \\"umin\\";\\nconsole.log(getDeveloperName()); // \\"umin\\"\\n```\\n\\n`call by reference`\ub97c \uae30\ubc18\ud558\uc5ec \ub2e4\uc911 \uc2dd\ubcc4\uc790\uc5d0 \ub300\ud55c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n\\n\ud558\ub098\uc758 \ub85c\uc9c1\uc5d0 **\uc758\uc874\uc131(dependency)** \uc744 \uac00\uc9c0\uace0 \ucf54\ub4dc \ubcf5\uc7a1\uc131\uc774 \ub192\uc544\uc9c0\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uace0 \uc758\ub3c4\ud558\uc9c0 \uc54a\uc740 \uac12 \ubcc0\uacbd\uc774 \uc77c\uc5b4\ub09c\ub2e4\uba74 \ub514\ubc84\uae45\uc5d0\ub3c4 \uc5b4\ub824\uc6c0\uc744 \uac00\uc838 **\uc720\uc9c0\ubcf4\uc218\uc5d0 \uc788\uc5b4\uc11c\ub3c4 \uc88b\uc9c0 \uc54a\uc740 \uacb0\uacfc**\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\\n\\n### \uba54\ubaa8\ub9ac \ub204\uc218\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\\n\\nJavaScript\ub294 \ud560\ub2f9\ub41c \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 [GC(Garbage collector)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)\uc5d0 \uc758\ud574 \uba54\ubaa8\ub9ac \ud560\ub2f9\uc744 \ucd94\uc801\ud558\uace0 \uc790\ub3d9\uc73c\ub85c \uba54\ubaa8\ub9ac\ub97c \ubc18\ud658\uc2dc\ud0a4\ub294 \uc5ed\ud560\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc \uc774\ub7ec\ud55c \uacfc\uc815\uc5d0 \uc788\uc5b4\uc11c \uba54\ubaa8\ub9ac\uac00 \uc0ac\uc6a9\ub418\ub294 \uc9c0 \ucd94\uc815\ud558\uae30 \ub54c\ubb38\uc5d0 \ub54c\ub54c\ub85c **\uacb0\uc815\ubd88\uac00\ub2a5(undecidable) \uc0c1\ud0dc**\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n\ub300\ubd80\ubd84\uc758 GC\ub294 \ubaa8\ub4e0 \ubcc0\uc218\uac00 \uc2a4\ucf54\ud504(Scope)\ub97c \ubc97\uc5b4\ub0ac\uc744 \ub54c \ub354 \uc774\uc0c1 \uc811\uadfc \ubd88\uac00\ub2a5\ud55c \uba54\ubaa8\ub9ac\ub97c \uc218\uc9d1\ud558\uc9c0\ub9cc \uc2a4\ucf54\ud504\uac00 \uc720\uc9c0\ub418\ub294 \uacbd\uc6b0\uac00 \uc0dd\uae34\ub2e4\uba74 \uba54\ubaa8\ub9ac\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n\uacb0\uad6d GC\uac00 \uc758\uc874\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc740 **\uc5ec\ub7ec \uac1d\uccb4\uc640\uc758 \ucc38\uc870(Reference)** \ub97c \ud1b5\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4.\\n\uc774\ub85c \uc778\ud574 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ubb38\uc81c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\\n\\n#### \uc21c\ud658\ucc38\uc870 (\ud574\uacb0)\\n\\n![image](https://user-images.githubusercontent.com/60251579/190912024-41c28c81-2deb-46e1-9596-49e1d1eea2e8.png)\\n\\n\uc544\ub798 \uc608\uc81c\uc5d0\uc11c \ub450 \uac1d\uccb4\uac00 \uc0dd\uc131\ub418\uac8c \ub418\uba74\uc11c \uc11c\ub85c\ub97c \ucc38\uc870\ud558\uace0 **\uc21c\ud658\ucc38\uc870\uac00 \uc0dd\uc131**\ub418\uac8c \ub429\ub2c8\ub2e4.\\n\\n\uc0ac\uc2e4\uc0c1 \ud568\uc218 \ud638\ucd9c \uc774\ud6c4, \uc2a4\ucf54\ud504(Scope)\ub97c \ubc97\uc5b4\ub098\uac8c \ub418\uba74\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uac8c \ub418\uc9c0\ub9cc \ub450 \uac1d\uccb4 \ub2e4 \ud55c \ubc88\uc740 \ucc38\uc870\ud55c \uac78\ub85c \uac04\uc8fc\ub418\uc5b4 GC(Gabage collector)\uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n\\n```js\\nfunction f() {\\n  var o1 = {};\\n  var o2 = {};\\n  o1.p = o2; // o1\uc740 o2\ub97c \ucc38\uc870\ud568\\n  o2.p = o1; // o2\ub294 o1\uc744 \ucc38\uc870\ud568. \uc774\ub97c \ud1b5\ud574 \uc21c\ud658 \ucc38\uc870\uac00 \ub9cc\ub4e4\uc5b4\uc9d0.\\n}\\n\\nf();\\n```\\n\\n2012\ub144 \uae30\uc900\uc73c\ub85c \ud604\ub300 \ube0c\ub77c\uc6b0\uc800\ub294 \ud574\ub2f9 \uc21c\ud658\ucc38\uc870\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 [Mark-Sweep \uc54c\uace0\ub9ac\uc998](https://www.geeksforgeeks.org/mark-and-sweep-garbage-collection-algorithm/)\uc774 \uc801\uc6a9\ub418\uba74\uc11c \uc21c\ud658\ucc38\uc870 \ubb38\uc81c\uac00 \ud574\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uc9c0\ub9cc React\uc640 \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8 \uac04 \uc21c\ud658 \ucc38\uc870\uac00 \uc77c\uc5b4\ub0a0 \uacbd\uc6b0 \uc774\uc288\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 **\uc5ec\uc804\ud788 \uc9c0\uc591\ud574\uc57c \ud558\ub294 \ubd80\ubd84**\uc785\ub2c8\ub2e4.\\n\\n#### \uc804\uc5ed \ubcc0\uc218\\n\\n\uc120\uc5b8\ub418\uc9c0 \uc54a\ub294 \ubcc0\uc218\ub97c \ucc38\uc870\ud558\uac8c \ub41c\ub2e4\uba74 \uc804\uc5ed \uac1d\uccb4\uc5d0 \uc0c8\ub85c\uc6b4 \ubcc0\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\\n`window` \uac1d\uccb4\ub97c \ucc38\uc870\ud558\uc5ec GC\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac\uac00 \uc815\ub9ac\ub418\uc9c0 \uc54a\uc544 \uaddc\ubaa8\uac00 \ud06c\ub2e4\uba74 \uc870\uc2ec\ud574\uc57c \ud569\ub2c8\ub2e4.\\n\\n```js\\nfunction foo(arg) {\\n  name = \\"minsgy\\"; // window.name\\n}\\n```\\n\\n#### setInterval, setTimeout, callback\\n\\n```js\\n// 1\ubc88\uc9f8. Observer Time API\\n// \ucc38\uc870\ud55c Node\ub098 \ub370\uc774\ud130\uac00 \ub354 \ud544\uc694\ub85c \ud558\uc9c0\uc54a\ub294 timer\ub97c \uc0ac\uc6a9\ud55c \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\\nlet serverData;\\n\\nsetInterval(function () {\\n  let renderer = document.getElementById(\\"renderer\\");\\n  if (renderer) {\\n    renderer.innerHTML = JSON.stringify(serverData);\\n  }\\n}, 5000); // \ub9e4 5\ucd08 \ub9c8\ub2e4 \uc2e4\ud589\\n```\\n\\n\uc704 \ucf54\ub4dc\ub97c \ud1b5\ud574 renderer \uac1d\uccb4\ub294 \uc5b4\ub290 \uc2dc\uc810\uc5d0 \ub2e4\ub978 \uac83\uc73c\ub85c \ub300\uccb4\ub418\uac70\ub098 \uc81c\uac70\ud560 \uc218 \uc788\uc73c\uba70 `Interval`\ub85c \uc313\uc778 \ucf54\ub4dc\ub294 \ud544\uc694\uac00 \uc5c6\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 `Interval`\uc740 \ud65c\uc131\ud654\ub41c \uc0c1\ud0dc\ub85c GC\ub97c \ud1b5\ud55c \uba54\ubaa8\ub9ac\uac00 \uc815\ub9ac\ub418\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c `serverData` \ub370\uc774\ud130\ub3c4 \ubc18\ud658\ub418\uc9c0 \uc54a\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\\n\\n\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c `clearInterval`\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4.\\n\\n```js\\n// 2\ubc88\uc9f8. Observer Handler \uc81c\uac70\ud558\uae30\\nconst element = ...\\nconst onClick = () => {...}\\nelement.addEventListener(\'click\', onClick) // event \ub4f1\ub85d\\nelement.removeEventListener(\'click\', onClick) // event \uc81c\uac70\\n```\\n\\n\ud604\ub300 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 `removeEvent`\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uc544\ub3c4 \uc21c\ud658\ucc38\uc870\ub97c \ud0d0\uc9c0\ud558\uc5ec GC\uc5d0\uc11c \uc790\ub3d9 \ucc98\ub9ac\ud558\uc9c0\ub9cc \uad6c\ud615 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub3d9\uc791\ud560 \ub54c\ub3c4 \uba54\ubaa8\ub9ac \ub204\uc218\uac00 \uc5c6\ub3c4\ub85d \uc2e0\uacbd\uc368\uc918\uc57c \ud569\ub2c8\ub2e4..\\n\\n#### \uc774 \uc678\uc5d0\ub3c4...\\n\\n**\ud074\ub85c\uc838\ub85c \uc778\ud55c \uba54\ubaa8\ub9ac \ub204\uc218(\uc911\uc694)**, **Internal Node\ub85c \uc778\ud55c DOM \ucc38\uc870**\uc5d0 \ub300\ud55c \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. (\ucd94\ud6c4 \uc5c5\ub370\uc774\ud2b8 \uc608\uc815)\\n\\n## React \uc21c\ud658 \ucc38\uc870 \ubb38\uc81c\\n\\nReact\uc5d0\uc11c \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ubaa8\ub4c8\ud654\ud558\uba74\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 **\ubaa8\ub4c8 \uc758\uc874\uc131 \ubb38\uc81c**\uc785\ub2c8\ub2e4.\\n\\n\ucf54\ub4dc\ub97c \ud30c\uc77c\ub85c \ubd84\ub9ac\ud558\uc5ec \uc774\uac83\uc744 \ub2e4\ub978 \ud30c\uc77c\uc774 \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \uc774\ub7f0 \uc2dd\uc73c\ub85c **ES6\uc758 \ubaa8\ub4c8 \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud574 \ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc704 \uac1c\ubc1c**\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n```js\\n// A -> B -> C -> A \uc21c\ud658 \ucc38\uc870 \ubc1c\uc0dd\\n// Uncaught ReferenceError: Cannot access \'A\' before initialization\\n// A.js\\nimport B from \'./B.js\'\\nexport const A = {\\n\\tB()\\n\\t...\\n}\\n\\n// B.js\\nimport C from \'./A.js\'\\nexport const B = {\\n\\tC()\\n\\t...\\n}\\n\\n// C.js\\nimport A from \'./B.js\'\\nexport const C = {\\n\\tA()\\n\\t...\\n}\\n```\\n\\n\ubb38\uc81c\ub294 \ubaa8\ub4c8 \uac04\uc758 \uc11c\ub85c \ucc38\uc870\ud558\ub294 \uacbd\uc6b0 \ucd08\uae30\ud654 \uc21c\uc11c\uc5d0 \uc758\ud574 \uc21c\ud658 \ucc38\uc870\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4. Webpack\uc5d0\uc11c \ubaa8\ub4c8\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc740 \uc758\uc874\uc131 \ub9e8 \ub9c8\uc9c0\ub9c9 \uc21c\uc11c\uc5d0 \uc788\ub294 \ubaa8\ub4c8\ubd80\ud130 \ucd08\uae30\ud654\ud558\uac8c \ub418\uc5b4 \uc774\ub7ec\ud55c \uc21c\ud658 \ucc38\uc870 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n**\uc989, `B.js` \ud30c\uc77c\uc758 \ucf54\ub4dc\uac00 \ub9e8 \uba3c\uc800 \uc2e4\ud589\ub418\uba74\uc11c \ucd08\uae30\ud654\uac00 \ub418\uc9c0\ub3c4 \uc54a\uc740 `A.js`\ub97c \ucc38\uc870\ud558\uba74\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\uc785\ub2c8\ub2e4.** \uacb0\uad6d\uc5d0\ub294 \uc21c\ud658\ucc38\uc870\ub77c\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \uace0\ubbfc\ud574\uc57c \ud569\ub2c8\ub2e4.\\n\\n### \ud574\uacb0 \ubc29\ubc95\\n\\n\uac00\uc7a5 \uac04\ub2e8\ud55c \uac74 \uc6d0\uc778\uc778 \uc21c\ud658\ucc38\uc870\ub97c \uc81c\uac70\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc73c\ub85c React\uac00 `Top-down` \ubc29\uc2dd\uc758 \ucef4\ud3ec\ub10c\ud2b8 \ud750\ub984\uc744 \uac00\uc9c4\ub2e4\uba74 \ud574\uacb0\uacfc \ub3d9\uc2dc\uc5d0 \uc608\ubc29\uae4c\uc9c0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc804\ubc18\uc801\uc778 \ub370\uc774\ud130\uc758 \ud750\ub984\uc744 Atomic Component \ubc29\uc2dd\uc73c\ub85c \uad6c\uc131\ud558\uc5ec \uc81c\uacf5\ud558\ub358\uc9c0 UI \ucef4\ud3ec\ub10c\ud2b8\uc640 Service \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ubd84\ud558\uc5ec API \ud638\ucd9c\uc744 \ud558\ub294 \ubc29\uc2dd\ub3c4 \uc788\ub294 \ub9cc\ud07c \uc5ec\ub7ec \uc874\uc7ac\ud569\ub2c8\ub2e4.\\n\\n\ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uc21c\ud658\ucc38\uc870\uac00 \ubb38\uc81c\ub97c \uaf2d \uc77c\uc73c\ud0a4\uc9c0 \uc54a\uc744 \uc218 \uc788\uc9c0\ub9cc \ucd94\ud6c4 \ud504\ub85c\uc81d\ud2b8\uac00 \ucee4\uc9c0\uba74\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc774\uc288\ub4e4\uc744 \uc608\ubc29\ud558\uae30 \uc704\ud55c \ubc29\ud5a5\uc73c\ub85c \uc778\uc9c0\ud558\ub294 \uac8c \uc720\uc9c0\ubcf4\uc218\uc5d0 \uc788\uc5b4\uc11c\ub3c4 \uc88b\uc544\ubcf4\uc785\ub2c8\ub2e4.\\n\\n## Question List\\n\\n1. React\uc5d0\uc11c \uc21c\ud658 \ucc38\uc870 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc778\uac00\uc694?\\n2. \uc2f1\uae00 \uc2a4\ub808\ub4dc\uc778 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc778\uac00\uc694? (\ube44\ub3d9\uae30\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc740?)\\n\\n## Reference\\n\\n[JavaScript \uc5d4\uc9c4\uc5d0 \ub300\ud558\uc5ec](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9)  \\n[JavaScript\ub294 \uc5b4\ub5bb\uac8c \uc791\ub3d9\ud558\ub294\uac00?](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-4%EA%B0%80%EC%A7%80-%ED%9D%94%ED%95%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%8C%80%EC%B2%98%EB%B2%95-5b0d217d788d)  \\n[\ubd88\ubcc0 \uac1d\uccb4](https://ui.toast.com/posts/ko_20220217)"},{"id":"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","metadata":{"permalink":"/blog/JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","editUrl":"https://github.com/minsgy/minsgy.github.io/edit/main/blog/javascript-runtime.md","source":"@site/blog/javascript-runtime.md","title":"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","description":"\uc11c\ub860","date":"2022-09-15T01:11:06.000Z","formattedDate":"2022\ub144 9\uc6d4 15\uc77c","tags":[{"label":"JavaScript","permalink":"/blog/tags/java-script"},{"label":"DeepDive","permalink":"/blog/tags/deep-dive"},{"label":"Study","permalink":"/blog/tags/study"}],"readingTime":11.125,"hasTruncateMarker":false,"authors":[{"name":"Choi Minseok","title":"\uc3d8\uce74(SOCAR)\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","url":"https://github.com/minsgy","imageURL":"https://github.com/minsgy.png","key":"minsgy"}],"frontMatter":{"slug":"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","title":"JavaScript Runtime\uc5d0 \ub300\ud558\uc5ec","authors":["minsgy"],"tags":["JavaScript","DeepDive","Study"]},"prevItem":{"title":"JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30","permalink":"/blog/JavaScript \uba54\ubaa8\ub9ac \uad00\ub9ac\ud558\uae30"}},"content":"## \uc11c\ub860\\n\\n\uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uc8fc\ub2c8\uc5b4 \uac1c\ubc1c\uc790\ub85c \ud65c\ub3d9\ud558\uba70 **JavaScript**\uc5d0 \ub300\ud55c \uc911\uc694\uc131\uc744 \ub9e4\ubc88 \ub290\uaf08\uc2b5\ub2c8\ub2e4.\\n\\n**JavaScript**\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95, \uac1d\uccb4 \uc9c0\ud5a5\uc744 \uace0\ub824\ud560 \uc218 \uc788\ub294 \ubc29\ubc95 \ub4f1\\n\uae30\ubcf8\uc801\uc778 \uc6d0\ub9ac\uac00 \ub4b7\ubc1b\uce68\ub418\uc5b4 \uc124\uacc4\ub97c \ud574\uc57c \uc5ec\ub7ec \uc774\uc288 \uc0ac\ud56d\uc5d0\ub3c4 \ub300\uc751\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\ub610\ud55c, \uc6f9\uc774\ub77c\ub294 \ubd84\uc57c\uc5d0\uc11c \ube60\ub974\uac8c \ubcc0\ud654\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c **React**\uc640 \uac19\uc774 \uc5b4\ub5a0\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac/\ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc720\ud589\ud560 \uc9c0\ub294 \ubaa8\ub974\uae30 \ub54c\ubb38\uc5d0 \uae30\ucd08\uac00 \ub418\ub294 JavaScript\uc5d0 \ub300\ud55c \uc774\ud574\uac00 \ud544\uc694\ud558\ub2e4 \uc0dd\uac01\ud574 \ub7f0\ud0c0\uc784\uae4c\uc9c0 \ubd84\uc11d\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\\n\\n\uc774 \ud3ec\uc2a4\ud2b8\ub97c \ud1b5\ud574\uc11c \ubc30\uacbd \uc9c0\uc2dd\uc774 \uad81\uae08\ud55c **JavaScript \uc0ac\uc6a9\ud574\uc624\uc2e0 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790**\ubd84\ub4e4\uaed8 \ub3c4\uc6c0 \ub418\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4.\\n\\n## JavaScript\\n\\n> \uc6f9 \ud398\uc774\uc9c0 (HTML/CSS)\uc758 \ubcf4\uc870 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9 \ub41c \uc5b8\uc5b4\uc785\ub2c8\ub2e4.\\n> \uc9c0\uc18d\ub41c \ubc1c\uc804\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800 \uc774\uc678\uc758 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uc791\uc2dc\ud0ac \uc218 \uc788\ub294 \ud658\uacbd\uc774 \uc0dd\uae30\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n### JavaScript \ub4f1\uc7a5\uacfc \ud45c\uc900\ud654\\n\\n\ucc98\uc74c JavaScript\ub294 \ub3d9\uc801\uc778 \ud398\uc774\uc9c0 \ub80c\ub354\ub9c1\ub3c4 \uc544\ub2c8\ub77c \ub2e8\uc21c\ud788 \uc11c\ubc84\ub85c\ubd80\ud130 HTML, CSS\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uc218\uc900\uc73c\ub85c\ub9cc \ud55c\uc815\uc801\uc73c\ub85c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ud6c4 JavaScript\uc758 \ud575\uc2ec \uc6d0\ub9ac\uc778 \ube44\ub3d9\uae30(Asynchronous) \uac1c\ub150\uc744 \ub2f4\uc740 **Ajax(Asynchronous JavaScript and XML)**\uac00 \ub4f1\uc7a5\ud558\uac8c \ub418\uba74\uc11c \uc6b0\ub9ac\uac00 \uc54c\uace0 \uc788\ub294 \uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uae30\uc874 \ub3d9\uae30\uc801 \ubc29\uc2dd\uc73c\ub85c HTML \uc804\uccb4\ub97c \ub2e4\uc6b4\ubc1b\uc544 \ud654\uba74 \uc804\ud658\uc744 \ud588\uc9c0\ub9cc \ubc14\ub00c\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud574 \ubd88\ud544\uc694\ud55c \ub370\uc774\ud130\uac00 \ud3ec\ud568\ub418\ub294 \uacbd\uc6b0\uac00 \uc0dd\uacbc\uace0 \ud1b5\uc2e0 \ud6a8\uc728\uacfc UX \uba74\uc5d0\uc11c \uc633\uc9c0 \uc54a\uc740 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ub7ec\ud55c \ubb38\uc81c\ub294 \ube44\ub3d9\uae30\ub97c \ud1b5\ud574 \ub3d9\uc801\uc778 \uc6f9 \ud398\uc774\uc9c0\ub97c \uad6c\uc131\ud558\uba74\uc11c \ubcc0\ud654 \ub41c \ub370\uc774\ud130\ub9cc \ubc1b\uc544\uc640 \uc21c\uac04\uc801\uc73c\ub85c \uae5c\ube61\uc774\ub294 \ud604\uc0c1\uc774 \uc5c6\uc5b4\uc838 UX\ub85c\ub3c4 \uc88b\uc740 \uacb0\uacfc\ub97c \ub0bc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacb0\uacfc\ub85c \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub3c4 \ub370\uc2a4\ud06c\ud0d1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc720\uc0ac\ud55c \ud37c\ud3ec\uba3c\uc2a4\ub97c \ub0b4\uba70 \uc8fc\ubaa9\ubc1b\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub7ec\ub098 \ud45c\uc900\ud654\ub418\uc9c0 \uc54a\uc740 JavaScript\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc801\uc6a9\ub418\uba74\uc11c \ud06c\ub85c\uc2a4 \ube0c\ub77c\uc6b0\uc9d5 \uc774\uc288\uac00 \ubc1c\uc0dd\ud558\uae30 \uc2dc\uc791\ud588\uace0 \ubaa8\ub4e0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc815\uc0c1 \uc791\ub3d9\ud558\ub294 \uc6f9 \ud398\uc774\uc9c0 \uad6c\uc131\uc774 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4.\\n\\n![](https://i.imgur.com/IXojwIy.png)\\n\\n\uc774\ub97c \ubcf4\uc644\ud558\uae30 \uc704\ud574 `ECMAScript` \uba85\uc73c\ub85c JavaScript \ud45c\uc900\ud654\uac00 \uc9c4\ud589\ub418\uc5b4 \ud604\uc7ac \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 `ES6`, `ES5`\uc640 \uac19\uc740 \ubb38\ubc95\ub4e4\uc774 \uc0ac\uc6a9\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### V8, Node.js\uc758 \ub4f1\uc7a5\\n\\nAjax\ub97c \ud1b5\ud55c \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c\uc11c \uac00\ub2a5\uc131\uc744 \ud655\uc778 \ud55c \uad6c\uae00(Google)\uc740 JavaScript\ub85c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube60\ub974\uace0 \uc815\ud655\ud558\uac8c \ub3d9\uc791\ud558\ub294 \uc5d4\uc9c4\uc758 \ud544\uc694\uc131\uc744 \ub290\uaf08\uace0 \uadf8\ub807\uac8c \uc644\uc131 \ub41c \uc624\ud508\uc18c\uc2a4 \uc5d4\uc9c4\uc778 [V8](https://v8.dev/)\uc774 \ub4f1\uc7a5\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![](https://i.imgur.com/zB7qzy1.png)\\n\\n\uc774\ub97c \ud1b5\ud574 JavaScript\ub294 \ub370\uc2a4\ud06c\ud0d1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ube44\uc2b7\ud55c \uc131\ub2a5\uacfc \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uc5c8\uace0 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub85c \uc815\ucc29\ub418\uac8c \ub41c \uacc4\uae30\uac00 \ub429\ub2c8\ub2e4.\\n\\n\uc774\ud6c4 \ub113\uc740 \ud655\uc7a5\uc131\uc5d0 \ub300\ud55c \uac00\ub2a5\uc131\uc744 \ub113\ud600\uc900 V8 \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 `Node.js`\uc758 \ub4f1\uc7a5\uc73c\ub85c \ube0c\ub77c\uc6b0\uc800 \uc774\uc678\uc758 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c5\ub9bd\uc2dc\ud0a8 \uc5ed\ud560\uc744 \ud574\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![](https://i.imgur.com/jRPm1V3.png)\\n\\n\uae30\ubcf8\uc801\uc73c\ub85c \ube44\ub3d9\uae30 I/O\ub97c \uc9c0\uc6d0\ud558\uace0 \uc2f1\uae00 \uc2a4\ub808\ub4dc(Single Thread) \uc774\ubca4\ud2b8 \ub8e8\ud504\ub97c \uae30\ubc18\ud558\uc5ec \ub3d9\uc791\ud558\uace0 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \ucc98\ub9ac\uc5d0\ub294 \ud6a8\uacfc\uc801\uc774\uc9c0\ub9cc CPU \uc0ac\uc6a9\ub960\uc774 \ub192\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\ub294 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 **Node.js\uc758 \uac1c\ubc1c \uc2dc\uc810\uc774 JavaScript \ubaa8\ub4c8\uc758 \ud45c\uc900\uc774 CommonJS\ub85c \uc774\ub8e8\uc5b4\uc838 ES Module**\uc774 \uc0c8\ub85c\uc6b4 \ud45c\uc900\uc774 \ub41c \ud604\uc7ac\ub85c\uc11c\ub294 \ubd80\uc871\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 TypeScript\uac00 \ud544\uc218\ubd88\uac00\uacb0\ub85c \uc0ac\uc6a9\ud558\ub294 \uc0c1\ud669\uc5d0 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ub2e8\uc810\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4.\\n\\n\uc774\ub7ec\ud55c Node.js\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uace0 \ubc1c\uc804 \ub41c \ub7f0\ud0c0\uc784(Runtime) \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 **Deno**\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n### Deno\\n\\n![image](https://user-images.githubusercontent.com/60251579/190108920-7897ed40-5b4a-481d-a1e0-d5a1e3db12bc.png)\\n\\nDeno\uac00 \ub4f1\uc7a5\ud558\uac8c \ub41c \uac74 2020\ub144 5\uc6d4\uc774\uba70, Node.js\uc758 \ub2e8\uc810\uc744 \ubcf4\uc644\ud558\uace0\uc790 TypeScript \uc9c0\uc6d0, ES Module \uc9c0\uc6d0, \ube0c\ub77c\uc6b0\uc800\uc640 Node.js\uc758 \ud638\ud658\uc131, \ubcf4\uc548 \ubb38\uc81c, \ube60\ub978 \uc2e4\ud589 \uc18d\ub3c4 \uac1c\uc120\uacfc \uba85\uc2dc\uc801\uc778 \ud328\ud0a4\uc9c0 \uad00\ub9ac\ub97c \uac1c\uc120\ud558\uba70 \ub4f1\uc7a5\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n#### Promise\\n\\nNode.js\uc758 \ub0b4\uc7a5\ub41c \uc5ec\ub7ec \ube44\ub3d9\uae30 \ub85c\uc9c1\uc740 Promise API\ub97c \ud65c\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc608\uc804 \ubc29\uc2dd\uc758 Callback \ud328\ud134\uc744 \uc791\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 node async api\uac00 \ub178\ud6c4\ud654\ub418\uc5b4 \uc544\uc26c\uc6b4 \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uac8c \ub429\ub2c8\ub2e4.\\n\\n\uadf8\ub807\uc9c0\ub9cc Deno\uc758 \uacbd\uc6b0 Promise API\ub97c \uae30\ubcf8\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ub354\uc6b1 \ube60\ub978 \ud37c\ud3ec\uba3c\uc2a4\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```js\\n// deno - async \uad6c\ubb38\uc774 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub429\ub2c8\ub2e4.\\nconst data = await fetch(\\"URL\\");\\nconst result = await data.json();\\nconsole.log(result);\\n```\\n\\n#### Packages, Npm\\n\\nLicense, repository, description \ub4f1 \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub294 package.json\uc740 \ubd88\ud544\uc694\ud55c \uc815\ubcf4\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c\ub294 \ud30c\uc77c\uacfc URL\ub9cc \uc0ac\uc6a9\ud558\uba74 \uc885\uc18d\uc131\uc744 \ub098\uc5f4\ud560 \ud544\uc694\uac00 \uc5c6\uc5b4\uc9d1\ub2c8\ub2e4.\\n\\nDeno\ub294 \uc774\ub7ec\ud55c package.json\uc744 \uc81c\uac70\ud558\uace0 URL\ub9cc\uc73c\ub85c \uc885\uc18d\uc131\uc744 \ub098\uc5f4\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\uc2b5\ub2c8\ub2e4.\\n\\n\ub610\ud55c `npm(closed source)` \ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544 \ub3c5\ub9bd\uc131\uc744 \ub192\uc77c \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.\\n\uc774\ub97c \ud1b5\ud574 Github, GitLab, Bitbucket \ub4f1 \ub2e4\uc591\ud55c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uac00\uc838\uc640 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```js\\n// node.js\\nconst moment = require(\\"moment\\");\\nconsole.log(moment.version);\\n\\n// deno\\nimport { moment } from \\"https://deno.land/x/deno_moment@1.0.0/moment.ts\\";\\nconsole.log(moment.version);\\n```\\n\\n#### Deno\uac00 node.js\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc744\uae4c?\\n\\n![image](https://user-images.githubusercontent.com/60251579/190184861-0bdbeded-f0e0-45ca-a113-71076e918608.png)\\n\\n\ud604\uc7ac 2022\ub144 9\uc6d4 \uae30\uc900\uc73c\ub85c Deno \uc11c\ube44\uc2a4\ub294 v1.25.2 \ub9b4\ub9ac\uc988 \uc911\uc785\ub2c8\ub2e4.\\n\\n\ucd5c\uadfc\uae4c\uc9c0\ub3c4 \uc5c5\ub370\uc774\ud2b8\ub97c \ud558\ub294 \ub9cc\ud07c \ucc28\uc138\ub300 JavaScript \ub7f0\ud0c0\uc784\uc73c\ub85c \ubc1c\ub3cb\uc6c0 \ud560 \uc218 \uc788\ub3c4\ub85d \uafb8\uc900\ud55c \uac1c\ubc1c\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uacfc\uac70 \uc794\uc7ac\uc778 CommonJS \ubaa8\ub4c8\uc744 \ubcc0\uacbd\ud558\uace0 \uc0ac\uc6a9\uc131\uc774 \ub9ce\uc740 TypeScript\ub97c \uc81c\uacf5\ud558\ub294 \ub9cc\ud07c \uc55e\uc73c\ub85c\uc758 \uae30\ub300\uac00 \uc788\ub294 \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\uace0 \uae30\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub7ec\ub098 \ud604\uc7ac Deno\uc5d0 \uc0c1\uc751\ud558\ub294 TypeScript package \uc9c0\uc6d0\uc774 \uc544\uc26c\uc6b4\ub9cc\ud07c \uc0ac\uc6a9\uc131\uc5d0 \uc788\uc5b4\uc11c node.js\uac00 \uc555\ub3c4\uc801\uc778 \uc2dc\uc7a5\uc744 \ucc28\uc9c0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc810\uc810 TypeScript \ud504\ub85c\uc81d\ud2b8 \uc2dc\uc7a5\uc774 \ub113\uc5b4\uc9c4\ub2e4\uba74 \ucda9\ubd84\ud788 \uc0ac\uc6a9\ud560\ub9cc\ud55c \ub9e4\ub825\uc801\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\\n\\n\uc774\ud6c4 \ub354 \ube60\ub978 \uc18d\ub3c4\ub97c \uc704\ud574 \ud0c4\uc0dd\ud55c \ub7f0\ud0c0\uc784 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4.\\n\\n### Bun\uc758 \ub4f1\uc7a5\\n\\n![image](https://user-images.githubusercontent.com/60251579/190210190-c14a338f-86f7-4b84-9398-96219b269dc2.png)\\n\\n\uc0c8\ub86d\uac8c JavaScript \ub7f0\ud0c0\uc784 \ubc0f \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\uc778 Bun\uc774 \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4.\\n\\n\uae30\uc874 V8 \uc5d4\uc9c4\uc744 \ud65c\uc6a9\ud558\ub358 **Node, Deno**\uc640 \ube44\uad50\ub418\ub294 **JavaScriptCore** \uae30\ubc18\uc73c\ub85c \uad6c\ucd95\ub418\uc5b4 \ube60\ub974\uac8c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc800\uc218\uc900 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc778 Zig\ub85c \uc791\uc131\ub418\uc5b4\uc11c \uac00\ub2a5\ud55c \uc131\ub2a5\uc785\ub2c8\ub2e4.\\n\\n![image](https://user-images.githubusercontent.com/60251579/190211078-d8516115-f153-4c63-b944-14b5fb3e4838.png)\\n\\n\ud2b9\uc9d5\uc73c\ub85c\ub294 node.js \ubaa8\ub4c8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 node_modules\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uba70 npm\uacfc \ud638\ud658\ud560 \uc218 \uc788\ub294 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \ud3ec\ud568\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub798\uc11c node.js\uc758 \uc0ac\uc6a9\ubc95\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4. \ub610\ud55c commonJS\uc640 ESM \ub458 \ub2e4 \uc9c0\uc6d0\ud558\uba70 JavaScript/TypeScript\ub97c \uc9c0\uc6d0\ud558\uc5ec \uac1c\ubc1c \ud658\uacbd\uc5d0 \ub300\ud55c \ud655\uc7a5\uc131\uc774 \ub113\uc2b5\ub2c8\ub2e4.\\n\\n\uc774\ub807\uac8c \ubcf8\ub2e4\uba74 Demo\uc640 Node.js\uac00 \uac00\uc9c4 \ubb38\uc81c\uc810\uc744 \ubcf4\uc644\ud558\uace0 \uc788\uc9c0\ub9cc, \uc544\uc9c1 v1\ub3c4 \ub098\uc624\uc9c0 \uc54a\uc740 beta version\uc778 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ud604\uc7ac \ub7f0\ud0c0\uc784 \uc18d\ub3c4\ub9cc \ubc14\ub77c\ubcf8\ub2e4\uba74 \uad1c\ucc2e\uc9c0\ub9cc \ubcf4\uc548 \ubc0f \ub2e4\ub978 \uc774\uc288\uc5d0 \ub300\ud574 \uc5b4\ub5bb\uac8c \ub300\uc751\ud560 \uc9c0 production \ud658\uacbd\uc5d0\uc11c \uc801\uc6a9\ud558\uae30\uc5d0\ub294 \uc2dc\uac04\uc774 \ud544\uc694\ud574\ubcf4\uc785\ub2c8\ub2e4.\\n\\n## Question List\\n\\n1. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ubb34\uc2a8 \uc5b8\uc5b4\uc778\uac00? (\uc5b8\uc5b4\uc758 \ud2b9\uc9d5, \ubcf8\uc778\uc774 \uc0dd\uac01\ud558\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud2b9\uc9d5\ub3c4 \uc88b\uc74c)\\n2. \uc778\ud130\ud504\ub9ac\ud130 \uc5b8\uc5b4\uc640 \ucef4\ud30c\uc77c \uc5b8\uc5b4\uc5d0 \ub300\ud574 \ub300\ub2f5\ud558\uace0 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\n3. Optional Chaining\uacfc Non-null assertion operator\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694.\\n4. !!, ??, && \uc5f0\uc0b0\uc790\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694.\\n5. \uba54\ubaa8\ub9ac \ud560\ub2f9\uacfc \uba54\ubaa8\ub9ac \ucc38\uc870, \uac00\ube44\uc9c0 \ucf5c\ub809\ud130\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694. \uc6d0\uc2dc\ud0c0\uc785\uacfc \uac1d\uccb4\ud0c0\uc785\uc744 \uac00\uc9c0\uace0 \uc124\uba85\ud574\uc8fc\uc138\uc694.\\n6. var, let, const\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694.\\n7. \ud638\uc774\uc2a4\ud305\uc774 \ubb34\uc5c7\uc774\uace0 \uc77c\uc5b4\ub098\ub294 \uacfc\uc815\uc5d0 \ub300\ud574 \uc544\ub294 \ub300\ub85c \uc124\uba85\ud574\uc8fc\uc138\uc694.\\n8. `if (!data)`\uc640 `if (data === undefined)`\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?\\n\\n## Reference\\n\\n[deno](https://deno.land/)\\n[bun](https://bun.sh/)  \\n[deno vs node.js \ube44\uad50\ud558\uae30](https://www.youtube.com/watch?v=Uc03tAqC6fQ)  \\n[\uc5ec\uae30\uc5b4\ub54c Tech Blog](https://techblog.gccompany.co.kr/%ED%95%9Cbun-%EC%8D%A8%EB%B3%B4%EB%8A%94-%EA%B1%B0-%EC%96%B4%EB%95%8C-fa3cb32ac76f)"}]}')}}]);