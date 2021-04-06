<!DOCTYPE HTML>
<html>

<head>
    <?php include './includes/head.php';?>
    <?php 
        //Path of the file stored under pathinfo 
        $myFile = pathinfo('/usr/admin/config/codar.php'); 
        ?>
</head>

<body>

    <?php include './includes/nav-top.php';?>

    <!-- Header Section -->
    <div class="container first-container">
        <div class="text-container">
            <div class="animate-box">
                <div class="fh5co-heading">
                    <h1>Codar – Corona Tracing App</h1>
                    <h2 class="subline">Brand and User Interface Design for the <a style="color: grey" class="blacklink" href="https://wirvsvirus.org/"
                            target="_blank">WirVsWir Hackathon</a> in March 2020</h2> 
                    <p class="p-header">As part of the WirVsVirus Hackathon, our team of 5 people prototyped an mobile app 
                        with which it should be possible to track chains of infection in order to have 
                        the opportunity to detect and stop them early.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Header Image -->
    <div style="display: flex; justify-content: center; padding-top: 5%; padding-bottom: 5%; width: 100%; background-color: #F7F9FF">
        <video type="video/mp4" autoplay loop muted class="medium-video" src="images/codar/codar_Prototype-video.mp4" nocontrols></video>
    </div>

    <!-- Text -->
    <div class="container middle-container">
        <div class="text-container">
            <div class="animate-box">
                <p class="p-header">The design challenge was to visualize the handling and the advantages of the app as clearly as possible. 
                    At that time there was also no media coverage of a possible bluetooth app, so the functionality of the app was unknown. 
                    So I created an onboarding which informs the user about the functionality and designed the user interface which should be easy to use.

                </p>
            </div>
        </div>
    </div>

    <!-- Image -->
    <div class="center-container"><img class="image-180" src="images/codar/codar.jpg"></div>

    <!-- Image -->
    <div><img style="width: 100%; height: auto" src="images/codar/codar2.jpg"></div>

    <!--  Image -->
    <div><img style="width: 100%; height: auto" src="images/codar/codar3.jpg"></div>

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