import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as h,c as m,f as v,a as n,b as s,d as a,w as t,e as o}from"./app-_417akz0.js";const k={},b=n("p",null,"Every document page in VuePress is rendered by Markdown.",-1),g=n("p",null,"You need to build your document or blog page by creating and writing Markdown in the corresponding path.",-1),_=n("h2",{id:"markdown-introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-introduction","aria-hidden":"true"},"#"),s(" Markdown Introduction")],-1),f={href:"https://vuepress-theme-hope.github.io/v2/basic/markdown/README.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://vuepress-theme-hope.github.io/v2/basic/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},y={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"Frontmatter",-1),q={href:"https://vuepress-theme-hope.github.io/v2/basic/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"vuepress-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-enhancement","aria-hidden":"true"},"#"),s(" VuePress Enhancement")],-1),C=n("p",null,"To enrich document writing, VuePress has extended Markdown syntax.",-1),D={href:"https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},T=n("h2",{id:"theme-enhancement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme-enhancement","aria-hidden":"true"},"#"),s(" Theme Enhancement")],-1),V=n("h3",{id:"enable-all",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#enable-all","aria-hidden":"true"},"#"),s(" Enable all")],-1),j=n("code",null,"plugins.mdEnhance.enableAll: true",-1),M={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/",target:"_blank",rel:"noopener noreferrer"},K=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature" aria-hidden="true">#</a> New Feature</h2><h3 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h3><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="hint-container info"><p class="hint-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown">link</a>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">Custom Title</p><p>A custom tip container</p></div><div class="hint-container warning"><p class="hint-container-title">Custom Title</p><p>A custom warning container</p></div><div class="hint-container caution"><p class="hint-container-title">Custom Title</p><p>A custom danger container</p></div><details class="hint-container details"><summary>Custom Title</summary><p>A custom details container</p></details><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs" aria-hidden="true">#</a> Code Tabs</h3>`,11),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),J={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"superscript-and-subscript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#superscript-and-subscript","aria-hidden":"true"},"#"),s(" Superscript and Subscript")],-1),R=n("p",null,[s("19"),n("sup",null,"th"),s(" H"),n("sub",null,"2"),s("O")],-1),N={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"align",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align","aria-hidden":"true"},"#"),s(" Align")],-1),Y=n("div",{style:{"text-align":"center"}},[n("p",null,"I am center")],-1),B=n("div",{style:{"text-align":"right"}},[n("p",null,"I am right align")],-1),H={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},L=o('<h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h3><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),O={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},W=n("h3",{id:"mark",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mark","aria-hidden":"true"},"#"),s(" Mark")],-1),z=n("p",null,[s("You can mark "),n("mark",null,"important words"),s(" .")],-1),Z={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},X=n("h3",{id:"tasklist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tasklist","aria-hidden":"true"},"#"),s(" Tasklist")],-1),$={class:"task-list-container"},G=o('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li>',2),Q={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},U=o(`<h3 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h3><p>::: chart A Scatter Chart</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Scatter Dataset&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ul><li><a href="%5Bchart.md%5D(https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)">View Detail</a></li></ul><h3 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h3><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> Process<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> Process
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> End

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),nn={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},sn=o(`<h3 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h3><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},en=n("h3",{id:"tex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex","aria-hidden":"true"},"#"),s(" Tex")],-1),tn=n("p",null,[s("$$"),n("br"),s(" \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)"),n("br"),s(" = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right}"),n("br"),s(" $$")],-1),on={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},ln=n("h3",{id:"code-demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-demo","aria-hidden":"true"},"#"),s(" Code Demo")],-1),rn=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("Is "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("very"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(" powerful!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Very powerful!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},dn=n("h3",{id:"presentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#presentation","aria-hidden":"true"},"#"),s(" Presentation")],-1),hn={href:"https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},mn=o('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function vn(kn,bn){const e=r("ExternalLinkIcon"),p=r("CodeTabs"),c=r("CodeDemo"),u=r("RevealJs");return h(),m("div",null,[b,g,v(" more "),_,n("p",null,[s("If you are a new learner and don’t know how to write Markdown, please read "),n("a",f,[s("Markdown Intro"),a(e)]),s(" and "),n("a",w,[s("Markdown Demo"),a(e)]),s(".")]),n("div",y,[x,n("p",null,[s("Frontmatter is a important concept in VuePress. If you don’t know it, you need to read "),n("a",q,[s("Frontmatter Introduction"),a(e)]),s(".")])]),A,C,n("p",null,[s("For these extensions, please read "),n("a",D,[s("Markdown extensions in VuePress"),a(e)]),s(".")]),T,V,n("p",null,[s("You can set "),j,s(" in theme options to enable all features of the "),n("a",M,[s("md-enhance"),a(e)]),s(" plugin.")]),K,a(p,{id:"80",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:t(({value:i,isActive:l})=>[s("pnpm")]),title1:t(({value:i,isActive:l})=>[s("yarn")]),title2:t(({value:i,isActive:l})=>[s("npm")]),tab0:t(({value:i,isActive:l})=>[E]),tab1:t(({value:i,isActive:l})=>[I]),tab2:t(({value:i,isActive:l})=>[F]),_:1}),n("ul",null,[n("li",null,[n("a",J,[s("View Detail"),a(e)])])]),P,R,n("ul",null,[n("li",null,[n("a",N,[s("View Detail"),a(e)])])]),S,Y,B,n("ul",null,[n("li",null,[n("a",H,[s("View Detail"),a(e)])])]),L,n("ul",null,[n("li",null,[n("a",O,[s("View Detail"),a(e)])])]),W,z,n("ul",null,[n("li",null,[n("a",Z,[s("View Detail"),a(e)])])]),X,n("ul",$,[G,n("li",null,[n("p",null,[n("a",Q,[s("View Detail"),a(e)])])])]),U,n("ul",null,[n("li",null,[n("a",nn,[s("View Detail"),a(e)])])]),sn,n("ul",null,[n("li",null,[n("a",an,[s("View Detail"),a(e)])])]),en,tn,n("ul",null,[n("li",null,[n("a",on,[s("View Detail"),a(e)])])]),ln,a(c,{id:"code-demo-232",type:"normal",title:"A%20normal%20demo",code:"eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL"},{default:t(()=>[rn,pn,cn]),_:1}),n("ul",null,[n("li",null,[n("a",un,[s("View Detail"),a(e)])])]),dn,a(u,{id:"revealjs-247",code:"eJxVjc0KwjAQhO/7FAvtoQX7pzelB4969WilDXYx0aYNyYqC+O4mUJDeho9vZiCK8DSonrAC2KMRVtysMBJfiiW6SRMyvRnF2KPA86DGxyWRzMZti0JbORnKnWJKAbIsg//c2gM8MGk/PIeAFs4m96dd190dXKfR+RessdoFFNSF6ctxDMekYUks2nI1hyr1ncY9dftRdfkN0g8aMTop",theme:"auto"}),n("ul",null,[n("li",null,[n("a",hn,[s("View Detail"),a(e)])])]),mn])}const fn=d(k,[["render",vn],["__file","markdown.html.vue"]]);export{fn as default};
