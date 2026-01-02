import{_ as s,c as a,e,o as i}from"./app-BQyt5-5v.js";const l={};function p(c,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="使用nginx" tabindex="-1"><a class="header-anchor" href="#使用nginx"><span>使用nginx</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx   <span class="token comment"># 安装 nginx</span></span>
<span class="line"><span class="token function">sudo</span> yum remove nginx  <span class="token comment"># 卸载 nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作指令" tabindex="-1"><a class="header-anchor" href="#操作指令"><span>操作指令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 设置开机启动 </span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx start <span class="token comment"># 启动 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx stop <span class="token comment"># 停止 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx restart <span class="token comment"># 重启 nginx 服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">service</span> nginx reload <span class="token comment"># 重新加载配置，一般是在修改过 nginx 配置文件时使用。</span></span>
<span class="line"></span>
<span class="line">nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 也可以重启</span></span>
<span class="line">nginx <span class="token parameter variable">-s</span> reopen <span class="token comment"># 重新打开日志文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="找到nginx" tabindex="-1"><a class="header-anchor" href="#找到nginx"><span>找到nginx</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">which</span> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="找到nginx现在生效的配置" tabindex="-1"><a class="header-anchor" href="#找到nginx现在生效的配置"><span>找到nginx现在生效的配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">locate</span> nginx.conf</span>
<span class="line"></span>
<span class="line">/etc/nginx/nginx.conf</span>
<span class="line">/etc/nginx/nginx.conf.default</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置测试运行" tabindex="-1"><a class="header-anchor" href="#配置测试运行"><span>配置测试运行</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">nginx <span class="token parameter variable">-t</span></span>
<span class="line">// 运行结果</span>
<span class="line">nginx: the configuration <span class="token function">file</span> /etc/nginx/nginx.conf syntax is ok</span>
<span class="line">nginx: configuration <span class="token function">file</span> /etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful</span>
<span class="line">// 配置文件地址 /etc/nginx/nginx.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="校验" tabindex="-1"><a class="header-anchor" href="#校验"><span>校验</span></a></h2><blockquote><p>浏览器输入 服务器公网地址，是否出现welcome ***</p></blockquote><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><h3 id="nginx启动了并且服务器执行-curl-127-0-0-1-80发现访问成功-但是浏览器就是打不开" tabindex="-1"><a class="header-anchor" href="#nginx启动了并且服务器执行-curl-127-0-0-1-80发现访问成功-但是浏览器就是打不开"><span>nginx启动了并且服务器执行 curl 127.0.0.1:80发现访问成功，但是浏览器就是打不开</span></a></h3><blockquote><p>防火墙或者安全组拦截，到服务器控制台修改安全组配置</p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="普通配置" tabindex="-1"><a class="header-anchor" href="#普通配置"><span>普通配置</span></a></h3><p>1、修改nginx配置文件 2、复制80端口配置，修改(不是很推荐直接修改此文件，<a href="#%E6%8E%A8%E8%8D%90">推荐</a>)</p><div class="language-vim line-numbers-mode" data-highlighter="prismjs" data-ext="vim"><pre><code class="language-vim"><span class="line"><span class="token keyword">vi</span> <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token operator">.</span><span class="token keyword">conf</span></span>
<span class="line"># 找到http<span class="token punctuation">{</span><span class="token operator">.</span><span class="token operator">.</span><span class="token operator">.</span><span class="token punctuation">}</span></span>
<span class="line"># 在http<span class="token punctuation">{</span><span class="token punctuation">}</span>打括号中插入</span>
<span class="line"># 如：</span>
<span class="line">http<span class="token punctuation">{</span></span>
<span class="line">    # 其他代码（原来就存在的代码）</span>
<span class="line">    server <span class="token punctuation">{</span></span>
<span class="line">        listen <span class="token number">3000</span><span class="token punctuation">;</span> # 端口 需要服务器开放端口</span>
<span class="line">        # 域名绑定需要将域名解析A记录到改服务器ip</span>
<span class="line">        server_name music<span class="token operator">.</span>ncgame<span class="token operator">.</span><span class="token keyword">cc</span><span class="token punctuation">;</span> # 你的域名 如果需要ip访问请注释该行并改变端口</span>
<span class="line">        root <span class="token operator">/</span>www # 文件访问权限地址</span>
<span class="line">        index index<span class="token operator">.</span>html index<span class="token operator">.</span>htm<span class="token punctuation">;</span> # 默认入口</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、重启，检验配置是否正确，浏览器访问</p><h3 id="密码访问" tabindex="-1"><a class="header-anchor" href="#密码访问"><span>密码访问</span></a></h3><p>1、安装httpd-tools</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">yum install -y httpd-tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建账户密码，执行下方命令后输入两次密码</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">htpasswd -c /etc/nginx/passwd wp0051 // 在/etc/nginx/下创建wp0051账户到passwd文件中</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、可以校验一下是否成功</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">cat /etc/nginx/passwd</span>
<span class="line">// wp0051:$apr1$bj22mciQ$4Rq6U1EnZPyxmDj5X8v1d/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、添加限制加密</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">server {</span>
<span class="line">    listen 80;</span>
<span class="line">    server_name  localhost;</span>
<span class="line">    .......</span>
<span class="line">    #新增下面两行</span>
<span class="line">    auth_basic &quot;Please input password&quot;; #这里是验证时的提示信息</span>
<span class="line">    auth_basic_user_file /etc/nginx/passwd;</span>
<span class="line">    location /{</span>
<span class="line">        # 将根目录访问地址放在这里，放在上面限制不生效</span>
<span class="line">        root /www # 文件访问权限地址</span>
<span class="line">        index index.html index.htm; # 默认入口</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件地址-下载等" tabindex="-1"><a class="header-anchor" href="#文件地址-下载等"><span>文件地址（下载等）</span></a></h3><blockquote><p>输入 公网:5100 直接查看 服务器 /home/datas/ivy/libs/ 下的所有文件列表</p></blockquote><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">server {</span>
<span class="line">    listen 5100;</span>
<span class="line">    server_name  localhost;</span>
<span class="line">    .......</span>
<span class="line">    location  /ivy-libs/ {</span>
<span class="line">        alias  /home/datas/ivy/libs/;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">        autoindex on;   # 开启目录文件列表</span>
<span class="line">        autoindex_exact_size on; # 显示出文件的确切大小，单位是bytes</span>
<span class="line">        autoindex_localtime on; # 显示的文件时间为文件的服务器时间</span>
<span class="line">        charset utf-8,gbk;  # 避免中文乱码</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h4><blockquote><p>以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p></blockquote><ul><li>场景：后端与前端域名不一致存在跨域</li></ul><ul><li>配置80端口访问前端，并且配置80/api反向代理到后端服务器（比如 3001端口;）</li></ul><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">server {</span>
<span class="line">    listen 80;</span>
<span class="line">    .......</span>
<span class="line">    location  / {</span>
<span class="line">        alias  /home;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">    }</span>
<span class="line">    location /api/ {</span>
<span class="line">        proxy_pass http://127.0.0.1:3001/; # 末尾需要加/</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取访问服务器的真实地址</li></ul><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">    ...</span>
<span class="line">    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">        ...</span>
<span class="line">        <span class="token directive"><span class="token keyword">proxy_set_header</span>    Host <span class="token variable">$host</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-real-ip <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">proxy_set_header</span>    X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐"><span>推荐</span></a></h3><blockquote><p>在nginx.conf里面include,之后在其他文件夹里进行配置即可</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># nginx.conf</span>
<span class="line">http {</span>
<span class="line">    *****</span>
<span class="line">    include /etc/nginx/conf.d/*.conf;</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen       8080;</span>
<span class="line">        ***</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># conf.d/default.conf</span>
<span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name study.wp0051.top;</span>
<span class="line">    location / {</span>
<span class="line">	alias /application/items/javascript_doc/docs/;</span>
<span class="line">	index index.html;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"># conf.d/blog.conf</span>
<span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name www.wp0051.top;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        proxy_pass http://127.0.0.1:5100/;</span>
<span class="line">        proxy_set_header    Host $host;</span>
<span class="line">        proxy_set_header    X-real-ip $remote_addr;</span>
<span class="line">        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name admin.wp0051.top;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        proxy_pass http://127.0.0.1:5200/;</span>
<span class="line">        proxy_set_header    Host $host;</span>
<span class="line">        proxy_set_header    X-real-ip $remote_addr;</span>
<span class="line">        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">    }</span>
<span class="line">    location /admin {</span>
<span class="line">        proxy_pass http://127.0.0.1:5100/admin;</span>
<span class="line">        proxy_set_header    Host $host;</span>
<span class="line">        proxy_set_header    X-real-ip $remote_addr;</span>
<span class="line">        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章"><span>参考文章</span></a></h3><ul><li><p>https://juejin.cn/post/6844904134345228301</p></li><li><p>https://juejin.cn/post/6844904084680474637</p></li><li><p>https://www.cnblogs.com/mumusay/p/nginx-pei-zhi-fang-wen-ben-de-mu-lu.html</p></li><li><p>https://blog.csdn.net/bbwangj/article/details/82817874</p></li><li><p>https://blog.csdn.net/aa390481978/article/details/104768057</p></li><li><p>http://www.xwood.net/<em>site_domain</em>/_root/5870/5874/t_c279446.html</p></li><li><p>https://juejin.cn/post/6844903734804217863 反向</p></li><li><p>https://juejin.cn/post/6844903624204615688 反向</p></li><li><p>https://juejin.cn/post/6948748692497121294 推荐</p></li><li><p>https://blog.csdn.net/qq_31622865/article/details/111085780 代理404</p></li></ul>`,45)])])}const r=s(l,[["render",p]]),t=JSON.parse('{"path":"/mds/nginx.html","title":"使用nginx","lang":"en-US","frontmatter":{},"git":{},"filePathRelative":"mds/nginx.md"}');export{r as comp,t as data};
