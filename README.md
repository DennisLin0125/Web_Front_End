## 前端網頁流程

### 一、項目開篇

### 二、登入註冊佈局

- html

```html
<div id="wrap">
 <!--頭部開始-->
     <header id="header">
         <!--頭部上半部-->
         <div class="headTop">
             <!--頭部上半部版心-->
             <div class="headTopMain">
                 <!--左邊-->
                 <div class="left">
                     <h5>歡迎來到商品網站！請</h5>
                     <p>
                         <a href="javascript:;">登錄</a>
                         <a href="javascript:;">註冊</a>
                     </p>
                 </div>
             </div>
      </div>

```

- css

```css
#wrap {
    /* 開始包裹區塊 */
    #header {
        /* 頭部 */
        .headTop {
            background: #eaeaea;
            height: 30px;
            /* 頭部上半部 */
            .headTopMain {
                width: 1200px;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                /* 頭部上半部版心 */
                .left {
                    float: left;
                    h5 {
                        float: left;
                    }
                    p {
                        float: left;
                        a {
                            &:first-child {
                                margin-left: 5px;
                                border-right: 1px solid #b3aeae;
                                padding-right: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}

```

### 三、列表佈局搭建

- html

```html
 <!--右邊-->
<div class="right">
    <nav>
        <a href="javascript:;">我的訂單</a>
        <a href="javascript:;">我的購物車</a>
        <a href="javascript:;">我的優選</a>
        <a href="javascript:;">優選會員</a>
        <a href="javascript:;">企業採購</a>
        <a href="javascript:;">關注我們</a>
        <a href="javascript:;">合作招商</a>
        <a href="javascript:;">商家後台</a>
    </nav>
</div>

```

- css

~~~css
.right{
    float: right;
    nav{
        font-size: 0px;
        a{
            font-size: 12px;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #b3aeae;
            &:last-child
            {
                margin-right:0px;
                padding-right:0px;
                border-right:none;
            }
        }
    }
}
~~~

### 四、logo以及搜索框

- html

~~~html
<!--頭部下半部-->
<div class="headBottom">
    <!--頭部下半部版心-->
    <div class="headBottomMain">
        <!--logo-->
        <h1 class="logo">
            <a href="javascript:;">
                <img src="images/Logo.png" alt="">
            </a>
        </h1>
        <!--搜索框-->
        <div class="search">
            <!-- input 中的提示文本信息-->
            <input type="text" placeholder="請輸入搜索內容">
            <input type="button" value="搜索">
        </div>
    </div>
</div>

~~~

- css

~~~css
/* 頭部下半部 */
.headBottom {
    /* 頭部下半部版心 */
    .headBottomMain {
        width: 1200px;
        margin: 0 auto;
        .clearfix();
        /* logo */
        .logo {
            float: left;
            img {
                width: 175px;
                height: 56px;
                margin: 25px 45px;
            }
        }
        /* 搜索框 */
        .search {
            float: right;
            margin-top: 35px;
            input {
                float: left;
                box-sizing: border-box;
                width: 490px;
                height: 32px;
                padding: 0px 4px;
                border: 3px solid #ea4a36;
                color: blue; /* 設置輸入文本的樣式 */
                &:last-child {
                    width: 68px;
                    height: 32px;
                    background: #ea4a36;
                    color: #fff;
                    border: none;
                }
                /* 設置提示文本的樣式 */
                &::-webkit-input-placeholder {
                    color: yellowgreen;
                }
            }
        }
    }
}

~~~

由於父元素中的子元素浮動效果，會產生父元素的高度塌陷問題，這種現像在後面的樣式中也是比較常見的，所以我們需要在css目錄中創建一個單獨的mixins目錄，在其中創建一個clear.less文件，然後在需要的位置調用即可。

~~~css
.clearfix()
{
    &::after
    {
        content: '';
        display: block;
        clear: both;
    }
}
~~~

### 五、分類導航

- html

```html
<!--分類導航開始-->
<div class="navWrap">
    <!--分類導航的版心-->
    <div class="navWrapMain">
        <nav>
            <a href="javascript:;">全部商品分類</a>
            <a href="javascript:;">服裝城</a>
            <a href="javascript:;">美妝館</a>
            <a href="javascript:;">尚品匯超市</a>
            <a href="javascript:;">全球購</a>
            <a href="javascript:;">閃購</a>
            <a href="javascript:;">團購</a>
            <a href="javascript:;">有趣</a>
            <a href="javascript:;">秒殺</a>
        </nav>
    </div>
</div>
<!--分類導航結束-->
```

- css

~~~css
/*分類導航開始*/
.navWrap {
    border-bottom: 2px solid #e1251b;
    /*分類導航的版心*/
    .navWrapMain {
        width: 1200px;
        margin: 0 auto;
        nav {
            .clearfix();
            a {
                float: left;
                margin: 0px 22px;
                font-size: 16px;
                color: #333;
                line-height: 50px;
                &:first-child {
                    width: 210px;
                    height: 50px;
                    background: #e1251b;
                    color: #fff;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }
            }
        }
    }
}
/*分類導航結束*/

~~~

### 六、路徑導航佈局

- html

~~~html
<!--內容區域開始-->
<div id="content">
    <!--內容區域的版心-->
    <div class="conMain">
        <!--路徑導航開始-->
        <div class="navPath">
            <a href="javascript:;">手機、數位、通訊</a>
            <span>/</span>
            <a href="javascript:;">手機</a>
            <span>/</span>
            <a href="javascript:;">Apple蘋果</a>
            <span>/</span>
            <a>iphone 6S系</a>
        </div>
        <!--路徑導航結束-->
    </div>
</div>
<!--內容區域結束-->

~~~

- css

~~~css
#content {
    /*內容區域的版心*/
    .conMain {
        width: 1200px;
        margin: 15px auto 0;
        /*路徑導航開始*/
        .navPath {
            padding: 9px 15px 9px 0;
            font-size: 0px;
            a {
                font-size: 12px;
            }
            span {
                padding: 0 5px;
                font-size: 12px;
            }
        }
        /*路徑導航結束*/
    }
}

~~~

### 七、路近導航數據動態渲染

> 思路提示：
>
> 1、由於路徑導航中的數據是動態數據，所以需要獲取
>
> 2、拿到的數據是一個陣列，所以需要遍歷來獲取其中的每一條數據
>
> 3、在遍歷過程中根據之前佈局的結構來動態創建a元素以及i元素，並填充內容以及設置相應的屬性。
>
> 4、最後處理細節，導航中的最後一個數據是普通文本，所以在遍歷的條件中需要判斷。
>
> 5、考慮到開發中的變量存儲都在全局作用域中，容易被污染，所以需要把每一個功能列為一個函數。

