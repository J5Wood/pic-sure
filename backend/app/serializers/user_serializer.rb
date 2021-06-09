class UserSerializer
    include JSONAPI::Serializer
    attributes :username

    attribute :token do |object|
        "#{object.get_token}"
    end
  end
  