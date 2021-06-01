class PostSerializer
  include JSONAPI::Serializer
  attributes :content, :photo
  has_many :comments
end
