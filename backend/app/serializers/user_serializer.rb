class UserSerializer
    include JSONAPI::Serializer
    attributes :username, :password
  end
  