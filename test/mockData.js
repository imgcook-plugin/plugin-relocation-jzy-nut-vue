module.exports = {
  "moduleData": {
    "id": 17679,
    "name": "hook",
    "cover": "https://img.alicdn.com/tfs/TB1mkjeqlr0gK0jSZFnXXbRRXXa-1404-1292.png",
  },
  "code": {
      panelDisplay: [
        {
          panelName: "index.vue",
          panelValue: "<template>\n  <div class=\"mod\">\n    <div class=\"hd\">\n      <div class=\"group\">\n        <img\n          class=\"icon\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/20b692f0c73d11eab0fa7be3cecb4e40.png\"\n        />\n        <img\n          class=\"icon_1\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/20977230c73d11ea8391bde74808fc27.png\"\n        />\n      </div>\n      <span class=\"txt\" :lines=\"1\">4:21 PM</span>\n      <div class=\"block\">\n        <div class=\"container\"><div class=\"color\" /></div>\n        <img\n          class=\"dot\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2076f1e0c73d11ea94c1ff74bf9c8644.png\"\n        />\n      </div>\n    </div>\n    <div class=\"bd\">\n      <div class=\"group_1\">\n        <img\n          class=\"picture\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21188910c73d11eaa01dc33968a74e70.png\"\n        />\n      </div>\n      <span class=\"word\" :lines=\"1\">爱豆主页</span>\n      <img\n        class=\"icon_2\"\n        src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21420a10c73d11ea8af54f0827e436d9.png\"\n      />\n    </div>\n    <div class=\"main\">\n      <img\n        class=\"layer\"\n        src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/219c5f10c73d11eab3749f165dbfc598.png\"\n      />\n      <div class=\"block_1\">\n        <img\n          class=\"largeIcon\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21d34d90c73d11eabe6935e41d985655.png\"\n        />\n        <div class=\"block_2\">\n          <img\n            class=\"pic\"\n            src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2205a830c73d11ea8dc81bf7482ba5b8.png\"\n          />\n          <div class=\"outer\">\n            <span class=\"info\" :lines=\"1\">莫尼卡·贝鲁奇</span>\n            <span class=\"txt_1\" :lines=\"1\">粉丝：98767868709</span>\n            <nut-button class=\"normal_component\"\n              ><span class=\"tag\" :lines=\"1\">已加入</span>\n            </nut-button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <nut-tab class=\"normal_component_1\"\n      ><nut-tab-panel\n        class=\"normal_component_2\"\n        :lines=\"nut_tab_panel_1.lines\"\n        :tab-title=\"nut_tab_panel_1.tab_title\"/><nut-tab-panel\n        class=\"normal_component_3\"\n        :lines=\"nut_tab_panel_2.lines\"\n        :tab-title=\"nut_tab_panel_2.tab_title\"/><nut-tab-panel\n        class=\"normal_component_4\"\n        :lines=\"nut_tab_panel_3.lines\"\n        :tab-title=\"nut_tab_panel_3.tab_title\"\n    /></nut-tab>\n    <div class=\"submain\">\n      <div class=\"group_2\">\n        <img\n          class=\"icon_3\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1ffa95f0c73d11eaa1c58762607b5b2a.png\"\n        />\n        <img\n          class=\"icon_4\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1fd13c00c73d11ea8151c5ab82b912af.png\"\n        />\n        <span class=\"brianRodriguez\" :lines=\"1\">Brian Rodriguez</span>\n      </div>\n      <span class=\"price\" :lines=\"1\">¥1678,89</span>\n    </div>\n    <div class=\"ft\">\n      <div class=\"block_3\">\n        <img\n          class=\"icon_5\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2047f2a0c73d11eaa11ae3ab3bdbc6a1.png\"\n        />\n        <img\n          class=\"icon_6\"\n          src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/202a3170c73d11eaa35975d6777d27bb.png\"\n        />\n        <span class=\"brianRodriguez_1\" :lines=\"1\">Brian Rodriguez</span>\n      </div>\n      <span class=\"money\" :lines=\"1\">¥1678,89</span>\n    </div>\n  </div>\n</template>\n<script>\nimport Vue from 'vue';\nimport { Button } from '@nutui/nutui';\nButton.install(Vue);\nimport { TabPanel } from '@nutui/nutui';\nTabPanel.install(Vue);\nimport { Tab } from '@nutui/nutui';\nTab.install(Vue);\n\nexport default {\n  data() {\n    return {\n      nut_tab_panel_1: {\n        lines: 1,\n        tab_title: '排行'\n      },\n      nut_tab_panel_2: {\n        lines: 1,\n        tab_title: '商品'\n      },\n      nut_tab_panel_3: {\n        lines: 1,\n        tab_title: '活动'\n      },\n      constants: {}\n    };\n  },\n  methods: {}\n};\n</script>\n<style scoped>\n@import './index.response.css';\n/* 如下给出两个覆盖样式的示例，实际根据自己需求来*/\n/deep/.nut-tab {\n  border: 0 !important;\n  padding: 0 !important;\n  background: #ff000000 !important;\n}\n/deep/.nut-button {\n  background: linear-gradient(315deg, #d2977f, #d2977f) !important;\n}\n</style>\n",
          panelType: "vue",
        },
        {
          panelName: "index.css",
          panelValue: ".mod {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 414px;\n  height: 931px;\n}\n\n.hd {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #ffffff;\n  width: 414px;\n  height: 22px;\n}\n\n.group {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 134px;\n  width: 35px;\n  height: 11px;\n}\n\n.icon {\n  margin-right: 3px;\n  width: 17px;\n  height: 11px;\n}\n\n.icon_1 {\n  width: 15px;\n  height: 11px;\n}\n\n.txt {\n  opacity: 1;\n  margin-right: 143px;\n  max-width: 186px;\n  height: 22px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 22px;\n  white-space: pre;\n  color: #22242a;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.block {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  width: 24px;\n  height: 11px;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 1px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  border-color: rgba(34, 36, 42, 0.35);\n  width: 22px;\n  height: 11px;\n}\n\n.color {\n  border-radius: 1px;\n  background-color: #22242a;\n  width: 18px;\n  height: 7px;\n}\n\n.dot {\n  width: 1px;\n  height: 4px;\n}\n\n.bd {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #ffffff;\n  width: 414px;\n  height: 43px;\n}\n\n.group_1 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 135px;\n  background-color: rgba(255, 255, 255, 0.04);\n  width: 20px;\n  height: 20px;\n}\n\n.picture {\n  width: 7px;\n  height: 13px;\n}\n\n.word {\n  opacity: 1;\n  margin-right: 137px;\n  max-width: 195px;\n  height: 22px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 22px;\n  white-space: nowrap;\n  color: #22242a;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.icon_2 {\n  width: 17px;\n  height: 3px;\n}\n\n.main {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  width: 414px;\n  height: 232px;\n}\n\n.layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 414px;\n  height: 232px;\n}\n\n.block_1 {\n  display: flex;\n  position: relative;\n  align-items: flex-start;\n  flex-direction: column;\n  background-color: rgba(34, 36, 42, 0.5);\n  width: 414px;\n  height: 232px;\n}\n\n.largeIcon {\n  position: relative;\n  align-self: flex-end;\n  margin-top: 11px;\n  width: 51px;\n  height: 38px;\n}\n\n.block_2 {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 63px;\n  margin-left: 40px;\n  height: 88px;\n}\n\n.pic {\n  margin-right: 18px;\n  width: 88px;\n  height: 88px;\n}\n\n.outer {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  height: 88px;\n}\n\n.info {\n  position: relative;\n  opacity: 1;\n  line-height: 28px;\n  letter-spacing: 0.24px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.txt_1 {\n  position: relative;\n  opacity: 1;\n  margin-top: 2px;\n  line-height: 17px;\n  letter-spacing: 0.24px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.normal_component {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 13px;\n  border-radius: 14px;\n  background-color: #d2977f;\n  width: 80px;\n  height: 28px;\n}\n\n.tag {\n  opacity: 1;\n  max-width: 68px;\n  height: 17px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 17px;\n  letter-spacing: 0.14px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.normal_component_1 {\n  width: 361px;\n  height: 22px;\n}\n\n.normal_component_2 {\n  width: 29px;\n  height: 20px;\n}\n\n.normal_component_3 {\n  width: 29px;\n  height: 20px;\n}\n\n.normal_component_4 {\n  width: 29px;\n  height: 20px;\n}\n\n.submain {\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 30px;\n  border-radius: 20px;\n  box-shadow: 0px 10px 30px rgba(244, 225, 213, 1);\n  background-color: #ffffff;\n  padding-right: 11px;\n  padding-left: 16px;\n  width: 374px;\n  height: 60px;\n}\n\n.group_2 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 40px;\n}\n\n.icon_3 {\n  margin-right: 6px;\n  width: 30px;\n  height: 30px;\n}\n\n.icon_4 {\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n}\n\n.brianRodriguez {\n  opacity: 1;\n  max-width: 153px;\n  height: 22px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 22px;\n  letter-spacing: 0.19px;\n  white-space: pre;\n  color: #22242a;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.price {\n  opacity: 1;\n  line-height: 19px;\n  letter-spacing: 0.19px;\n  white-space: nowrap;\n  color: #22242a;\n  font-family: DINAlternate-Bold, DIN Alternate;\n  font-size: 16px;\n  font-weight: NaN;\n}\n\n.ft {\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 22px;\n  border-radius: 20px;\n  box-shadow: 0px 10px 30px rgba(244, 225, 213, 1);\n  background-color: #ffffff;\n  padding-right: 11px;\n  padding-left: 16px;\n  width: 374px;\n  height: 60px;\n}\n\n.block_3 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 40px;\n}\n\n.icon_5 {\n  margin-right: 6px;\n  width: 30px;\n  height: 30px;\n}\n\n.icon_6 {\n  margin-right: 10px;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n}\n\n.brianRodriguez_1 {\n  opacity: 1;\n  max-width: 153px;\n  height: 22px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 22px;\n  letter-spacing: 0.19px;\n  white-space: pre;\n  color: #22242a;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.money {\n  opacity: 1;\n  line-height: 19px;\n  letter-spacing: 0.19px;\n  white-space: nowrap;\n  color: #22242a;\n  font-family: DINAlternate-Bold, DIN Alternate;\n  font-size: 16px;\n  font-weight: NaN;\n}\n",
          panelType: "css",
        },
        {
          panelName: "index.response.css",
          panelValue: ".mod {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 224.88vw;\n}\n\n.hd {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #ffffff;\n  width: 100vw;\n  height: 5.31vw;\n}\n\n.group {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 32.37vw;\n  width: 8.45vw;\n  height: 2.66vw;\n}\n\n.icon {\n  margin-right: 0.72vw;\n  width: 4.11vw;\n  height: 2.66vw;\n}\n\n.icon_1 {\n  width: 3.62vw;\n  height: 2.66vw;\n}\n\n.txt {\n  opacity: 1;\n  margin-right: 34.54vw;\n  max-width: 44.93vw;\n  height: 5.31vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 5.31vw;\n  white-space: pre;\n  color: #22242a;\n  font-size: 3.14vw;\n  font-weight: 400;\n}\n\n.block {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  width: 5.8vw;\n  height: 2.66vw;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 0.24vw;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 0.48vw;\n  border-color: rgba(34, 36, 42, 0.35);\n  width: 5.31vw;\n  height: 2.66vw;\n}\n\n.color {\n  border-radius: 0.24vw;\n  background-color: #22242a;\n  width: 4.35vw;\n  height: 1.69vw;\n}\n\n.dot {\n  width: 0.24vw;\n  height: 0.97vw;\n}\n\n.bd {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #ffffff;\n  width: 100vw;\n  height: 10.39vw;\n}\n\n.group_1 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 32.61vw;\n  background-color: rgba(255, 255, 255, 0.04);\n  width: 4.83vw;\n  height: 4.83vw;\n}\n\n.picture {\n  width: 1.69vw;\n  height: 3.14vw;\n}\n\n.word {\n  opacity: 1;\n  margin-right: 33.09vw;\n  max-width: 47.1vw;\n  height: 5.31vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 5.31vw;\n  white-space: nowrap;\n  color: #22242a;\n  font-size: 3.86vw;\n  font-weight: 400;\n}\n\n.icon_2 {\n  width: 4.11vw;\n  height: 0.72vw;\n}\n\n.main {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  width: 100vw;\n  height: 56.04vw;\n}\n\n.layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 56.04vw;\n}\n\n.block_1 {\n  display: flex;\n  position: relative;\n  align-items: flex-start;\n  flex-direction: column;\n  background-color: rgba(34, 36, 42, 0.5);\n  width: 100vw;\n  height: 56.04vw;\n}\n\n.largeIcon {\n  position: relative;\n  align-self: flex-end;\n  margin-top: 2.66vw;\n  width: 12.32vw;\n  height: 9.18vw;\n}\n\n.block_2 {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 15.22vw;\n  margin-left: 9.66vw;\n  height: 21.26vw;\n}\n\n.pic {\n  margin-right: 4.35vw;\n  width: 21.26vw;\n  height: 21.26vw;\n}\n\n.outer {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  height: 21.26vw;\n}\n\n.info {\n  position: relative;\n  opacity: 1;\n  line-height: 6.76vw;\n  letter-spacing: 0.24px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 4.83vw;\n  font-weight: 500;\n}\n\n.txt_1 {\n  position: relative;\n  opacity: 1;\n  margin-top: 0.48vw;\n  line-height: 4.11vw;\n  letter-spacing: 0.24px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 2.9vw;\n  font-weight: 400;\n}\n\n.normal_component {\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 3.14vw;\n  border-radius: 3.38vw;\n  background-color: #d2977f;\n  width: 19.32vw;\n  height: 6.76vw;\n}\n\n.tag {\n  opacity: 1;\n  max-width: 16.43vw;\n  height: 4.11vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 4.11vw;\n  letter-spacing: 0.14px;\n  white-space: nowrap;\n  color: #ffffff;\n  font-size: 2.9vw;\n  font-weight: 400;\n}\n\n.normal_component_1 {\n  width: 87.2vw;\n  height: 5.31vw;\n}\n\n.normal_component_2 {\n  width: 7vw;\n  height: 4.83vw;\n}\n\n.normal_component_3 {\n  width: 7vw;\n  height: 4.83vw;\n}\n\n.normal_component_4 {\n  width: 7vw;\n  height: 4.83vw;\n}\n\n.submain {\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 7.25vw;\n  border-radius: 4.83vw;\n  box-shadow: 0px 10px 30px rgba(244, 225, 213, 1);\n  background-color: #ffffff;\n  padding-right: 2.66vw;\n  padding-left: 3.86vw;\n  width: 90.34vw;\n  height: 14.49vw;\n}\n\n.group_2 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 9.66vw;\n}\n\n.icon_3 {\n  margin-right: 1.45vw;\n  width: 7.25vw;\n  height: 7.25vw;\n}\n\n.icon_4 {\n  margin-right: 2.42vw;\n  width: 9.66vw;\n  height: 9.66vw;\n  overflow: hidden;\n}\n\n.brianRodriguez {\n  opacity: 1;\n  max-width: 36.96vw;\n  height: 5.31vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 5.31vw;\n  letter-spacing: 0.19px;\n  white-space: pre;\n  color: #22242a;\n  font-size: 3.86vw;\n  font-weight: 400;\n}\n\n.price {\n  opacity: 1;\n  line-height: 4.59vw;\n  letter-spacing: 0.19px;\n  white-space: nowrap;\n  color: #22242a;\n  font-family: DINAlternate-Bold, DIN Alternate;\n  font-size: 3.86vw;\n  font-weight: NaN;\n}\n\n.ft {\n  box-sizing: border-box;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 5.31vw;\n  border-radius: 4.83vw;\n  box-shadow: 0px 10px 30px rgba(244, 225, 213, 1);\n  background-color: #ffffff;\n  padding-right: 2.66vw;\n  padding-left: 3.86vw;\n  width: 90.34vw;\n  height: 14.49vw;\n}\n\n.block_3 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 9.66vw;\n}\n\n.icon_5 {\n  margin-right: 1.45vw;\n  width: 7.25vw;\n  height: 7.25vw;\n}\n\n.icon_6 {\n  margin-right: 2.42vw;\n  width: 9.66vw;\n  height: 9.66vw;\n  overflow: hidden;\n}\n\n.brianRodriguez_1 {\n  opacity: 1;\n  max-width: 36.96vw;\n  height: 5.31vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 5.31vw;\n  letter-spacing: 0.19px;\n  white-space: pre;\n  color: #22242a;\n  font-size: 3.86vw;\n  font-weight: 400;\n}\n\n.money {\n  opacity: 1;\n  line-height: 4.59vw;\n  letter-spacing: 0.19px;\n  white-space: nowrap;\n  color: #22242a;\n  font-family: DINAlternate-Bold, DIN Alternate;\n  font-size: 3.86vw;\n  font-weight: NaN;\n}\n",
          panelType: "css",
        },
      ],
      renderData: {
        template: [
          "<div class=\"mod\"><div class=\"hd\"><div class=\"group\"><img class=\"icon\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/20b692f0c73d11eab0fa7be3cecb4e40.png\" /> <img class=\"icon_1\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/20977230c73d11ea8391bde74808fc27.png\" /> </div><span class=\"txt\" :lines=1>4:21 PM</span> <div class=\"block\"><div class=\"container\"><div class=\"color\" /></div><img class=\"dot\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2076f1e0c73d11ea94c1ff74bf9c8644.png\" /> </div></div><div class=\"bd\"><div class=\"group_1\"><img class=\"picture\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21188910c73d11eaa01dc33968a74e70.png\" /> </div><span class=\"word\" :lines=1>爱豆主页</span> <img class=\"icon_2\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21420a10c73d11ea8af54f0827e436d9.png\" /> </div><div class=\"main\"><img class=\"layer\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/219c5f10c73d11eab3749f165dbfc598.png\" /> <div class=\"block_1\"><img class=\"largeIcon\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/21d34d90c73d11eabe6935e41d985655.png\" /> <div class=\"block_2\"><img class=\"pic\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2205a830c73d11ea8dc81bf7482ba5b8.png\" /> <div class=\"outer\"><span class=\"info\" :lines=1>莫尼卡·贝鲁奇</span> <span class=\"txt_1\" :lines=1>粉丝：98767868709</span> <nut-button class=\"normal_component\"><span class=\"tag\" :lines=1>已加入</span> </nut-button></div></div></div></div><nut-tab class=\"normal_component_1\"><nut-tab-panel class=\"normal_component_2\" :lines=\"nut_tab_panel_1.lines\" :tab-title=\"nut_tab_panel_1.tab_title\" /><nut-tab-panel class=\"normal_component_3\" :lines=\"nut_tab_panel_2.lines\" :tab-title=\"nut_tab_panel_2.tab_title\" /><nut-tab-panel class=\"normal_component_4\" :lines=\"nut_tab_panel_3.lines\" :tab-title=\"nut_tab_panel_3.tab_title\" /></nut-tab><div class=\"submain\"><div class=\"group_2\"><img class=\"icon_3\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1ffa95f0c73d11eaa1c58762607b5b2a.png\" /> <img class=\"icon_4\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1fd13c00c73d11ea8151c5ab82b912af.png\" /> <span class=\"brianRodriguez\" :lines=1>Brian Rodriguez</span> </div><span class=\"price\" :lines=1>¥1678,89</span> </div><div class=\"ft\"><div class=\"block_3\"><img class=\"icon_5\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/2047f2a0c73d11eaa11ae3ab3bdbc6a1.png\" /> <img class=\"icon_6\" src=\"https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/202a3170c73d11eaa35975d6777d27bb.png\" /> <span class=\"brianRodriguez_1\" :lines=1>Brian Rodriguez</span> </div><span class=\"money\" :lines=1>¥1678,89</span> </div></div>",
        ],
        imports: [
          "import { Button } from '@nutui/nutui';\nButton.install(Vue);",
          "import { TabPanel } from '@nutui/nutui';\nTabPanel.install(Vue);",
          "import { Tab } from '@nutui/nutui';\nTab.install(Vue);",
        ],
        datas: [
          "nut_tab_panel_1: {\n lines: 1,\ntab_title: \"排行\",\n\n}",
          "nut_tab_panel_2: {\n lines: 1,\ntab_title: \"商品\",\n\n}",
          "nut_tab_panel_3: {\n lines: 1,\ntab_title: \"活动\",\n\n}",
          "constants: {}",
        ],
        methods: [
        ],
        lifeCycles: [
        ],
        styles: [
          "\n        .mod {\n          display: flex;align-items: center;flex-direction: column;width: 414.00px;height: 931.00px\n        }\n      ",
          "\n        .hd {\n          display: flex;position: relative;align-items: center;flex-direction: row;justify-content: center;background-color: #ffffff;width: 414.00px;height: 22.00px\n        }\n      ",
          "\n        .group {\n          display: flex;align-items: center;flex-direction: row;justify-content: center;margin-right: 134.00px;width: 35.00px;height: 11.00px\n        }\n      ",
          "\n        .icon {\n          margin-right: 3.00px;width: 17.00px;height: 11.00px\n        }\n      ",
          "\n        .icon_1 {\n          width: 15.00px;height: 11.00px\n        }\n      ",
          "\n        .txt {\n          opacity: 1;margin-right: 143.00px;max-width: 186.00px;height: 22.00px;overflow: hidden;text-overflow: ellipsis;line-height: 22.00px;white-space: pre;color: #22242a;font-size: 13.00px;font-weight: 400\n        }\n      ",
          "\n        .block {\n          display: flex;align-items: center;flex-direction: row;justify-content: center;width: 24.00px;height: 11.00px\n        }\n      ",
          "\n        .container {\n          display: flex;align-items: center;flex-direction: row;justify-content: center;margin-right: 1.00px;border-width: 1px;border-style: solid;border-radius: 2.00px;border-color: rgba(34, 36, 42,0.35);width: 22.00px;height: 11.00px\n        }\n      ",
          "\n        .color {\n          border-radius: 1.00px;background-color: #22242a;width: 18.00px;height: 7.00px\n        }\n      ",
          "\n        .dot {\n          width: 1.00px;height: 4.00px\n        }\n      ",
          "\n        .bd {\n          display: flex;position: relative;align-items: center;flex-direction: row;justify-content: center;background-color: #ffffff;width: 414.00px;height: 43.00px\n        }\n      ",
          "\n        .group_1 {\n          display: flex;align-items: center;flex-direction: row;justify-content: center;margin-right: 135.00px;background-color: rgba(255,255,255,0.04);width: 20.00px;height: 20.00px\n        }\n      ",
          "\n        .picture {\n          width: 7.00px;height: 13.00px\n        }\n      ",
          "\n        .word {\n          opacity: 1;margin-right: 137.00px;max-width: 195.00px;height: 22.00px;overflow: hidden;text-overflow: ellipsis;line-height: 22.00px;white-space: nowrap;color: #22242a;font-size: 16.00px;font-weight: 400\n        }\n      ",
          "\n        .icon_2 {\n          width: 17.00px;height: 3.00px\n        }\n      ",
          "\n        .main {\n          display: flex;position: relative;align-items: center;flex-direction: row;width: 414.00px;height: 232.00px\n        }\n      ",
          "\n        .layer {\n          position: absolute;top: 0.00;left: 0.00;width: 414.00px;height: 232.00px\n        }\n      ",
          "\n        .block_1 {\n          display: flex;position: relative;align-items: flex-start;flex-direction: column;background-color: rgba(34,36,42,0.50);width: 414.00px;height: 232.00px\n        }\n      ",
          "\n        .largeIcon {\n          position: relative;align-self: flex-end;margin-top: 11.00px;width: 51.00px;height: 38.00px\n        }\n      ",
          "\n        .block_2 {\n          display: flex;position: relative;align-items: center;flex-direction: row;margin-top: 63.00px;margin-left: 40.00px;height: 88.00px\n        }\n      ",
          "\n        .pic {\n          margin-right: 18.00px;width: 88.00px;height: 88.00px\n        }\n      ",
          "\n        .outer {\n          display: flex;align-items: flex-start;flex-direction: column;height: 88.00px\n        }\n      ",
          "\n        .info {\n          position: relative;opacity: 1;line-height: 28.00px;letter-spacing: 0.24px;white-space: nowrap;color: #ffffff;font-size: 20.00px;font-weight: 500\n        }\n      ",
          "\n        .txt_1 {\n          position: relative;opacity: 1;margin-top: 2.00px;line-height: 17.00px;letter-spacing: 0.24px;white-space: nowrap;color: #ffffff;font-size: 12.00px;font-weight: 400\n        }\n      ",
          "\n        .normal_component {\n          display: flex;position: relative;align-items: center;flex-direction: row;justify-content: center;margin-top: 13.00px;border-radius: 14.00px;background-color: #d2977f;width: 80.00px;height: 28.00px\n        }\n      ",
          "\n        .tag {\n          opacity: 1;max-width: 68.00px;height: 17.00px;overflow: hidden;text-overflow: ellipsis;line-height: 17.00px;letter-spacing: 0.14px;white-space: nowrap;color: #ffffff;font-size: 12.00px;font-weight: 400\n        }\n      ",
          "\n        .normal_component_1 {\n          width: 361.00px;height: 22.00px\n        }\n      ",
          "\n        .normal_component_2 {\n          width: 29.00px;height: 20.00px\n        }\n      ",
          "\n        .normal_component_3 {\n          width: 29.00px;height: 20.00px\n        }\n      ",
          "\n        .normal_component_4 {\n          width: 29.00px;height: 20.00px\n        }\n      ",
          "\n        .submain {\n          box-sizing: border-box;display: flex;position: relative;align-items: center;flex-direction: row;justify-content: space-between;margin-top: 30.00px;border-radius: 20.00px;box-shadow: 0px 10px 30px rgba(244, 225, 213, 1.00);background-color: #ffffff;padding-right: 11.00px;padding-left: 16.00px;width: 374.00px;height: 60.00px\n        }\n      ",
          "\n        .group_2 {\n          display: flex;align-items: center;flex-direction: row;height: 40.00px\n        }\n      ",
          "\n        .icon_3 {\n          margin-right: 6.00px;width: 30.00px;height: 30.00px\n        }\n      ",
          "\n        .icon_4 {\n          margin-right: 10.00px;width: 40.00px;height: 40.00px;overflow: hidden\n        }\n      ",
          "\n        .brianRodriguez {\n          opacity: 1;max-width: 153.00px;height: 22.00px;overflow: hidden;text-overflow: ellipsis;line-height: 22.00px;letter-spacing: 0.19px;white-space: pre;color: #22242a;font-size: 16.00px;font-weight: 400\n        }\n      ",
          "\n        .price {\n          opacity: 1;line-height: 19.00px;letter-spacing: 0.19px;white-space: nowrap;color: #22242a;font-family: DINAlternate-Bold, DIN Alternate;font-size: 16.00px;font-weight: NaN\n        }\n      ",
          "\n        .ft {\n          box-sizing: border-box;display: flex;position: relative;align-items: center;flex-direction: row;justify-content: space-between;margin-top: 22.00px;border-radius: 20.00px;box-shadow: 0px 10px 30px rgba(244, 225, 213, 1.00);background-color: #ffffff;padding-right: 11.00px;padding-left: 16.00px;width: 374.00px;height: 60.00px\n        }\n      ",
          "\n        .block_3 {\n          display: flex;align-items: center;flex-direction: row;height: 40.00px\n        }\n      ",
          "\n        .icon_5 {\n          margin-right: 6.00px;width: 30.00px;height: 30.00px\n        }\n      ",
          "\n        .icon_6 {\n          margin-right: 10.00px;width: 40.00px;height: 40.00px;overflow: hidden\n        }\n      ",
          "\n        .brianRodriguez_1 {\n          opacity: 1;max-width: 153.00px;height: 22.00px;overflow: hidden;text-overflow: ellipsis;line-height: 22.00px;letter-spacing: 0.19px;white-space: pre;color: #22242a;font-size: 16.00px;font-weight: 400\n        }\n      ",
          "\n        .money {\n          opacity: 1;line-height: 19.00px;letter-spacing: 0.19px;white-space: nowrap;color: #22242a;font-family: DINAlternate-Bold, DIN Alternate;font-size: 16.00px;font-weight: NaN\n        }\n      ",
        ],
      },
      noTemplate: true,
  }
};
