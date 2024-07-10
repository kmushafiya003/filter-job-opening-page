const jobsData =  [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Ruby"],
      "tools": ["Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

const tabletListContainer = document.querySelector(".filter-list-container");
const filterContainer = document.querySelector(".filter-container")
const clearAll = document.querySelector(".clear-btn")
let clickedValue = [];


 

function displayJobListings(){

    const jobListingContainer = document.querySelector('.container');
    // console.log(jobListingContainer);

   jobListingContainer.innerHTML = ' ';       

   //loop through each job objects and create html elements

   jobsData.forEach((job)=> {

   let matcheFilter = clickedValue.length === 0 || clickedValue.every(value=>
      value === job.role ||
      value === job.level ||
      job.languages.includes(value) ||
      job.tools.includes(value)
   );


if(matcheFilter){

      
  const jobElement = document.createElement('div');
  jobElement.classList.add('job-opening-box');

  jobElement.innerHTML = `

        <div class="left-side">

                <!-- ------------- company logo ------------------ -->
                 
                <img src="${job.logo}" alt="job-logo" class="company-logo">

                <!-- ---------- job decsription -------------- -->

                <div class="job-desc">


                   <!-- ---------- 1st container ---------------- -->
                    <div class="first-cont">

                        <p class="company">${job.company}</p>

                        <div class="${job.new} tab new ">
                             New!
                        </div>

                        <div class="${job.featured} tab featured">
                           Featured
                        </div>

                    </div>

                    <!-- -------------- 2nd container --------------- -->

                    
                      <p class="position">${job.position}</p>
                   


                    <!-- ---------------- third container ------------------ -->
                    <ul class="third-cont">
                         
                        <li class="postedAt">${job.postedAt}</li>
                        <li class="contract bullet">${job.contract}</li>
                        <li class="location bullet">${job.location}</li>

                    </ul>

                </div>

            </div>

              <ul class="right-side">

                <li class="tablet" id="tablet-role">
                   ${job.role}
                </li>

                <li class="tablet" id="tablet-level">
                    ${job.level}
                </li>

                ${job.languages.map(language => `<li class="tablet" >${language}</li>`).join('')}

                ${job.tools.map(tools => `<li class="tablet">${tools}</li>`).join('')}
         



            <ul>


        
    `;

    jobListingContainer.appendChild(jobElement);


}

 })

 let tabletList = document.querySelectorAll(".tablet");
    

 tabletList.forEach((tablet)=>{
     tablet.addEventListener('click', handleTabletClick);
 })


}



function handleTabletClick(events){
  
    const box = events.target;
    
    const value = box.textContent.trim();

    if(clickedValue.includes(value)){
        return;
    }else{

        clickedValue.push(value);

        updateClickedValueList(); 
    
    
    }

}

function updateClickedValueList(){

    tabletListContainer.innerHTML = ' ';

    if(clickedValue.length !== 0){

        clickedValue.forEach((value , index)=>{

            filterContainer.style.display = "flex";
            const tabletFilter = document.createElement("div");
    
            tabletFilter.classList.add("filter-tablet");
    
            tabletFilter.innerHTML = `
            <p class="filter-text"> ${value}</p>
                    <div class="icon" onclick="removeFilter(this)" accessKey = ${index}>
                        <img src="images/icon-remove.svg" alt="remove" class="remove-icon">
                    </div>

            `
           
            tabletListContainer.appendChild(tabletFilter);
            
         displayJobListings()
    
        })
    } else if(clickedValue.length === 0){

      filterContainer.style.display = "none";
      displayJobListings()

    }
   




}

function removeFilter(element){

  const checkValue = element.accessKey;

    clickedValue = clickedValue.filter((value,index) => index != checkValue);

    updateClickedValueList();
  

}


clearAll.addEventListener("click" , ()=>{

  clickedValue = [];
  updateClickedValueList();

})


window.onload = function(){
  displayJobListings();

}



































// window.appendFilter = function(filter) {
//   console.log("Function call hora hai")
// }


// const tabletListContainer = document.querySelector('.filter-list-container');
// const tabletBoxes = document.querySelectorAll('.tablet');


// if(tabletBoxes.length){
 

//         console.log("tablet: ", tabletBoxes);
    
//         if(tabletBoxes){
//             tabletBoxes.forEach((box)=>{
//                 console.log("Box hai");
//             })
//         }
   

// }else{
//     console.log("NHi hora")
// }





// document.addEventListener('DOMContentLoaded', function() {
//     displayJobListings();
//   });

