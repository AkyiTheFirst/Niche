const benefitContainer = document.querySelector(".benefits-card-container");
const memberName = document.querySelector(".team-name");
const memberTitle = document.querySelector(".team-title");
const memberInfo = document.querySelector(".team-info");
const memberImg = document.querySelector(".team-img");
const membersContainer = document.querySelector(".team-members-container");

const benefits = [{id : 1, title : "Market Reach", items : ["Expend you customer base", "New business opportunities"]},
                    {id : 2, title : "Product Improvement", items : ["Feedback from us and our customers will improve your service's features & functionality"]},
                    {id : 3, title : "Revenue Growth", items : ["More clients", "Increased sales of your service "]},
                    {id : 4, title : "Brand Awareness", items : ["Can enhance your brand visibility and credibility "]},
                    {id : 5, title : "Innovation", items : ["New features tailored to the needs of marketing professionals", "Foster innovation by brainstorming"]},
                    {id : 6, title : "Strengthen your profile", items : ["Collaborating with other groups will strengthen your company in the market"]},
                    {id : 7, title : "Expended network", items : ["Enable you to expend your business network and connections"]},
                    {id : 8, title : "Visible impacts", items : ["Make prospective customers realize the impacts of your service"]},
                ];
const team = [{id : 1, name : "Akar Paing", title : "Founder of NICHE", pic : "./resources/Akar Paing.png", info : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?"},
                {id : 2, name : "Wiya Phyo", pic : "./resources/Wiya Phyo.png", title : "Co-Founder of NICHE", info : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?"},
                {id : 3, name : "Khin Pyae Sone", pic : "./resources/Woman.png", title : "Account Manager", info : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?"},
                {id : 4, name : "Lu Min Aung", pic : "./resources/Woman.png", title : "Content Head", info : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?"},
                {id : 5, name : "M Jaseng", pic : "./resources/Woman.png", title : "Bussiness Development Officer", info : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem?"},
];               

//load stuffs                
window.addEventListener('DOMContentLoaded', () => {
    addBenefitCards();
    displayMember(team, 1);
});

//showing different members
membersContainer.addEventListener("click", (event)=>{
    const currentMember = event.target.closest(".team-member");
    const memberID = parseInt(currentMember.querySelector(".hidden-id").textContent);
    console.log(memberID);
    removeCurrentTeamMember()
    displayMember(team, memberID);
})

function displayMember(memberList, id){
    memberList.forEach((member) => {
        if(member.id === id){
            memberName.innerHTML = `${member.name}`;
            memberTitle.innerHTML = `${member.title}`;
            memberInfo.innerHTML = `${member.info}`;
            memberImg.setAttribute('src', `${member.pic}`);
        }
    })
}
function removeCurrentTeamMember(){
    memberName.innerHTML = "";
    memberTitle.innerHTML = "";
    memberInfo.innerHTML = "";
    memberImg.setAttribute('src', "");
}

//partnership benefits cards
function addBenefitCards(){
    benefits.forEach((cardContent) => {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        div.classList.add("benefits-card");
        ul.classList.add("benefit-items");

        div.innerHTML = `<h3 class="benefit-title">${cardContent.title}</h3><hr>`

        cardContent.items.forEach((item) => { 
            const li = document.createElement("li");
            li.classList.add("benefit-item");
            li.innerHTML = `${item}`;
            ul.appendChild(li);
        })
        div.appendChild(ul);
        benefitContainer.appendChild(div);
    })
}
