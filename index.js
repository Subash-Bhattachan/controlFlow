const PI = 3.1415;

// Garden area
let radius = 5;
const total_garden_area = PI * radius * radius; // maximum capacity being 78.625 meter square

// Plant area
const single_plant_area = 0.8; 

///////////////////////////////////////part 1//////////////////////////////////////////// 

console.log("\n\Growing Pains\n\================================================")

// In the first week
starting_plant_count = 20;
let plant_count_first_week = starting_plant_count * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("First Week - when plant count is 40")


if (plant_count_first_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_first_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_first_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_first_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted a there is more room.");
}


// In the second week
let plant_count_second_week = plant_count_first_week * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("================================================")
console.log("Second Week - when plant count is 80")

// Developing conditions to make decisions regarding growth after specific number of weeks


if (plant_count_second_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_second_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_second_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_second_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted a there is more room.");
}



// In the third week
let plant_count_third_week = plant_count_second_week * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("================================================")
console.log("Third Week - when plant count is 160")

if (plant_count_third_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_third_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_third_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_third_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted a there is more room.");
}



///////////////////////////////////////part 2//////////////////////////////////////////// 

console.log("\n\Thinking Bigger \n\================================================")

let plant_count_new = 100;
let plant_count_new_after_10_weeks = (plant_count_new * (2 ** 10)); // raising 10 to the power of double
let total_garden_area_for_100_plants = single_plant_area * plant_count_new_after_10_weeks;
console.log ("Total expanded garden area is " + total_garden_area_for_100_plants + " square meter.");
let radius_expanded_garden = Math.sqrt(total_garden_area_for_100_plants / PI);
console.log("Radius of the expenaded garden is " + radius_expanded_garden + " meter.");


///////////////////////////////////////part 3//////////////////////////////////////////// 

console.log("\n\Errors in Judgement\n\================================================")

const total_plants = 100;

try {
	if (total_plants > total_garden_area) {
		console.log("There is no more space!");
	} else {

		
// In the first week
starting_plant_count = 20;
let plant_count_first_week = starting_plant_count * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("\n\Growing pains \n\================================================")
console.log("First Week - when plant count is 40")


if (plant_count_first_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_first_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_first_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_first_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted a there is more room.");
}



// In the second week
let plant_count_second_week = plant_count_first_week * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("================================================")
console.log("Second Week - when plant count is 80")

// Developing conditions to make decisions regarding growth after specific number of weeks


if (plant_count_second_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_second_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_second_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_second_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted a there is more room.");
}





// In the third week
let plant_count_third_week = plant_count_second_week * 2;

// Developing conditions to make decisions regarding growth after specific number of weeks

console.log("================================================")
console.log("Third Week - when plant count is 160")

if (plant_count_third_week > 0.8 * total_garden_area) {
    console.log("Plants need to be pruned to stop them from exceeding the garden capacity.");

}

else if ((single_plant_area * plant_count_third_week >= 0.5 * total_garden_area) && (single_plant_area * plant_count_third_week <= 0.8 * total_garden_area)) {
    console.log("Plants need to be monitored as they are growing at an acceptable rate.");
}

else if (single_plant_area * plant_count_third_week < 0.5 * total_garden_area) {
    console.log("Plants need to be planted as there is more room.");
}


	}
} catch (error) {
	console.log(error);
}

console.log("Try decreasing the number of plants. Listen to the recommendations made!");