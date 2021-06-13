class User < ApplicationRecord
    has_many :posts
    has_many :comments
    has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true

    def get_token
        id_object = {user_id: self.id}
        token = encode_token(id_object)
    end

    def encode_token(id_object)
        JWT.encode(id_object, secret_key)
    end

    def secret_key
        Rails.application.credentials.secret_jwt_key
    end
end
