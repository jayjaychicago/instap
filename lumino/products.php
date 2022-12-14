<!DOCTYPE html>
<html>
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6R68SV1E7N"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6R68SV1E7N');
</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Instabid - Widgets</title>
<?php
session_start();
//ini_set('display_errors',1);
//error_reporting(E_ALL);

        include "instabid.php";
        $email = $_SESSION["email"];
 //       if ($email == "") { header( 'Location: /register.php' ) ; }
?>


<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/datepicker3.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="/manage/assets/instabid.js?version=<?php echo rand(1,1000000); ?>"></script>
<script type="text/javascript" src="/manage/assets/instabid_realtime.js?version=<?php echo rand(1,1000000); ?>"></script>
<script type="text/javascript" src="/manage/assets/instabid-ui.js?version=<?php echo rand(1,1000000); ?>"></script>

<!--[if lt IE 9]>
<script src="js/html5shiv.js"></script>
<script src="js/respond.min.js"></script>
<![endif]-->

<script>
jQuery(document).ready(function ($) {
	$("#liProducts").addClass("active");
	productsToTable("<?php echo $_GET["exchange"] ;?>", $("#productList"), 'class="table table-hover gradienttable" data-sort-name="Product Name" data-sort-order="desc"');
$("#newProductButton").click(function(){
		alert('test');
                var newProductI = newProduct("<?php echo $_GET["exchange"] ;?>",$("#newProductName").val(), function(msg) {
                        console.log(msg);
                        jmsg = JSON.parse(msg);
                        if (jmsg["product"]) {
				location.reload();
                        }
                        else {
                                alert(jmsg["msg"]);
                        }
                });
        });
});
</script>
</head>

<body>
	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"><span>Instabid</span>Admin</a>
				<ul class="user-menu">
					<li class="dropdown pull-right">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span> <?php echo $_SESSION["email"]; ?> <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="#"><span class="glyphicon glyphicon-user"></span> Profile</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-cog"></span> Settings</a></li>
							<li><a href="/logoff_instabid.php"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div><!-- /.container-fluid -->
	</nav>

<?php include "sidebar.php" ;?>
		
	<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">			
		<div class="row">
			<ol class="breadcrumb">
				<li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
				<li class="active">My products</li>
			</ol>
		</div>
		
		<div class="row">
			<div class="col-lg-12">
				<h1 class="page-header">My products </h1>
			</div>
		</div>
		<!--
		<div class="row">
			<div class="col-xs-12 col-md-6 col-lg-3">
				<div class="panel panel-blue panel-widget ">
					<div class="row no-padding">
						<div class="col-sm-3 col-lg-5 widget-left">
							<em class="glyphicon glyphicon-shopping-cart glyphicon-l"></em>
						</div>
						<div class="col-sm-9 col-lg-7 widget-right">
							<div class="large">0</div>
							<div class="text-muted">Orders</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-md-6 col-lg-3">
				<div class="panel panel-orange panel-widget">
					<div class="row no-padding">
						<div class="col-sm-3 col-lg-5 widget-left">
							<em class="glyphicon glyphicon-transfer glyphicon-l"></em>
						</div>
						<div class="col-sm-9 col-lg-7 widget-right">
							<div class="large">0</div>
							<div class="text-muted">Fills</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-md-6 col-lg-3">
				<div class="panel panel-teal panel-widget">
					<div class="row no-padding">
						<div class="col-sm-3 col-lg-5 widget-left">
							<em class="glyphicon glyphicon-tag glyphicon-l"></em>
						</div>
						<div class="col-sm-9 col-lg-7 widget-right">
							<div class="large">1</div>
							<div class="text-muted">Products</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-md-6 col-lg-3">
				<div class="panel panel-red panel-widget">
					<div class="row no-padding">
						<div class="col-sm-3 col-lg-5 widget-left">
							<em class="glyphicon glyphicon-home glyphicon-l"></em>
						</div>
						<div class="col-sm-9 col-lg-7 widget-right">
							<div class="large">1</div>
							<div class="text-muted">Exchange</div>
						</div>
					</div>
				</div>
			</div>
		</div>-->
		
		<div class="row">
			<div class="col-lg-12">
				<div class="panel panel-default">
					<div class="panel-heading">My products</div>
					<div class="panel-body">
		<div id="productList"></div>
                <form class="form-inline">
                        <div class="form-group">
                        <label class="sr-only" for="newProductName">Product name</label>
                        <input class="form-control" id="newProductName" placeholder="Enter Product Name">
                        </div>
                        <button type="submit" onclick="return false;" id="newProductButton" class="btn btn-default">Create Product</button>
                </form>
						<!--
						<div class="canvas-wrapper">
							<canvas class="main-chart" id="line-chart" height="200" width="600"></canvas>
						</div>
						-->
					</div>
				</div>
			</div>
		</div><!--/.row-->
	<!--	
		<div class="row">
			<div class="col-xs-6 col-md-3">
				<div class="panel panel-default">
					<div class="panel-body easypiechart-panel">
						<h4>New Orders</h4>
						<div class="easypiechart" id="easypiechart-blue" data-percent="92" ><span class="percent">92%</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-6 col-md-3">
				<div class="panel panel-default">
					<div class="panel-body easypiechart-panel">
						<h4>Comments</h4>
						<div class="easypiechart" id="easypiechart-orange" data-percent="65" ><span class="percent">65%</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-6 col-md-3">
				<div class="panel panel-default">
					<div class="panel-body easypiechart-panel">
						<h4>New Users</h4>
						<div class="easypiechart" id="easypiechart-teal" data-percent="56" ><span class="percent">56%</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-6 col-md-3">
				<div class="panel panel-default">
					<div class="panel-body easypiechart-panel">
						<h4>Visitors</h4>
						<div class="easypiechart" id="easypiechart-red" data-percent="27" ><span class="percent">27%</span>
						</div>
					</div>
				</div>
			</div>
		</div> -->

		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading" id="accordion"><span class="glyphicon glyphicon-home"></span> Exchange</div>
					<div class="panel-body">
<p>All your products fall under this exchange. Here is its private key to allow you to connect. Do not disclose it to anyone!</p>

                <table class="table table-condensed">
                <tr><th>Exchange Name</th><th>Private key</th></tr>
                <tr><td>
                        <?php echo $_SESSION["exchangeName"]; ?>
                        <button type="button" class="btn btn-default btn-xs">
                                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                    </td>
                    <td>
                        <?php echo $_SESSION["privateKey"]; ?>
                    </td>
                </tr>
                </table>
					</div>
				</div>

	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/chart.min.js"></script>
	<script src="js/chart-data.js"></script>
	<script src="js/easypiechart.js"></script>
	<script src="js/easypiechart-data.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script>
		$('#calendar').datepicker({
		});

		!function ($) {
		    $(document).on("click","ul.nav li.parent > a > span.icon", function(){          
		        $(this).find('em:first').toggleClass("glyphicon-minus");      
		    }); 
		    $(".sidebar span.icon").find('em:first').addClass("glyphicon-plus");
		}(window.jQuery);

		$(window).on('resize', function () {
		  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
		})
		$(window).on('resize', function () {
		  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
		})
	</script>	
</body>

</html>
