let posts = [
    {
        id: 1,
        title: 'Docker for Rails',
        created_date: '2018-11-03'
    },
    {
        id: 2,
        title: 'HTML5 for Beginners',
        created_date: '2019-01-11'
    },
    {
        id: 3,
        title: 'CSS3 for dummies',
        created_date: '2018-05-18'
    },
    {
        id: 4,
        title: 'jQuery Master',
        created_date: '2019-10-23'
    }
]

let asc = $('#order-asc').val()
let desc = $('#order-desc').val()
let abc = $('#order-abc').val()

let sortById = $('#sort-by-id').val()
let sortByTitle = $('#sort-by-title').val()
let sortByDate = $('#sort-by-date').val()

$(document).ready(function() {

    $('#sort-by-id, #sort-by-title, #sort-by-date').click(function() {
        $('#dropdownMenuButton').closest('.dropdown').find('.dropdown-item').removeClass('active');
        $(this).addClass('active');
        $('#dropdownMenuButton').text('Sort by: ' + $(this).text());
    });

    $('#order-asc, #order-desc, #order-abc').click(function() {
        $('#dropdownMenuButton2').closest('.dropdown').find('.dropdown-item').removeClass('active');
        $(this).addClass('active');
        $('#dropdownMenuButton2').text('Order: ' + $(this).text());
    });

    $('#sort-button').click(function() {
        
        let sortBy = $('.dropdown-item.active[id^="sort-by"]').attr('id');
        let order = $('.dropdown-item.active[id^="order"]').attr('id');

        if (!sortBy || !order) {
            alert("Please select both a 'Sort by' and an 'Order' criteria!");
            return;
        }

        posts.sort(function(a, b) {
            let valA, valB;

            if (sortBy === 'sort-by-id') {
                valA = a.id;
                valB = b.id;
            } else if (sortBy === 'sort-by-title') {
                valA = a.title.toLowerCase();
                valB = b.title.toLowerCase();
            } else if (sortBy === 'sort-by-date') {
                valA = new Date(a.created_date);
                valB = new Date(b.created_date);
            }

            if (order === 'order-asc' || order === 'order-abc') {
                return valA > valB ? 1 : -1;
            } else {
                return valA < valB ? 1 : -1;
            }
        });

        createPostsRows(posts);
    });
});

function createPostsRows(posts) {
    $('#posts').html('');
    let rowsHtml = '';

    posts.forEach(function(post) {
        rowsHtml += `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.created_date}</td>
            </tr>`;
    });

    $('#posts').html(rowsHtml);
}

createPostsRows(posts)