exports.mainPage = () => {
    return (
        <!DOCTYPE html>
        <html>
            <head>
                <script type="text/javascript" src="brain.js"></script>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body id="body">
                <div class="menuBar"></div>
                <div class="mainArea">
                    <div class="topBar">
                        <div class="topArea">
                            <div
                                class="topButton"
                                onclick="toggleMenuBar()"
                                style="border-radius: 10px;"
                            >
                                <img src="icons8-menu-50.png">
                            </div>
                            <div class="logo">qwork</div>
                            <div class="searchArea" style="flex: 1;">
                                <div
                                    id="filterButton"
                                    class="searchButton"
                                    data-selected="0"
                                    onClick="openFilterOptions()"
                                >
                                    <img src="icons8-slider-50.png">Filter
                                </div>
                                <input
                                    style="flex: 9;"
                                    class="textBox"
                                    type="text"
                                    placeholder="Enter a keyword or business name"
                                >
                                </input>
                                <button onclick="searchProtocol()">Search</button>
                                <div
                                    id="sortButton"
                                    class="searchButton"
                                    data-selected="0"
                                    onclick="openSortOptions()"
                                >
                                    Sort<img src="icons8-four-squares-50.png">
                                </div>
                            </div>
                        </div>
                        <div class="searchOptions"></div>
                    </div>
                    <div class="card" id="mainBody">
                        <div id="mainBodyLabel">
                            No Filter Selected
                        </div>
                        <br>
                        <div style="display:flex;">
                            <div class="scrollPane">No results found</div>
                        </div>
                    </div>
                </div>
            </body>
        </html>

    );
}
