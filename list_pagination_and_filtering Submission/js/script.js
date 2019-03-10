
//Treehouse Techdegree:
//FSJS project 2 - List Filter and Pagination


const pageLength = 10;
//If you wanted a different page lengtth, change this const
const showPage = (list, page) => {
   for (i = 0; i < list.length; i++) {
      if (i >= page * pageLength && i <= (page+1) * pageLength - 1) {
         list[i].style.display = ''; 
      } 
      else { 
         list[i].style.display = 'none';
      }
   }
}
//Iterates through the list, to put elements between 0 and 9 (items 1 - 10) ona  single page, hides the rest.

const flipActive = (activeElement) => {
   let parent = document.querySelector(".pagination");
   let getPag = parent.querySelectorAll("ul > li > a");
   // querySelector .pagination did not fucntion, pagintaion is singular parent, queryselector.pagination then ul found then li and nested a, once we have parent we can navigate children. > is css that understanss tag traversal.
   // a tag inside li inside ul, starting from parent knows it is that inside pagination
   for (let i = 0; i < getPag.length; i++) {
      getPag[i].classList.remove('active')
   }
   activeElement.classList.add('active');
}
// created to keep the 'take active class away' in the AppenPageLinks function

const appendPageLinks = (list) => {
   let pages = Math.ceil(list.length / pageLength);
   // creates correct number of pages, 54/10 = 5.4 => ceil to 6 pages
   let newDiv = document.createElement("div");
   document.querySelector(".page").appendChild(newDiv);
   let newUl = document.createElement("ul");
   newDiv.classList.add('pagination');
   newDiv.appendChild(newUl);
   for (let page = 0; page < pages; page++) {
      let newLi = document.createElement("li");
      newUl.appendChild(newLi);
      let newA = document.createElement("a");
      newLi.appendChild(newA);
      newA.innerText = page + 1;
      if (page === 0) {
         newA.classList.add("active");
      }
      // as you enter the page it's on page 1, so 1 button should be active
      newA.addEventListener("click", (e) => {
         showPage(list, page);
         flipActive(e.target);
      });  
   }
   showPage(list, 0);
} 

const students = document.getElementsByClassName("student-item");
appendPageLinks(students);

