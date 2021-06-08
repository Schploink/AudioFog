import * as SoundApiUtil from "../util.sound_api_util.js"

export const RECEIVE_ALL_SOUNDS = 'RECEIVE_ALL_SOUNDS';
export const RECEIVE_SOUND = 'RECEIVE_SOUND';
export const REMOVE_SOUND = 'REMOVE_SOUND';

const receiveAllSounds = (sounds) => ({
  type: RECEIVE_ALL_SOUNDS,
  sounds
});

const receiveSound = (sound) => ({
  type: RECEIVE_SOUND,
  sound
});

const removeSound = (soundId) => ({
  type: REMOVE_SOUND,
  soundId
});

export const fetchAllSounds = () => dispatch => (
  SoundApiUtil.fetchAllSounds()
    .then(sounds => dispatch(receiveAllSounds(sounds)))
);

export const fetchSound = (soundId) => dispatch => (
  SoundApiUtil.fetchSound(soundId)
    .then(sound => dispatch(receiveSound(sound)))
);

export const createSound = (sound) => dispatch => (
  SoundApiUtil.createSound(sound)
    .then(sound => dispatch(receiveSound(sound)))
);

export const updateSound = (sound) => dispatch => (
  SoundApiUtil.updateSound(sound)
    .then(sound => dispatch(receiveSound(sound)))
);

export const destroySound = (soundId) => dispatch => (
  SoundApiUtil.destroySound(soundId)
    .then(() => dispatch(removeSound(soundId)))
);
