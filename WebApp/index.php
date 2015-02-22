<html>
<head>
<!-- Latest compiled and minified CSS -->
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<title>WebApp for StampWatch</title>
</head>
<body>
<div class="container">
	<?php
		 $url = 'https://stampwatch.herokuapp.com/';
		 $contents = (file_get_contents($url));  
		 // var_dump($contents);
	?>

	<script>
		var x = <?php
		 echo json_encode($contents);
		 ?>;
		var json = JSON.parse(x);
		document.write(json[0].Name);
		// document.write(json[0]);
	</script>
</div>
</body>
</html>