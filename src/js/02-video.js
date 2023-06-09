import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(CURRENT_TIME, event.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
