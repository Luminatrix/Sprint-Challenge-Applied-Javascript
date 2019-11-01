// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
//function to create Header
function Header() {

//creating each element of the header
mainHeader = document.createElement('div');
spanDate = document.createElement('span');
headContent = document.createElement('h1');
spanTemp = document.createElement('span');
//applying CSS styles to the header via classes
mainHeader.classList.add('header');
spanDate.classList.add('date');
spanTemp.classList.add('temp');
//adding text content
spanDate.textContent = "November 1, 2019";
headContent.textContent = "Lambda Times";
spanTemp.textContent = "72°";
//appending children (date, content, temp)to parent Header
mainHeader.appendChild(spanDate);
mainHeader.appendChild(headContent);
mainHeader.appendChild(spanTemp);

return mainHeader;
}


const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
