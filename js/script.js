window.onload = function() 
{
    /*------------------------------選項卡切換效果------------------------------*/
    // 將所有點擊的標題和要顯示隱藏的列表取出來
    var p = document.getElementById("leftMenu").getElementsByTagName("p");
    var ul = document.getElementById("leftMenu").getElementsByTagName("ul");
    // 遍歷所有要點擊的標題且給它們添加索引及綁定事件
    for (i = 0; i < p.length; i++) 
    {
        //添加索引  
        p[i].id = i;
        p[i].onclick = function() 
        {
            for (i = 0; i < p.length; i++) 
            {
                //綁定滑鼠點擊事件
                p[i].onclick = function() 
                {

                    //判斷是否點擊的內容已經顯示，如果是就隱藏
                    if (ul[this.id].style.display == "block")
                        ul[this.id].style.display = "none";
                    else 
                    {
                        // 先將所有ul隱藏
                        for (var i = 0; i < ul.length; i++) {
                            ul[i].style.display = "none";
                        };
                        //再將被點擊的顯示
                        ul[this.id].style.display = "block";
                    }
                }

            }
        }
    }
    
    /*---------------------------點擊選中選項切換效果------------------------------*/
    // 將所有列表取出來
    var li = document.getElementById("leftMenu").getElementsByTagName("li");
    // 為所有的列表添加添加索引與滑鼠點擊事件
    for (i = 0; i < li.length; i++)
    {
        //添加索引
        li[i].id = i;
        li[i].onclick = function(){
            // 先將所有selected類清除
            for (var i = 0; i < li.length; i++) {
               li[i].className = "page";
            };
            // 再為被點擊的列表添加selected類
             li[this.id].className = "page selected";
        }
    }
    
}
