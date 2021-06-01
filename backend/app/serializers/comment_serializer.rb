class CommentSerializer
  include JSONAPI::Serializer
  attributes :content
  belongs_to :post
end
