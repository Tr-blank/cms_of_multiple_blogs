module.exports = {
  title: "Tiya's IT Notes",
  description: '提亞的資訊技術學習筆記',
  // 注入到當前頁面的 HTML 中的標籤 
  // head: [ 
  //   ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一個自定義的 favicon(網頁標籤的圖示) 
  // ], 
  base: '/ITblog/',
	repo: 'https://tr-blank.github.io/ITblog',
  dest: './dist',
  markdown: { 
    lineNumbers: true // 程式碼塊顯示行號 
  }, 
  themeConfig: {
    sidebarDepth: 2, // e'b將同時提取markdown中h2 和 h3 標題，顯示在側邊欄上。 
    nav:[
      { text: '切版雜記' , link: '/layout/' },
      { text: '前端碼農' , link: '/ITblog/front-end/' ,items:[ 
        {text:'Vue',link:'/front-end/vue/'},
        {text:'六角學院範例實作',link: encodeURI('/front-end/六角學院範例實作/')}]
      },
      { text: '資源收集區' , link: '/package/' },
    ],
    sidebar: { 
      '/layout/': [
        ['/layout/', '切版雜記'],
        ['/layout/RWD響應式網站的三種圖片處理方式', 'RWD響應式網站的三種圖片處理方式'],
        ['/layout/Open Graph - social meta tags', 'Open Graph - social meta tags'],
        ['/layout/垂直置中寫法', '垂直置中寫法']
        // ['/layout/SEO優化項目清單', 'SEO優化項目清單'],
        // ['/layout/SEO優化項目-搜尋引擎抓取', 'SEO優化項目-搜尋引擎抓取'],
        // ['/layout/SEO優化項目-網站內容', 'SEO優化項目-網站內容'],
        // ['/layout/SEO優化項目-使用者體驗', 'SEO優化項目-使用者體驗'],
        // {
        //   title: 'CSS3',
        //   children: [
        //     '/layout/CSS', // 以docs为根目录来查找文件 
        //     // 上面地址查找的是：docs>accumulate>JS>test.md 文件
        //     // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
        //   ]
        // },  
      ],
      '/front-end/': [
        ['/front-end/', '前端碼農'], 
        ['/front-end/Exception handling例外處理', 'Exception handling例外處理'],
        ['/front-end/react/利用Webpack建立React LiveReload開發環境', '利用Webpack建立React LiveReload開發環境'],
        {
          title: 'Vue.js',
          collapsable: true,
          children: [
            ['/front-end/vue/Vuepress靜態網站搭建紀錄', 'Vuepress靜態網站搭建紀錄'],
            ['/front-end/vue/Vuepress默認樣式修改紀錄', 'Vuepress默認樣式修改紀錄'],
            ['/front-end/vue/Vuepress增加標籤雲功能', 'Vuepress增加標籤雲功能'],
            ['/front-end/vue/在Vuepress內使用Font Awesome Icon', '在Vuepress內使用Font Awesome Icon']
          ]
        }, {
          title: '六角學院範例實作',
          collapsable: true,
          children: [
            // ['/front-end/六角學院範例實作/第一周-todolist', '第一周-todolist]'],
            ['/front-end/六角學院範例實作/第二周-filter篩選器', '第二周-filter篩選器'],
          ]
        }
      ],
      '/package/': [
        ['/package/', '資源收集區'], 
        ['/package/Markdown常用語法筆記', 'Markdown常用語法筆記'],
        ['/package/Git常用指令筆記', 'Git常用指令筆記'],
        ['/package/Git特定情境應用筆記', 'Git特定情境應用筆記'],
        // ['/package/owl carousel2輪播套件', 'owl carousel2輪播套件'],
        ['/package/前端錯誤即時監控系統', '前端錯誤即時監控系統'],
        ['/package/使用nodemon讓node自動重啟', '使用nodemon讓node自動重啟'],
        ['/package/發文通知到各社群平台 - 研究紀錄', '發文通知到各社群平台 - 研究紀錄'],
        ['/package/books/', '實用書籍文章']
      ]
    },
  },
}