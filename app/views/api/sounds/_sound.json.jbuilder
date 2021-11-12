json.extract! sound, :id, :description, :uploader_id
json.artist sound.artist.username
json.photoUrl url_for(sound.photo) if sound.photo.attached?
json.soundUrl url_for(sound.sound) if sound.sound.attached?