# DirectLinks for Chrome

This extension circumvents certain techniques some websites used by, such as Google or Linkprice.

## What does this extension do?

[한국어 설명](http://macnews.tistory.com/3663)

As described. Some websites are probably tracking what you're doing right now or what page you're looking at, by when you click a link to get other page you may need. On the other hand, they may slow down reaction rate of your browser as they make an unnecessary HTTP request.
So anyway, this enables you to be free from them by changing the target URL in a link tag when you click a hyperlink.

당신이 Google과 같은 사이트에서 특정 링크를 눌렀을 때 그들 사이트 중 일부는 당신이 어떤 링크를 눌렀는지 추적하기 위해, 또 다른 사이트들은 그러한 데이터로부터 수익을 얻기 위해 원래 링크 대신에 추적 링크를 달아둡니다. 이는 Do Not Track(DNT)의 성격과는 반대되며, 그러한 추적 링크들로 인해 불필요한요청이 만들어져 당신이 원하는 링크로 이동하기까지 더 오랜 시간이 걸리기도 합니다. 이 플러그인은 그러한 링크들을 클릭했을 때 원래의 링크로 변환시켜 추적 링크를 거치지 않고 바로 페이지에 도달할 수 있도록 만들어줍니다.

## How do I get started?

This extension works perfectly with Chrome and Firefox, other browsers are not tested yet but support some browsers which support [WindowBase64 helper](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64) and have UserScript plugin.

이 플러그인은 구글 크롬과 파이어폭스에서 완벽하게 동작합니다. 다른 브라우저의 경우 아래 플러그인 목록을 확인해주세요. 하지만 테스트는 되지 않았습니다.

### UserScript Plugins

* For Firefox: [Greasemonkey](https://addons.mozilla.org/ko/firefox/addon/greasemonkey/)
* For Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* For Safari: [NinjaKit](https://github.com/os0x/NinjaKit)
* For Internet Explorer: [TrixIE](http://sourceforge.net/projects/trixiewpf45/)

### Install script

if you have done with UserScript plugin, let you select the link below you want to install.

유저스크립트 플러그인을 설치하셨다면 아래 원하는 버전을 골라서 설치하시면 됩니다.

* [Stable release](https://github.com/ssut/DirectLinksChrome/raw/stable/directlinks.user.js): I would recommend you install the latest stable release version to work without any issues.
* [Development release](https://github.com/ssut/DirectLinksChrome/raw/master/directlinks.user.js): In development, this release may cause some troubles, it even doesn't work.

## Contributing

### Report a bug or Add a new filter

DirectLinks uses GitHub's issue tracker, please refer to the [Issues](https://github.com/ssut/DirectLinksChrome/issues).

### Contributing your source code
Fork this project and send me a pull request like other repositories.

## What websites are supported?

* [x] [Google](https://www.google.com)
* [x] [뽐뿌 (Ppomppu)](http://ppomppu.co.kr)

## License

This project is free software released under the MIT license, which pretty much means you can do anything you want with this.Check out `LICENSE` for more details.
