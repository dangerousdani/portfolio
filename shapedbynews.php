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
                <h2 class="subline">Interactive website</h2>
                <p class="p-header">
                During the pandemic and the US election 2020 it became more apparent how our surrounding can be shaped by the information we consume every day. 
                And it is very hard to identify whether the information are true or false. Together with Thao Phan we created an interactive website 
                that takes a critical look at the phenomenon of fake news. 
                    <br><br>Visit the city of fake news here!<br><a class="blacklink" href="https://www.shapedby.news">shapedby.news <br></a style="font-size: 5px">
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
                <p class="p-header"> The website collects fake news from all over the Internet and visualizes them 
                    to show how our world could look like when hoax news would be true. We want to show how a new point
                    of view can help. Instead of feeling overwhelmed in the crowd of information take a step back. See 
                    everything as a whole to detect the hoaxes before spreading them.
                </p>
            </div>
        </div>
    </div>

    <!-- Image -->
    <div class="container middle-container margin-bottom-0">
        <div class="image-container">
            <img class="wrap-image-45" src="images/shapedby/1_your-world.png">
            <img class="wrap-image-45" src="images/shapedby/2_seems-off.png">
        </div>
    </div>

    <div class="container middle-container margin-top-0 margin-bottom-0">
        <div class="image-container">
            <img class="wrap-image-45" src="images/shapedby/3_change-perspective.png">
            <img class="wrap-image-45" src="images/shapedby/4_almost-there.png">
        </div>
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