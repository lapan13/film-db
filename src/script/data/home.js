function upcomingMovies() {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'page': 1
        },
        success: (result) => {

            //Array upcoming Movies
            let arrUpcoming = [];
            arrUpcoming.push((result.results).splice(0, 5));
            $.each(arrUpcoming, (i, data) => {
                $('#upcoming-list').append(`
                    <div class="col">
                        <div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            </ol>
                            <div class="carousel-inner border border-warning rounded">
                                <div class="carousel-item active">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data[0].id + `">
                                        <img class="d-block w-100" src="https://image.tmdb.org/t/p/original` + data[0].backdrop_path + `" alt="First slide">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>` + data[0].title + ` (` + data[0].release_date + `)</h5>
                                            <p>` + data[0].overview + `</p>
                                        </div>                                        
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data[1].id + `">
                                        <img class="d-block w-100" src="https://image.tmdb.org/t/p/original` + data[1].backdrop_path + `" alt="Second slide">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>` + data[1].title + ` (` + data[1].release_date + `)</h5>
                                            <p>` + data[1].overview + `</p>
                                        </div>                                        
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data[2].id + `">
                                        <img class="d-block w-100" src="https://image.tmdb.org/t/p/original` + data[2].backdrop_path + `" alt="Third slide">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>` + data[2].title + ` (` + data[2].release_date + `)</h5>
                                            <p>` + data[2].overview + `</p>
                                        </div>                                          
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data[3].id + `">
                                        <img class="d-block w-100" src="https://image.tmdb.org/t/p/original` + data[3].backdrop_path + `" alt="Third slide">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>` + data[3].title + ` (` + data[3].release_date + `)</h5>
                                            <p>` + data[3].overview + `</p>
                                        </div>                                          
                                    </a>
                                </div>
                                <div class="carousel-item">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data[4].id + `">
                                        <img class="d-block w-100" src="https://image.tmdb.org/t/p/original` + data[4].backdrop_path + `" alt="Third slide">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>` + data[4].title + ` (` + data[4].release_date + `)</h5>
                                            <p>` + data[4].overview + `</p>
                                        </div>                                          
                                    </a>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                `)
            });
        }
    });
}

function nowPlaying() {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'page': 1
        },
        success: (result) => {
            //Array upcoming Movies
            let arrNow = [];
            arrNow.push((result.results).splice(0, 6));
            $.each(arrNow[0], (i, data) => {
                $('#now-playing').append(`
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
}

function popularMovies() {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'page': 1
        },
        success: (result) => {
            //Array upcoming Movies
            let arrPop = [];
            arrPop.push((result.results).splice(0, 6));
            $.each(arrPop[0], (i, data) => {
                $('#popular').append(`
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
}

function topRated() {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'page': 1
        },
        success: (result) => {
            //Array upcoming Movies
            let arrPop = [];
            arrPop.push((result.results).splice(0, 6));
            $.each(arrPop[0], (i, data) => {
                $('#top-rated').append(`
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
}

//on load page
$(document).ready(() => {
    upcomingMovies();
    nowPlaying();
    popularMovies();
    topRated();
});

//see detail modal
$('#upcoming-list').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'movie_id': $(this).data('id')
        },
        success: (detail) => {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.release_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Country
            let arrCountry = [];
            $.each(detail.production_countries, (i, country) => {
                arrCountry.push(" " + country.name);
                return;
            });

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, (i, genre) => {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row">
                                <h5 class="modal-title" id="exampleModalLabel">` + detail.title + ` (` + year + `)</h5>
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
                                        <dt class="col-sm-3">Country</dt>
                                            <dd class="col-sm-9">` + arrCountry + `.</dd>
                                        <dt class="col-sm-3">Language</dt>
                                            <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row float-right">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    `);
            });
        }
    });
});
$('#now-playing').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'movie_id': $(this).data('id')
        },
        success: (detail) => {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.release_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Country
            let arrCountry = [];
            $.each(detail.production_countries, (i, country) => {
                arrCountry.push(" " + country.name);
                return;
            });

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, (i, genre) => {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <h5 class="modal-title" id="exampleModalLabel">` + detail.title + ` (` + year + `)</h5>
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
                                    <dt class="col-sm-3">Country</dt>
                                        <dd class="col-sm-9">` + arrCountry + `.</dd>
                                    <dt class="col-sm-3">Language</dt>
                                        <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row float-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                `);
            });
        }
    });
});
$('#popular').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'movie_id': $(this).data('id')
        },
        success: (detail) => {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.release_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Country
            let arrCountry = [];
            $.each(detail.production_countries, (i, country) => {
                arrCountry.push(" " + country.name);
                return;
            });

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, (i, genre) => {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <h5 class="modal-title" id="exampleModalLabel">` + detail.title + ` (` + year + `)</h5>
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
                                    <dt class="col-sm-3">Country</dt>
                                        <dd class="col-sm-9">` + arrCountry + `.</dd>
                                    <dt class="col-sm-3">Language</dt>
                                        <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row float-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                `);
            });
        }
    });
});
$('#top-rated').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'movie_id': $(this).data('id')
        },
        success: (detail) => {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.release_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Country
            let arrCountry = [];
            $.each(detail.production_countries, (i, country) => {
                arrCountry.push(" " + country.name);
                return;
            });

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, (i, genre) => {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <h5 class="modal-title" id="exampleModalLabel">` + detail.title + ` (` + year + `)</h5>
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
                                    <dt class="col-sm-3">Country</dt>
                                        <dd class="col-sm-9">` + arrCountry + `.</dd>
                                    <dt class="col-sm-3">Language</dt>
                                        <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row float-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                `);
            });
        }
    });
});
$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + $(this).data('id'),
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'movie_id': $(this).data('id')
        },
        success: (detail) => {

            //Array of Year
            let arrYear = [];
            arrYear.push(detail.release_date);
            let year = arrYear.toString().substr(0, 4);

            // Array of Country
            let arrCountry = [];
            $.each(detail.production_countries, (i, country) => {
                arrCountry.push(" " + country.name);
                return;
            });

            // Array of Genre
            let arrGenre = [];
            $.each(detail.genres, (i, genre) => {
                arrGenre.push(" " + genre.name);
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <h5 class="modal-title" id="exampleModalLabel">` + detail.title + ` (` + year + `)</h5>
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
                                    <dt class="col-sm-3">Country</dt>
                                        <dd class="col-sm-9">` + arrCountry + `.</dd>
                                    <dt class="col-sm-3">Language</dt>
                                        <dd class="col-sm-9">` + detail.original_language + `.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row float-right">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                `);
            });
        }
    });
});


