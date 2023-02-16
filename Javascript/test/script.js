//Data

// let tasks = [{ 
//       taskName: "shopping", 
//       image: "https://cdn.pixabay.com/photo/2016/04/03/11/36/berlin-1304370_1280.jpg", 
//       description: "Shop for weekly groceries at Billa and Hofer.", 
//       importance: 3
// },{
//       taskName: "cleaning",
//       image: "https://cdn.pixabay.com/photo/2020/02/25/14/40/chore-4879062_1280.jpg",
//       description: "Do the general cleaning of the house - vacuum, mop the floor, clean the bathroom and kitchen.",
//       importance: 1
// },{
//       taskName: "laundry",
//       image: "https://cdn.pixabay.com/photo/2015/06/10/13/23/clothesline-804812_1280.jpg",
//       description: "Wash and dry all the dirty clothes in the house.",
//       importance: 4
// },{
//       taskName: "cooking",
//       image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg",
//       description: "Prepare dinner for the family.",
//       importance: 2
// },{
//       taskName: "exercise",
//       image: "https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg",
//       description: "Go for a 30-minute run in the park.",
//       importance: 1
// }];

//Creation Cards

let tasks = JSON.parse(tasksJSON)

for(let val of tasks){
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.image}" class-"card-img-top" alt="${val.taskName}">
    <div class="card-body">
    <h5 class="card-title">${val.taskName}</h5>
    <p class="priority">${val.importance}</p>
    <p class="btn btn-success priorityBtn">Priority</p>
    <p class="card-text">${val.description}</p>
    </div>
    </div>
    </div>`
    }
    
//Counter plus Colors

let btns = document.getElementsByClassName("priorityBtn");

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        tasks[i].importance++;
        console.log(tasks[i].importance);
        document.getElementsByClassName("priority")[i].innerHTML = tasks[i].importance;
        if (tasks[i].importance < 2) {
            document.getElementsByClassName("priority")[i].style.backgroundColor = "green";
        } else if (tasks[i].importance < 4){
            document.getElementsByClassName("priority")[i].style.backgroundColor = "orange";
        } else if (tasks[i].importance < 6){
            document.getElementsByClassName("priority")[i].style.backgroundColor = "red";
        } else {
            document.getElementsByClassName("priority")[i].style.backgroundColor = "black"; alert("You Failed!");
        }
    })
}


// Sort - I couldnt solve this I tried to over write the existing result with new result
// but this isnt working. I dont know how to solve this sorry.


// function sorting () {
//       let sortedTasks = tasks.sort(function(a, b) {            
//       return b.importance - a.importance;  
//   })
//  for(let val of sortedTasks){
//   document.getElementById("result").innerHTML += `
//   <div>
//   <div class="card" style="width: 18rem;">
//   <img src="${val.image}" class-"card-img-top" alt="${val.taskName}">
//   <div class="card-body">
//   <h5 class="card-title">${val.taskName}</h5>
//   <p class="priority">${val.importance}</p>
//   <p class="btn btn-success priorityBtn">Priority</p>
//   <p class="card-text">${val.description}</p>
//   </div>
//   </div>
//   </div>`
// }
// }
//   document.getElementById("sortPriority").addEventListener("click",sorting); 

