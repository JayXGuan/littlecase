# littlecase
Self written components, cases, special effects, etc

纯属个人无聊想到来写一个小特例

创意根据点击回到顶部延伸而来，在滚动浏览器的时候给锚点加一个缓冲的特效

根据浏览器滚动条移动的方向不同而方向不同。

在浏览器停止滚动后，top图标会到原位。

后期准备思考怎样用纯CSS做出此效果。



<img src="C:\Users\JayGuan\Desktop\demo.gif" alt="demo" style="zoom:50%;" />

期间有一个需要注意的地方，那就是获取浏览器滚动条已经滚动的高度时，需要判断document.documentElement跟document.body，原因是因为DTD标准会导致后者scrollTop输出为0；

