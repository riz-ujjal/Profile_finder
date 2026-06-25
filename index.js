const user_input = document.querySelector("#username-input");
const search_button = document.querySelector("#search-btn");
const display_name = document.querySelector("#name-display");
const display_bio = document.querySelector("#bio-display");
const count_follower = document.querySelector("#followers-count");
const count_following = document.querySelector("#following-count");
const count_repos = document.querySelector("#repo-count");
const user_avatar = document.querySelector("#avatar");
user_avatar.style.display = "none";


search_button.addEventListener("click", async () => {
  const user = user_input.value;
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    display_name.textContent = data.name || data.login;
    display_bio.textContent = data.bio;
    count_follower.textContent = data.followers;
    count_following.textContent = data.following;
    count_repos.textContent = data.public_repos;
    user_avatar.src = data.avatar_url;
    user_avatar.style.display = "block";
  } catch (error) {
    display_name.textContent = "User Not found!";
  }
});
