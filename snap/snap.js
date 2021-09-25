const page = require('webpage').create();

page.viewportSize = {width: 2048, height: 768}
page.clipRect = {
    width: 2000,
    height: 1080,
    top: 1300
}
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.52'
page.settings.loadImages = false;
page.open('http://yuyy.info', function() {
    page.render('themes/BubbleGum/source/img/snap/yuyy.png');
    phantom.exit();
});