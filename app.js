import * as users from './tweets.js';

// console.log(users);

const mainContainer = document.getElementById('main-container');


/**
 * Formats   number by adding appropriate suffix (K for 1000 and M for millions).
 * @param {*} num - the num to be formatted, it checks if the num is greater than  or equal to 1000 or 1000000
 * @returns - the formatted number with the appropriate suffix. If he num is less than 1000, it returns the num as a string.
 */

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';

    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}


function getQueryParam(param) {
    const urlParam = new URLSearchParams(window.location.search);
    return urlParam.get(param);
}


const userParam = getQueryParam('user');
const user = users[userParam];
// console.log(user);



mainContainer.innerHTML = `

    <div class = 'display-name'>
        <img src='/assets/left-arrow.png' alt='left-arrow' class = 'left-arrow' >
        <h2>${users.users['@elonmusk'].displayName}</h2>
        <img  src='./assets/twitter-verification-icon.png' alt='verification-icon' class=verification-icon>
    </div>

    <div >
        <img src="${users.users['@elonmusk'].coverPhotoURL}" alt="background image" class='background-image'  >

        <div class='follow-container'>
        <img src="${users.users['@elonmusk'].avatarURL}" alt="avatar" class="avatar">
        <button class='follow-button' > Following </button>
        </div>
    </div>

    <div class="profile-info">
        <div class='profile-info-name'>
            <h3>${users.users['@elonmusk'].displayName}</h3>
            <img src='/assets/twitter-verification-icon.png' alt='verification-icon' class='verification-icon' >
        </div>

        <p>${users.users['@elonmusk'].userName}</p>
        <p class='calendar-icon' >Joined ${users.users['@elonmusk'].joinedDate}</p>
    </div>

    <div class="profile-stats">
        <p> <span>${formatNumber(users.users['@elonmusk'].followingCount)} </span> Following</p>
        <p> <span> ${formatNumber(users.users['@elonmusk'].followerCount)} </span> Followers</p>
    </div>

    <div class="twitter-tabs">
        <button class='twitter-tab tweets-tab' >Tweets</button>
        <button class='twitter-tab' >Tweets & replies</button>
        <button class='twitter-tab' >Media</button>
        <button class='twitter-tab' >Likes</button>
    </div>

    <div class="tweets-list"></div>
`

const tweetsContainer = document.querySelector('.tweets-tab');
const tweetsList = document.querySelector('.tweets-list');

// console.log(users)


tweetsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('tweets-tab')) {
        tweetsList.innerHTML = '';

        // console.log(users.users['@elonmusk'].tweets);

        users.users['@elonmusk'].tweets.forEach(tweet => {
            const tweetDiv = document.createElement('div');
            tweetDiv.innerHTML = `
            <div class="tweet-list-container">
                <img src="${users.users['@elonmusk'].avatarURL}" alt="avatar" class="tweet-avatar">
              <div class="tweet-content-wrapper">
                    <div class="tweet-header">
                        ${users.users['@elonmusk'].displayName}
                        <img src='/assets/twitter-verification-icon.png' alt='verification-icon' class='verification-icon' >
                        ${users.users['@elonmusk'].userName}
                </div>
                    <p class = tweet-content> ${tweet.text}</p>
                <div class="tweet-footer-icons">
                    <img src="/assets/comment.png" alt="comment-icon" class="tweet-icon">
                    <img src="/assets/retweet.png" alt="retweet-icon" class="tweet-icon">
                    <img src="/assets/heart.png" alt="heart-icon" class="tweet-icon">
                    <img src="/assets/share.png" alt="share-icon" class="tweet-icon">
                </div>
                <div class="tweet-footer-time">
                    ${tweet.timestamp}
                </div>
                </div>

            </div>
            `;
            tweetsList.appendChild(tweetDiv);

        });
    };
}
);



const timeLine = document.getElementsByClassName('timeline');

function sortTweetsByDate(tweets) {
    return tweets.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
}


let sortedTweets = sortTweetsByDate(users.users['@elonmusk'].tweets);


// console.log(sortedTweets);


sortedTweets.forEach(tweet => {
    const sortedTweetDiv = document.createElement('div');
    sortedTweetDiv.innerHTML = `

    <div> class="sorted-tweet-list-container">
        <img src="${users.users['@elonmusk'].avatarURL}" alt="avatar" class="tweet-avatar">
        <div class="sorted-tweet-content-wrapper">
                <div class="tweet-header">
                        ${users.users['@elonmusk'].displayName}
                        <img src='/assets/twitter-verification-icon.png' alt='verification-icon' class='verification-icon' >
                        ${users.users['@elonmusk'].userName}
                </div>
                    <p class = tweet-content> ${tweet.text}</p>
                <div class="tweet-footer-time">
                    ${tweet.timestamp}
                </div>
                </div>

            </div>
            `;
    console.log(sortedTweetDiv);
    // timeLine.appendChild(sortedTweetDiv);
});

