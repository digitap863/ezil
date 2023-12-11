
			function showContent() {
			    document.getElementById('myspinner').style.display = 'none';
			    document.getElementById('bodycontent').style.display = 'block';
			}
			// Wait for the page to load
			document.addEventListener('DOMContentLoaded', function() {
			    // Simulate delay (you can remove this in actual use)
			    setTimeout(showContent,2000);
			});				
		