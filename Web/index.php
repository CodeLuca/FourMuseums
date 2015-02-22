<html>
<head>
<!-- Latest compiled and minified CSS -->
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<style>
	html,
	body {
		height: 100%;
	}

	* {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
		float: left;
		margin: 20px;
	}
</style>
<title>WebApp for StampWatch</title>
</head>
<body>
<div class="container">
	<ul class="codes">

	</ul>

	<?php
		$url = 'https://stampwatch.herokuapp.com/img';
		$contents = (file_get_contents($url));  
		// var_dump($contents);
	?>

	<script>
		var x = <?php echo json_encode($contents); ?>;
		var json = JSON.parse(x);
		for (i = 0; i <= json.length; i++) {
			$('.codes').append('<li><img src="' + json[i].QR_URL + '"/></li>')
		}
		// document.write(json[0]);
	</script>
</div>
</body>
</html>