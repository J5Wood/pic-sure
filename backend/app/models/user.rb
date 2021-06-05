class User < ApplicationRecord
    has_many :posts
    has_many :comments
    has_secure_password

    def get_token
        id_object = {user_id: self.id}
        token = encode_token(id_object)
    end

    def encode_token(id_object)
        JWT.encode(id_object, 'secret')
    end
end
