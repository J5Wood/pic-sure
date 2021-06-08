class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post

    def get_username
        self.user.username
    end
end