第一步：在html頁面的底部引入data.js文件以及index.js

~~~js
<script src="js/data.js"></script>
<script src="js/index.js"></script>
~~~

第二步：考慮到需要將所有的DOM和資源都加載完畢之後才執行此功能，在文件的開頭添加一句話

~~~js
window.onload = function(){}
~~~

第三步：在事件函數中創建第一個功能函數，起名為 navPathBind，並調用，當然函數名也可以自定義。

~~~js
//調用函數(能夠在定義函數之前調用，原因是因為預解析)
navPathBind();
//定義函數
function navPathBind() {
 //1.獲取相應的DOM元素對象
    var navPath = document.querySelector('#wrap #content .conMain .navPath');
    //2.獲取data.js數組中的path數據
    var data = goodData.path;
    //3.path數據是一個數組，所以需要遍歷獲取
     for (var i = 0; i < data.length; i++) {
         //4.由於導航中的最後一個元素是普通文本，其他都是超鏈接並且後面帶有"/",需要條件判斷
         //當i的值循環到滿足條件的最後一個值的時候
         if(i === data.length-1){
             //創建一個a元素
             var aNode = document.createElement('a');
             //設置a的值為數組對應下標的title的值
             aNode.innerHTML = data[i].title;
             //讓navPath元素來追加這個新創建的a
             navPath.appendChild(aNode)
         }else {
             //創建一個a元素
             var aNode = document.createElement('a');
             //設置a元素的href屬性為數組對應下標的url的值
             aNode.href = data[i].url;
             //設置a的值為數組對應下標的title的值
             aNode.innerHTML = data[i].title;
             //讓navPath元素來追加這個新創建的a
             navPath.appendChild(aNode)

             //創建span 元素
             var spanNode = document.createElement('span');
             //設置span元素的值為"/"
             spanNode.innerHTML = '/';
             //讓navPath元素來追加這個新創建的span
             navPath.appendChild(spanNode)
         }
     }
}
~~~

### 八、左側放大鏡佈局搭建

- html

~~~html
<!--放大鏡區域開始-->
<div class="bigWrap">
    <!--左邊：放大鏡的佈局-->
    <div class="left">
        <!--上半部：圖片的顯示-->
        <div class="leftTop">
            <!--小圖-->
            <div class="smallPic">
                <img src="images/s1.png" alt="">
                <!--蒙版：遮罩層-->
                <div class="mask"></div>
            </div>
            <!--大圖-->
            <div class="bigimgWrap"></div>
        </div>
    </div>
</div>
~~~

- css

~~~css
//放大鏡區域開始
.bigWrap
{
    margin:5px 0 15px;
    .clearfix();
    //左邊：放大鏡的佈局
    .left
    {
        float: left;
        width: 400px;
        //上半部：圖片的顯示
        .leftTop
        {
            position: relative;
            width: 400px;
            height: 400px;
            border: 1px solid #DFDFDF;
            //小圖
            .smallPic
            {
                width: 400px;
                height: 400px;
                position: relative;
                img
                {
                    width: 400px;
                    height: 400px;
                }
                //蒙版
                .mask
                {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200px;
                    height: 200px;
                    background: rgba(255,255,255,.5);
                    border: 1px solid #ddd;
                }
            }
            //大圖
            .bigimgWrap
            {
                width: 400px;
                height: 400px;
                position: absolute;
                left: 420px;
                top: 0;
                border: 1px solid #ddd;
                overflow: hidden;
                img
                {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 800px;
                    height: 800px;
                }
            }
        }
    }
}
~~~

### 九、放大鏡鼠標移入移出效果

> 思路提示：
>
> 1、給小圖元素設置鼠標移入(onmouseenter)、移動(onmousemove)、移出(onmouseleave)事件，主要考慮移入
>
> 和移出事件是沒有冒泡效果的。
>
> 2、根據效果得知，鼠標移入會顯示一個蒙版元素以及大圖框元素，移出時就會消失，
>
> 3、所以在移入事件中進行元素的創建，在移出事件中進行元素的移除即可

第一步：創建一個函數，起名為 bigClassBind ，並調用

~~~js
//函數調用
magnifyingGlass ();
//函數定義
function magnifyingGlass(){
 //1.獲取小圖元素對象
    var smallPic = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop .smallPic');
    //2.獲取leftTop元素
    var leftTop = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop')
    
    //3.獲取數據
    var imagessrc = goodData.imagessrc;
    //4.設置事件整體架構
    
    //移入事件
    smallPic.onmouseenter = function () {
        
        
        //移動事件
        smallPic.onmousemove = function () {
            
        }
        
        //移出事件
        smallPic.onmouseleave = function () {
            
        }
    }
}
~~~

在移入事件中創建蒙版元素以及大圖框和大圖片元素

~~~js
smallPic.onmouseenter = function () {
  //創建蒙版元素
    var mask = document.createElement('div');
    //設置class屬性為mask
    mask.className = 'mask'
    //讓smallPic元素追加mask蒙版元素
    smallPic.appendChild(mask);
    
    //創建大圖框元素
    var bigimgWrap = document.createElement('div');
    //設置class屬性為bigimgWrap
    bigimgWrap.className = 'bigimgWrap'
    
    //創建大圖片元素
    var bigImg = document.createElement('img')
    //設置大圖片元素的路徑
    bigImg.src = "images/b1.png";
    //讓大圖框元素追加大圖片元素
    bigimgWrap.appendChild(bigImg);
    //讓leftTop追加大圖框元素
    leftTop.appendChild(bigimgWrap);
 }
~~~

在移出事件中移除蒙版元素以及大圖框元素

~~~js
smallPic.onmouseleave = function () {
    //對onmousemove和onmouseleave事件進行解綁
    smallPic.onmousemove = smallPic.onmouseleave = null;
    //移除 蒙版 區域
    smallPic.removeChild(mask)
    //移除 大圖 區域
    leftTop.removeChild(bigimgWrap)
}
~~~

### 十、放大鏡鼠標移動實現蒙版元素的拖拽效果

![](素材\蒙版元素移動的距離.png)

