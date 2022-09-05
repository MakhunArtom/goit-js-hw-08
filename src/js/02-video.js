import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const iframePlayer = new Player(iframe);

// ЗБЕРІГАННЯ ТАЙМКОДУ ПЛЕЄРА
const onPlay = function (data) {
  const playerTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', playerTime);
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

// зАПУСК ПЛЕЄРА З ТОЧКИ НА ЯКІЙ ВІН ЗУПИНИВСЯ
const parsPlayerTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

const onStartVideo = function () {
  iframePlayer.setCurrentTime(parsPlayerTime.seconds);
};

iframePlayer.on('play', onStartVideo);
