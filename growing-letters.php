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
    <div class="center-container" style="margin: 0 0 300px 0">
        <img class="image-180" src="images/growing-letters/growing-letters-posters.jpg"></img>
    </div>
    <div style="margin-top:0px; padding-bottom:300px; width: 100%; display: flex; justify-content: center" class="flex-video-wrapper">
        <div style="width: 60%; display: flex; justify-content: center">
        <video class="wrapper-video" type="video/mp4" autoplay loop muted src="images/growing-letters/video-HEY.mp4" nocontrols></video>
        </div>
    </div>
    <div style="margin-top:0px" class="flex-video-wrapper">
        <video class="wrapper-video" type="video/mp4" autoplay loop muted src="images/growing-letters/video-H.mp4" nocontrols></video>
    </div>
    <div style="margin: 0px" class="flex-video-wrapper">
        <video class="wrapper-video" style="margin: 0" type="video/mp4" autoplay loop muted src="images/growing-letters/video-E.mp4" nocontrols></video>
        <video class="wrapper-video" style="margin: 0" type="video/mp4" autoplay loop muted src="images/growing-letters/video-Y.mp4" nocontrols></video>
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