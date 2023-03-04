let listData = document.getElementById("listData");

window.addEventListener("load", showData);


function showData() {
    let temp = JSON.parse(localStorage.getItem("searchbook"));
    for (let i in temp) {
        console.log(temp[i].searchbkTitle);
        let serachData = document.createElement("div");
        serachData.setAttribute("class", "searh-data");

        let p = document.createElement("p");
        p.innerHTML = temp[i].searchbkTitle;

        let p1 = document.createElement("p");
        p1.innerHTML = "Seached on :" + temp[i].date + " at " + temp[i].time;
        serachData.append(p);
        serachData.append(p1);
        listData.append(serachData);
    }
}

let clrSearch = document.getElementById("clrSearch");
clrSearch.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();

})