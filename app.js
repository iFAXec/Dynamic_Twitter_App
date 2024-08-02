import { user1 } from './tweets.js';

const mainContainer = document.getElementById('main-container');

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';

    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}







mainContainer.innerHTML = `

    <div class = 'display-name'>
        <img src='/assets/left-arrow.png' alt='left-arrow' class = 'left-arrow' >
        <h2>${user1.displayName}</h2>
        <img  src='./assets/twitter-verification-icon.png' alt='verification-icon' class=verification-icon>
    </div>

    <div >
        <img src="${user1.coverPhotoURL}" alt="background image" class='background-image'  >

        <div class='follow-container'>
        <img src="${user1.avatarURL}" alt="avatar" class="avatar">
        <button class='follow-button' > Following </button>
        </div>
    </div>

    <div class="profile-info">
        <div class='profile-info-name'>
            <h3>${user1.displayName}</h3>
            <img src='/assets/twitter-verification-icon.png' alt='verification-icon' class='verification-icon' >
        </div>
        <p>${user1.userName}</p>

        <p class='calendar-icon' >Joined ${user1.joinedDate}</p>

    </div>

    <div class="profile-stats">
        <p> <span>${formatNumber(user1.followingCount)} </span> Following</p>
        <p> <span> ${formatNumber(user1.followerCount)} </span> Followers</p>
    </div>

    <div class="twitter-tabs">
        <button class='twitter-tab tweets-tab' >Tweets</button>
        <button class='twitter-tab' >Tweets & replies</button>
        <button class='twitter-tab' >Media</button>
        <button class='twitter-tab' >Likes</button>
    </div>

`

const tweetsContainer = document.querySelector('.tweets-tab');
const tweetsList = document.createElement('div')
tweetsList.classList.add('tweets-list');
tweetsContainer.appendChild(tweetsList);


tweetsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('tweets-tab')) {
        tweetsList.innerHTML = '';

        user1.tweets.forEach(tweet => {
            const tweetDiv = document.createElement('div');
            tweetDiv.innerHTML = `
            <p>${tweet.text}</p>
            `
            tweetsList.appendChild(tweetDiv);
        })
    }
})







