/*
* @Author: Marte
* @Date:   2018-06-07 14:27:10
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-07 16:03:56
*/

'use strict';
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for(var i = 0; i < tables.length; i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j = 0; j < rows.length; j++){
            if(odd == true){
                addclass(rows[j],"odd");
                odd = false;
            } else{
                odd = true;
            }
        }
    }
}

addLoadEvent(stripeTables);