const user_input = document.querySelector("#username-input");
const search_button = document.querySelector("#search-btn");
const display_name = document.querySelector("#name-display");
const display_bio = document.querySelector("#bio-display");
const count_follower = document.querySelector("#followers-count");
const count_following = document.querySelector("#following-count");
const count_repos = document.querySelector("#repo-count")
// /add avatar which is image 
const user_avatar = document.querySelector("#avatar")
search_button.addEventListener("click", async () =>{
    const user = user_input.value;
    try{
        const response = await fetch("https://api.github.com/user/google");
        const data = await response.json();
        display_name.textContent = data.name;
        display_bio.textContent = data.bio;
        count_follower.textContent = data.follower;
        count_following.textContent = data.following;
        count_reops.textContent = data.repos;
        user_avatarElement.src = data.avatar_url;
    }
    catch(error){
        display_name.textContent = "User Not found!";
    }
})