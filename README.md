# mmqUtils

一个使用ts+jest编写的函数库、工具类，目前已有百余方法，大小仅50余K，支持js与ts环境，这意味着你可以在vue2,vue3等环境下使用它们，按照个人习惯，封装了常用的工具类，节约开发时间，增强代码复用。

## browser support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6+ ✔ |

## doc

暂无,有计划做，具体使用可看单元测试

## install
```shell
npm install mmq-utils
yarn install mmq-utils
pnpm install mmq-utils
```

```javascript
import mmqUtils from 'mmq-utils'
```

### On demand import
这样按需引入方法，可以使体积达到最小
```javascript
import sum from 'mmq-utils';
```

### Import all methods

```javascript
import mmqUtils from 'mmq-utils'
mmqUtils.toDateString(Date.now())
// 2018-01-01 10:30:28
mmqUtils.toStringDate('2018-01-01 10:30:00')
// Mon Jan 01 2018 10:30:00 GMT+0800 (中国标准时间)
```

## License
[MIT](LICENSE) © 2021-present, tgbf2674
