
const packageList = document.querySelector(".packages-list");
const packageDetails = document.querySelector(".package-right");
const packageTitle = document.querySelector(".package-title");
const packageInfo = document.querySelector(".package-content-list");
const packagePrice = document.querySelector(".package-info");


const packages = [  {id : 1, name : "Content Marketing", price : "879,000 MMK" , per : "Month", contents : ["Strategic and Tactical Content Planning and Calendar", "15 contents with graphics", "3 Advertising Copies with graphics", "3 Motion Videos", "Sale-Driven Reply System"]},
                    {id : 2, name : "Advertising & Media Buying", price : "789,000 MMK" , per : "Month",  contents : ["Winning Advertising Video", "Winning Retargeting Advertising Video or Copywriting", "2 Ads Video used for Branding"]},
                    {id : 3, name : "Campaign Planning", price : "1,350,000 MMK" , per : "Event",  contents : ["1 Social Media Campaign Ideas", "Event Planning and Proposal", "Event Moscot or Exclusive Design", "Event Tagline", "Event Content Marketing"]},
                    {id : 4, name : "Premium Video Production", price : "1,350,000 MMK" , per : "Package",  contents : ["Brand Storytelling Video", "Advertising Video"]}
                ];

window.addEventListener('DOMContentLoaded', () => {
    showPackagesList();
    showIndividualPackage(1);
})


//adding packages to list
function showPackagesList(){
    packages.forEach((item)=>{
        const li = document.createElement("li");
        li.classList.add("package-item");
        li.innerHTML = `<span class = "hidden-id">${item.id}</span>
                        <span>${item.name}</span>`;
        packageList.appendChild(li);
    })
}

//events for clicking packages
packageList.addEventListener("click", (event) =>{
    const currentItem = event.target.closest(".package-item"); //event target is a from event object
    const packageID = currentItem.querySelector(".hidden-id").textContent;
    resetPackageDetails();
    showIndividualPackage(packageID);
})

function resetPackageDetails(){
    packageTitle.innerHTML = "";
    packageInfo.innerHTML = "";
    packagePrice.innerHTML = "";
}

//showing details of packages
function showIndividualPackage(id){
    packages.forEach((item) => {
        if(item.id === parseInt(id)){
            //adding title
            packageTitle.innerHTML = `${item.name}`;

            //adding content
            item.contents.forEach((content) =>{
                const li = document.createElement("li");
                li.classList.add("package-content");
                li.innerHTML = `${content.toString()}`;
                packageInfo.appendChild(li);
            })

            //adding Price
            packagePrice.innerHTML = `${item.price} per ${item.per}`;
        }
    })
}

