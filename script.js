var burger_menu_open=document.getElementById("burger_menu_open");
var burger_menu_close=document.getElementById("burger_menu_close");


document.getElementById("left_menu").style.left="-100vw";

function openMenu()
{
	document.getElementById("left_menu").style.left="0vw";
	document.getElementById("burger_menu_open").style.display="none";
	document.getElementById("burger_menu_close").style.display="block";
	document.getElementById("burger_menu_full").style.left="1vw";
}

function closeMenu()
{
	document.getElementById("left_menu").style.left="-100vw";
	document.getElementById("burger_menu_open").style.display="block";
	document.getElementById("burger_menu_close").style.display="none";
	document.getElementById("burger_menu_full").style.left="1vw";
}

burger_menu_open.onclick = openMenu;
burger_menu_close.onclick = closeMenu;