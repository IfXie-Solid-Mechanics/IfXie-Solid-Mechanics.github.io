(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{337:function(_,a,t){"use strict";t.r(a);var s=t(7),v=Object(s.a)({},(function(){var _=this,a=_._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"网站更新说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站更新说明"}},[_._v("#")]),_._v(" 网站更新说明")]),_._v(" "),a("h2",{attrs:{id:"_1-本地启动部分修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地启动部分修改"}},[_._v("#")]),_._v(" 1 本地启动部分修改")]),_._v(" "),a("h3",{attrs:{id:"_1-1-修改生成器-基于vuepress生成静态网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-修改生成器-基于vuepress生成静态网站"}},[_._v("#")]),_._v(" 1.1 修改生成器：基于VuePress生成静态网站")]),_._v(" "),a("p",[_._v("个人观点：VitePress上的生态比较“贫瘠”")]),_._v(" "),a("h3",{attrs:{id:"_1-2-本地通过webstorm测试项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-本地通过webstorm测试项目"}},[_._v("#")]),_._v(" 1.2 本地通过webstorm测试项目")]),_._v(" "),a("p",[_._v("主要原因：在2024.10.24，JetBrains终于推出了“免费个人版”，只需要同意“Toolbox 非商业用途订阅协议”即可；")]),_._v(" "),a("p",[_._v("JetBrains 也对商业用途和非商业通途进行了区分：")]),_._v(" "),a("ol",[a("li",[_._v("商业项目：")])]),_._v(" "),a("p",[_._v("·任何直接或间接为个人或组织带来经济收益或商业利益的项目。")]),_._v(" "),a("p",[_._v("·涉及出售、出租、许可或其他形式的有偿分发的产品或服务。")]),_._v(" "),a("p",[_._v("·作为商业活动一部分的项目，例如为公司工作并领取报酬的员工所参与的项目。")]),_._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[_._v("非商业项目：")])]),_._v(" "),a("p",[_._v("·学习和自我教育，例如个人学习编程或开发技能，不涉及任何商业利益。")]),_._v(" "),a("p",[_._v("·任何形式的内容创作，如编写博客、制作教育视频或直播，即使这些活动最终通过广告或销售产生收益。")]),_._v(" "),a("p",[_._v("·开源代码贡献，参与开源项目的开发，通常不涉及直接的经济收益。")]),_._v(" "),a("p",[_._v("·业余爱好开发，如个人出于兴趣而进行的游戏开发或其他编程项目。")]),_._v(" "),a("p",[_._v("补充：使用这个IDE需要翻墙。并且这个IDE支持微信注册，虽然我仍然使用了谷歌邮箱注册。")]),_._v(" "),a("p",[_._v("补充：免费个人版是订阅1年，1年以后自动继续订阅免费版（至少JetBrains是这样写的）。")]),_._v(" "),a("h3",{attrs:{id:"_1-3-本地部署npm和node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-本地部署npm和node"}},[_._v("#")]),_._v(" 1.3 本地部署npm和node")]),_._v(" "),a("p",[_._v("建议通过nvm管理，在官网https://nodejs.org/en/download/package-manager下载。（建议挂梯子）")]),_._v(" "),a("h3",{attrs:{id:"_1-4-本地项目每次更新说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-本地项目每次更新说明"}},[_._v("#")]),_._v(" 1.4 本地项目每次更新说明：")]),_._v(" "),a("p",[_._v("在本地首次运行时，通过npm install命令安装项目依赖；（这里最好把npm的mirror换为国内的，不然挂梯子也可能卡）")]),_._v(" "),a("p",[_._v("然后在package.json文件中运行docs:dev命令即可在本地运行项目(一般为http://localhost:8080/)；")]),_._v(" "),a("h2",{attrs:{id:"_2-网站全新功能讲解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-网站全新功能讲解"}},[_._v("#")]),_._v(" 2 网站全新功能讲解")]),_._v(" "),a("h3",{attrs:{id:"_2-1-vuepress目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-vuepress目录"}},[_._v("#")]),_._v(" 2.1 .vuepress目录")]),_._v(" "),a("p",[_._v("这是本网站的核心目录，其含有3个子目录")]),_._v(" "),a("h4",{attrs:{id:"_2-1-1-public目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-public目录"}},[_._v("#")]),_._v(" 2.1.1 public目录")]),_._v(" "),a("p",[_._v("主要功能是存储图片，以及图标会专门存储于子目录icon中；")]),_._v(" "),a("p",[_._v("以及未来作为一个公域。")]),_._v(" "),a("h4",{attrs:{id:"_2-1-2-sidebars目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-sidebars目录"}},[_._v("#")]),_._v(" 2.1.2 sidebars目录")]),_._v(" "),a("p",[_._v("主要功能是存储具体的侧边栏配置；")]),_._v(" "),a("h4",{attrs:{id:"_2-1-3-theme目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3-theme目录"}},[_._v("#")]),_._v(" 2.1.3 theme目录")]),_._v(" "),a("p",[_._v("这一部分是从github的codefather团队二次开发得到网站代码；")]),_._v(" "),a("h4",{attrs:{id:"_2-1-4-其他文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-4-其他文件"}},[_._v("#")]),_._v(" 2.1.4 其他文件")]),_._v(" "),a("p",[_._v("config.ts是VuePress的核心文件，也是修改网站的主要编辑区，编写方法可以参考VuePress官网；")]),_._v(" "),a("p",[_._v("extraSideBar.ts是用于编辑右侧吸附侧边栏；")]),_._v(" "),a("p",[_._v("footer.ts是用于编辑网站底部信息；")]),_._v(" "),a("p",[_._v("sidebar.ts是用于编辑左侧侧边栏；")]),_._v(" "),a("p",[_._v("navbar.ts是用于编辑上部导航栏。")]),_._v(" "),a("h3",{attrs:{id:"_2-2-各种learning目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-各种learning目录"}},[_._v("#")]),_._v(" 2.2 各种Learning目录")]),_._v(" "),a("p",[_._v("主要功能是存放写好的markdown文件。")]),_._v(" "),a("h3",{attrs:{id:"_2-3-功能总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-功能总结"}},[_._v("#")]),_._v(" 2.3 功能总结")]),_._v(" "),a("p",[_._v("目前通过插件已经实现以下功能：")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("数学公式的渲染；")])]),_._v(" "),a("li",[a("p",[_._v("代码的粘贴；")])]),_._v(" "),a("li",[a("p",[_._v("以VuePress为基础，未来存在较大上升空间；")])]),_._v(" "),a("li",[a("p",[_._v("数据的本地备份，网站数据需经过本地修改才可上线；")])]),_._v(" "),a("li",[a("p",[_._v("网站渲染风格更加优雅。")])])]),_._v(" "),a("h2",{attrs:{id:"_3-未来计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-未来计划"}},[_._v("#")]),_._v(" 3 未来计划")]),_._v(" "),a("p",[_._v("对于侧边栏进行修改，右侧边栏保持不变，左侧边栏进行调整，在本级目录进行降级处理，并显示出父级目录的md标题与链接。")])])}),[],!1,null,null,null);a.default=v.exports}}]);