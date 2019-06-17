# angel_zngz

项目简介：我们团队旨在研究智能拐杖对于老年人和盲人的生活上的一系列改善。为了更好地让他们享受生活上的便利和愉悦，我们特意对传统的拐杖进行了一系列的改进。同时为项目做了一个app和一个服务型网站。智能拐杖网站是一个线上的服务平台，它主要是呈现从硬件采集过来的数据信息和定位信息等，主要有一个登录注册模块，一个定位的页面接收从数据库返回的经纬度，页面采用bootstrap框架和jQuery库搭建，登录注册的验证是结合jQuery validate插件来实现，运用jQuery和插件中提供的Ajax方法来实现前后台交互，后端是使用SSM框架（Spring+SpringMVC+MyBatis）数据库是用MySql。

# 一、配置解析。

### Dispatcherservlet

　DispatcherServlet是前置控制器，配置在web.xml文件中的。拦截匹配的URL请求，Servlet拦截匹配规则要自已定义，把拦截下来的请求，依据相应的规则分发到目标Controller来处理，是配置spring MVC的第一步。前端控制器专心致志的接受用户请求，并将请求根据其特征（比如url，method等）转发给后端控制器。而后端控制器实际上就是我们在开发中写的一个个的Controller。

### InternalResourceViewResolver（视图名称解析器）

### @Controller  

负责注册一个bean 到spring 上下文中

### @RequestMapping 

注解为控制器指定可以处理哪些 URL 请求

![SpringMVC图片](https://pic3.zhimg.com/v2-8ae6a3c5893afbd2a5b1793044a80022_r.jpg)

![](https://pic2.zhimg.com/v2-d07623a0ad510c645f3868211e5192c1_r.jpg)



