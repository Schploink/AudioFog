class Comment < ApplicationRecord
  validates :body, :track_id, :author, presence: true

  validates :body, length: {minimum: 1}

  belongs_to :sound,
  foreign_key: :sound_id,
  class_name: :Sound 

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User
  
end