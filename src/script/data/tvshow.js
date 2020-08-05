//on load page
$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/discover/tv',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'sort_by': 'popularity.desc',
            'page': 1
        },
        success: function (result) {
            let tvshow = result.results;
            $.each(tvshow, function (i, data) {
                //Array of Year
                let arrYear = [];
                arrYear.push(data.first_air_date);
                let year = arrYear.toString().substr(0, 4);
                $('#movie-list').append(`
                    <div class="col-md-2 mb-4">
                        <div class="card bg-warning ">
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data.id + `">
                                <img class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/w185` + data.poster_path + `" alt="` + data.name + `">
                            </a>
                        </div>
                    </div>
                `)
            });
        }
    });
});

//see detail modal
$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/tv/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'tv_id': $(this).data('id')
        },
        success: function (detail) {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.first_air_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, function (i, genre) {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <h5 class="modal-title" id="exampleModalLabel">` + detail.name + ` (` + year + `)</h5>
                        </div>
                    </div>
                    <hr>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="https://image.tmdb.org/t/p/w185` + detail.poster_path + `" >
                            </div>
                            <div class="col-md-8">
                                <dl class="row">
                                    <dt class="col-sm-3">Overview</dt>
                                        <dd class="col-sm-9">` + detail.overview + `.</dd>
                                    <dt class="col-sm-3">Genre</dt>
                                        <dd class="col-sm-9">` + arrGenre + `.</dd>
                                    <dt class="col-sm-3">Rating</dt>
                                        <dd class="col-sm-9">` + detail.vote_average + `.</dd>
                                    <dt class="col-sm-3">Popularity</dt>
                                        <dd class="col-sm-9">` + detail.popularity + `.</dd>
                                </dl>
                                <hr>
                                <dl class="row">
                                    
                                    <dt class="col-sm-3">Seasons</dt>
                                        <dd class="col-sm-9">` + detail.number_of_seasons + `.</dd>
                                    <dt class="col-sm-3">Episodes</dt>
                                        <dd class="col-sm-9">` + detail.number_of_episodes + `.</dd>    
                                    <dt class="col-sm-3">Country</dt>
                                        <dd class="col-sm-9">` + detail.origin_country + `.</dd>
                                    <dt class="col-sm-3">Language</dt>
                                        <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                `);
            });
        }
    });
});

//when search button clicked
$('#search-button').on('click', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/search/tv',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'query': $('#search-input').val()
        },
        success: function (result) {
            if (result.total_results === 0) {
                $('#movie-list').html(`
                <div class="col">
                <h1 class="text-center">Movie not Found</h1>
                </div>`);
            } else {
                let tvshow = result.results;
                $.each(tvshow, function (i, data) {
                    if (data.poster_path != null) {
                        $('#movie-list').append(`
                            <div class="col-md-2 mb-4 ">
                                <div class="card bg-warning">
                                    <a href="#" class="card-link" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <img class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/w185` + data.poster_path + `" alt="` + data.name + `">
                                    </a>
                                </div>
                            </div>   
                        `)
                    } else {
                        $.each(tvshow, function (i, data) {
                            $('#movie-list').append(`
                                <div class="col-md-2 mb-4 ">
                                    <div class="card bg-warning">
                                        <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg">
                                            <img class="card-img-top img-fluid" src="../src/img/no-poster.jpg" alt="` + data.name + `">
                                        </a>
                                    </div>
                                </div>
                            `)
                        })
                    }
                });
            }
        }
    });
});