~~~js
smallPic.onmousemove = function (event) {
    //蒙版發生移動
    //確定蒙版的 left top
    //蒙版位置 = 鼠標的位置 - 小圖距離屏幕左側的距離 - 蒙版寬度的一半
    var left = event.clientX - smallPic.getBoundingClientRect().left - mask.offsetWidth/2;
    var top = event.clientY - smallPic.getBoundingClientRect().top - mask.offsetHeight/2;

    mask.style.left = left + 'px';
    mask.style.top = top + 'px';

}
~~~

### 十一、蒙版元素移動的邊界控制

在mask蒙版元素拖拽過程最後設置left以及top屬性之前，需要添加left方向以及top方向的邊界判斷。

~~~js
if(left < 0){
 left = 0;
}else if(left > (smallPic.clientWidth-mask.offsetWidth)){
 left = smallPic.clientWidth-mask.offsetWidth;
}
if(top < 0){
 top = 0;
}else if(top > (smallPic.clientHeight-mask.offsetHeight)){
 top = smallPic.clientHeight-mask.offsetHeight;
}
~~~

### 十二、放大鏡鼠標移動實現大圖元素等比例移動效果

![](素材\移動比.png)

~~~js
//大圖發生移動
//確定 bigImg 的left top
//移動比 = 蒙版的位置/大圖的位置 = (小圖的寬度-蒙版的寬度)/(大圖片的寬度-大圖框的寬度);
var scale = (smallPic.clientWidth-mask.offsetWidth)/(bigImg.offsetWidth-bigimgWrap.clientWidth)

bigImg.style.left = -left/scale + 'px';
bigImg.style.top = -top/scale + 'px';
~~~

### 十三、放大鏡縮略圖佈局搭建

- html

~~~html
<!--下半部：縮略圖-->
<div class="leftBttom">
    <a href="javascript:;" class="prev">&lt;</a>
    <div class="picsWrap">
        <ul>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
            <li><img src="images/s1.png" alt=""></li>
        </ul>
    </div>
    <a href="javascript:;" class="next">&gt;</a>
</div>
~~~

- css

