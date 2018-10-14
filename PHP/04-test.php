<?php
    if(isset($_POST['sub'])){
        $sfile=$_FILES['sfile'];
        $str=$sfile['name'];
        $arr=explode('.',$str);
        $len=count($arr)-1;
        $hou=$arr[$len];
        $as=array('txt','exe','bmp');
        $flag=true;
        for($i=0;$i<count($as);$i++){
            if($hou==$as[$i]){
                $flag=false;
            }
        }

        if($flag==false){
            echo "<script>alert('上传文件不合法')</script>";
        }else{
            $newname=time().'.'.$hou;
            $newurl='./upload/'.$newname;

            $b=move_uploaded_file($sfile['tmp_name'],$newurl);
            if($b){
                echo "success";
            }else{
                echo "error";
            }
        }
    }
?>

<meta charset="utf-8">
<form action="04-test.php" method="post" enctype="multipart/from-data">
    上传:<input type="file" name="sfile">
    <input type="submit" name="sub" value="上传">
</form>