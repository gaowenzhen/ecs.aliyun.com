[项目预览](http://demo.web101.cn/aliyun)

#阿里云ecs.console.aliyun.com控制台前端界面交互--学习

> 阿里云--云服务器管理控制台这里案例用到技术分析，是多个angular项目组合，他通过，不同的二级域名跳转打开不同的angular项目，比如现在这个项目是ecs.aliyun.com,默认跳转路由是#home,登陆Token认证机制，AMD模块方式载入，模板的压缩，.jsonp取数据,自己打造图标字体库，中文转码等，皮肤用的是bootstrap。


#目录说明

* angular1.x

* console  --阿里的一些css文件

* ecsapp  --重新写的angular.js

* prism   --代码高亮

* index.html --首页

<hr/>

#tlp 目录说明

> disk.html，Overview.html,Examples.html这3个文件是中间菜单，点开的模板，home.html模板包含了3块，头部，和中部，控制台没有页角，这是单页应用，发现他的路由视图很精简，最左边菜单点击时是用二级域名跳转，也就是中间菜单才是一级路由，这样index.html基本没html代码很干净。

* feedbcak.html --是反馈弹出窗口模板

* rootwin.html  --为了index.html干净rootwin.html包含了feedbcak.html

* sidebar.html  --最左边菜单模板--这导航功能，数据也多，被我精简了就剩下基本，他可以通过用户添加功能。


* product.html  --这个文件和左边菜单来说就是他的右边主体模板，内包含中间，导航菜单，中间缩小中间导航菜单按钮，和最右边的一个路由容器ui-view，这个容器就是点击了，中间导航菜单项后加载不同的子项，到这个容器内。

* main.js ----是这个项目主程序，因没有处理数据，很简单，就开关界面是的一些显示隐藏作用。

[项目预览](http://demo.web101.cn/aliyun)