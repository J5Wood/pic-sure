class UserSerializer
    include JSONAPI::Serializer
    attributes :username, :token

    attribute :token do |object|
        "#{object.get_token}"
    end
  end
  