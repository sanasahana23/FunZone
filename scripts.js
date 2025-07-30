function scrollSlider(direction) {
    const slider = document.querySelector('.category-slider');
    const scrollAmount = 500;
    slider.scrollBy({left: direction * scrollAmount,behavior: 'smooth'});
}
function scrollMovieSlider(direction) {
    const slider = document.querySelector('.movie-slider');
    const scrollAmount = 500;
    slider.scrollBy({left: direction * scrollAmount,});
} 
function scrollTVShowsSlider(direction) {
    const slider = document.getElementById('tvshows-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollNewsSlider(direction) {
    const slider = document.getElementById('news-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollMusicSlider(direction) {
    const slider = document.getElementById('music-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollSportsSlider(direction) {
    const slider = document.getElementById('sports-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollEducationSlider(direction) {
    const slider = document.getElementById('education-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollGamesSlider(direction) {
    const slider = document.getElementById('games-slider');
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}
function scrollCartoonSlider(direction) {
    const slider = document.getElementById("cartoon-slider");
    slider.scrollBy({ left: direction * 320, behavior: 'smooth' });
}





