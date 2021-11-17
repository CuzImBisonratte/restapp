screenWidth = window.innerWidth;
if (screenWidth < 768) {
    document.body.style.width = screenWidth;
} else {
    document.body.style.width = "768px";
}

restaurant_field = document.getElementById("restaurant");
table_field = document.getElementById("table");

windowLocationSub = location.search.substring(1);
restaurantRaw = windowLocationSub.split("&")[0];
restaurant = restaurantRaw.split("=")[1];
tableRaw = windowLocationSub.split("&")[1];
table = tableRaw.split("=")[1];

restaurant_field.value = restaurant;
table_field.value = table;

function open_settings() {
    document.getElementById("menu").style.display = "block";
}

function open_help() {
    document.getElementById("help").style.display = "block";
}

function close_settings() {
    document.getElementById("menu").style.display = "none";
}

function close_help() {
    document.getElementById("help").style.display = "none";
}