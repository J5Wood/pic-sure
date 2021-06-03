class PostSerializer
  include JSONAPI::Serializer
  attributes :content, :photo
  has_many :comments

  attribute :photo_url do |object|
    "#{object.get_photo_url}"
  end

  attribute :user do |object|
    "#{object.user.email}"
  end
end
