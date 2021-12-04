json.extract! sound, :id, :description, :uploader_id
json.artist sound.artist.username
json.photoUrl url_for(sound.photo) if sound.photo.attached?
json.soundUrl url_for(sound.sound) if sound.sound.attached?

if sound.wave.attached?
    json.waveUrl url_for(sound.wave)
else
    json.waveUrl 'https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/thatsus_wave.png'
end