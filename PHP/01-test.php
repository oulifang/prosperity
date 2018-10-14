<?php
echo "<table width=800 align='center' border=1>";
echo "<caption><h3>第一种乘法表</h3></caption>";

echo "</table>";
echo "<br />";

echo "<table width=800 align='center' border=1>";
echo "<caption><h3>第一种乘法表</h3></caption>";
for($i=9;$i>=1;$i--){
    echo "<tr>";
    //先打空格
    for($j=1;$j<=9-$i;$j++){
        echo "<td>"."&nbsp;"."</td>";
    }
    //再打算式
    for($k=1;$k<=$i;$k++){
        echo "<td>";
        echo $i."*".$k."=".($i*$k);
        echo "</td>";
    }
    echo "</tr>";

}

echo "</table>";
?>