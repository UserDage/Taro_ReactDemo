export default {
  pages: ["pages/index/index", "pages/about/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,

    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        // 未点击时显示的图片
        iconPath: "pages/index/image/首页.png",
        // 点击后显示的图片
        selectedIconPath: "pages/index/image/首页选中.png",
      },
      {
        pagePath: "page/Search/index",
        text: "查询",
        iconPath: "pages/index/image/查询.png",
        selectedIconPath: "pages/index/image/查询选中.png",
      },
      {
        pagePath: "pages/Consult/index",
        text: "咨询",
        // 未点击时显示的图片
        iconPath: "pages/index/image/咨询.png",
        // 点击后显示的图片
        selectedIconPath: "pages/index/image/咨询选中.png",
      },
      {
        pagePath: "pages/about/index",
        text: "我的",
        iconPath: "pages/index/image/我的.png",
        selectedIconPath: "pages/index/image/我的选中.png",
      },
    ],
  },
};
