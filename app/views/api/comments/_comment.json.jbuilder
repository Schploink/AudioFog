
   
json.extract! comment, :id, :author_id, :body, :sound_id
json.created_at comment.created_at.to_date.to_formatted_s(:long)