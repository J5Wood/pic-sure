class PostSerializer
  include JSONAPI::Serializer
  attributes :content

  attribute :photo_url do |object|
    "#{object.get_photo_url}"
  end

  attribute :user do |object|
    "#{object.user.username}"
  end
end