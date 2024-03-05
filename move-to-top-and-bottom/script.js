const usersList=document.querySelector('.user-list');

const loader=document.querySelector('.loader');

const scrollToTopButton=document.querySelector('.call-to-top-button');

const scrollToBottomButton=document.querySelector(".call-to-bottom-button");

console.log(scrollToBottomButton,scrollToTopButton);

function showLoader(){
    loader.classList.add('show-loader');
    usersList.classList.add("hide-users-list");
}

function removeLoader(){
    loader.classList.remove("show-loader");
    usersList.classList.remove("hide-users-list");
}

async function fetchUsersList(){
    showLoader();

    const response=await fetch('https://dummyjson.com/users',{
        method: 'GET'
    })

    const result=await response.json();

    if(result && result.users){
        displayUsersLIst(result.users);
    }

    console.log(result);

    removeLoader();
}

function displayUsersLIst(getUsers){
    console.log(getUsers);
    usersList.innerHTML=getUsers.map(useritem=>
        `<li>
    <p>${useritem.firstName} ${useritem.lastName}</p>
    </li>`
        ).join("")
}


//how this thing will work brief overview
//take the top and bottom of the buttom positon 
scrollToTopButton.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

scrollToBottomButton.addEventListener('click',()=>{
    console.log(document.body.scrollHeight);

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
    })
})

fetchUsersList();