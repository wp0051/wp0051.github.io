import{_ as n,c as a,e,o as i}from"./app-Dgk7GLw3.js";const l={};function c(p,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="javascript垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#javascript垃圾回收机制"><span>JavaScript垃圾回收机制</span></a></h1><p>Javascript具有自动垃圾回收机制(GC:Garbage Collecation)。</p><p>原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。</p><p>JavaScript垃圾回收的机制很简单：找出不再使用的变量，然后释放掉其占用的内存，但是这个过程不是实时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。</p><h2 id="两种实现方式" tabindex="-1"><a class="header-anchor" href="#两种实现方式"><span>两种实现方式</span></a></h2><p>函数中的局部变量的生命周期：局部变量只在函数执行的过程中存在。而在这个过程中，会为局部变量在栈（或堆）内存上分配相应的空间，以便存储它们的值。然后在函数中使用这些变量，直至函数执行结束。此时，局部变量就没有存在的必要了，因此可以释放它们的内存以供将来使用。在这种情况下，很容易判断变量是否还有存在的必要；但并非所有情况下都这么容易就能得出结论。垃圾回收器必须跟踪哪个变量有用，哪个变量没用，对于不再有用的变量打上标记，以备将来收回其占用的内存。用于标识无用变量的策略可能会因实现而异，但具体到浏览器中的实现。</p><p>通常情况下有两种实现方式：<strong>标记清除</strong> 和 <strong>引用计数</strong>。引用计数不太常用，标记清除较为常用。</p><h3 id="_1-标记清除法" tabindex="-1"><a class="header-anchor" href="#_1-标记清除法"><span>1.标记清除法</span></a></h3><p>在函数声明一个变量的时候，就将这个变量标记为“进入环境”。从逻辑上讲，永远都不能释放进入环境的变量作占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。垃圾回收器在运行时候会给存储在内存中中的所有变量都加上标记。然后它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。在此之后再被标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清楚工作，销毁那些带标记的值并回收他们所占用的内存空间。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">function</span>
<span class="line"></span>
<span class="line">test(){</span>
<span class="line"></span>
<span class="line"> var a = 10 ; //被标记 ，进入环境</span>
<span class="line"></span>
<span class="line"> var b = 20 ; //被标记 ，进入环境</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">test(); //执行完毕 之后 a、b又被标离开环境，被回收。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-引用计数法" tabindex="-1"><a class="header-anchor" href="#_2-引用计数法"><span>2.引用计数法</span></a></h3><p>引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。</p><p>但是很重要的一点是当遇到循环引用的时候，函数的引用次数就不会为0，所以不会被垃圾回收器回收内存，会造成内存泄露。在IE中涉及COM对象，就会存在循环引用的问题。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">function</span>
<span class="line"></span>
<span class="line">test(){</span>
<span class="line"></span>
<span class="line"> var a = {} ; //a的引用次数为0</span>
<span class="line"></span>
<span class="line"> var b = a ; //a的引用次数加1，为1</span>
<span class="line"></span>
<span class="line"> var c =a; //a的引用次数再加1，为2</span>
<span class="line"></span>
<span class="line"> var b ={}; //a的引用次数减1，为1</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li>https://blog.csdn.net/OLiver_web/article/details/53957021</li><li></li></ul>`,16)])])}const r=n(l,[["render",c]]),t=JSON.parse('{"path":"/mds/javaScript/high/collect.html","title":"JavaScript垃圾回收机制","lang":"en-US","frontmatter":{},"git":{},"filePathRelative":"mds/javaScript/high/collect.md"}');export{r as comp,t as data};
