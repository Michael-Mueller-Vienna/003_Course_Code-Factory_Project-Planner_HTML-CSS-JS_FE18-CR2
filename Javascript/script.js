//Data

let tasks = [{ 
      taskName: "shopping", 
      image: "https://cdn.pixabay.com/photo/2016/04/03/11/36/berlin-1304370_1280.jpg", 
      description: "Shop for weekly groceries at Billa and Hofer.", 
      importance: 3
},{
      taskName: "cleaning",
      image: "https://cdn.pixabay.com/photo/2020/02/25/14/40/chore-4879062_1280.jpg",
      description: "Do the general cleaning of the house - vacuum, mop the floor, clean the bathroom and kitchen.",
      importance: 1
},{
      taskName: "laundry",
      image: "https://cdn.pixabay.com/photo/2015/06/10/13/23/clothesline-804812_1280.jpg",
      description: "Wash and dry all the dirty clothes in the house.",
      importance: 4
},{
      taskName: "cooking",
      image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg",
      description: "Prepare dinner for the family.",
      importance: 2
},{
      taskName: "exercise",
      image: "https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg",
      description: "Go for a 30-minute run in the park.",
      importance: 1
}];

//Creation Cards

for(let val of tasks){
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.image}" class-"card-img-top" alt="${val.taskName}">
    <div class="card-body">
    <h5 class="card-title">${val.taskName}</h5>
    <p class="likes">${val.importance}</p>
    <p class="btn btn-success likeBtn">Priority</p>
    <p class="card-text">${val.description}</p>
    </div>
    </div>
    </div>`
    }
    
//Counter

let btns = document.getElementsByClassName("likeBtn");

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        tasks[i].importance++;
        console.log(tasks[i].importance);
        document.getElementsByClassName("likes")[i].innerHTML = tasks[i].importance;
    })
}


// 