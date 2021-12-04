class Sound < ApplicationRecord
  validates :description, :uploader_id, presence: true

  belongs_to :artist,
  foreign_key: :uploader_id,
  class_name: :User

  has_many :comments,
  foreign_key: :sound_id,
  class_name: :Comment
  
  has_one_attached :photo
  has_one_attached :sound
  has_one_attached :wave
end
