# PC項目參數

## 1.頭部導航布局

- 整體背景顏色 `#eaeaea`，高度 `30px`
- 主要內容寬度 `1200px`
- 所有豎線顏色 `#b3aeae`
- 右側導航欄每個元素左右間距 `10px`

## 2.頭部搜索布局

- 總寬度 `1200px`
- logo寬度 `175px*56px`
- logo外邊距 `25px 45px`
- 右側搜索框的上外邊距 `35px`
- input搜索框
  - `box-sizing: border-box`,
  - 寬高 `490px*32px`,
  - 內邊距 `padding: 0px 4px`
  - 邊框 `border: 3px solid #ea4a36;`
- 搜索按鈕
  - 寬高 `68px*32px`,
  - 背景顏色： `#ea4a36`
  - 文字顏色： `#fff`

## 3.商品導航分類布局

- 最外層下邊框 `border-bottom: 2px solid #e1251b;`

- 總寬度 `1200px`
- 全部商品分類：
  - 寬高 `210px*50px`
  - 背景顏色 `#e1251b`
  - 文字顏色 `#fff`，字號大小 `14px`，加粗
- 右側列表
  - 每個元素 `margin: 0px 22px`
  - 字號 `16px`，文字顏色 `#333`

## 4.商品內容放大鏡區域布局

- 整體區域
  - 寬度 `1200px`，上外邊距 `15px`
- 路徑導航區域
  - 外層整體內邊距 `padding: 9px 15px 9px 0;`
  - 斜線 `padding: 0 5px;`

- 主要內容區域外層
  - 外邊距 `margin: 5px 0 15px`
- 左側放大鏡外層區域
  - 整體寬度 `400px`
  - 放大鏡大圖區域
    - 寬高 `400px*400px`
    - 邊框 `1px solid #DFDFDF`
  - 放大鏡區域下縮略圖
    - 總寬度 `400px`
    - 上外邊距 `5px`
    - 左右按鈕 寬高 `10px*54px` 邊框 `1px solid #CCC` 背景顏色 `#EBEBEB`
    - 左側按鈕的右外邊距 `4px`
  - 縮略圖中間多圖區域
    - 寬高 `372px*56px`
    - 裡面圖片每一個: 
      - 寬高 `50px*50px` 
      - 邊框 `1px solid #CCC` 
      - 四周內邊距 `2px` 
      - 右外邊距 `20px`

## 5.商品內容右側選擇區域布局

- 右側最外層 寬度 `700px`
- 標題 字號 `14px` 行高 `21px` 上外邊距 `15px`
- 優惠內容 顏色 `#e12228` 上外邊距 `15px`
- 價格區域：上外邊距 `10px` 行高 `28px` 背景顏色 `#fee9ec` 內邊距 `7px`
  - 左側標題區域：右外邊距 `15px`
  - ¥字號 `16px` 價錢字號 `24px` 降價通知 `12px` 文字顏色 `#cc1122`
  - 第二行右側區域 
    - 寬度 `520px` 行高 `28px`
    - *加價購* 背景顏色 `#c81623` `padding: 3px` 文字顏色 `#fff`
    - 其他文字顏色 `#999`

- 支持區域

  - 最外層 `border-bottom: 1px solid #ededed;`；`padding-bottom: 5px;`

  - 每一行 上外邊距 `10px`；行高 `28px`
  - 左側標題區域：右外邊距 `15px`
  - 第二行右側區域 
    - 寬度 `520px`
    - 其他文字顏色 `#999`

- 選擇區域

  - 最外層 上外邊距 `10px` 行高 `28px`
  - 每一行上下外邊距 `13px`
  - 每一行標題右外邊距 `15px`
  - 每一個選擇按鈕
    - 右外邊距 `5px`
    - 顏色 `#666`
    - 行高 `24px`
    - 內邊距 `padding: 2px 14px`
    - 上左邊框顏色 `#eee` 右下邊框顏色 `#bbb`

- 加入購物車區域

  - 左側數字區域
    - 寬 `55px`，右外邊距 `15px`
    - 輸入框：寬高 `38px*37px` 邊框寬度 `1px` 邊框顏色 `#ddd` 文字顏色 `#555`
    - 加法減法框：寬高 `15px*18px` 背景顏色 `#f1f1f1` 文字顏色 `#666`
    - 加法框：定位 `right: 1px`
    - 減法框：定位 `right：1px`，`top：20px` 上邊框為0
  - 按鈕區域：
    - 左右內邊距 `25px`
    - 高度 `36px`
    - 字號大小 `16px`
    - 背景顏色 `#e1251b`

