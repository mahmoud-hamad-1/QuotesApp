function randomText () {
    var userNames=["Oscar Wilde", " Frank Zappa","Mae West"]
    var text=[ "“Be yourself; everyone else is already taken.”","“So many books, so little time.”" ,"“You only live once, but if you do it right, once is enough.”"]
    
    
     var num1 =Math.floor(Math.random()*userNames.length )
   
    
    
    document.getElementById("userNames").innerHTML= userNames[num1]
    document.getElementById("text").innerHTML= text[num1]
}





