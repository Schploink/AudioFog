json.extract! user, :id, :username, :email

if user.photo.attached?
    json.profilePicURL url_for(user.photo)
else
    json.profilePicURL 'https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/tumblr_o12glwV45e1qagjnzo1_640.jpg'
end