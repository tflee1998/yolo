var socket = io("http://140.121.197.192:8008");

function createMenu()
{
    var menuDiv = document.getElementById("menuDiv");
    //menuDiv.innerHTML = '<img src="images/WeCanMenu.jpg" alt="WeCan威肯創意廚房Menu">';

}

socket.on("queueMessage", function (data) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(data.message);
    node.appendChild(textnode);
    document.getElementById("ready").appendChild(node);
})


function changeMenu( menu )
{
    var message = "";
    if( menu == 1 )
    {
        menuDiv.style.backgroundImage = 'url("images/威肯創意廚房menu.jpg")';
        menuDiv.style.color = "white";
        message += "<div id='menu1Table'><table><thead><tr><th colspan='2'>美式漢堡</th><th colspan='2'>主食</th><th colspan='3'>飲料    （熱） （冰）</th></tr></thead><tbody>";
        message += "<tr><td onclick='order(1,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豪邁雙牛大威堡</td><td>159</td>";
        message += "<td onclick='order(1,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式蛋包咖喱飯豬里肌排 </td><td>89</td>";
        message += "<td>美式咖啡</td><td onclick='order(1,21)' class='gotFood'  onmouseover='playclip3()' onmousedown='playclip()'>40</td><td onclick='order(1,22)' class='gotFood'  onmouseover='playclip3()' onmousedown='playclip()'>45</td></tr>";

        message += "<tr><td onclick='order(1,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豪邁雙語大威堡</td><td>149</td>";
        message += "<td onclick='order(1,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式蛋包咖喱飯厚切豬肉 </td><td>99</td>";
        message += "<td>特調咖啡</td><td onclick='order(1,23)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>45</td><td onclick='order(1,24)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>50</td></tr>";

        message += "<tr><td onclick='order(1,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>招牌培根小威堡</td><td>109</td>";
        message += "<td onclick='order(1,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式蛋包咖喱飯巴沙魚排 </td><td>99</td>";
        message += "<td>拿鐵咖啡</td><td onclick='order(1,25)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>45</td><td onclick='order(1,26)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>50</td></tr>";

        message += "<tr><td onclick='order(1,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>千島經辣雞腿堡</td><td>99</td>";
        message += "<td onclick='order(1,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式蛋包咖喱飯手打漢堡排 </td><td>109</td>";
        message += "<td>香草拿鐵</td><td onclick='order(1,27)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>60</td><td onclick='order(1,28)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td></tr>";

        message += "<tr><td onclick='order(1,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>胡麻起司豬排堡</td><td>89</td>";
        message += "<td onclick='order(1,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>奶油花椰培根義大利麵 </td><td>109</td>";
        message += "<td>榛果拿鐵</td><td onclick='order(1,29)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>60</td><td onclick='order(1,30)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td></tr>";

        message += "<tr><td onclick='order(1,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>后切豬肉起司堡</td><td>89</td>";
        message += "<td onclick='order(1,16)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>拿坡里黑毛豬肉義大利麵 </td><td>109</td>";
        message += "<td>焦糖拿鐵</td><td onclick='order(1,31)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>60</td><td onclick='order(1,32)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td></tr>";

        message += "<tr><td onclick='order(1,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>酸甜塔塔魚排堡</td><td>89</td>";
        message += "<td onclick='order(1,17)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>拿坡里德式香腸義大利麵 </td><td>129</td>";
        message += "<td>玫瑰拿鐵</td><td onclick='order(1,33)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td><td onclick='order(1,34)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>70</td></tr>";

        message += "<tr><td onclick='order(1,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蜂蜜芥末魚排堡</td><td>79</td>";
        message += "<td onclick='order(1,18)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>青醬德式香腸義大利麵 </td><td>109</td>";
        message += "<td>摩卡拿鐵</td><td onclick='order(1,35)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td><td onclick='order(1,36)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>70</td></tr>";

        message += "<tr><td onclick='order(1,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>夏威夷大火腿堡</td><td>69</td>";
        message += "<td onclick='order(1,19)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>青醬酥炸雞球義大利麵 </td><td class='gotFood'>129</td>";
        message += "<td>抹茶拿鐵</td><td onclick='order(1,37)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td><td onclick='order(1,38)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>70</td></tr>";

        message += "<tr><td onclick='order(1,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薯餅蔬食布殼堡</td><td>69</td>";
        message += "<td onclick='order(1,20)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>泰式打拋豬肉義大利麵 </td><td>129</td>";
        message += "<td>太妃糖拿鐵</td><td onclick='order(1,39)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td><td onclick='order(1,40)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>70</td></tr>";

        message += "<tr><td class='noFood'></td><td class='noFood'></td>";
        message += "<td class='noFood'></td><td class='noFood'></td>";
        message += "<td>提拉米蘇</td><td onclick='order(1,41)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>65</td><td onclick='order(1,42)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>70</td></tr>";

        message += "</tbody></table></div>";
        menuDiv.innerHTML = message;
        console.log(message);
    }

    if( menu == 2 )
    {
        menuDiv.style.backgroundImage = 'url("images/元圓圓menu.jpg")';
        menuDiv.style.color = "white";
        message += "<div id='menu2Table'><table><tbody>";
        message += "<th colspan='2'>鍋燒</th>";
        message += "<tr><td onclick='order(2,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鍋燒烏龍麵</td><td>55</td></tr>";
        message += "<tr><td onclick='order(2,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鍋燒冬粉</td><td>55</td></tr>";
        message += "<tr><td onclick='order(2,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鍋燒粥</td><td>55</td></tr>";
        message += "<tr><td onclick='order(2,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鍋燒意麵</td><td>55</td></tr>";
        message += "<tr><td onclick='order(2,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鍋燒麵疙瘩</td><td>55</td></tr>";
        
        message += "<th colspan='2'>叉燒</th>";
        message += "<tr><td onclick='order(2,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒鍋燒烏龍麵</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒鍋燒冬粉</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒鍋燒粥</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒鍋燒意麵</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒鍋燒麵疙瘩</td><td>65</td></tr>";

        message += "<th colspan='2'>蛤蜊</th>";
        message += "<tr><td onclick='order(2,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛤蜊鍋燒烏龍麵</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛤蜊鍋燒冬粉</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛤蜊鍋燒粥</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛤蜊鍋燒意麵</td><td>65</td></tr>";
        message += "<tr><td onclick='order(2,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛤蜊鍋燒麵疙瘩</td><td>65</td></tr>";

        message += "</tbody></table></div>";
        menuDiv.innerHTML = message;
    }

    if( menu == 3 )
    {
        menuDiv.style.backgroundImage = 'url("images/山多利美食館menu.jpg")';
        menuDiv.style.color = "black";
        message += "<div id='menu3Table'><table cellpadding='8px'><tbody>";
        message += "<tr><td onclick='order(3,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>香酥排骨</td><td>70</td>";
        message += "<td onclick='order(3,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>五香焢肉</td><td>80</td>";
        message += "<td onclick='order(3,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蜜汁雞腿</td><td>80</td></tr>";
        message += "<tr><td onclick='order(3,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式豬排</td><td>70</td>";
        message += "<td onclick='order(3,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>紅燒牛腱</td><td>90</td>";
        message += "<td onclick='order(3,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>沙茶肉片</td><td>70</td></tr>";
        message += "<tr><td onclick='order(3,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>香酥雞柳</td><td>70</td>";
        message += "<td onclick='order(3,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>花雕醉雞</td><td>80</td>";
        message += "<td onclick='order(3,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>日式魚排</td><td>70</td></tr>";
        message += "<tr><td onclick='order(3,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>炸蝦卷</td><td>70</td>";
        message += "<td onclick='order(3,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>炸大雞腿</td><td>80</td>";
        message += "<td onclick='order(3,16)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>黑胡椒豬排</td><td>70</td></tr>";
        message += "<tr><td onclick='order(3,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蜜汁燒肉</td><td>70</td>";
        message += "<td onclick='order(3,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薄鹽鯖魚</td><td>75</td>";
        message += "<td onclick='order(3,17)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蔥油雞腿</td><td>80</td></tr>";
        message += "<tr><td onclick='order(3,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>清肉</td><td>70</td>";
        message += "<td onclick='order(3,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蜜汁雞排</td><td>70</td><td></td></tr>";

        message += "</tbody></table></div>";
        menuDiv.innerHTML = message;
    }

    if( menu == 4 )
    {
        menuDiv.style.backgroundImage = 'url("images/胖晏子menu.jpg")';
        menuDiv.style.color = "black";
        message += "<div id='menu4Table'><table id='menu4Table1' cellpadding='4px'><tbody>";
        message += "<th colspan='2'>佰元系列</th>";
        message += "<tr><td onclick='order(4,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味豬肉鍋</td><td>100</td></tr>";
        message += "<tr><td onclick='order(4,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味牛肉鍋</td><td>100</td></tr>";
        message += "<tr><td onclick='order(4,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味羊肉鍋</td><td>100</td></tr>";
        message += "<tr><td onclick='order(4,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味海鮮鍋</td><td>100</td></tr>";
        message += "<tr><td onclick='order(4,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味臭臭鍋</td><td>100</td></tr>";
        message += "<tr><td onclick='order(4,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>養生素食過</td><td>100</td></tr>";
        message += "</table><table id='menu4Table2' cellpadding='4px'>"
        message += "<th colspan='4'>佰貳系列</th>";
        message += "<tr><td onclick='order(4,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>韓式泡菜鍋</td><td>150</td>";
        message += "<td onclick='order(4,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>藥膳羊肉鍋</td><td>150</td></tr>";
        message += "<tr><td onclick='order(4,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>川味麻辣鍋</td><td>150</td>";
        message += "<td onclick='order(4,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>韓式部隊鍋</td><td>150</td></tr>";
        message += "<tr><td onclick='order(4,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>陽光番茄鍋</td><td>150</td>";
        message += "<td onclick='order(4,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>香濃牛奶鍋</td><td>150</td></tr>";
        message += "<tr><td onclick='order(4,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>想弄咖喱鍋</td><td>150</td>";
        message += "<td onclick='order(4,16)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蒜味龍骨鍋</td><td>150</td></tr>";
        message += "<tr><td onclick='order(4,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>南洋叻沙果</td><td>150</td>";
        message += "<td onclick='order(4,17)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>天香蒙古鍋</td><td>150</td></tr>";
        message += "<tr><td onclick='order(4,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>大腸臭臭鍋</td><td>150</td></tr>";
        message += "</table><table id='menu4Table3' cellpadding='4px'>"
        message += "<th colspan='2'>拌飯系列</th>";
        message += "<tr><td onclick='order(4,18)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>韓式燒肉飯</td><td>90</td></tr>";
        message += "<tr><td onclick='order(4,19)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>椒香胡麻肉</td><td>90</td></tr>";
        message += "<tr><td onclick='order(4,20)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>春川辣炒雞</td><td>90</td></tr>";

        message += "</tbody></table></div>";
        menuDiv.innerHTML = message;
    }



    if( menu == 5 )
    {
        menuDiv.style.backgroundImage = "url('images/樂多堡複合式餐飲menu.jpg')";
        menuDiv.style.color = "white";
        message += "<div id='menu5Table'><table><thead><tr><th colspan='2'>漢堡</th><th colspan='2'>吐司</th>";
        message += "<th colspan='2'>蛋餅</th><th colspan='2'>飲料</th><th colspan='2'>單品</th>";
        //message += "<th colspan='2'>超值套餐</th>";
        message += "</tr></thead><tbody>";

        message += "<tr><td onclick='order(5,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>漢堡蛋(豬肉)</td><td>30</td>";
        message += "<td onclick='order(5,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>火腿蛋吐司</td><td>30</td>";
        message += "<td onclick='order(5,23)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味蛋餅</td><td>20</td>";
        message += "<td onclick='order(5,35)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>紅茶</td><td>15</td>";
        //message += "<td onclick='order(5,12)' class='gotFood'>蘿蔔糕（二片）</td><td>30</td>";
        message += "<td onclick='order(5,43)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蘑菇麵+蛋</td><td>40</td></tr>";

        message += "<tr><td onclick='order(5,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>火腿蛋堡</td><td>30</td>";
        message += "<td onclick='order(5,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>培根蛋吐司</td><td>35</td>";
        message += "<td onclick='order(5,24)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>火腿蛋餅</td><td>30</td>";
        message += "<td onclick='order(5,36)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>奶茶</td><td>20</td>";
        //message += "<td onclick='order(5,14)' class='gotFood'>麥克雞塊（五塊）</td><td>30</td>";
        message += "<td onclick='order(5,44)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>黑胡椒麵+蛋</td><td>40</td></tr>";

        message += "<tr><td onclick='order(5,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>培根蛋堡</td><td>35</td>";
        message += "<td onclick='order(5,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>生菜蛋吐司</td><td>30</td>";
        message += "<td onclick='order(5,25)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>培根蛋餅</td><td>35</td>";
        message += "<td onclick='order(5,37)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豆漿</td><td>20</td>";
        //message += "<td onclick='order(5,15)' class='gotFood'>薯餅（五個）</td><td>30</td>";
        message += "<td onclick='order(5,45)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>義大利麵+蛋</td><td>40</td></tr>";

        message += "<tr><td onclick='order(5,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>香雞蛋堡</td><td>35</td>";
        message += "<td onclick='order(5,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>肉鬆蛋吐司</td><td>30</td>";
        message += "<td onclick='order(5,26)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>肉鬆蛋餅</td><td>30</td>";
        message += "<td onclick='order(5,38)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薏仁醬</td><td>20</td>";
        //message += "<td onclick='order(5,12)' class='gotFood'>熱狗蛋（五條）</td><td>30</td>";
        message += "<td onclick='order(5,46)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>卡啦雞腿堡+奶茶</td><td>70</td></tr>";

        message += "<tr><td onclick='order(5,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>里雞蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,16)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>玉米蛋吐司</td><td>30</td>";
        message += "<td onclick='order(5,27)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>玉米蛋餅</td><td>30</td>";
        message += "<td onclick='order(5,39)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>柳橙汁</td><td>20</td>";
        //message += "<td onclick='order(5,14)' class='gotFood'>卡拉雞腿塊</td><td>35</td>";
        message += "<td onclick='order(5,47)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>香雞蛋堡+奶茶</td><td>50</td></tr>";

        message += "<tr><td onclick='order(5,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>熏雞蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,17)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>起司蛋吐司</td><td>30</td>";
        message += "<td onclick='order(5,28)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>起士蛋餅</td><td>30</td>";
        message += "<td onclick='order(5,40)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>阿華田</td><td>25</td>";
        //message += "<td></td><td></td>";
        message += "<td onclick='order(5,48)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>火腿+蘿蔔糕一片+蛋+奶茶</td><td>50</td></tr>";

        message += "<tr><td onclick='order(5,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豬排蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,18)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鮪魚蛋吐司</td><td>35</td>";
        message += "<td onclick='order(5,29)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>高麗菜蛋餅</td><td>30</td>";
        message += "<td onclick='order(5,41)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>咖啡</td><td>25</td>";
        //message += "<td></td><td></td>";
        message += "<td onclick='order(5,49)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味蛋餅+蘿蔔糕一片+奶茶</td><td>50</td></tr>";

        message += "<tr><td onclick='order(5,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>魚排蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,19)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>里雞蛋吐司</td><td>35</td>";
        message += "<td onclick='order(5,30)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鮪魚蛋餅</td><td>35</td>";
        message += "<td onclick='order(5,42)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鮮奶紅茶</td><td>25</td>";
        //message += "<td></td><td></td>";
        message += "<td onclick='order(5,50)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>巧克力吐司+蘿蔔糕+蛋+奶茶</td><td>55</td></tr>";

        message += "<tr><td onclick='order(5,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鮪魚蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,20)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薯餅蛋吐司</td><td>35</td>";
        message += "<td onclick='order(5,31)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豬排蛋餅</td><td>35</td>";
        message += "<td></td><td></td>";
        //message += "<td></td><td></td>";
        message += "<td onclick='order(5,51)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>貼板麵+蛋+香雞片+奶茶</td><td>60</td></tr>";

        message += "<tr><td onclick='order(5,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薯餅蛋堡</td><td>40</td>";
        message += "<td onclick='order(5,21)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>豬排蛋吐司</td><td>35</td>";
        message += "<td onclick='order(5,32)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>熏雞蛋餅</td><td>35</td>";
        message += "<td></td><td></td>";
        //message += "<td></td><td></td>";
        message += "<td></td><td></td></tr>";

        message += "<tr><td onclick='order(5,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>卡辣雞腿堡</td><td>55</td>";
        message += "<td onclick='order(5,22)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>烤總會</td><td>55</td>";
        message += "<td onclick='order(5,33)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>薯餅蛋餅</td><td>35</td>";
        message += "<td></td><td></td>";
        //message += "<td></td><td></td>";
        message += "<td></td><td></td></tr>";

        message += "<tr><td></td><td></td>";
        message += "<td></td><td></td>";
        message += "<td onclick='order(5,34)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>大熱狗蛋餅</td><td>40</td>";
        message += "<td></td><td></td>";
        //message += "<td></td><td></td>";
        message += "<td></td><td></td></tr>";

        message += "</tbody></table></div>";
       
        console.log(message);
        menuDiv.innerHTML = message;
    }
    if( menu == 6 )
    {
        menuDiv.style.backgroundImage = 'url("images/興和知品燒臘menu.jpg")';
        menuDiv.style.color = "black";
        message += "<div id='menu6Table'><table id='menu6Table1' cellpadding='2px'><tbody>";
        message += "<th colspan='2'>麵餐類</th>";
        message += "<tr><td onclick='order(4,1)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>泰式拌麵</td><td>60</td></tr>";
        message += "<tr><td onclick='order(4,2)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>雞丁炒麵/冬粉</td><td>65</td></tr>";
        message += "<tr><td onclick='order(4,3)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蛋炒麵/飯</td><td>60</td></tr>";
        message += "<tr><td onclick='order(4,4)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒炒麵/飯</td><td>70</td></tr>";
        message += "<tr><td onclick='order(4,5)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>蝦仁炒麵/飯</td><td>80</td></tr>";
        message += "<tr><td onclick='order(4,6)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>牛肉炒麵/飯</td><td>80</td></tr>";
        message += "<tr><td onclick='order(4,7)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒湯麵/冬粉</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,8)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>港式烤鴨湯麵/冬粉</td><td>75</td></tr>";
        message += "<th colspan='2'>其他</th>";
        message += "<tr><td onclick='order(4,9)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>牛肉燴飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,10)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>酥炸燒肉飯</td><td>80</td></tr>";
        message += "<tr><td onclick='order(4,11)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>夏威夷炒飯</td><td>90</td></tr>";
        message += "<tr><td onclick='order(4,12)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>櫻花蝦炒飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,13)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>雞丁炒飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,14)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>紅燒獅子頭飯</td><td>49</td></tr>";
        message += "<tr><td onclick='order(4,15)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>麵子獅子頭</td><td>49</td></tr>";

        message += "</table><table id='menu6Table2' cellpadding='2px'>"
        message += "<th colspan='2'>飯餐類</th>";
        message += "<tr><td onclick='order(4,16)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>剁椒排骨飯</td><td>80</td></tr>";
        message += "<tr><td onclick='order(4,17)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>排骨蓋飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,18)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>桶子油雞飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,19)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>海南雞飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,20)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒飯</td><td>75</td></tr>";
        message += "<tr><td onclick='order(4,21)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>三寶飯</td><td>80</td></tr>";
        message += "<tr><td onclick='order(4,22)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>燒鴨飯</td><td>85</td></tr>";
        message += "<tr><td onclick='order(4,23)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>鴨腿飯</td><td>95</td></tr>";
        message += "<tr><td onclick='order(4,24)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>原味去骨雞腿飯</td><td>95</td></tr>";
        message += "<tr><td onclick='order(4,25)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>椒麻去骨雞腿飯</td><td>95</td></tr>";
        message += "<tr><td onclick='order(4,26)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>泰式去骨雞腿飯</td><td>95</td></tr>";
        message += "<tr><td onclick='order(4,27)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>招牌四寶飯</td><td>100</td></tr>";
        message += "</table><table id='menu6Table3' cellpadding='2px'>"
        message += "<th colspan='2'>單點菜單</th>";
        message += "<tr><td onclick='order(4,28)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>綜合湯</td><td>25</td></tr>";
        message += "<tr><td onclick='order(4,29)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>時菜</td><td>20</td></tr>";
        message += "<tr><td onclick='order(4,30)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>油雞</td><td>35</td></tr>";
        message += "<tr><td onclick='order(4,31)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>叉燒肉</td><td>35</td></tr>";
        message += "<tr><td onclick='order(4,32)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>海南雞</td><td>40</td></tr>";
        message += "<tr><td onclick='order(4,33)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>燒肉</td><td>40</td></tr>";
        message += "<tr><td onclick='order(4,34)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>烤雞</td><td>50</td></tr>";
        message += "<tr><td onclick='order(4,35)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>燒鴨</td><td>50</td></tr>";
        message += "<tr><td onclick='order(4,36)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>炸排骨（一片）</td><td>50</td></tr>";
        message += "<tr><td onclick='order(4,37)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>炸雞腿（一支）</td><td>70</td></tr>";
        message += "<tr><td onclick='order(4,38)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>燒鴨後胸（1/4）</td><td>280</td></tr>";
        message += "<tr><td onclick='order(4,39)' class='gotFood' onmouseover='playclip3()' onmousedown='playclip()'>燒鴨前胸（1/4）</td><td>250</td></tr>";

        message += "</tbody></table></div>";
        menuDiv.innerHTML = message;
    }
    if ( menu == 7 )
    {
        menuDiv.style.backgroundImage='url("images/丼滋丼滋menu.jpg")';
        menuDiv.style.color="white";
        message="<br><br><br><br><br><ul><li onclick='order(7,1)'class='gotFood2' onmouseover='playclip4()' onmousedown='playclip5()'>日式烤鯖魚飯--->$90</li>";
        message+="<li onclick='order(7,2)' class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>烤鷄腿排飯--->$90</li>";
        message+="<li onclick='order(7,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸豬排飯--->$75</li>";
        message+="<li onclick='order(7,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸鷄排飯--->$70</li>";
        message+="<li onclick='order(7,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>烤大鷄腿飯--->$95</li>";
        message+="<li>歐風/南洋/日式/泰式綠咖喱</li>";
        message+="<ul><li onclick='order(7,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>牛肉--->$100</li>";
        message+="<li onclick='order(7,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>鷄肉--->$90</li>";
        message+="<li onclick='order(7,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬肉--->$80</li>";
        message+="<li onclick='order(7,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸豬排--->$100</li>";
        message+="<li onclick='order(7,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸雞排--->$100</li>";
        message+="<li onclick='order(7,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸魚排--->$100</li></ul>";
        message+="<li onclick='order(7,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>照燒鷄腿丼--->$90</li>";
        message+="<li onclick='order(7,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>黑胡椒豬丼--->$80</li>";
        message+="<li onclick='order(7,14)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬丼--->$70</li>";
        message+="<li onclick='order(7,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>牛丼--->$75</li></ul>";
        menuDiv.innerHTML=message;

    }
    if( menu == 8 )
    {
        
        menuDiv.style.backgroundImage='url("images/porridgemenu.jpg")';
        menuDiv.style.color="black";
        message="<br><br><br><br><br><br><ul><li onclick='order(8,1)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()' >魚霸王---$90</li><li onclick='order(8,2)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>霸王粥---$85</li><li onclick='order(8,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>海鮮及第粥---$85</li><li onclick='order(8,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>廣東皮蛋粥---$80</li><li onclick='order(8,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>艇仔粥---$75</li>";
        message+="<li onclick='order(8,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>廣東粥---$70</li><li onclick='order(8,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>滑蛋牛肉粥---$75</li><li onclick='order(8,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>皮蛋瘦肉粥---$70</li><li onclick='order(8,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>香菇鷄肉粥---$70</li><li onclick='order(8,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬潤粥---$70</li><li onclick='order(8,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>玉米瘦肉粥---$70</li><li onclick='order(8,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>瘦肉粥---$65</li>";
        message+="<li onclick='order(8,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>魚片粥---$50</li><li onclick='order(8,14)' class='gotFood2' onmouseover='playclip4()' onmousedown='playclip5()'>蝦仁粥---$70</li><li onclick='order(8,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>纖菜粥---$80</li><ul>"
        
        menuDiv.innerHTML=message;
        
    }
    if (menu==9)
    {
        menuDiv.style.backgroundImage='url("images/三顧茅廬menu.jpg")';
        menuDiv.style.color="white";
        message="<br><br><br><br><ul><li onclick='order(9,1)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣鴨血面--->$65</li>";
        message+="<li onclick='order(9,2)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣豆腐面--->$65</li>";
        message+="<li onclick='order(9,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣鴨血豆腐面--->$70</li>";
        message+="<li onclick='order(9,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣豬肉面--->$80</li>";
        message+="<li onclick='order(9,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣牛肉面--->$80</li>";
        message+="<li onclick='order(9,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣鮮魚面--->$80</li>";
        message+="<li onclick='order(9,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火豬肉面--->$75</li>";
        message+="<li onclick='order(9,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火牛肉麵--->$75</li>";
        message+="<li onclick='order(9,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火鮮魚面--->$75</li>";
        message+="<li onclick='order(9,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火豬肉套餐--->$85</li>";
        message+="<li onclick='order(9,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火牛肉套餐--->$85</li>";
        message+="<li onclick='order(9,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>老火鮮魚套餐--->$85</li>";
        message+="<li onclick='order(9,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣豆腐面套餐--->$75</li>";
        message+="<li onclick='order(9,14)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣鴨血豆腐套餐--->$90</li>";
        message+="<li onclick='order(9,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣豬肉面套餐--->$90</li>";
        message+="<li onclick='order(9,16)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣牛肉面套餐--->$90</li>";
        message+="<li onclick='order(9,17)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麻辣鮮魚面套餐--->$90</li>";
        menuDiv.innerHTML=message;
    }

    if(menu==10)
    {
        menuDiv.style.backgroundImage='url("images/尚一品早餐店menu.jpg")';
        menuDiv.style.color="black";
        message="<br><br><br><br><br><table><tbody><tr><th>套餐餐點</th></tr><tr><td onclick='order(10,1)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>香鷄蛋堡套餐--->$55</td><td onclick='order(10,2)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>裏肌蛋堡套餐--->$60</td><td onclick='order(10,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>雙層牛肉堡套餐--->$65</td></tr>";
        message+="<tr><td onclick='order(10,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>卡拉鷄腿堡套餐--->$65</td><td onclick='order(10,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>火腿蛋吐司套餐--->$45</td><td onclick='order(10,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>培根蛋吐司套餐--->$50</td></tr>";
        message+="<tr><td onclick='order(10,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>燒肉蛋吐司套餐--->$55</td><td onclick='order(10,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>總匯吐司套餐--->$60</td><td onclick='order(10,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炒泡麵套餐--->$70</td></tr>";
        message+="<tr><td onclick='order(10,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>鐵板面套餐--->$65</td><td onclick='order(10,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豪華板面套餐--->$85</td><td onclick='order(10,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>美式套餐--->$65</td></tr>";
        message+="<tr><td onclick='order(10,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>中式套餐--->$70</td><td onclick='order(10,14)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>日式套餐--->$75</td><td onclick='order(10,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>蘿蔔糕套餐--->$45</td></tr>";
        message+="<tr><td onclick='order(10,16)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>九層塔抓餅套餐--->$50</td><td onclick='order(10,17)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>起司抓餅套餐--->$50</td><td onclick='order(10,18)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>火腿抓餅套餐--->$55</td></tr>";
        message+="<tr><td onclick='order(10,19)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>薯餅抓餅套餐--->$55</td><td onclick='order(10,20)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>鮪魚抓餅套餐--->$60</td><td onclick='order(10,21)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>熏鷄抓餅套餐--->$60</td></tr>";
        message+="<tr><td onclick='order(10,22)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>無骨鷄排抓餅套餐--->$65</td><td onclick='order(10,23)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>厚牛抓餅套餐--->$65</td></tr>";
        message+="<tr><th>飲料--->$20</th><tr>"
        message+="<tr><td onclick='order(10,24)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>麥香紅茶</td><td onclick='order(10,25)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>茉香綠茶</td></tr>";
        message+="<tr><td onclick='order(10,26)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>古早味冬瓜茶</td><td onclick='order(10,27)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>極品奶茶</td></tr>";
        message+="<tr><td onclick='order(10,28)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>清香奶綠</td><td onclick='order(10,29)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豆漿</td></tr>";
        message+="<tr><td onclick='order(10,30)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>柳橙汁</td><td onclick='order(10,31)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>檸檬汁</td></tr>";
        menuDiv.innerHTML=message;
    }
    if(menu==11)
    {
      menuDiv.style.backgroundImage='url("images/同樂豆花menu.jpg")';
      menuDiv.style.color="white"; 
      message="<br><br><ul><li onclick='order(11,1)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>純豆花--->$30</li>";
      message+="<li onclick='order(11,2)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>布丁豆花--->$35</li>";
      message+="<li onclick='order(11,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   三色豆花--->$35</li>";
      message+="<li onclick='order(11,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   蒟蒻豆花--->$35</li>";
      message+="<li onclick='order(11,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   香濃豆漿--->$20</li>";
      message+="<li onclick='order(11,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   珍珠豆漿--->$30</li>";
      message+="<li onclick='order(11,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   花生雪花冰--->$55</li>";
      message+="<li onclick='order(11,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   布丁雪花冰--->$55</li>";
      message+="<li onclick='order(11,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   仙草1號(紅豆+薏仁+珍珠)--->$35</li>";
      message+="<li onclick='order(11,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   仙草2號(綠豆+薏仁+珍珠)--->$35</li>";
      message+="<li onclick='order(11,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   芋圓1號(紅豆+薏仁+珍珠)--->$35</li>";
      message+="<li onclick='order(11,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   芋圓2號(綠豆+薏仁+珍珠)--->$35</li>";
      message+="<li onclick='order(11,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   珍珠紅茶--->$30</li>";
      message+="<li onclick='order(11,14)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   珍珠奶茶--->$35</li>";
      message+="<li onclick='order(11,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   百香紅茶--->$30</li>";
      message+="<li onclick='order(11,16)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   百香綠茶--->$30</li>";
      message+="<li onclick='order(11,17)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>   仙草凍奶茶--->$35</li>";
      menuDiv.innerHTML=message;

    }
    if(menu==12)
    {
        menuDiv.style.backgroundImage='url("images/koreamenu.jpg")';
        menuDiv.style.color="white"; 
      message="<br><ul class='menukorea'><li onclick='order(12,1)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>招牌板燒 麵 / 飯--->$60</li>";
      message+="<li onclick='order(12,2)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬肉板燒 麵 / 飯--->$85</li>";
      message+="<li onclick='order(12,3)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>雞排板燒 麵 / 飯--->$90</li>";
      message+="<li onclick='order(12,4)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬排板燒 麵 / 飯--->$95</li>";
      message+="<li onclick='order(12,5)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>羊肉板燒 麵 / 飯--->$95</li>";
      message+="<li onclick='order(12,6)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>牛肉板燒 麵 / 飯--->$95</li>";
      message+="<li onclick='order(12,7)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>炸蝦板燒 麵 / 飯--->$95</li>";
      message+="<li onclick='order(12,8)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>雞腿板燒 麵 / 飯--->$105</li>";
      message+="<li onclick='order(12,9)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>鱈魚板燒 麵 / 飯--->$105</li>";
      message+="<li onclick='order(12,10)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>豬肉湯麵--->$85</li>";
      message+="<li onclick='order(12,11)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>牛肉湯麵--->$90</li>";
      message+="<li onclick='order(12,12)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>印尼炒泡麵--->$85</li>";
      message+="<li onclick='order(12,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>泡菜辛拉麵--->$85</li>";
      message+="<li onclick='order(12,13)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>海鮮鍋--->$95</li>";
      message+="<li onclick='order(12,14)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>泡菜鍋--->$95</li>";
      message+="<li onclick='order(12,15)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>泡菜石鍋拌飯--->$95</li>";
      message+="<li onclick='order(12,16)'class='gotFood2'onmouseover='playclip4()' onmousedown='playclip5()'>醬燒石鍋拌飯--->$95</li>";
        menuDiv.innerHTML=message;


    }



}
function order( menu, food )
{
    var txt = confirm("確定點餐嗎？");
    var text;
    if(txt == true)
    {
        var node = document.createElement("LI");
        var textnode;
        //console.log("order");
        if( menu == 1 )
        {
            //console.log("menu1");
            switch(food)
            {
                case 1:
                    
                    text = "豪邁雙牛大威堡, 159";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "豪邁雙語大威堡, 149";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "招牌培根小威堡, 109";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "千島經辣雞腿堡, 99";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "胡麻起司豬排堡, 89";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "后切豬肉起司堡, 89";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "酸甜塔塔魚排堡, 89";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "蜂蜜芥末魚排堡, 79";
                    
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "夏威夷大火腿堡, 69";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "薯餅蔬食布殼堡, 69";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "日式蛋包咖喱飯豬里肌排, 89";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "日式蛋包咖喱飯厚切豬肉, 99";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "日式蛋包咖喱飯巴沙魚排, 99";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "日式蛋包咖喱飯手打漢堡排, 109";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "奶油花椰培根義大利麵, 109";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "拿坡里黑毛豬肉義大利麵, 109";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "拿坡里德式香腸義大利麵, 129";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 18:
                    text = "青醬德式香腸義大利麵, 109";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 19:
                    text = "青醬酥炸雞球義大利麵 , 129";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 20:
                    text = "泰式打拋豬肉義大利麵, 129";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 21:
                    text = "美式咖啡(熱), 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 22:
                    text = "美式咖啡(冰), 45";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 23:
                    text = "特調咖啡(熱), 45";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 24:
                    text = "特調咖啡(冰), 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 25:
                    text = "拿鐵咖啡(熱), 45";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 26:
                    text = "拿鐵咖啡(冰), 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 27:
                    text = "香草拿鐵(熱), 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 28:
                    text = "香草拿鐵(冰), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 29:
                    text = "榛果拿鐵(熱), 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 30:
                    text = "榛果拿鐵(冰), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 31:
                    text = "焦糖拿鐵(熱), 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 32:
                    text = "焦糖拿鐵(冰), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 33:
                    text = "玫瑰拿鐵(熱), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 34:
                    text = "玫瑰拿鐵(冰), 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 35:
                    text = "摩卡拿鐵(熱), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 36:
                    text = "摩卡拿鐵(冰), 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 37:
                    text = "抹茶拿鐵(熱), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 38:
                    text = "抹茶拿鐵(冰), 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 39:
                    text = "太妃糖拿鐵(熱), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 40:
                    text = "太妃糖拿鐵(冰), 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 41:
                    text = "提拉米蘇(熱), 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 42:
                    text = "提拉米蘇(冰), 70";
                    socket.emit("customerMessage", { message : text });
                    break;

            }
                    textnode = document.createTextNode(text);
                    node.appendChild(textnode);
                    document.getElementById("1").appendChild(node);
        }
        if( menu == 2)
        {
            switch(food)
            {
                case 1:
                    text = "鍋燒烏龍麵, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "鍋燒冬粉, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "鍋燒粥, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "鍋燒意麵, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "鍋燒麵疙瘩, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "叉燒鍋燒烏龍麵, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "叉燒鍋燒冬粉, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "叉燒鍋燒粥, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "叉燒鍋燒意麵, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "叉燒鍋燒麵疙瘩, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "蛤蜊鍋燒烏龍麵, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "蛤蜊鍋燒冬粉, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "蛤蜊鍋燒粥, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "蛤蜊鍋燒意麵, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "蛤蜊鍋燒麵疙瘩, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
            }
            textnode = document.createTextNode(text);
                    node.appendChild(textnode);
                    document.getElementById("1").appendChild(node);
        }
        if( menu == 3 )
        {
            switch(food)
            {
                case 1:
                    text = "香酥排骨, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "日式豬排, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "香酥雞柳, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "炸蝦卷, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "蜜汁燒肉, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "清肉, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "五香焢肉, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "紅燒牛腱, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "花雕醉雞, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "炸大雞腿, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "薄鹽鯖魚, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "蜜汁雞排, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "蜜汁雞腿, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "沙茶肉片, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "日式魚排, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "黑胡椒豬排, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "蔥油雞腿, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 4 )
        {
            switch(food)
            {
                case 1:
                    text = "原味豬肉鍋, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "原味牛肉鍋, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "原味羊肉鍋, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "原味海鮮鍋, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "原味臭臭鍋, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "養生素食過, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "韓式泡菜鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "川味麻辣鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "陽光番茄鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "想弄咖喱鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "南洋叻沙果, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "大腸臭臭鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "藥膳羊肉鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "韓式部隊鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "香濃牛奶鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "蒜味龍骨鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "天香蒙古鍋, 150";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 18:
                    text = "韓式燒肉飯, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 19:
                    text = "椒香胡麻肉 , 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 20:
                    text = "春川辣炒雞 , 90";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 5 )
        {
            switch(food)
            {
                case 1:
                    text = "漢堡蛋(豬肉), 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "火腿蛋堡, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "培根蛋堡, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "香雞蛋堡, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "里雞蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "熏雞蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "豬排蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "魚排蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "鮪魚蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "薯餅蛋堡, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "卡辣雞腿堡, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "火腿蛋吐司, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "培根蛋吐司, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "生菜蛋吐司, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "肉鬆蛋吐司, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "玉米蛋吐司, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "起司蛋吐司, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 18:
                    text = "鮪魚蛋吐司, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 19:
                    text = "里雞蛋吐司, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 20:
                    text = "薯餅蛋吐司, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 21:
                    text = "豬排蛋吐司, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 22:
                    text = "烤總會, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 23:
                    text = "原味蛋餅, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 24:
                    text = "火腿蛋餅, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 25:
                    text = "培根蛋餅, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 26:
                    text = "肉鬆蛋餅, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 27:
                    text = "玉米蛋餅, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 28:
                    text = "起士蛋餅, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 29:
                    text = "高麗菜蛋餅, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 30:
                    text = "鮪魚蛋餅, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 31:
                    text = "豬排蛋餅, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 32:
                    text = "熏雞蛋餅, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 33:
                    text = "薯餅蛋餅, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 34:
                    text = "大熱狗蛋餅, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 35:
                    text = "紅茶, 15";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 36:
                    text = "奶茶, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 37:
                    text = "豆漿, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 38:
                    text = "薏仁醬, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 39:
                    text = "柳橙汁, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 40:
                    text = "阿華田, 25";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 41:
                    text = "咖啡, 25";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 42:
                    text = "鮮奶紅茶, 25";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 43:
                    text = "蘑菇麵+蛋, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 44:
                    text = "黑胡椒麵+蛋, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 45:
                    text = "義大利麵+蛋, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 46:
                    text = "卡啦雞腿堡+奶茶, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 47:
                    text = "香雞蛋堡+奶茶, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 48:
                    text = "火腿+蘿蔔糕一片+蛋+奶茶, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 49:
                    text = "原味蛋餅+蘿蔔糕一片+奶茶, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 50:
                    text = "巧克力吐司+蘿蔔糕+蛋+奶茶, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 51:
                    text = "貼板麵+蛋+香雞片+奶茶, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 6 )
        {
            switch(food)
            {
                case 1:
                    text = "泰式拌麵, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "雞丁炒麵/冬粉, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "蛋炒麵/飯, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "叉燒炒麵/飯, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "蝦仁炒麵/飯, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "牛肉炒麵/飯, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "叉燒湯麵/冬粉, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "港式烤鴨湯麵/冬粉, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "牛肉燴飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "酥炸燒肉飯, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "夏威夷炒飯, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "櫻花蝦炒飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "雞丁炒飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "紅燒獅子頭飯, 49";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "麵子獅子頭, 49";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "剁椒排骨飯, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "排骨蓋飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 18:
                    text = "桶子油雞飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 19:
                    text = "海南雞飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 20:
                    text = "叉燒飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 21:
                    text = "三寶飯, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 22:
                    text = "燒鴨飯, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 23:
                    text = "鴨腿飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 24:
                    text = "原味去骨雞腿飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 25:
                    text = "椒麻去骨雞腿飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 26:
                    text = "泰式去骨雞腿飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 27:
                    text = "招牌四寶飯, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 28:
                    text = "綜合湯, 25";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 29:
                    text = "時菜, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 30:
                    text = "油雞, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 31:
                    text = "叉燒肉, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 32:
                    text = "海南雞, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 33:
                    text = "燒肉, 40";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 34:
                    text = "烤雞, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 35:
                    text = "燒鴨, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 36:
                    text = "炸排骨（一片）, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 37:
                    text = "炸雞腿（一支）, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 38:
                    text = "燒鴨後胸（1/4）, 280";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 39:
                    text = "燒鴨前胸（1/4）, 250";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 7 )
        {
            switch(food)
            {
                case 1:
                    text = "日式烤鯖魚飯, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "烤鷄腿排飯, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "炸豬排飯, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "炸鷄排飯, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "烤大鷄腿飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "牛肉, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "鷄肉, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "豬肉, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "炸豬排, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "炸雞排, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "炸魚排, 100";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "照燒鷄腿丼, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "黑胡椒豬丼, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "豬丼, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "牛丼, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 8 )
        {
            switch(food)
            {
                case 1:
                    text = "魚霸王, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "霸王粥, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "海鮮及第粥, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "廣東皮蛋粥, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "艇仔粥, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "廣東粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "滑蛋牛肉粥, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "皮蛋瘦肉粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "香菇鷄肉粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "豬潤粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "玉米瘦肉粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "瘦肉粥, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "魚片粥, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "蝦仁粥, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "纖菜粥, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
 
        if( menu == 9)
        {
            switch(food)
            {
                case 1:
                    text = "麻辣鴨血面, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "麻辣豆腐面, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "麻辣鴨血豆腐面, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "麻辣豬肉面, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "麻辣牛肉面, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "麻辣鮮魚面, 80";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "老火豬肉面, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "老火牛肉麵, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "老火鮮魚面, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "老火豬肉套餐, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "老火牛肉套餐, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "老火鮮魚套餐, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "麻辣豆腐面套餐, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "麻辣鴨血豆腐套餐, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "麻辣豬肉面套餐, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "麻辣牛肉面套餐, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "麻辣鮮魚面套餐, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 10 )
        {
            switch(food)
            {
                case 1:
                    text = "香鷄蛋堡套餐, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "裏肌蛋堡套餐, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "雙層牛肉堡套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "卡拉鷄腿堡套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "火腿蛋吐司套餐, 45";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "培根蛋吐司套餐, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "燒肉蛋吐司套餐, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "總匯吐司套餐, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "炒泡麵套餐, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "鐵板面套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "豪華板面套餐, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "美式套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "中式套餐, 70";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "日式套餐, 75";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "蘿蔔糕套餐, 45";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "九層塔抓餅套餐, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "起司抓餅套餐, 50";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 18:
                    text = "火腿抓餅套餐, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 19:
                    text = "薯餅抓餅套餐, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 20:
                    text = "鮪魚抓餅套餐, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 21:
                    text = "熏鷄抓餅套餐, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 22:
                    text = "無骨鷄排抓餅套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 23:
                    text = "厚牛抓餅套餐, 65";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 24:
                    text = "麥香紅茶, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 25:
                    text = "茉香綠茶, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 26:
                    text = "古早味冬瓜茶, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 27:
                    text = "極品奶茶, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 28:
                    text = "清香奶綠, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 29:
                    text = "豆漿, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 30:
                    text = "柳橙汁, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 31:
                    text = "檸檬汁, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 11)
        {
            switch(food)
            {
                case 1:
                    text = "純豆花, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "布丁豆花, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "三色豆花, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "蒟蒻豆花, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "香濃豆漿, 20";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "珍珠豆漿, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "花生雪花冰, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "布丁雪花冰, 55";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "仙草1號(紅豆+薏仁+珍珠), 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "仙草2號(綠豆+薏仁+珍珠), 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "芋圓1號(紅豆+薏仁+珍珠), 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "芋圓2號(綠豆+薏仁+珍珠), 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "珍珠紅茶, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "珍珠奶茶, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "百香紅茶, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "百香綠茶, 30";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 17:
                    text = "仙草凍奶茶, 35";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
        if( menu == 12)
        {
            switch(food)
            {
                case 1:
                    text = "招牌板燒 麵 / 飯, 60";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 2:
                    text = "豬肉板燒 麵 / 飯, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 3:
                    text = "雞排板燒 麵 / 飯, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 4:
                    text = "豬排板燒 麵 / 飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 5:
                    text = "羊肉板燒 麵 / 飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 6:
                    text = "牛肉板燒 麵 / 飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 7:
                    text = "炸蝦板燒 麵 / 飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 8:
                    text = "雞腿板燒 麵 / 飯, 105";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 9:
                    text = "鱈魚板燒 麵 / 飯, 105";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 10:
                    text = "豬肉湯麵, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 11:
                    text = "牛肉湯麵, 90";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 12:
                    text = "印尼炒泡麵, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 13:
                    text = "泡菜辛拉麵, 85";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 14:
                    text = "海鮮鍋, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 15:
                    text = "泡菜鍋, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                case 16:
                    text = "泡菜石鍋拌飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
                 case 17:
                    text = "醬燒石鍋拌飯, 95";
                    socket.emit("customerMessage", { message : text });
                    break;
            }textnode = document.createTextNode(text);
            node.appendChild(textnode);
            document.getElementById("1").appendChild(node);
        }
    }
    
}
function changeRestaurant( restaurant )
{
    var src1 = ["威肯創意廚房","元圓圓","山多利美食","胖晏子","樂多堡複合式餐飲","興和知品"]
    var src2 = ["丼滋丼滋","朕記粥品","三顧茅廬","尚一品早餐","同樂豆花","新韓館"];
    if( restaurant == 1 )
    {
        for( let i = 1; i <= 6; i++ )
        {
            changepic("shop"+i,src1[i-1],i);
        }
    }
    else
    {
        for(let i=1;i<=6;i++)
        {
            changepic("shop"+i,src2[i-1],6+i);
        }
    }
}
function changepic(shop,src,restaurant)
{
    //console.log("src","images/"+src+".jpg");
    document.getElementById(shop).setAttribute("src","images/"+src+".jpg");
    document.getElementById(shop).setAttribute("alt",src);
    document.getElementById(shop).setAttribute("onclick","changeMenu("+restaurant+")");
}
function playclip()
{
    var audio = new Audio();
    audio.src = "sound/bing.wav";
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // 这个时候可以安全的暂停
        video.pause();
        })
        .catch(error => {

        });
    }
}
function playclip2()
{
    var audio = new Audio();
    audio.src = "sound/border.wav";
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // 这个时候可以安全的暂停
        video.pause();
        })
        .catch(error => {

        });
    }
}
function playclip3()
{
    var audio = new Audio();
    audio.src = "sound/enter.wav";
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // 这个时候可以安全的暂停
        video.pause();
        })
        .catch(error => {

        });
    }
}
function playclip4()
{
    var audio = new Audio();
    audio.src = "sound/select.wav";
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // 这个时候可以安全的暂停
        video.pause();
        })
        .catch(error => {

        });
    }
}
function playclip5()
{
    var audio = new Audio();
    audio.src = "sound/popup+runtitle.wav";
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        // 这个时候可以安全的暂停
        video.pause();
        })
        .catch(error => {

        });
    }
}
var audio1 = new Audio();
audio1.src = "sound/bing.wav";
var audio2 = new Audio();
audio2.src = "sound/border.wav";
var audio3 = new Audio();
audio3.src = "sound/enter.wav";
var audio4 = new Audio();
audio4.src = "sound/select.wav";
var audio5 = new Audio();
audio5.src = "sound/popup+runtitle.wav";
window.addEventListener("load", createMenu, false);