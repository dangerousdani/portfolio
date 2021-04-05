<!DOCTYPE HTML>
<html>

<head>
    <?php include './includes/head.php';?>
    <?php $myFile = pathinfo('/usr/admin/config/oneshape.php');?>
</head>

<body>

    <?php include './includes/nav-top.php';?>

    <div class="container first-container">
        <div class="text-container">
            <div class="animate-box">
                <h1>One Shape</h1>
                <h2 class="subline">Grafic design case study</a></h2>
                <p class="p-header">In this experiment I applied one shape in many different ways. 
                    The result is various motion patterns and a selection of letters.
                </p>
            </div>
        </div>
    </div>

    <!-- Video -->
    <div class="flex-video-wrapper">
        <video class="wrapper-video" type="video/mp4" autoplay loop muted src="images/oneshape/motion-collection.mp4" nocontrols></video>
        <video class="wrapper-video" type="video/mp4" autoplay loop muted src="images/oneshape/motion-collection.mp4" nocontrols></video>
    </div>

    <!-- Text -->
    <div class="container middle-container">
        <div class="text-container">
            <div class="animate-box">
                <div>
                    <p class="p-header">How can I create different artefacts out of one shape, which are very different but still seem to belong together? 
                       I began to duplicate, rotate and move this shape in place and time. I tried many color combinations and stopped when my Illustrator drawing area was full.
                       Hope you enjoy my final version.
                </div>
            </div>
        </div>
    </div>

    <!-- Video -->
    <div class="rotation-video-wrapper">
        <video class="rotation-video" type="video/mp4" autoplay loop muted src="images/oneshape/motion-pattern.mp4" nocontrols></video>
    </div>

    <!-- Image -->
    <div style="display: flex; flex-wrap: wrap; margin-top: 200px">
        <img class="wrap-image-50" src="images/oneshape/typo.svg">
        <img class="wrap-image-50" src="images/oneshape/typo2.svg">
    </div>

        <div style="display: flex; flex-wrap: wrap; margin-top: 200px">
            <img class="wrap-image-25" src="images/oneshape/typo-E.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-H.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-Z.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-G.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-A.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-W.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-R.svg">
            <img class="wrap-image-25" src="images/oneshape/typo-N.svg">
        </div>

        <!-- Portfolio Navigation -->
        <?php include './includes/nav-bottom.php';?>

    </div>

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