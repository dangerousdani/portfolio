<?php
//Make Array of portoflio pages
$array = array("shapedbynews.php", "city-brand.php", "codar.php", "oneshape.php");

//Get filename
basename(__FILE__, '.php'); 

//Give me array value of basename
$search = $myFile['basename'];
array_search($search,$array,true);

"prev:";
$prev = (array_search($search,$array)+sizeof($array)-1)%sizeof($array);

"next:";
$next = (array_search($search,$array)+1)%sizeof($array);
?>

<div class="container">   
	<div class="bottom-nav">
		<a href="<?php echo $array[$prev]; ?>" class="btn btn-primary btn-outline" style="padding: 0">
            <svg class="svgc" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 60 24" width="24">
                <polygon points="56.9,11.4 5.6,11.4 12.9,4.8 12.1,3.8 3.1,12 12.1,20.2 12.9,19.2 5.6,12.6 56.9,12.6 "/>
            </svg>
        </a>
		<a href="index.php" class="btn btn-primary">View All</a>
		<a href="<?php echo $array[$next]; ?>" class="btn btn-primary" style="padding: 0">
            <svg class="svgc" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 60 24" width="100">
                <polygon points="48.7,3.8 47.9,4.8 55.2,11.4 3.9,11.4 3.9,12.6 55.2,12.6 47.9,19.2 48.7,20.2 57.7,12 "/>
            </svg>
        </a>
    </div>
</div>