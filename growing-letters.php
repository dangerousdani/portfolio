<!DOCTYPE HTML>
<html>

<head>
    <?php include './includes/head.php';?>
    <?php 
        //Path of the file stored under pathinfo 
        $myFile = pathinfo('/usr/admin/config/shapedbynews.php'); 
        ?>
</head>

<body>

    <?php include './includes/nav-top.php';?>

    <!-- Header Section -->
    <div class="container first-container">
        <div class="text-container">
            <div class="animate-box">
                <h1>The growing letters</h1>
                <h2 class="subline">Grafic design case study</p>
                <p class="p-header">
                    In this work I dealt with the question how letters would look like if they grew naturally in nature.
                </p>
            </div>
        </div>
    </div>

    <!-- Image -->
    <div class="center-container">
        <img class="image-180" src="images/growing-letters/growing-letters-posters.png"></img>
    </div>

    <!-- Text 
    <div class="container middle-container">
        <div class="text-container">
            <div class="animate-box">
                <h3>Challenge</h3>
                <p>Lorem Ipsum
                </p>
            </div>
        </div>
    </div>-->

    <!-- Image 
    <div style="margin-bottom: 10px" class="center-container">
        <img class="image-180" src="images/shapedby/change-perspective.jpg">
    </div>

    <!-- Image 
    <div style="margin-bottom: 10px" class="center-container">
        <img class="image-180" src="images/shapedby/we-are-almost-there.jpg">
    </div>

    <!-- Image 
    <div class="center-container">
        <img class="image-180" src="images/shapedby/the-whole-picture-text.jpg">
    </div>-->

    <!-- Portfolio Navigation -->
    <?php include './includes/nav-bottom.php';?>

    <?php include './includes/footer.php';?>

    <!-- jQuery -->
    <script src="js/jquery.min.js"></script>
    <!-- jQuery Easing -->
    <script src="js/jquery.easing.1.3.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Waypoints -->
    <script src="js/jquery.waypoints.min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>

</body>

</html>