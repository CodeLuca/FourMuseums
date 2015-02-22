<html>
<head>
	<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	<title>Admin</title>
	<style>
		html,
		body {
			height: 100%;
		}

		* {
			margin: 0;
			padding: 0;
		}

		header {
			height: 75px;
			box-shadow: 2px 2px 2px rgba(0,0,0,.3);
		}

		header img {
			height: 75px;
			margin: 0 auto;
			display: block;
		}

		.codes {
			padding-top: 20px;
			max-width: 960px;
			margin: 0 auto;
		}

		.codes li {
			list-style: none;
			float: left;
			margin: 20px;
			padding: 20px;
			border-radius: 10px;
			box-shadow: 0px 0px 10px rgba(0,0,0,.5);
			max-width: 150px;
		}

		.codes li p {
			text-align: center;
			font-family: sans-serif;
			padding-top: 20px;
		}
	</style>
</head>
<body>
	<div class="container">
		<header>
			<img src="logo.jpg">
		</header>
		<ul class="codes"></ul>

		<?php
			$url = 'http://localhost:3000/qr';
			$contents = (file_get_contents($url));
		?>

		<script>
			var x = <?php echo json_encode($contents); ?>;
			var json = JSON.parse(x);
			for (i = 0; i <= json.length - 1; i++) {
				$('.codes').append('<li><img src="' + json[i].QR_URL + '"/><p>' + json[i].Name + '</p></li>')
			}
		</script>
	</div>
</body>
</html>