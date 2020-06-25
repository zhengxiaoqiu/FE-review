// 图片懒加载、预加载
// 懒加载，首先把图片地址存放在其它属性上（如：data-url），页面加载完成时判断图片是否在可视区内
// 在的话就将图片地址赋给src属性，添加滚动事件，在滚动事件触发时再次判断执行

var imgs = document.getElementsByTagName('img');
function lazyload () {
    var scrollTop = document.documentElement.scrollTop;//滚动条滚动的距离 
    var viewportSize = document.documentElement.clientHeight;//窗口可视区高度
    for(var i=0; i<imgs.length; i++) {
        var x = scrollTop + viewportSize - imgs[i].offsetTop;//offsetTop为元素距离文档顶部高度距离
        if(x>0) {
            imgs[i].src = imgs[i].getAttribute('data-url')
        }
    }

}
lazyload();//进入页面先执行一次
window.onscroll = lazyload();//给滚动事件绑定


//预加载，先让img先显示占位图片，等img加载完成后再显示自己
function preload (url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
        callback(img);
    }
}

window.onload = function () {
    var arr = ['xxxx', 'yyyy'];
    var imgs = document.getElementsByTagName('img');
    this.preload(arr[0], function (data) {
        imgs[0].src = data.src;
    })
}



