json.extract! user, :id, :username, :email

if user.profile_pic.attached?
    json.profilePicURL url_for(user.profile_pic)
else
    json.profilePicURL 'https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/tumblr_o12glwV45e1qagjnzo1_640.jpg'
end