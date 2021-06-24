class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_one_attached :photo
    validates :content, presence: true
    serialize :likes

    def get_photo_url
      url_for(self.photo)
    end
end
