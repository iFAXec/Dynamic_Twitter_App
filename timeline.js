import { users } from './tweets.js';

// console.log(users)



const timeLine = document.getElementsByClassName('timeline')[0];

function sortTweetsByDate(tweets) {
    return tweets.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
}

const allTweets = [];

for (let userName in users) {
    // console.log("🚀 ~ users[userName]:", users[userName]);
    // console.log("🚀 ~ userName:", userName);
    for (let tweet in users[userName].tweets) {
        // console.log("🚀 ~ tweet:", tweet);
        allTweets.push({
            ...tweet,
            avatarURL: users[userName].avatarURL,
            displayName: users[userName].displayName,
            userName: users[userName].userName,


        });
    }
}

console.log("🚀 ~ allTweets:", allTweets);


let sortedTweets = sortTweetsByDate(allTweets);


// console.log(sortedTweets);


sortedTweets.forEach(tweet => {
    const sortedTweetDiv = document.createElement('div');
    sortedTweetDiv.innerHTML = `

    <div class="sorted-tweet-list-container">
        <img src="${tweet.avatarURL}" alt="avatar" class="tweet-avatar">
        <div class="sorted-tweet-content-wrapper">
                <div class="tweet-header">
                        ${tweet.displayName}
                        <img src='/assets/twitter-verification-icon.png' alt='verification-icon' class='verification-icon' >
                        ${tweet.userName}
                </div>
                    <p class = tweet-content> ${tweet.text}</p>
                <div class="tweet-footer-time">
                    ${tweet.timestamp}
                </div>
                </div>

            </div>
            `;
    console.log(sortedTweetDiv);
    timeLine.appendChild(sortedTweetDiv);
});

