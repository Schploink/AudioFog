class Sound < ApplicationRecord
  validates :description, :uploader_id, presence: true

  belongs_to :artist,
  foreign_key: :uploader_id,
  class_name: :User


end
