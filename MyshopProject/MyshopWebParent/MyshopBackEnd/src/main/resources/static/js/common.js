$(document).ready(function() {
	$("#logoutLink").on("click", function(e) {
		e.preventDefault();
		document.logoutForm.submit();
	});
	
	customizeDropDownMenu();
});

// ฟังชั้นกดชื้อแล้วไป account เพื่อแก้ไข
function customizeDropDownMenu() {
	$(".navbar .dropdown").hover(
		function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(500).slideDown();
		},
		function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(450).slideUp();
		}
	);
	
	$(".dropdown > a").click(function() {
		location.href = this.href;
	});
}