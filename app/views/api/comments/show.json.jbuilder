json.partial! "api/comments/comment", comment: @comment

json.author do 
    json.extract! @comment.author, :id, :username

    if @comment.author.photo.attached?
        json.profilePicUrl url_for(@comment.author.photo)
    else
        json.profilePicUrl 'https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/tumblr_o12glwV45e1qagjnzo1_640.jpg'
    end
end