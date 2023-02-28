import Player from "@vimeo/player"
import throttle from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALLKEY = 'videoplayer-current-time'

const durationCallback = ({ seconds }) => {
    localStorage.setItem(LOCALLKEY, seconds);
  };

player.on('timeupdate', throttle(durationCallback, 1000));
const getTime = localStorage.getItem(LOCALLKEY)

if (getTime){
player
  .setCurrentTime(getTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
}