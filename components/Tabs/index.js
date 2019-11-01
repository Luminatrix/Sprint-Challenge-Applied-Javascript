// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//function creating Tabs element, applying CSS styles and text content
function Tabs(topic){
    const newTab = document.createElement('div');
    newTab.classList.add('tab');

    newTab.textContent = topic;

    return newTab;
}
//grabbing topics
topics = document.querySelector('.topics');

//sending HTTP get request to retrieve backend data
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')

    //using .then to intiate a response using the data retrieved, a forEach loop that iterates through the topic data information and appends it to the Tabs function creating the element
    .then( response => {
        response.data.topics.forEach( topic => {
            let tab = Tabs(topic);
            topics.appendChild(tab);
        })
    })
    .catch( err => {

    })
    //.catch error if no data is retrieved or error occurs