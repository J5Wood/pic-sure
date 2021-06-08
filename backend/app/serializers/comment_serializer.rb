class CommentSerializer
  include JSONAPI::Serializer
  attributes :content

  attribute :user do |object|
    "#{object.get_username}"
  end
end
