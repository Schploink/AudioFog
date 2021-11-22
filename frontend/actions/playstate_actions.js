export const RECEIVE_CURRENT_SOUND = "RECEIVE_CURRENT_SOUND"
export const PLAY_SOUND = "PLAY_SOUND";
export const PAUSE_SOUND = "PAUSE_SOUND";

export const receiveCurrentSound = currentSoundId => ({
    type: RECEIVE_CURRENT_SOUND,
    currentSoundId
})

export const playSound = () => {
    return {
        type: PLAY_SOUND
    };
};

export const pauseSound = () => {
    return {
        type: PAUSE_SOUND
    };
};