~~~css
//下半部：縮略圖
.leftBttom
{
    width: 400px;
    margin-top: 5px;
    .clearfix();
    a{
        float: left;
        width: 10px;
        height: 54px;
        line-height: 54px;
        border: 1px solid #CCC;
        background: #EBEBEB;
        &.prev
        {
            margin-right: 4px;
        }
        &.next{

        }
    }
    .picsWrap
    {
        float: left;
        width: 372px;
        height: 56px;
        overflow: hidden; //溢出元素隱藏
        position: relative;
        ul
        {
            .clearfix();
            white-space: nowrap; //文本元素永不換行
            float: left; //讓li撐開 ul 的寬度高度
            font-size: 0px; //inline-block 縫隙問題
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.5s;
            li
            {
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 1px solid #CCC ;
                padding: 2px;
                margin-right: 20px;
                img
                {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
}
~~~

### 十四、放大鏡縮略圖數據動態渲染

> 思路提示：
>
> 1、由於不同商品的縮略圖是不同的，所以需要獲取相應的數據。
>
> 2、數據是數組，需要遍歷，根據數組中元素的個數來動態創建li元素以及img元素，並讓li追加img
>
> 3、最後讓ul遍歷追加每一條li即可。

第一步：先把ul中的所有的li都註釋掉

第二步：創建一個函數，起名為  thumbnailData ，並調用

~~~js
//調用函數
thumbnailData();
//定義函數
function thumbnailData(){
 //獲取ul元素
    var ulNode = document.querySelector('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul');
    //獲取數據
    var imagessrc = goodData.imagessrc;
 //遍歷數組
    for (var i = 0; i < imagessrc.length; i++) {
        //創建li元素
        var liNode = document.createElement('li');
        //創建img元素
        var imgNode = document.createElement('img');
        //設置src路徑
        imgNode.src = imagessrc[i].s;
        //li追加img元素
        liNode.appendChild(imgNode);
        //ul追加li元素
        ulNode.appendChild(liNode)
    }
}
~~~

### 十五、點擊縮略圖實現換小圖以及大圖效果

> 思路提示：
>
> 1、給 li 添加點擊事件
>
> 2、獲取點擊li的下標
>
> 3、根據下標去數據中那小圖的路徑，並且給小圖設置上 ，由於大圖是動態創建的，所以不能直接去獲取 。
>
> 4、需要在全局定義一個大圖下標變量 ，只要點擊 ，把這個變量做一個更新
>
> 5、默認情況下 ，小圖與縮略圖第一張圖片一致

第一步：在全局作用域中創建一個變量，用來記錄點擊的縮略圖下標和大圖的下標保持一致。

~~~js
//定義一個變量：保存大圖的下標
var bigImgIndex = 0;
~~~

第二步：創建一個函數，起名為   thumbnailClick ，並調用

~~~js
//函數調用
thumbnailClick();
//定義函數
function thumbnailClick(){
 //獲取 li 元素
    var liNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul li');
    //獲取小圖元素
    var smallPic = document.querySelector('#wrap #content .conMain .bigWrap .left .leftTop .smallPic img');

    //獲取數據
    var imagessrc = goodData.imagessrc;

    //小圖的默認圖片與縮略圖第一張圖片一致
    smallPic.src = imagessrc[0].s;

    //li的下標 與 數據中 imagessrc 數組的下標 是 一一對應關係
    //給每一個 li 綁定點擊事件
    for (var i = 0; i < liNodes.length; i++) {
        //設置自定義索引
        liNodes[i].index = i;
        liNodes[i].onclick = function () {
            //點擊哪一個圖片，小圖就要換成哪一個圖片，大圖也要換成哪一個圖片
            smallPic.src = imagessrc[this.index].s;

            //大圖下標變化
            bigImgIndex = this.index;

        }
    }
}
~~~

第二步：修改 bigClassBind函數中移入事件中默認大圖的路徑

~~~js
把 bigImg.src = "images/b1.png" 換成 bigImg.src = imagessrc[bigImgIndex].b;
~~~

### 十六、實現縮略圖點擊左右箭頭的圖片輪播效果原理分析

> 思路提示：
>
> 1、無論點擊的是左右哪個箭頭，確定移動的元素是ul
>
> 2、根據效果得知，每次圖片走過的路程是兩個li的寬度以及右側20px的間距和
>
> 3、ul的總寬度一定會大於div框的寬度，那麼ul最終可以移動的總距離也就是用ul的總寬度 - div的總寬度

### 十七、計算每一次圖片移動的距離以及ul移動的總距離

創建一個函數，起名為    thumbnailLeftRightClick ，並調用

~~~js
//函數調用
thumbnailLeftRightClick();
//函數定義
function thumbnailLeftRightClick(){
 //獲取ul元素
    var ul = document.querySelector('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul');
    //獲取所有的li元素
    var liNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .left .leftBttom .picsWrap ul li');
    //元素移動的三要素：從哪開始移動，每一次移動步長，可以移動的最大距離
    //(1) 定義移動的初始位置變量值
    var temp = 0;
    //(2) 計算每一次所走過的步長
    var everyLeft = (liNodes[0].offsetWidth + 20) * 2;
    //(3) 計算ul所可以移動的總距離 = ul的寬度 - div框的寬度 = （圖片總數-圖片顯示數）*一個圖片的寬度
    var sumLeft = (liNodes.length - 5) * (liNodes[0].offsetWidth + 20);
    console.log(sumLeft);
}
~~~

### 十八、實現縮略圖點擊左右箭頭的圖片輪播效果

~~~js
//點擊 next ,ul往前走
next.onclick = function () {
    temp += everyLeft;
    //範圍限定
    if(temp > sumLeft){
     temp = sumLeft;
    }

    ul.style.left = -temp + 'px';
}
~~~

~~~js
//點擊 prev ,ul往後走
prev.onclick = function () {
    temp -= everyLeft;
    //範圍限定
    if(temp < 0){
     temp = 0;
    }
    ul.style.left = -temp + 'px';
}
~~~

### 十九、右側商品上半部分詳情介紹佈局搭建

- html

~~~html
<!--右邊：產品的信息介紹-->
<div class="right">
    <div class="rightTop">
        <h3>Apple iPhone 6s（A1700）64G玫瑰金色 移動通信電信4G手機bbb123</h3>
        <p>推薦選擇下方[移動優惠購],手機套餐齊搞定,不用換號,每月還有花費返</p>
        <div class="priceWrap">
            <div class="priceTop">
                <span>價&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <div class="price">
                    <span>￥</span>
                    <p>$5299</p>
                    <i>降價通知</i>
                </div>
                <p>
                    <span>累計評價</span>
                    <span>670000</span>
                </p>
            </div>
            <div class="priceBottom">
                <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;銷</span>
                <p>
                    <span>加價購</span>
                    <span>滿999.00另加20.00元，或滿1999.00另加30.00元，或滿2999.00另加40.00元，即可在購物車換購熱銷商品</span>
                </p>
            </div>
        </div>
        <div class="support">
            <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
            <p>以舊換新，閒置手機回收 4G套餐超值搶 禮品購</p>
        </div>
        <div class="address">
            <span>配&nbsp;送&nbsp;至</span>
            <p>廣東省 深圳市 寶安區</p>
        </div>
    </div>
</div>
~~~

- css

~~~css
.right
{
    float: right;
    width: 700px;
    .rightTop
    {
        h3
        {
            font-size: 14px;
            line-height: 21px;
            margin-top: 15px;
        }
        >p
        {
            color: #e12228;
            margin-top: 15px;
        }
        .priceWrap
        {
            margin-top: 10px;
            line-height: 28px;
            background: #fee9ec;
            padding: 7px;
            .priceTop
            {
                .clearfix();
                >span
                {
                    float: left;
                    margin-right: 15px;
                }
                .price
                {float: left;
                    color:#cc1122;
                    >span
                    {
                        float: left;
                        font-size: 16px;
                    }
                    p{
                        float: left;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    i{
                        float: left;
                        font-size: 12px;
                    }
                }
                >p{
                    float: right;
                }
            }
            .priceBottom
            {
                .clearfix();
                >span
                {
                    float: left;
                    margin-right: 15px;
                }
                p{
                    float: left;
                    width: 520px;
                    line-height: 28px;
                    span
                    {
                        color: #999;
                        &:first-child
                        {
                            background: #c81623;
                            color: #fff;
                            padding: 3px;
                        }
                    }
                }
            }
        }
        .support
        {
            margin-top: 10px;
            line-height: 28px;
            .clearfix();
            >span
            {
                float: left;
                margin-right: 15px;
            }
            >p
            {
                float: left;
                width: 520px;
                color: #999;
            }
        }
        .address
        {
            margin-top: 10px;
            line-height: 28px;
            border-bottom: 1px solid #ededed;
            padding-bottom: 5px;
            .clearfix();
            >span
            {
                float: left;
                margin-right: 15px;
            }
            >p{
                
                float: left;
                width: 520px;
                color: #999;
            }
        }
    }
}
~~~

### 二十、右側商品上半部分詳情介紹數據動態渲染

第一步：需要先將rightTop這個div中的代碼全部註釋掉

第二步：創建一個函數，起名為  rightTopData ，並調用

~~~js
//函數調用
rightTopData();
//函數定義
function rightTopData(){
 //獲取元素
    var rightTop = document.querySelector('#wrap #content .conMain .bigWrap .right .rightTop');
    //獲取數據
    var goodsDetail = goodData.goodsDetail;
    
    //定義模板字符串變量,將rightTop中的代碼全部打開註釋，剪切到字符串中
    //並且進行相應的數據替換
    var s =  `
            <h3>${goodsDetail.title}</h3>
            <p>${goodsDetail.recommend}</p>
            <div class="priceWrap">
             <div class="priceTop">
             <span>價&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
             <div class="price">
              <span>￥</span>
              <p>${goodsDetail.price}</p>
              <i>降價通知</i>
             </div>
            <p>
             <span>累計評價</span>
             <span>${goodsDetail.evaluateNum}</span>
            </p>
            </div>

            <div class="priceBottom">
             <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;銷</span>
            <p>
             <span>${goodsDetail.promoteSales.type}</span>
             <span>${goodsDetail.promoteSales.content}</span>
            </p>
            </div>

            </div>
            <div class="support">
             <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
             <p>${goodsDetail.support}</p>
            </div>

            <div class="address">
             <span>配&nbsp;送&nbsp;至</span>
             <p>${goodsDetail.address}</p>
            </div>
            `
    //將渲染後數據的字符串重新寫回rightTop元素中
    rightTop.innerHTML = s;
}
~~~

### 二十一、右側商品下半部分商品參數佈局搭建

- html

~~~html
<!--右邊下半部-->
<div class="rightBottom">
    <!--被選擇的區域-->
    <div class="choosed"></div>
    <!--選擇區域的列表-->
    <div class="chooseWrap">
        <dl>
            <dt>選擇顏色</dt>
            <dd>金色</dd>
            <dd>銀色</dd>
            <dd>黑色</dd>
        </dl>
        <dl>
            <dt>內存容量</dt>
            <dd>16G</dd>
            <dd>64G</dd>
            <dd>128G</dd>
            <dd>256G</dd>
        </dl>
        <dl>
            <dt>選擇版本</dt>
            <dd>公開版</dd>
            <dd>移動版</dd>
        </dl>
        <dl>
            <dt>購買方式</dt>
            <dd>官方標配</dd>
            <dd>優惠移動版</dd>
            <dd>電信優惠版</dd>
        </dl>
    </div>
</div>

<!--加入購物車-->
<div class="addcart">
    <div class="count">
        <input type="text">
        <a href="javascript:;">+</a>
        <a href="javascript:;">-</a>
    </div>
    <button>加入購物車</button>
</div>
~~~

- css

~~~css
.rightBottom 
{
    margin-top: 10px;
    line-height: 28px;

    //選擇區域的列表
    .chooseWrap 
    {
        dl 
        {
            margin-top: 13px;
            margin-bottom: 13px;
            .clearfix();

            dt 
            {
                float: left;
                margin-right: 15px;
            }

            dd 
            {float: left;
                margin-right: 5px;
                color: #666;
                line-height: 24px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-left: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;

                &:first-of-type 
                {
                    color: red;
                }
            }
        }
    }

    //加入購物車
    .addcart 
    {
        .clearfix();

        .count 
        {
            float: left;
            width: 55px;
            margin-right: 15px;
            position: relative;

            input 
            {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
            }

            a 
            {
                width: 15px;
                height: 18px;
                line-height: 18px;
                text-align: center;
                border: 1px solid #ddd;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: 1px;

                &:first-child {
                    top: 0;
                }

                &:last-child {
                    top: 20px;
                    border-top: none;
                }
            }
        }

        button {
            float: left;
            padding: 0 25px;
            height: 36px;
            font-size: 16px;
            background: #e1251b;
            color: #fff;
            border: none;
        }
    }
}
~~~

### 二十二、右側商品下半部分商品參數數據動態渲染

> 思路提示：
>
> 1、獲取data.js文件中的相應數據( crumbData )
>
> 2、遍歷該數組、根據數組的長度來循環創建dl以及dt元素，並讓dl追加dt元素
>
> 3、根據crumbData 數組下的data的元素個數來循環創建dd並讓dl來追加

創建一個函數，起名為   rightBottomData ，並調用

~~~js
//函數調用
rightBottomData();
//函數定義
function rightBottomData(){
 //獲取元素
    var chooseWrap = document.querySelector('#wrap #content .conMain .bigWrap .right .rightBottom .chooseWrap');
    //獲取數據
    var crumbData = goodData.goodsDetail.crumbData;

    //遍歷數組
    for (var i = 0; i < crumbData.length; i++) {
        //創建 dl 元素
        var dlNode = document.createElement('dl');
        //創建 dt 元素
        var dtNode = document.createElement('dt');
        //設置dt的值為數組中的title的值
        dtNode.innerHTML = crumbData[i].title;
        //讓dl追加dt元素
        dlNode.appendChild(dtNode);
        
  //循環crumbData裡面每一個元素下的data
        for (var j = 0; j < crumbData[i].data.length; j++) {
            //創建 dd 元素
            var ddNode = document.createElement('dd');
            //設置dd的值為數組中type的值
            ddNode.innerHTML = crumbData[i].data[j].type;
   //讓dl追加dd元素
            dlNode.appendChild(ddNode);

        }
        //讓chooseWrap循環追加dl元素
        chooseWrap.appendChild(dlNode);
    }
}
~~~

### 二十三、實現點擊每行參數的文字顏色排他效果

第一步：創建一個函數，起名為    clickDDbind ，並調用

~~~js
//函數調用
clickDDbind();
//函數定義
function clickDDbind(){
 
}
~~~

第二步：降低思路難度，先實現第一行dl中的所有dd顏色點擊的排他效果

~~~js
//獲取所有的dl元素
var dlNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .right .rightBottom .chooseWrap dl');

//獲取第一個dl中的所有的dd元素
var ddNodes = dlNodes[0].querySelectorAll('dd');

//循環添加點擊事件
for (var i = 0; i < ddNodes.length; i++) {
 ddNodes[i].onclick = function () {
        //排他思想：
        //(1) 其他dd保持不動
        for (var j = 0; j < ddNodes.length; j++) {
            ddNodes[j].style.color = '#666'
        }
        //(2) 點擊dd變色
        this.style.color = 'red';
 }
}
~~~

第三步：其他幾行dl的點擊dd顏色排他效果，只是下標發生了變化，

所以我們只需要在剛才的操作外側套一層for循環，解決不同dl的下標就可以了,調整一下循環變量。

~~~js
for (var i = 0; i < dlNodes.length; i++) {
 //獲取第一個dl中的所有的dd元素
    var ddNodes = dlNodes[i].querySelectorAll('dd');

    //循環添加點擊事件
    for (var j = 0; j < ddNodes.length; j++) {
        ddNodes[j].onclick = function () {
            //排他思想：
            //(1) 其他dd保持不動
            for (var k = 0; k < ddNodes.length; k++) {
                ddNodes[k].style.color = '#666'
            }
            //(2) 點擊dd變色
            this.style.color = 'red';
        }
    }
}
~~~

### 二十四、利用閉包函數來解決循環中事件裡面的變量問題

在之前的代碼中，運行後我們能看到只有最後一行dl中的dd進行了顏色排他的效果，其他三行都沒有，這是因為在

事件之前的i變量以及j變量都已經循環完畢了，則無法得到每一次循環的變量值，那麼針對這個問題，我們的需求

就是想要每一次循環的變量都有所保留，我們可以使用閉包函數來解決這個問題

~~~js
for (var i = 0; i < dlNodes.length; i++) {
 (function (i) {
        //獲取第一個dl中的所有的dd元素
        var ddNodes = dlNodes[i].querySelectorAll('dd');

        //循環添加點擊事件
        for (var j = 0; j < ddNodes.length; j++) {
            ddNodes[j].onclick = function () {
                //排他思想：
                //(1) 其他dd保持不動
                for (var k = 0; k < ddNodes.length; k++) {
                    ddNodes[k].style.color = '#666'
                }
                //(2) 點擊dd變色
                this.style.color = 'red';
            }
        }
 })(i)
}
~~~

### 二十五、實現選擇結果的佈局搭建

- html

~~~html
<!--被選擇的區域-->
<div class="choosed">
    <div class="mark">金色<a>X</a></div>
    <div class="mark">128G<a>X</a></div>
    <div class="mark">移動版<a>X</a></div>
    <div class="mark">優惠移動版<a>X</a></div>
</div>
~~~

- css

~~~css
//被選擇的區域
.choosed 
{
    .clearfix();
    .mark 
    {
        float: left;
        height: 30px;
        background: snow;
        border: 1px solid #ddd;
        padding: 0 20px;
        margin-right: 20px;

        a 
        {
            color: red;
            margin-left: 20px;
        }
    }
}
~~~

### 二十六、點擊商品參數實現對應結果的動態添加

> 思路提示：
>
> 1、 創建一個數組，數組的長度與 dl長度一樣，默認元素0
>
> 2、 點擊dd元素,根據點擊的dd元素,獲取其對應父元素dl的下標
>
> 3、 然後找數組相對應的位置，把dd的內容添加到數組中
>
> 4、 遍歷最終的數組，如果其位置有元素，創建新的元素，如果沒有元素，則忽略掉
>
> 5、在每一次點擊dd的時候，都需要把 choosed 中的內容清空，否則會一直追加

第一步：在 clickDDbind 函數中創建一個空數組並按照dl的個數來填充初始值0

~~~js
var arr = new Array(dlNodes.length);
arr.fill(0);
~~~

第二步：在點擊dd的時候，先清空choosed元素的值

~~~js
ddNodes[j].onclick = function () {
 //1、 清空值
    choosed.innerHTML = '';
    //2、將點擊的dd的值放到arr對應下標中
    arr[i] = this.innerHTML;
    //3、遍歷數組，如果其位置有元素，創建新的元素，如果沒有元素，則忽略掉
    arr.forEach(function (item,index) {
        //item : 數組中的每一個元素
        //index : 數組中的下標
        //如果其位置有元素，創建新的元素
        //['黑色','128G',0,'電信優惠版']
        if(item){
            //創建div元素
            var divNode = document.createElement('div');
            //給div添加class屬性為mark
            divNode.className = 'mark';
            //將數組中的元素賦值給div的值
            divNode.innerHTML = item;
            //創建a元素
            var aNode = document.createElement('a');
            //設置值為"X"
            aNode.innerHTML = 'X';
            //div追加a元素
            divNode.appendChild(aNode);
            //讓choosed追加div
            choosed.appendChild(divNode)
        }
    })
}
~~~

### 二十七、點擊刪除按鈕實現刪除對應參數數據

> 思路提示：
>
> 1、 獲取a元素，綁定點擊事件 ，但是需要知道點擊的是哪一個a
>
> 2、 點擊的a元素的父元素，需要刪除
>
> 3、 數組對應的位置，恢復成默認值0
>
> 4、 dd第一個區域變成紅色，其他的dd變成#666

第一步：修改代碼將點擊的dd的值添加到數組換成dd元素本身添加到數組

~~~js
arr[i] = this;
~~~

第二步：在創建每一個a元素的時候，在其身上記錄a元素的下標

~~~js
aNode.setAttribute('num',index)
~~~

第三步：獲取所有的刪除a元素並循環點擊

~~~js
 //獲取所有的a元素
 var aNodes = document.querySelectorAll('#wrap #content .conMain .bigWrap .right .rightBottom .choosed .mark a');
 //循環所有的a元素，注意循環變量不能使用之前的i，j，k等變量
 for (var n = 0; n < aNodes.length; n++) {
     //給每一個a添加點擊事件
     aNodes[n].onclick = function () {
         //點擊的a元素的父元素，需要刪除
         choosed.removeChild(this.parentNode);
         //獲取 點擊 a 的下標
         var aIndex = this.getAttribute('num');
         //並且讓數組中對應下標的元素重置為0,數組的下標 ，aIndex , dl的下標 是一致的
         arr[aIndex] = 0;
         //dd第一個區域變成紅色，其他的dd變成#666
         //獲取相對應dl中的dd
         var dds = dlNodes[aIndex].querySelectorAll('dd');
         for (var m = 0; m < dds.length; m++) {
          dds[m].style.color = '#666'
         }
         dds[0].style.color = 'red';
    }
}
~~~

### 二十八、封裝價格變動的函數

考慮到點擊dd元素後價格變動，刪除後價格也會變動，功能需求不單一，所以我們需要封裝一個公共的函數。

> 思路提示：最終的價格 = 原有的價格 +  變動的價格
>
> 1、獲取data.js中已有的價格
>
> 2、獲取數組中不為0的所有dd元素身上的價格值
>
> 3、將原有的價格循環添加變動的價格，在重新寫到對應的標籤上。

第一步：在創建dd元素的位置需要給每一個dd添加一個價格屬性

~~~js
ddNode.setAttribute('changePrice',crumbData[i].data[j].changePrice)
~~~

第二步：創建一個函數，起名為 changePriceBind ，並調用

~~~js
//調用函數
changePriceBind();
//定義函數
function changePriceBind(){
 //獲取已有價格
    var price = goodData.goodsDetail.price; //5299
    //獲取p標籤
    var pNode = document.querySelector('#wrap #content .conMain .bigWrap .right .rightTop .priceWrap .priceTop .price p');
    //遍歷數組
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]){
            var changeP = Number(arr[i].getAttribute('changePrice'));
            // 字符串 轉化 數值  Number()   Number.parseInt()  parseInt()
            //最終的價格 = 上邊原有的價格 + 變動的價格
            price += changeP;
        }
    }
    //把最終的價格給元素添加上去
    pNode.innerHTML = price;
}
~~~

### 二十九、中間左側選項卡整體結構佈局搭建

- html

~~~html
<!--商品詳情區域開始-->
<div class="goodsDetailWrap">
    <!--左邊側邊欄-->
    <aside class="leftAside">
        <!--上部點擊按鈕區域-->
        <div class="asideTop">
            <h4 class="active">相關分類</h4>
            <h4>推薦品牌</h4>
        </div>
        <!--下部對應內容切換區域-->
        <div class="asideCont">
            <div class="active"></div>
            <div>推薦品牌內容</div>
        </div>
    </aside>
</div>
~~~

- css

~~~css
.goodsDetailWrap 
{
    width: 1200px;
    margin: 30px auto 0;
    .clearfix();

    //左邊側邊欄
    .leftAside 
    {
        float: left;
        width: 210px;
        border: 1px solid #ccc;

        //上部點擊按鈕區域
        .asideTop 
        {
            height: 40px;

            h4 {
              float: left;
              width: 50%;
              height: 37px;
              line-height: 37px;
              text-align: center;
              border-top: 3px solid #fff;
              border-bottom: 1px solid #ccc;

              &.active {
                border-top: 3px solid #e1251b;
                border-bottom: 1px solid #fff;
              }
            }
        }

        //下部對應內容切換區域
        .asideCont 
        {
            padding: 10px;

            >div 
            {
                display: none;

                &.active 
                {
                    display: block;

                }
            }
        }
    }
}
~~~

### 三十、中間左側選項卡中具體內容佈局搭建

- html

~~~html
<div class="active">
    <ul class="goodsList">
        <li>手機</li>
        <li>手機殼</li>
        <li>內存卡</li>
        <li>iphone配件</li>
        <li>貼膜</li>
        <li>手機耳機</li>
        <li>移動電源</li>
        <li>平板電腦</li>
    </ul>
    <ul class="goodsList2">
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple蘋果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入購物車</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple蘋果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入購物車</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple蘋果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入購物車</a>
            </div>
        </li>
        <li>
            <img src="images/part01.png" alt="">
            <span>Apple蘋果iPhone 6s (A1699)</span>
            <p>¥6088.00</p>
            <div class="button">
                <a href="javascript:;">加入購物車</a>
            </div>
        </li>
    </ul>
</div>
~~~

- css

~~~css
.goodsList {
    .clearfix();
    li {
        float: left;
        width: 50%;
        line-height: 28px;
        border-bottom: 1px dashed #ededed;
    }
}
.goodsList2 {
    li {
        margin: 5px 0 15px;
        border-bottom: 1px solid #ededed;

        img {
            width: 152px;
        }

        p {
            font-size: 16px;
            color: #c81623;
        }

        .button {
            margin-top: 5px;
            margin-bottom: 5px;
            text-align: center;

            a {
                border: 1px solid #8c8c8c;
                color: #8c8c8c;
                padding: 2px 14px;
                line-height: 18px;
            }
        }

    }
}
~~~

### 三十一、中間右側選擇搭配的整體結構佈局搭建

- html

~~~html
<!--右邊具體的詳情區域-->
<div class="rightDetail">
    <!--選擇區域-->
    <div class="chooseWrap">
        <h4>選擇搭配</h4>
        <div class="listWrap">
            <div class="left">
                <img src="images/l-m01.png" alt="">
                <p>¥5299</p>
                <i>+</i>
            </div>
            <ul class="middle">
                <li>
                    <img src="images/dp01.png" alt="">
                    <span>Feless費勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp02.png" alt="">
                    <span>Feless費勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp03.png" alt="">
                    <span>Feless費勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
                <li>
                    <img src="images/dp04.png" alt="">
                    <span>Feless費勒斯VR</span>
                    <div>
                        <input type="checkbox" value="50">
                        <span>50</span>
                    </div>
                </li>
            </ul>
            <div class="right">
                <div>已購0件商品</div>
                <p>套餐價</p>
                <i>¥5299</i>
                <div>
                    <button>加入購物車</button>
                </div>
            </div>
        </div>
    </div>
~~~

- css

~~~css
//右邊具體的詳情區域
.rightDetail {
    float: right;
    width: 980px;

    //選擇區域
    .chooseWrap {
        border: 1px solid #ddd;
        margin-bottom: 15px;

        h4 {
            border-bottom: 1px solid #ddd;
            background: #f1f1f1;
            color: #333;
            padding: 5px 0 5px 15px;
        }

        .listWrap {
            height: 170px;
            padding-top: 10px;

            .left {
                float: left;
                width: 127px;
                height: 165px;
                position: relative;

                img {
                    width: 87px;
                    margin: 0 auto;
                }

                p {
                    color: #c81623;
                    font-size: 16px;
                    text-align: center;
                }

                i {
                    font-size: 16px;
                    position: absolute;
                    top: 48px;
                    right: -25px;
                }
            }

            .middle {
                float: left;
                width: 668px;
                height: 165px;li {
                    float: left;
                    width: 127px;
                    margin: 0 20px;
                    text-align: center;

                    img {
                        width: 120px;
                        height: 130px;
                    }
                }
            }

            .right {
                float: left;
                border-left: 1px solid #ddd;
                width: 153px;
                height: 165px;
                padding-left: 20px;

                >div {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                >p {
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                >i {
                    font-size: 16px;
                    color: #B1191A;
                    margin-bottom: 10px;
                }

                button {
                    padding: 10px 25px;
                    font-size: 16px;
                    color: #fff;
                    background: #e1251b;
                    border: none;
                }
            }
        }
    }
}
~~~

### 三十二、選擇搭配中復選框選中狀態的套餐價聯動效果

> 思路提示：
>
> 1、獲取左側元素並賦值為商品詳情參數數據dd點擊後的價格值
>
> 2、獲取中間所有的複選框元素遍歷找出選中的元素的value值
>
> 3、將選擇的價格和左側的價格進行相加後重新賦值給右側的價格元素

第一步：在 changePriceBind 這個函數中繼續獲取選擇搭配中左側元素並賦予其最終價格

~~~js
var leftN = document.querySelector('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .left p')
//左邊價格 = 上邊價格（賦值）
leftN.innerHTML = '￥' + price;
~~~

第二步：獲取複選框元素遍歷找出選中的並追加value值

~~~js
var checkbox = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .middle li input')

for (var i = 0; i < checkbox.length; i++) {
 if(checkbox[i].checked){
  price = price + Number(checkbox[i].value);
 }
}
~~~

第三步：獲取右側元素，重新賦值價格

~~~js
var rightN = document.querySelector('#wrap #content .conMain .goodsDetailWrap .rightDetail .chooseWrap .listWrap .right > i');
 rightN.innerHTML = '￥' + price;
~~~

### 三十三、中間右側選項卡佈局搭建

- html

~~~html
<div class="bottomDetail">
    <ul class="tabBtns">
        <li class="active"><a href="javascript:;">商品介紹</a></li>
        <li><a href="javascript:;">規格包裝</a></li>
        <li><a href="javascript:;">售後與保障</a></li>
        <li><a href="javascript:;">商品評價</a></li>
        <li><a href="javascript:;">手機社區</a></li>
    </ul>
    <div class="tabConts">
        <div class="active">
            <ul>
                <li>分辨率：1920*1080(FHD)</li>
                <li>後置攝像頭：1200萬像素</li>
                <li>前置攝像頭：500萬像素</li>
                <li>核 數：其他</li>
                <li>頻 率：以官網信息為準</li>
                <li>品牌： Apple</li>
                <li>商品名稱：APPLEiPhone 6s Plus</li>
                <li>商品編號：1861098</li>
                <li>商品產地：中國大陸</li>
                <li>商品毛重：0.51kg</li>
                <li>熱點：指紋識別，Apple Pay，金屬機身，拍照神器</li>
                <li>系統：蘋果（IOS）</li>
                <li>像素：1000-1600萬品毛重：0.51kg</li>
                <li>機身內存：64GB</li>
            </ul>
            <img src="images/intro01.png" alt="">
            <img src="images/intro02.png" alt="">
            <img src="images/intro03.png" alt="">

        </div>
        <div>規格包裝</div>
        <div>售後與保障</div>
        <div>商品評價</div>
        <div>手機社區</div>
    </div>
</div>
~~~

- css

~~~css
//下邊商品詳情區域
.bottomDetail {
    .tabBtns {
        background: #ededed;
        .clearfix();
        li {
            float: left;
            border: 1px solid #ddd;
            background: #fff;
            height: 40px;
            padding: 0 11px;
            line-height: 40px;
            text-align: center;
            border-right: none;

            &:last-child {
                border-right: 1px solid #ddd;
            }

            &.active {
                background: red;

                a {
                    color: #fff;
                }
            }
        }
    }

    .tabConts {
        >div {
            padding-left: 20px;
            display: none;

            &.active {
                display: block;

                li {
                    margin: 10px 0;
                }
            }
        }
    }
}
~~~

### 三十四、封裝一個公共的選項卡功能函數並調用

由於網站中出現了兩個位置都有選項卡，功能不在單一實現，所以我們需要封裝一個公共的函數。

在這個函數中需要知道發生事件的元素以及切換內容元素作為函數的形參

~~~js
/**
 * tabBtns：發生事件的元素，大多數為li、btn等居多
 * tabCont：切換內容的元素，大多數為div
*/
function tab(tabBtns,tabCont) {
    //遍歷tabBtns
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].index = i;
        tabBtns[i].onclick = function () {
            //其他元素 移出 active
            for (var j = 0; j < tabBtns.length; j++) {
                tabBtns[j].className = '';
                tabCont[j].className = '';
            }
            //點擊的元素 添加active
            this.className = 'active';
            tabCont[this.index].className = 'active'
        }
    }
}
~~~

第一步：左側選項卡的功能需要定義一個函數，起名為 leftTab ，並調用

~~~js
//調用函數
leftTab();
//定義函數
function leftTab(){
 //獲取點擊按鈕的區域
    var tabBtns = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .leftAside .asideTop h4')
    //獲取內容切換的區域
    var tabCont = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .leftAside .asideCont > div')
    
    //調用功能函數
    tab(tabBtns,tabCont);
}
~~~

第二步：右側選項卡的功能也需要單獨定義一個函數，起名為 rightRab ，並調用

~~~js
//調用函數
rightRab();
//定義函數
function rightRab(){
 //獲取點擊按鈕的區域
    var tabBtns = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .bottomDetail .tabBtns li')
    //獲取內容切換的區域
    var tabConts = document.querySelectorAll('#wrap #content .conMain .goodsDetailWrap .rightDetail .bottomDetail .tabConts > div')
 //調用功能函數
    tab(tabBtns,tabConts);
}
~~~

### 三十五、右側導航欄的上半部分搭建

- html

~~~html
<!--右邊側邊欄開始-->
<div class="rightAside asideClose">
    <!--按鈕區域-->
    <div class="btns btnClose"></div>
    <!--側邊欄內容區域-->
    <div class="content"></div>
</div>
<!--右邊側邊欄結束-->
~~~

- css

~~~css
.rightAside {
    position: fixed;
    top: 0;
    width: 300px;
    height: 100%;
    background: #7a6e6e;
    transition: 0.5s;

    &.asideClose {
        right: -294px;
    }

    &.asideOpen {
        right: 0px;
    }

    .btns {
        width: 35px;
        height: 35px;
        background-color: #7a6e6e;
        position: absolute;
        top: 0;
        left: -29px;
        border-radius: 3px 0px 0px 3px;
        background-size: 35px 35px;

        &.btnClose {
            background-image: url("../images/list.png");
        }

        &.btnOpen {
            background-image: url("../images/cross.png");
        }
    }

    .content {
        width: 294px;
        position: absolute;
        top: 0;
        bottom: 0;
        //height: 100%;
        left: 6px;
        background: bisque;
        z-index: 50;
    }
}
~~~

### 三十六、右側導航欄的中間佈局搭建

- html

~~~html
<!--側導航-->
<ul class="navList">
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
    <li>
        <p></p>
        <i>尚品會員</i>
    </li>
</ul>
~~~

- css

~~~css
.navList {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -29px;

    li {
        width: 35px;
        height: 35px;
        position: relative;

        &:hover {
            p {
                background-color: pink;
            }

            i {
                background-color: pink;
                left: -62px;
            }
        }

        p {
            width: 35px;
            height: 35px;
            background-image: url("../images/toolbars.png");
            background-position: -87px -174px;
            background-color: #7a6e6e;
            transition: 0.5s;
        }

        i {
            width: 62px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            position: absolute;
            top: 0;
            left: 35px;
            background-color: #7a6e6e;
            transition: 0.5s;
        }
    }

}
~~~

### 三十七、右側導航欄的點擊切換狀態實現

> 思路提示：
>
> 1、根據現象得知，點擊後是兩個不同的狀態相互切換，所以我們可以利用布爾值的變量來模擬這種狀態。
>
> 2、按鈕點擊後根據狀態判斷，設置不同的樣式

創建一個函數，起名為 rightAsideBind ，並調用

~~~js
//函數調用
rightAsideBind();
//函數定義
function rightAsideBind(){
    //獲取按鈕
    var btn = document.querySelector('#wrap .rightAside .btns')

    //獲取側邊欄
    var rightAside = document.querySelector('#wrap .rightAside')

    var flag = true; // flag 標記，旗幟
    btn.onclick = function () {

        if(flag){
            //默認關閉，應該打開
            rightAside.className = 'rightAside asideOpen'
            btn.className = 'btns btnOpen'

        }else {
            //現在是打開，需要關閉
            rightAside.className = 'rightAside asideClose'
            btn.className = 'btns btnClose'
        }
     //狀態的取反
        flag = !flag;
    }
}
~~~
