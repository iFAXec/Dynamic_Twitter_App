import { user1, user2 } from './tweets.js';


function displayTweets(user) {
    console.log(`Tweets by ${user.displayName} (${user.userName}):`);
    user.tweets.forEach(tweet => {
        console.log(`[${tweet.timestamp}] ${tweet.text}`);
    });
}

displayTweets(user1);
displayTweets(user2);

