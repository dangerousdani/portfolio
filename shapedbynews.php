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
                <h1>Shaped by news</h1>
                <p style="font-weight:200; color: #636773">Main project HTW Berlin – Moritz Schell</p>
                <p class="p-header">
                    Together with Thao Phan we created an interactive website that takes a critical look at the phenomenon of fake news. 
                    Currently the website is only working on desktop.
                    <br><br><a href="https://www.shapedby.news">shapedby.news <br></a style="font-size: 5px">
                </p>
            </div>
        </div>
    </div>

    <!-- Image -->
    <div class="center-container">
        <img class="image-180" src="images/shapedby/The-whole-pic.jpg"></img>
    </div>

    <!-- Text -->
    <div class="container middle-container">
        <div class="text-container">
            <div class="animate-box">
                <h3>Challenge</h3>
                <p>Our worldview is distorted by fake news. In our experience the big city as a methaper for this distorted environment 
                    should show what a world would look like in which fake news were true and how one can gain knowledge 
                    by changing one's perspective.
                </p>
            </div>
        </div>
    </div>

    <!-- Image -->
    <div style="margin-bottom: 10px" class="center-container">
        <img class="image-180" src="images/shapedby/change-perspective.jpg">
    </div>

    <!-- Image -->
    <div style="margin-bottom: 10px" class="center-container">
        <img class="image-180" src="images/shapedby/we-are-almost-there.jpg">
    </div>

    <!-- Image -->
    <div class="center-container">
        <img class="image-180" src="images/shapedby/the-whole-picture-text.jpg">
    </div>

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