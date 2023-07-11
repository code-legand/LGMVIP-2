requestButton = document.getElementById("request-button");
requestButton.addEventListener('click', function() {
    mainGrid = document.getElementById("main-grid");
    mainGrid.innerHTML = `<img src="assets/loader.gif" alt="loader" class="mx-auto col-span-12 w-20 pt-64">`;
    xmlobject = new XMLHttpRequest();
    xmlobject.onreadystatechange = function() {
        if (xmlobject.readyState == 4 && xmlobject.status == 200) {
            var data = JSON.parse(xmlobject.responseText);
            data = data["data"];
            mainGrid.innerHTML = "";
            for(var i = 0; i < data.length; i++) {
                var name = data[i]["first_name"] + " " + data[i]["last_name"];
                var email = data[i]["email"];
                var avatar = data[i]["avatar"];
                var userCard = `<div class="col-span-12 md:col-span-6 lg:col-span-4 my-4 mx-4 bg-white border border-gray-200 rounded-lg shadow">
                                    <div class="flex flex-col items-center py-10">
                                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${avatar}" alt="person image" />
                                        <h5 class="mb-1 text-xl font-medium text-gray-900">${name}</h5>
                                        <span class="text-sm text-gray-500">${email}</span>
                                    </div>
                                </div>`;
                mainGrid.innerHTML += userCard;
            }
        }
    }
    xmlobject.open("GET", "https://reqres.in/api/users?page=1", true);
    xmlobject.send();
});