let optionSelected = "Home";
let filterSelected = null;
let sorterSelected = null;
const sorters = [
    'A-Z',
    'Z-A'
];
const filters = [
    '10 miles',
    '20 miles',
    '30 miles'
];
const menuOptions = [
    ["icons8-male-user-32.png","Profile"],
    ["icons8-home-50.png","Home"],
    ["icons8-list-60.png","Listings"],
    ["icons8-no-comments-50.png","Messages"],
    ["icons8-settings-32.png","Settings"]
];
function onMenuSelect() {
    let menuButtons = document.getElementsByClassName("menuButton");
    let x = 0;
    while (x < menuButtons.length) {
        menuButtons[x].setAttribute("data-selected","0");
        x = x + 1;
    }
    event.target.setAttribute("data-selected","1");
    optionSelected = event.target.id;
}
function selectListings() {
    let mainBody = document.getElementById("mainBody");

}
function toggleMenuBar() {
    let selected = event.target.getAttribute("data-selected");
    let menuBar = document.getElementsByClassName("menuBar")[0];
    if (selected == "1") {
        menuBar.removeChild(menuBar.children[0]);
        event.target.setAttribute("data-selected","0");
    } else {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        let y = 0;
        while (y < menuOptions.length) {
            let tr = document.createElement("tr");
            let td = '';
            if (menuOptions[y][1] == optionSelected) {
                td = '<td class="menuButton" onclick="onMenuSelect()" id=' + menuOptions[y][1] + ' data-selected="1"><img src="' + menuOptions[y][0] + '">' + menuOptions[y][1] + '</td>';
            } else {
                td = '<td class="menuButton"onclick="onMenuSelect()" id=' + menuOptions[y][1] + ' data-selected="0"><img src="' + menuOptions[y][0] + '">' + menuOptions[y][1] + '</td>';
            }
            tr.innerHTML = td;
            tbody.appendChild(tr);
            y = y + 1;
        }
        table.appendChild(tbody);
        menuBar.appendChild(table);
        event.target.setAttribute("data-selected","1");
    }
    event.target.style.backgroundColor = "#ffffff";
    if (event.target.children) {
        let x = 0;
        while (x < event.target.children.length) {
            event.target.children[x].style.backgroundColor = "#ffffff";
            x = x + 1;
        }
    }
}
function buildSearchResult(result) {
    let coverPhoto = document.createElement("img");
    coverPhoto.src = result.cover;
    let title = document.createElement("div");
    title.innerHTML = result.title;
    let searchResult = document.createElement("div");
    searchResult.className = "searchResult";
    searchResult.appendChild(coverPhoto);
    searchResult.appendChild(title);
    return searchResult;
}
function openSortOptions() {
    // Sort button
    let sortbtn = event.target;
    // Filter button
    let filterbtn = document.getElementById("filerButton");
    // Selected statuc of the Sort button
    let selected = sortbtn.getAttribute("data-selected");

    /* Close the filter options window if it is open */
    if (filterButton.getAttribute("data-selected") == "1") {
        filterButton.click();
    }
    /*************************************************/

    if (selected == "1") { // If the sort button is being unselected
        // Get the div container that holds the sort options
        let searchOptions = document.getElementsByClassName("searchOptions")[1];
        // Get its parent element
        let parent = searchOptions.parentElement;
        //Get the line break element that is between the div container and topBar
        let br = document.getElementsByClassName("searchOptions")[0];
        //Clear the div container
        searchOptions.innerHTML = '';

        /* Removet the line break element */
        parent.removeChild(searchOptions);
        parent.removeChild(br);
        parent.appendChild(searchOptions);
        /**********************************/

        // Set the selected status of the sort button to 0
        sortbtn.setAttribute("data-selected","0");
    } else { // If the sort button is being selected
        // Get the div container that will hold the sort options
        let searchOptions = document.getElementsByClassName("searchOptions")[0];
        // Get its parent element
        let parent = searchOptions.parentElement;

        /* Create the container that will go in searchOptions that will hold all the sort options */
        let options = document.createElement("div");
        options.style.display = "flex";
        options.width = "100%";
        /******************************************************************************************/

        /* Create the line break element that will go between searchOptions and topBar */
        let br = document.createElement("br");
        br.className = "searchOptions";
        /*******************************************************************************/

        let x = 0;
        // Go through the list of sorting options
        while (x < sorters.length) {

            /* Create a checkbox for each sorting option */
            let check = document.createElement("input");
            check.type = "checkbox";
            check.name = sorters[x];
            check.onclick = () => {alert('Sorter ' + x + ' selected');}
            if (sorters[x] == sorterSelected) {
                check.click();
            }
            /*********************************************/

            /* Create a label for each sorting option */
            let label = document.createElement("label");
            label.for = sorters[x];
            label.innerHTML = sorters[x];
            /******************************************/

            /* Create a div container to hold the checkbox and label */
            let box = document.createElement("div");
            box.style.flex = "1";
            box.id = "checkBoxContainer";
            box.appendChild(check);
            box.appendChild(label);
            /*********************************************************/

            // Attach the div container to the options element
            options.appendChild(box);
            x = x + 1;
        }

        // Dettach the searchOptions element so the options element can be attached to it
        parent.removeChild(searchOptions);
        // Attach the line break element that will go between searchOptions and topBar
        parent.appendChild(br);
        // Attach the options element to the searchOptions element
        searchOptions.appendChild(options);
        // Reattach the searchOptions element to its parent element
        parent.appendChild(searchOptions);
        // Set the selected status of the sort button to 1
        sortbtn.setAttribute("data-selected","1");
    }
}
function openFilterOptions() {
    // "Filter" button
    let filterbtn = event.target;
    // "Sort" button
    let sortbtn = document.getElementById("sortButton");
    // Close "Sort" window if it is open
    if (sortbtn.getAttribute("data-selected") == "1") {
        sortbtn.click();
    }
    // Get selected value of "Filter" button
    let selected = filterbtn.getAttribute("data-selected");
    // If the filter button is selected
    if (selected == "1") {

        /* Get value of filterOption */
        if (document.getElementById('filterOption').value == '') {
            filterSelected == null;
        } else {
            filterSelected = document.getElementById('filterOption').value;
        }
        /*****************************/

        // Get div container element that holds filter options
        let searchOptions = document.getElementsByClassName("searchOptions")[1];
        // Get parent of br and div elements
        let parent = searchOptions.parentElement;
        // Get line break element between filter options element and topBar
        let br = document.getElementsByClassName("searchOptions")[0];
        // Clear div container element
        searchOptions.innerHTML = '';

        /* Remove br element */
        parent.removeChild(searchOptions);
        parent.removeChild(br);
        parent.appendChild(searchOptions);
        /*********************/

        // Set filter button's "selected" attribute to 0
        filterbtn.setAttribute("data-selected","0");
    } else {
        // Get div container element that will hold the filter options
        let searchOptions = document.getElementsByClassName("searchOptions")[0];
        // Get container that will hold this div conatainer element
        let parent = searchOptions.parentElement;

        /* Create a new div container element that will hold the filter options */
        let options = document.createElement("div");
        options.style.display = "flex";
        options.width = "100%";
        /************************************************************************/

        // Create a br element that will go between searchOptions and topBar
        let br = document.createElement("br");
        br.className = "searchOptions";

        // Create select element that will be the dropdown for the filters
        let select = document.createElement("select");
        select.id = "filterOption";

        /* Create the placeholder option */
        let op1 = document.createElement("option");
        // If nothing has already been selected, this will be the option
        // the element starts with
        if (filterSelected == null) {
            op1.selected = true;
        }
        op1.value = "";
        op1.innerHTML = "Choose an option..."
        select.appendChild(op1);
        /***********************************/

        /* Add the rest of the filter options */
        let x = 0;
        while (x < filters.length) {
            let option = document.createElement("option");
            // Set the "value" attribute of each option to be the filter's index
            option.value = filters[x];
            // Set the inner HTML of the option to be the filter itself
            option.innerHTML = filters[x];

            /* If the option has already been selected, then the "select"
             * element will have this option selected when it is created
             */
            if (filters[x] == filterSelected) {
                option.selected = true;
            }
            select.appendChild(option);
            x = x + 1;
            /***********************************************************/

        }
        /***************************************/

        // Attach select to options
        options.appendChild(select);
        // Remove searchOptions so that the "options" element can be attached to it
        parent.removeChild(searchOptions);
        // Attach the "br" element
        parent.appendChild(br);
        // Attach the options element to the searchOptions element
        searchOptions.appendChild(options);
        // Reattach the searchOptions element to the parent element
        parent.appendChild(searchOptions);
        // Reset the filter buttons selected status to 1
        filterbtn.setAttribute("data-selected","1");
    }
}
function searchProtocol() {
    let newText = '';
    let mainBodyLabel = document.getElementById('mainBodyLabel');
    if (document.getElementById('filterOption')) {
        let filterOption = document.getElementById('filterOption').value;
        if (filterOption == '') {
            mainBodyLabel.innerHTML = 'No filter selected';
        } else {
            mainBodyLabel.innerHTML = 'Showing results within ' + filterOption + ' of your location';
        }
    } else {
        if (filterSelected) {
            mainBodyLabel.innerHTML = 'Showing results within ' + filterSelected + ' of your location';
        } else {
            mainBodyLabel.innerHTML = 'No filter selected';
        }
    }
}