//func searching
function searchMovie() {
    //empty Page
    $('.a1').empty();
    $('#upcoming-list').empty();
    $('#now-playing').empty();
    $('#popular').empty();
    $('#top-rated').empty();
    $('#movie-list').empty();
    $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/search/movie',
        datatype: 'json',
        data: {
            'api_key': 'ae0bdd8f96c5b4e84b43e17aa8a01dca',
            'query': $('#search-input').val(),
            'page': 1
        },
        success: (result) => {
            if (result.total_results === 0) {
                $('#movie-list').html(`
                <div class="col">
                <h1 class="text-center">Movie not Found</h1>
                </div>`);
            } else {
                $('#result').html('Result :')
                let movie = result.results;
                $.each(movie, (i, data) => {
                    if (data.poster_path != null) {
                        $('#movie-list').append(`                            
                            <div class="col-md-2 mb-4 ">
                                <div class="card bg-warning">
                                    <a href="#" class="card-link see-detail" data-toggle="modal" data-target=".bd-example-modal-lg" data-id="` + data.id + `">
                                        <img class="card-img-top img-fluid" src="https://image.tmdb.org/t/p/w185` + data.poster_path + `" alt="` + data.name + `">
                                    </a>
                                </div>
                            </div>   
                        `)
                    }
                });
            }
        }
    });

    //empty Search Input
    $('#search-input').val('');
}

//when search button clicked
$('#search-button').click(() => {
    searchMovie();
});

//search with key Enter
$('#search-input').keypress((e) => {
    if (e.code == 'Enter') {
        searchMovie();
        e.preventDefault();
        return false;
    }
});