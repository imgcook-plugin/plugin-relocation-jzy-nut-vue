module.exports = {
  "moduleData": {
    "id": 17679,
    "name": "hook",
    "cover": "https://img.alicdn.com/tfs/TB1mkjeqlr0gK0jSZFnXXbRRXXa-1404-1292.png",
  },
  "code": {
    // "panelDisplay": [
    //   {
    //     "panelName": "index.jsx",
    //     "panelValue": "'use strict';\n\nimport React, { Component } from 'react';\n\nimport styles from './style.js';\n\nclass Page_0 extends Component {\n  render() {\n    return (\n      <div style={styles.box}>\n        <img style={styles.bd} src={'https://img.alicdn.com/tfs/TB1nWPbqi_1gK0jSZFqXXcpaXXa-1404-788.png'} />\n        <span\n          style={styles.main}\n          onClick={e => {\n            console.log('my is text');\n          }}\n        >\n          碎花青春元素悄然走红\n        </span>\n        <span style={styles.submain}>\n          碎花元素可以张扬自我的独特思想品格、风格和生活态度，整体给人感觉一种青春叛逆不羁的自由风格。\n        </span>\n        <div style={styles.ft}>\n          <div style={styles.outer}>\n            <div style={styles.wrap}>\n              <img style={styles.icon} src={'https://img.alicdn.com/tfs/TB1RAjeqlr0gK0jSZFnXXbRRXXa-72-72.png'} />\n              <img style={styles.icon_2} src={'https://img.alicdn.com/tfs/TB1AMYdqbj1gK0jSZFuXXcrHpXa-28-28.png'} />\n            </div>\n            <span style={styles.beautifulClothesFashion}>美衣时尚</span>\n            <div style={styles.tagWrap}>\n              <span style={styles.tag}>时尚媒体</span>\n            </div>\n          </div>\n          <div style={styles.block}>\n            <img style={styles.icon_3} src={'https://img.alicdn.com/tfs/TB1T7YbqeL2gK0jSZFmXXc7iXXa-52-40.png'} />\n            <span style={styles.num}>2980</span>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\nexport default Page_0;\n",
    //     "panelType": "js"
    //   }
    // ],
    "panelDisplay":[
      {
        "panelName": 'index.vue',
        "panelValue": '<template>\n' +
          '  <div class="block">\n' +
          '    <div class="box">\n' +
          '      <img class="layer" :src="constants.image1" />\n' +
          '      <div class="primary">\n' +
          '        <img class="item" :src="constants.image2" />\n' +
          '        <div class="container">\n' +
          '          <span class="shopTitle">店铺名称店铺名称</span>\n' +
          '          <span class="info">商品名称商品名称商品</span>\n' +
          '          <img class="txtBg" :src="constants.image3" />\n' +
          '          <span class="desc">商品介绍商品介绍商品介绍</span>\n' +
          '          <span class="info_2">商品介绍商品介绍</span>\n' +
          '          <span class="info_3"># 利益点利益点利益 #</span>\n' +
          '          <div class="outer">\n' +
          '            <div class="couponWrap"><span class="coupon">领优惠券</span></div>\n' +
          '            <div class="buyNowWrap"><span class="buyNow">立即购买</span></div>\n' +
          '          </div>\n' +
          '        </div>\n' +
          '      </div>\n' +
          '    </div>\n' +
          '  </div>\n' +
          '</template>\n' +
          '<script>\n' +
          'export default {\n' +
          '  data() {\n' +
          '    return {\n' +
          '      constants: {\n' +
          '        image1:\n' +
          "          'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3b6652d0645911eab9d2f5d4d2e871e2.png',\n" +
          '        image2:\n' +
          "          'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3b2f3d40645911ea99b41b9b9d9036bb.png',\n" +
          '        image3:\n' +
          "          'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1db8cb80645111eaa4e56392471ce18b.png'\n" +
          '      }\n' +
          '    };\n' +
          '  },\n' +
          '  methods: {}\n' +
          '};\n' +
          '</script>\n' +
          '<style src="./index.response.css" />\n',
        "panelType": 'vue'
      },
      {
        "panelName": 'index.css',
        "panelValue": '.block {\n' +
          '  display: flex;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: row;\n' +
          '  width: 480px;\n' +
          '  height: 252px;\n' +
          '}\n' +
          '\n' +
          '.box {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  width: 480px;\n' +
          '  height: 252px;\n' +
          '}\n' +
          '\n' +
          '.layer {\n' +
          '  position: absolute;\n' +
          '  top: 0;\n' +
          '  left: 0;\n' +
          '  width: 480px;\n' +
          '  height: 252px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.primary {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  margin-top: 17px;\n' +
          '  background-color: #ffffff;\n' +
          '  width: 448px;\n' +
          '  height: 222px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.item {\n' +
          '  margin-left: 7px;\n' +
          '  width: 210px;\n' +
          '  height: 210px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.container {\n' +
          '  display: flex;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: column;\n' +
          '  margin-left: 14px;\n' +
          '  height: 210px;\n' +
          '}\n' +
          '\n' +
          '.shopTitle {\n' +
          '  margin-top: 10px;\n' +
          '  max-width: 205px;\n' +
          '  height: 16px;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 16px;\n' +
          '}\n' +
          '\n' +
          '.info {\n' +
          '  margin-top: 10px;\n' +
          '  width: 200px;\n' +
          '  height: 20px;\n' +
          '  text-decoration: none;\n' +
          '  line-height: 20px;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 20px;\n' +
          '}\n' +
          '\n' +
          '.txtBg {\n' +
          '  margin-top: 8px;\n' +
          '  margin-left: 2px;\n' +
          '  width: 199px;\n' +
          '  height: 1px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.desc {\n' +
          '  margin-top: 12px;\n' +
          '  margin-left: 3px;\n' +
          '  max-width: 202px;\n' +
          '  height: 16px;\n' +
          '  overflow: hidden;\n' +
          '  text-align: left;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0.16px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #989898;\n' +
          '  font-size: 16px;\n' +
          '}\n' +
          '\n' +
          '.info_2 {\n' +
          '  margin-top: 28px;\n' +
          '  margin-left: 3px;\n' +
          '  max-width: 202px;\n' +
          '  height: 16px;\n' +
          '  overflow: hidden;\n' +
          '  text-align: left;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0.16px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #989898;\n' +
          '  font-size: 16px;\n' +
          '}\n' +
          '\n' +
          '.info_3 {\n' +
          '  margin-top: 2px;\n' +
          '  max-width: 204px;\n' +
          '  height: 16px;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: pre;\n' +
          '  color: #595959;\n' +
          '  font-size: 16px;\n' +
          '}\n' +
          '\n' +
          '.outer {\n' +
          '  display: flex;\n' +
          '  flex-direction: row;\n' +
          '  margin-top: 17px;\n' +
          '}\n' +
          '\n' +
          '.couponWrap {\n' +
          '  display: flex;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  background-color: #fff947;\n' +
          '  width: 103px;\n' +
          '  height: 35px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.coupon {\n' +
          '  max-width: 91px;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 16px;\n' +
          '}\n' +
          '\n' +
          '.buyNowWrap {\n' +
          '  display: flex;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  background-color: #ff3939;\n' +
          '  width: 100px;\n' +
          '  height: 35px;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.buyNow {\n' +
          '  max-width: 88px;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 16px;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #ffffff;\n' +
          '  font-size: 16px;\n' +
          '}\n',
        "panelType": 'css'
      },
      {
        "panelName": 'index.response.css',
        "panelValue": '.block {\n' +
          '  display: flex;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: row;\n' +
          '  width: 64vw;\n' +
          '  height: 33.6vw;\n' +
          '}\n' +
          '\n' +
          '.box {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  width: 64vw;\n' +
          '  height: 33.6vw;\n' +
          '}\n' +
          '\n' +
          '.layer {\n' +
          '  position: absolute;\n' +
          '  top: 0;\n' +
          '  left: 0;\n' +
          '  width: 64vw;\n' +
          '  height: 33.6vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.primary {\n' +
          '  display: flex;\n' +
          '  position: relative;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  margin-top: 2.27vw;\n' +
          '  background-color: #ffffff;\n' +
          '  width: 59.73vw;\n' +
          '  height: 29.6vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.item {\n' +
          '  margin-left: 0.93vw;\n' +
          '  width: 28vw;\n' +
          '  height: 28vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.container {\n' +
          '  display: flex;\n' +
          '  align-items: flex-start;\n' +
          '  flex-direction: column;\n' +
          '  margin-left: 1.87vw;\n' +
          '  height: 28vw;\n' +
          '}\n' +
          '\n' +
          '.shopTitle {\n' +
          '  margin-top: 1.33vw;\n' +
          '  max-width: 27.33vw;\n' +
          '  height: 2.13vw;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n' +
          '\n' +
          '.info {\n' +
          '  margin-top: 1.33vw;\n' +
          '  width: 26.67vw;\n' +
          '  height: 2.67vw;\n' +
          '  text-decoration: none;\n' +
          '  line-height: 2.67vw;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 2.67vw;\n' +
          '}\n' +
          '\n' +
          '.txtBg {\n' +
          '  margin-top: 1.07vw;\n' +
          '  margin-left: 0.27vw;\n' +
          '  width: 26.53vw;\n' +
          '  height: 0.13vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.desc {\n' +
          '  margin-top: 1.6vw;\n' +
          '  margin-left: 0.4vw;\n' +
          '  max-width: 26.93vw;\n' +
          '  height: 2.13vw;\n' +
          '  overflow: hidden;\n' +
          '  text-align: left;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0.16px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #989898;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n' +
          '\n' +
          '.info_2 {\n' +
          '  margin-top: 3.73vw;\n' +
          '  margin-left: 0.4vw;\n' +
          '  max-width: 26.93vw;\n' +
          '  height: 2.13vw;\n' +
          '  overflow: hidden;\n' +
          '  text-align: left;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0.16px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #989898;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n' +
          '\n' +
          '.info_3 {\n' +
          '  margin-top: 0.27vw;\n' +
          '  max-width: 27.2vw;\n' +
          '  height: 2.13vw;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: pre;\n' +
          '  color: #595959;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n' +
          '\n' +
          '.outer {\n' +
          '  display: flex;\n' +
          '  flex-direction: row;\n' +
          '  margin-top: 2.27vw;\n' +
          '}\n' +
          '\n' +
          '.couponWrap {\n' +
          '  display: flex;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  background-color: #fff947;\n' +
          '  width: 13.73vw;\n' +
          '  height: 4.67vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.coupon {\n' +
          '  max-width: 12.13vw;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #333333;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n' +
          '\n' +
          '.buyNowWrap {\n' +
          '  display: flex;\n' +
          '  align-items: center;\n' +
          '  flex-direction: row;\n' +
          '  justify-content: center;\n' +
          '  background-color: #ff3939;\n' +
          '  width: 13.33vw;\n' +
          '  height: 4.67vw;\n' +
          '  overflow: hidden;\n' +
          '}\n' +
          '\n' +
          '.buyNow {\n' +
          '  max-width: 11.73vw;\n' +
          '  overflow: hidden;\n' +
          '  text-decoration: none;\n' +
          '  text-overflow: ellipsis;\n' +
          '  line-height: 2.13vw;\n' +
          '  letter-spacing: 0px;\n' +
          '  white-space: nowrap;\n' +
          '  color: #ffffff;\n' +
          '  font-size: 2.13vw;\n' +
          '}\n',
        "panelType": 'css'
      }
    ],
    "noTemplate": true
  }
};
