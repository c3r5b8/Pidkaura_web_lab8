// render comments
function renderComments() {
    let commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        let commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <div class="comment_topline">
                <div class="comment__name">${comment.name}</div>
                <div class="comment__time">${timeSince(new Date(comment.time))}</div>
            </div>
            <div class="comment__text">${comment.comment}</div>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

setInterval(() => { renderComments(); }, 1000);

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return getYears(interval);
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return getMonths(interval);
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return getDays(interval);
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return getHours(interval);
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return getMinutes(interval);
    }
    return getSeconds(seconds);
}

function getSeconds(seconds) {
    let t = Math.floor(seconds)
    let result = '';
    result += t + ' ';
    t = t % 10;
    if (t === 1) {
        result += 'секунду тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'секунди тому';
    } else {
        result += 'секунд тому';
    }
    return result;
}

function getMinutes(minutes) {
    let t = Math.floor(minutes)
    let result = '';
    result += t + ' ';
    t = t % 10;

    if (t === 1) {
        result += 'хвилину тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'хвилини тому';
    } else {
        result += 'хвилин тому';
    }
    return result;
}

function getHours(hours) {
    let t = Math.floor(hours)
    let result = '';
    result += t + ' ';
    t = t % 10;

    if (t === 1) {
        result += 'годину тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'години тому';
    } else {
        result += 'годин тому';
    }
    return result;
}

function getDays(days) {
    let t = Math.floor(days)
    let result = '';
    result += t + ' ';
    t = t % 10;

    if (t === 1) {
        result += 'день тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'дні тому';
    } else {
        result += 'днів тому';
    }
    return result;
}

function getMonths(months) {
    let t = Math.floor(months)
    let result = '';
    result += t + ' ';
    t = t % 10;

    if (t === 1) {
        result += 'місяць тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'місяці тому';
    } else {
        result += 'місяців тому';
    }
    return result;
}

function getYears(years) {
    let t = Math.floor(years)
    let result = '';
    result += t + ' ';
    t = t % 10;

    if (t === 1) {
        result += 'рік тому';
    } else if (t === 2 || t === 3 || t === 4) {
        result += 'роки тому';
    } else {
        result += 'років тому';
    }
    return result;
}

let comments = [
    {
        name: '@user-pq9ie4xq4k',
        comment: 'я ніколи не зрозумію людей, які не можуть від цього відмовитись',
        time: new Date(2024, 4, 27).getTime()
    },
    {
        name: '"@_SOMEONE_',
        comment: 'Хотів натиснути на вподабайку, але згадав, що вже натиснув)',
        time: new Date(2024, 4, 27).getTime()
    }
];

// get comments from local storage
let commentsFromLocalStorage = localStorage.getItem('comments');
if (commentsFromLocalStorage) {
    comments = JSON.parse(commentsFromLocalStorage);
}

renderComments();

// run function if user press enter in input name or comment
let commentInput = document.getElementById('comment');
let nameInput = document.getElementById('name');
commentInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addComment();
    }
});

nameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addComment();
    }
});

// add comment to comments array
function addComment() {
    let name = nameInput.value;
    let comment = commentInput.value;
    let time = new Date().getTime();

    if (name && comment) {
        comments.push({ name, comment, time });
        renderComments();
        nameInput.value = '';
        commentInput.value = '';
    }
    // add comments to local storage
    localStorage.setItem('comments', JSON.stringify(comments));
}

