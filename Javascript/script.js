let = tasks [{ 
taskName: "shopping", 
image: "img/groceries.jpg", 
description: "Shop for weekly groceries at Billa and Hofer.", 
importance: 3
},{
taskName: "cleaning",
image: "img/cleaning.jpg",
description: "Do the general cleaning of the house - vacuum, mop the floor, clean the bathroom and kitchen.",
importance: 1
},{
taskName: "laundry",
image: "img/laundry.jpg",
description: "Wash and dry all the dirty clothes in the house.",
importance: 4
},{
taskName: "cooking",
image: "img/cooking.jpg",
description: "Prepare dinner for the family.",
importance: 2
},{
taskName: "exercise",
image: "img/exercise.jpg",
description: "Go for a 30-minute run in the park.",
importance: 1
}
];

for (let val of people){
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.image}" class-"card-img-top" alt="${val.taskName}">
    <div class="card-body">
    <h5 class="card-title">${val.taskName}</h5>
    <p class="likes">${val.importance}</p>
    <p class="bin btn-success likeBtn">Like</p>
    <p class="btn btn-warning showMore">Show more info</p>
    </div>
    </div>
    </div>`
    }
    
