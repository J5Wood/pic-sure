class UserSerializer
    include JSONAPI::Serializer
    attributes :username, :user_id

    attribute :token do |object|
        "#{object.get_token}"
    end
  end
  