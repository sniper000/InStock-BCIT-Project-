let params = (new URL(document.location)).searchParams,
search = params.get("search"),
section = document.getElementsByTagName("section"),
search_result_info = inventory[search],
error_message = document.createElement("h3");
error_message.textContent = "Invalid Search homiechild"

number = 1

if (search in inventory) {
    while (number < 5) {

    search_result = "result_" + number

    let result_container = document.createElement("div");

    let image_link = "search_results/images/" + search + "/" + search_result_info["result_" + number]["image_link"];

    let item_image = document.createElement("img");
    item_image.setAttribute("src", image_link);

    let item_name = document.createElement("h2");
    item_name.setAttribute("class", "item_name");
    item_name.textContent = search_result_info[search_result]["name"]

    let item_description = document.createElement("p");
    item_description.textContent = search_result_info[search_result]["description"];

    result_container.appendChild(item_image)
    result_container.appendChild(item_name)
    result_container.appendChild(item_description)
    section[0].appendChild(result_container)

    number += 1
    }
}
else {
    section[0].appendChild(error_message)
};




