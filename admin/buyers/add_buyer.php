<?php
    session_start();
    error_reporting(0);
    include('../configure/dbconnect.php');

    if(strlen($_SESSION['artid'] == 0)){
        header('location:logout.php');
    } else {
        if(isset($_POST['submit'])) {
            $fullname_POST['name'];
            $contactno = $_POST['phone'];
            $email = $_POST['email'];
            $address = $_POST['address'];
           
            $addB = mysqli_query($dbcon,"INSERT INTO buyers(name, phone, email, address)
                                               VALUES('$ame','$contactno','$email','$address' ");
                if($addArt) {
                    echo "<script>alert('buyers has been added.');</script>";
                    echo "<script>window.location.href='manage_buyer.php'</script>";
                } else {
                    echo "<script>alert('Something went wrong. Please try again.');</script>";
                }
            }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Add Artist | Gallery Management System</title>
        <!-- custom styles -->
        <link rel="stylesheet" href="../assign/css/style.css">
        <link rel="stylesheet" href="../assign/css/style-responsive.css">
    </head>
<body>
    <section id="container">
        <?php include_once('../configure/header.php');?>
        <?php include_once('../configure/sidebar.php'); ?>
        <section class="main-content">
             <section class="wrapper">
                  <div class="row">
                      <div class="col-lg-12">
                           <h3 class="page-header"><i class="fa fa-file-text-o"></i>Add Buyers</i></h3>
                           <ol class="breadcrumb">
                                 <li><i class="fa fa-home"></i><a href="dashboard">Home</li>
                                 <li class="icon_document_alt">Buyers</li>
                                 <li class="fa fa-file-text-0">Add Buyers</li>
                           </ol>
                      </div>
                  </div>
                  <div class="row">
                       <div class="col-lg-12">
                            <section class="panel">
                                <header class="panel-heading">Add Artist Details</header>
                                <div class="panel-body">
                                    <form class="form-horizontal" method="post" action="" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label for="ArtistName">Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="name" name="name" class="form-control" required="true">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2" for="phone">Mobile Number</label>
                                            <div class="col-sm-10">
                                                <input type="text" id="phone" name="phone" class="form-control" required="true">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2" for="Email">Email</label>
                                            <div class="col-sm-10" >
                                                <input type="email" id="email" name="email" class="form-control" required="true">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-s" for="Address">Address</label>
                                            <div class="col-sm-10">
                                                <textarea class="form-control" name="address" requried="true"></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                       </div>
                  </div>
             </section>
        </section>
        <!-- FOOTER -->
        <?php include_once('../define/footer.php');?>
    </section>
    <!-- custom javascript -->
    <script src="../assign/js/form-component.js"></script>
    <script src="../assign/js/scripts.js"></script>
</body>
</html>
<?php    } ?>