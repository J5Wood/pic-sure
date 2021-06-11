class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    belongs_to :user
    has_many :comments
    has_one_attached :photo
    validates :content, presence: true

    def get_photo_url
      url_for(self.photo)
    end
end
