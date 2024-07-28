import { user1 } from './tweets.js';

const profileContainer = document.getElementById('container');


profileContainer.innerHTML = `

<div class="profile-container">
    <div>
        <h2>${user1.displayName}</h2>
    </div>

    <div>
        <img src="${user1.coverPhotoURL}" alt="background image">
        <img src="${user1.avatarURL}" alt="avatar" class="avatar">
    </div>

    <div class="profile-info">
        <h3>${user1.displayName}</h3>
        <p>${user1.userName}</p>
        <p>Joined ${user1.joinedDate}</p>
    </div>

    <div class="profile-stats">
        <p>${user1.followingCount} Following</p>
        <p>${user1.followerCount} Followers</p>
    </div>

    <div class="profile-columns">
        <p>Tweets</p>
        <p>Tweets & Replies</p>
        <p>Media</p>
        <p>Likes</p>
    </div>

</div>




`




