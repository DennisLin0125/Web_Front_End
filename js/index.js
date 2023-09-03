// 當所有DOM元素和相關資源都載入完畢後執行的事件函數
window.onload = function () {

    //宣告一個紀錄點擊縮略圖的下標
    var bigimgIndex = 0;

    // 路徑導航的數據綁定
    navPathDataBind();
    function navPathDataBind() {
        /**
         * 思路：
         * 1、首先獲取路徑導航的頁面元素（navPath）
         * 2、然後獲取所需的數據（data.js->goodData.path）
         * 3、由於數據是需要動態生成的，因此相應的DOM元素也應該是動態生成的，含義需要根據數據的數量來創建DOM元素
         * 4、在遍歷數據並創建DOM元素時，當處理最後一個數據時，只創建a標籤，而不創建i標籤
         */

        // 1. 獲取頁面導航的元素對象
        var navPath = document.querySelector('#wrapper #content .contentMain #navPath');

        // 2. 獲取數據
        var path = goodData.path;

        // 3. 遍歷數據
        for (var i = 0; i < path.length; i++) {
            if (i == path.length - 1) {
                // 只需創建a標籤並且不添加href屬性
                var aNode = document.createElement("a");
                aNode.innerText = path[i].title;
                navPath.appendChild(aNode);
            } else {
                // 4. 創建a標籤
                var aNode = document.createElement("a");
                aNode.href = path[i].url;
                aNode.innerText = path[i].title;

                // 5. 創建i標籤
                var iNode = document.createElement('i');
                iNode.innerText = '/';

                // 6. 讓navPath元素添加a和i
                navPath.appendChild(aNode);
                navPath.appendChild(iNode);
            }
        }
    }

    // 放大鏡的移入、移出效果
    bigClassBind();
    function bigClassBind(){
        /**
         * 思路：
         * 1、獲取小圖框元素對象，並設置移入事件（onmouseenter）
         * 2、動態創建蒙版元素、大圖框和大圖片元素
         * 3、移出時（onmouseleave）需要移除蒙版元素和大圖框
         */

        // 1. 獲取小圖框元素
        var smallPic = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic');
        // 獲取leftTop元素
        var leftTop = document.querySelector('#wrapper #content .contentMain #center #left #leftTop');
        
        // 獲取數據
        var imagessrc = goodData.imagessrc
        
        // 2. 設置移入事件
        smallPic.onmouseenter = function(){

            // 3. 創建蒙版元素
            var maskDiv = document.createElement('div');
            maskDiv.className = "mask";

            // 4. 創建大圖框元素
            var BigPic = document.createElement('div');
            BigPic.id = "bigPic";

            // 5. 創建大圖片元素
            var BigImg = document.createElement('img');
            BigImg.src = imagessrc[bigimgIndex].b;

            // 6. 大圖框添加大圖片
            BigPic.appendChild(BigImg);

            // 7. 讓小圖框添加蒙版元素
            smallPic.appendChild(maskDiv);

            // 8. 讓leftTop元素添加大圖框
            leftTop.appendChild(BigPic);

            // 設置移動事件
            smallPic.onmousemove = function(event){
                // event.clientX: 鼠標點距離瀏覽器左側X軸的值
                // getBoundingClientRect().left:小圖框元素距離瀏覽器左側可視區域left值
                // offsetWidth: 元素的占位寬度
                var left = event.clientX - smallPic.getBoundingClientRect().left - maskDiv.offsetWidth / 2;
                var top = event.clientY - smallPic.getBoundingClientRect().top - maskDiv.offsetHeight / 2;

                // 判斷邊界
                if(left < 0){
                    left = 0;
                } else if(left > smallPic.clientWidth - maskDiv.offsetWidth){
                    left = smallPic.clientWidth - maskDiv.offsetWidth;
                }

                if(top < 0){
                    top = 0;
                } else if(top > smallPic.clientHeight - maskDiv.offsetHeight){
                    top = smallPic.clientHeight - maskDiv.offsetHeight;
                }

                // 設置left和top屬性
                maskDiv.style.left = left + "px";
                maskDiv.style.top = top + "px";

                // 移動的比例關係 = 蒙版元素移動的距離 / 大圖片元素移動的距離
                // 蒙版元素移動的距離 = 小圖框寬度 – 蒙版元素的寬度
                // 大圖片元素移動的距離 = 大圖片寬度 – 大圖框元素的寬度
                var scale = (smallPic.clientWidth - maskDiv.offsetWidth) / (BigImg.offsetWidth - BigPic.clientWidth);

                BigImg.style.left = -left / scale + 'px';
                BigImg.style.top = -top / scale + 'px';
            }

            // 設置移出事件
            smallPic.onmouseleave = function(){

                // 移除小圖框的蒙版元素
                smallPic.removeChild(maskDiv);

                // 移除leftTop元素的大圖框
                leftTop.removeChild(BigPic);
            }
        }
    }

    // 動態渲染放大鏡縮略圖的數據
    thunbnaiData();
    function thunbnaiData(){
        /**
         * 思路：
         * 1、先獲取piclist元素下的ul
         * 2、再獲取data.js文件下的goodData->imagessrc
         * 3、遍歷數組，根據數組的長度來創建li元素
         * 4、讓ul遍歷追加li元素
         */

        //1.獲取piclist下的ul
        var ul = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #piclist ul');
                
        //2.獲取imagessrc數據
        var imagessrc = goodData.imagessrc;
                
        //3.遍歷數組
        for(var i = 0; i< imagessrc.length;i++){
            //4.創建li元素
            var newLi = document.createElement('li');
                    
            //5.創建img元素
            var newImg = document.createElement('img');
            newImg.src = imagessrc[i].s;

            //6.讓li追加img元素
            newLi.appendChild(newImg);

            //7.讓ul追加li元素
            ul.appendChild(newLi);
        }

    }

    // 縮略圖點擊效果
    thumbnailClick();
    function thumbnailClick() {
        /**
         * 思路：
         * 1、獲取所有的li元素，並循環設置點擊事件
         * 2、點擊縮略圖需要確定其下標位置，以找到相應的小圖路徑和大圖路徑，替換現有src的值
         */

        // 1.獲取所有的li元素
        var liNodes = document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #piclist ul li img');

        var smallPic_img = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic img');

        var imagessrc = goodData.imagessrc;

        // 小圖路徑需要默認與imagessrc的第一個元素的小圖路徑相同
        smallPic_img.src = imagessrc[0].s;

        // 2.循環點擊這些li元素
        for (var i = 0; i < liNodes.length; i++) {
            // 在點擊事件之前，為每個元素添加自定義的下標
            liNodes[i].index = i; /** 還可以通過setAttribute('index',i) */
            liNodes[i].onclick = function () {
                var idx = this.index; /** 事件函數中的this永遠指向實際發生事件的目標源對象 */
                bigimgIndex = idx;

                // 變換小圖路徑
                smallPic_img.src = imagessrc[idx].s;
            }
        }
    }

    // 點擊縮略圖左右箭頭的效果
    thumbnailLeftRightClick();
    function thumbnailLeftRightClick(){
        /**
         * 思路：
         * 1、先獲取左右兩端的箭頭按鈕
         * 2、在獲取可視的div以及ul元素和所有的li元素
         * 3、計算（發生起點、步長、總體運動的距離值）
         * 4、然後再發生點擊事件
         */

        //1、獲取箭頭元素
        var prev = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.prev');
        var next = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.next');

        
        //2、獲取可視的div以及ul元素和所有的li元素
        var ul = document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #piclist ul');
        
        var liNodes = document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #piclist ul li');

        //3、計算

        //發生起點
        var start = 0;

        //步長
        var step = (liNodes[0].offsetWidth + 20) * 2;

        //總體運動的距離值 = ul的寬度 - div框的寬度 = (圖片的總數 - div中顯示的數量) * （li的寬度 + 20）
        var endPostion = (liNodes.length - 5 ) * (liNodes[0].offsetWidth + 20);

        //4、發生事件
        prev.onclick = function(){
            start-=step;
            console.log(start);
            if(start < 0){
                start = 0;
            }

            ul.style.left = -start + "px";
        }

        next.onclick = function(){
            start+=step;
            if(start > endPostion){
                start = endPostion;
            }

            ul.style.left = -start + "px";
        }
    }

    // 商品詳細資料的動態渲染
    rightTopData();
    function rightTopData() {
        /**
         * 思路：
         * 1、查找rightTop元素
         * 2、查找data.js->goodData->goodsDetail
         * 3、建立一個字串變數，將原本的佈局結構貼上，將所對應的數據放在對應的位置上重新渲染rightTop元素
         */

        //1、查找元素
        var rightTop = document.querySelector('#wrapper #content .contentMain #center #right .rightTop');

        //2、查找數據
        var goodsDetail = goodData.goodsDetail;

        //3、建立一個字串（雙引號、單引號、模板字串）變數
        //模板字串替換數據：${變數}
        var s = `<h3>${goodsDetail.title}</h3>
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
                </div>`;

        //4、重新渲染rightTop元素
        rightTop.innerHTML = s;
    }

    // 商品參數資料的動態渲染
    rightBottomData();
    function rightBottomData() {
        /**
         * 思路：
         * 1、找rightBottom的元素對象
         * 2、查找data.js->goodData.goodsDetail.crumbData資料
         * 3、由於資料是一個陣列，需要遍歷，有一個元素則需要有一個動態的dl元素對象(dt、dd)
         */

        //1、查找元素对象
        var chooseWrap = document.querySelector('#wrapper #content .contentMain #center #right .rightBottom .chooseWrap');

        //2、查找資料
        var crumbData = goodData.goodsDetail.crumbData;
        
        //3、循環資料
        for(var i = 0; i< crumbData.length;i++){

            //4、創建dl元素對象
            var dlNode = document.createElement('dl');

            //5、創建dt元素對象
            var dtNode = document.createElement('dt');
            dtNode.innerText = crumbData[i].title;

            //6、dl追加dt
            dlNode.appendChild(dtNode);

            //7、遍歷crumbData->data元素
            for(var j = 0;j< crumbData[i].data.length;j++){
                
                //創建dd元素
                var ddNode = document.createElement('dd');
                ddNode.innerText = crumbData[i].data[j].type;
                ddNode.setAttribute('price',crumbData[i].data[j].changePrice);

                //讓dl來追加dd
                dlNode.appendChild(ddNode);
            }

            //8、讓chooseWrap追加dl
            chooseWrap.appendChild(dlNode);
        }
    }

    // 點擊商品參數後的顏色排他效果
    clickddBind();
    function clickddBind(){
        /**
         * 每一行dd顏色排他的思路：
         * 1、獲取所有的dl元素，取其中第一個dl元素下的所有dd先做測試
         *    測試完成之後在對應dl第一行下標的前面再嵌套一個for循環，目的在變換下標
         * 2、循環所有的dd元素並添加點擊事件
         * 3、確定實際發生事件的目標源對象設置其文字顏色為紅色，然後給其他所有元素的顏色都重置為基礎顏色(#666)
         * ============================================================================================
         * 
         * 
         * 
         * 點擊dd之後產生mark標籤的思路
         * 1. 首先先創建一個可以容納點擊的dd元素值得容器(陣列),確定陣列的起始長度
         * 2. 然後再將點擊的dd元素的值按照對應下標來寫入到陣列的元素內
         */

        //1、找第一個dl下的所有dd元素              
        let dlNodes = document.querySelectorAll('#wrapper #content .contentMain #center #right .rightBottom .chooseWrap dl');
        
        let arr = new Array(dlNodes.length);

        var choose = document.querySelector('#wrapper #content .contentMain #center #right .rightBottom .choose');
        
        arr.fill(0); /* [0,0,0,0] */

        for (let i = 0; i < dlNodes.length; i++){

            // 使用 let 來聲明 ddNodes，使它成為塊級作用域變量
            let ddNodes = dlNodes[i].querySelectorAll('dd');

            //2、遍歷當前所有的dd元素
            for(var j = 0;j<ddNodes.length;j++){

                ddNodes[j].onclick = function(){

                    // 清空choose元素
                    choose.innerHTML = "";

                    for(let k = 0;k<ddNodes.length;k++){
                        ddNodes[k].style.color = "#666";
                    }
                    
                    //假設點擊的是第二個元素，下標為1'
                    //ddNodes[1].style.color = "red";
                    //相同下標的dd元素的字體顏色在進行覆蓋操作，而其他未點擊的元素都是在進行重新設置顏色
                    this.style.color = "red";

                    // 點擊的訊息存入arr
                    arr[i] = this;

                    // 呼叫函數
                    changePriceBind(arr);
                    
                    // 遍歷陣列
                    arr.forEach(function(value,index){
                        // 如果不為0
                        if (value) {
                            // 創建Div標籤
                            let markDiv = document.createElement("div");
                            // 設置class屬性
                            markDiv.className = "mark";
                            // 設置值
                            markDiv.innerText = value.innerText;
                            // 創建 a 標籤
                            let aNode = document.createElement("a");
                            // 並且設置值
                            aNode.innerText = "X";
                            // 並且設置下標
                            aNode.setAttribute("index",index);
                            // 讓div追加a
                            markDiv.appendChild(aNode);
                            // 讓choose元素追加div
                            choose.appendChild(markDiv);
                        }
                    });

                    // 獲取所有a標籤,並且循環發生點擊事件
                    let aNodes = document.querySelectorAll("#wrapper #content .contentMain #center #right .rightBottom .choose .mark a");
                    
                    console.log(aNodes);

                    for (let n = 0; n < aNodes.length; n++) {
                        aNodes[n].onclick = function(){ 
                            // 獲取點擊的a標籤的index屬性值
                            let idx1 = this.getAttribute('index');

                            // 恢復陣列中對應下標元素
                            arr[idx1] = 0;

                            // 找到對應下標的那個dl行中的dd元素
                            let ddlist = dlNodes[idx1].querySelectorAll('dd');

                            for(let m = 0; m < ddlist.length;m++){
                                //其余所有dd的文字颜色为灰色
                                ddlist[m].style.color = "#666";
                            }

                            // 默認選中第一個顏色為紅色
                            ddlist[0].style.color = 'red';

                            // 刪除對應下標的mark元素
                            choose.removeChild(this.parentNode);

                            // 調用價格函數
                            changePriceBind(arr);
                        };
                    }
                }
            }
        }
    }

    // 價格變動函數聲明
    // 函式宣告用於價格變動
    /**
     * 此函式應在點擊 dd 元素和刪除 mark 標記時調用。
     */
    function changePriceBind(arr) {
        /**
         * 思路：
         * 1、獲取價格的標籤元素。
         * 2、為每個 dd 標籤設置一個自定義屬性，用於記錄價格變動。
         * 3、遍歷 arr 陣列，將 dd 元素上的新價格與默認價格（5299）相加。
         * 4、最後將計算後的結果更新到 p 標籤中。
         */
    
        // 1、原始價格標籤元素                   
        var oldPrice = document.querySelector('#wrapper #content .contentMain #center #right .rightTop .priceWrap .priceTop .price p');
        
        // 提取默認價格
        var price = goodData.goodsDetail.price;
    
        // 2、遍歷 arr 陣列
        for (var i = 0; i < arr.length; i++) {

            if (arr[i]) {
                // 強制資料類型轉換
                var changeprice = Number(arr[i].getAttribute('price'));
                // 最終價格
                price += changeprice;
            }
        }
    
        oldPrice.innerText = price;

        // 3、將變化的價格寫入到左側標籤
        var leftprice = document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .left p');

        leftprice.innerText = '$' + price;

        // 4、遍歷選擇搭配中所有的複選框元素、看是否有選中
        var ipts = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .middle li input');

        for (let j = 0; j < ipts.length; j++) {
            if (ipts[j].checked) {
                price += Number(ipts[j].value);
            }
        }

        // 5、右側套餐價重新渲染
        var newprice = document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .right i');

        newprice.innerText = '$' + price;
    }   
    
    // /選擇搭配中間區域複選框選中套餐價變動效果
    chooseprice();
    function chooseprice(){
    /**
    * 思路：
    * 1、先獲取中間區域中所有的複選框元素
    * 2、遍歷這些元素取出他們的價格，和左側的基礎價格進行累加，累加之後重新寫回套餐價標籤裡面
    */

        //1、先獲取複選框元素
        var ipts = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .middle li input');
        var leftprice = document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .left p');
        var newprice = document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .chooseBox .listWrap .right i');
        //2、遍歷這些複選框
        for(var i = 0 ; i < ipts.length;i++){
            ipts[i].onclick = function(){
                var oldprice = Number(leftprice.innerText.slice(1));
                for(var j = 0 ; j < ipts.length;j++){
                    if(ipts[j].checked){

                            //新的價格 = 左側價格 + 選中複選框附加價格
                            oldprice = oldprice + Number(ipts[j].value);

                    }
                }

                //3、重新寫回到套餐價標籤中
                newprice.innerText = '$' + oldprice;
            }
        }
    }

    //封裝一個公共的選項卡函數
    /**
     * ① 被點擊的元素   tabBtns
     * ② 被切換顯示的元素  tabConts
     */
    function Tab(tabBtns, tabConts) {
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].index = i;
            tabBtns[i].onclick = function () {
                for (let j = 0; j < tabBtns.length; j++) {
                    tabBtns[j].className = '';
                    tabConts[j].className = '';
                }
                this.className = 'active';
                tabConts[this.index].className = 'active';
            }
        }
    }

    //點擊左側選項卡
    leftTab();
    function leftTab() {
        //被點擊的元素                                        
        let h4s = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .leftAside .asideTop h4');
        //被切換顯示的元素
        let divs = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .leftAside .asideBottom>div');
        //調用函數                             
        Tab(h4s, divs);
    }

    //點擊右側選項卡
    rightTab();
    function rightTab() {
        //被點擊的元素                             
        let lis = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .bottomDetail .tabBtns li');
        //被切換顯示的元素
        let divs = document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .bottomDetail .tabContents div');
        //調用函數                            
        Tab(lis, divs);
    }

    rightAsideBind();
    function rightAsideBind(){
        /**
         * 思路：
         * 1、先找到按鈕元素，發生點擊事件
         * 2、記錄一個初始的狀態，在點擊事件的內容進行判斷，如果為關閉則展開，否則為關閉（狀態取反）
         * 3、如果為展開則設置按鈕和側邊欄對應的class效果，關閉亦如此
         */

        //1、找按鈕元素
        var btns = document.querySelector('#wrapper .rightAside .btns');

        //記錄初始狀態
        var flag = true; //關閉

        //查找側邊欄元素
        var rightAside = document.querySelector('#wrapper .rightAside');

        //2、發生點擊事件
        btns.onclick = function(){

            //判斷
            if(flag){
                //展開
                //  flag = false;

                btns.className = "btns btnsOpen";

                rightAside.className = "rightAside asideOpen";

            }else{
                //關閉
                //  flag = true;
                btns.className = "btns btnsClose"

                rightAside.className = "rightAside asideClose";
            }

            //無論前面的if和else執行的到底是誰，最終flag的狀態都是在原來基礎之上進行取反
            flag = !flag;
        }
    }

}