## 6.放大鏡動態添加元素樣式

- 蒙版：寬高 `200px*200px` 背景顏色 `rgba(255,255,255,.5)` 邊框 `1px solid #ddd`
- 大盒子：寬高 `400px*400px`；左 `420px`；上 `0px`；邊框 `1px solid #ddd`
- 大圖片寬高 `800*800`

## 7.商品內容詳情篩選動態添加choose效果

- mark標籤：高度 `30px`；背景顏色：`snow`；邊框 `1px solid #ddd`；內邊距 `0 20px`；右外邊距 `20px`
- 刪除按鈕：顏色 `紅色`；左外邊距 `20px`

## 8.內容詳情頁樣式

- 整體外層 寬 `1200px` 外邊距 `30px auto 0`
- 側邊欄 總寬度 `210px` 邊框 `1px solid #ccc`
  - 選項卡按鈕部分 高度 `40px`
    - 上邊框顏色 `#fff`，active上邊框顏色 `#e1251b` 寬度 `105px` 行高 `37px` 下邊框顏色 `#ccc`
  - 面板外層的四周內邊距 `10px`
  - 第一個選項卡內容 
    - 商品文字列表 寬 `50%` 下邊框 `1px dashed #ededed` 行高 `28px`
    - 圖片列表中 每一個
      - 外邊距 `5px 0 15px`
      - 下邊框 `1px solid #ededed`
      - 裡面圖片寬度 `152px`
      - 價錢文字大小 `16px` 顏色 `#c81623`
      - 購物車按鈕 上下外邊距 `5px`；邊框 ` 1px solid #8c8c8c` 文字顏色 `8c8c8c` 內邊距 `2px 14px` 行高 `18px`

## 9.選擇搭配頁

- 最外層 寬度 `980px`

- 選擇搭配區域外層 邊框 `1px solid #ddd` 下外邊距 `15px`

- 標題下邊框 `1px solid #ddd`；背景顏色 `f1f1f1 `；文字顏色 `#333`；四周內邊距 `5px 0 5px 15px`

- 主要內容區域 高度 `170px` 上內邊距 `10px`

- 主要內容最左側商品區域 寬高 `127px*165px` 圖片寬度 `87px` 價錢顏色 `c81623` 字號大小 `16px`

  加號：上 `48px` 右 `-25px` 字號 `16px`

- 中間搭配區域寬高 `668px*165px`

  - 每一個商品 寬度 `127px` 左右外邊距 `20px` 裡面圖片大小 `120px*130px`
- 搭配結果
  - 左邊框 `1px solid #ddd`
  - 寬高 `153px*165px` 左內邊距 `20px`
  - 數量元素 上下外邊距 `10px`
  - "套餐價" 加粗 下外邊距 `10px`
  - 價格標籤 顏色 `#B1191A` 字號 `16px `下外邊距 `10px`
  - 加入購物車按鈕：內邊距 `padding: 10px 25px;` 字號大小 `16px ` 文字顏色 `白色 `背景顏色 `#e1251b`

## 10.詳情選項卡切換頁

- 選項卡標題整體背景顏色 `background: #ededed;`
- 標題邊框顏色 `#ddd` 背景顏色 `#fff` 高度 `40px` 左右內邊距 `11px`
- 商品介紹Tab頁
  - 列表上下間距 `10px`

## 11.側邊欄

- 最外層：

  - 寬 `300px` 高 `100%` 背景顏色 `7a6e6e` 動畫 `0.5s`
  - 當收起是元素的定位 `top:0px` 和 `right:-294px`
  - 當展開時元素的定位 `top:0px` 和 `right:0px`
- 麵包屑

  - 寬高 `35*35` 背景顏色 `#7a6e6e` 左側圓角 `3px` 定位 `left -29px`
- 內容區域

  - 寬度 `294px` 定位 `left 6px` 背景顏色 `bisque`
- 中間功能區域
  - 外層 `left -29px` 垂直居中狀態
  - 內側每一個元素和麵包屑相似
  -  展開的元素：寬高 `62px*35px` 相對父元素 `left 35px` 動畫 `0.5s; `
