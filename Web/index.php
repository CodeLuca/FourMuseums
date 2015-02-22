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

		li {
			list-style: none;
			float: left;
			margin: 20px;
		}
	</style>
</head>
<body>
	<div class="container">
		<ul class="codes"></ul>

		<?php
			$url = 'https://stampwatch.herokuapp.com/qr';
			$contents = (file_get_contents($url));
		?>

		<script>
			var x = <?php echo json_encode($contents); ?>;
			var json = JSON.parse(x);
			for (i = 0; i <= json.length - 1; i++) {
				$('.codes').append('<li><img src="' + json[i].QR_URL + '"/></li>')
			}
		</script>
	</div>
</body>
</html>