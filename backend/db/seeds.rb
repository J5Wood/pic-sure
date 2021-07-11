a = User.create(username: "Joe", password: "pass", user_id: SecureRandom.uuid)
b = User.create(username: "Jill", password: "pass", user_id: SecureRandom.uuid)
c = User.create(username: "Frank", password: "pass", user_id: SecureRandom.uuid)


e = a.posts.create(content: "This is a post by #{a.username}", likes: [])
e.photo.attach(
    io: File.open('public/images/cat1.jpeg'),
    filename: "post-#{e.id}.jpg"
)
e.comments.create(content: "Post #{e.id} is amazing!", user: b)


f = b.posts.create(content: "This is another post by #{b.username}", likes: [])
f.photo.attach(
    io: File.open('public/images/dog1.jpeg'),
    filename: "post-#{f.id}.jpg"
)
f.comments.create(content: "Post #{f.id} is amazing!", user: c)


g = a.posts.create(content: "This is the last post by #{a.username}", likes: [])
g.photo.attach(
    io: File.open('public/images/cat2.jpeg'),
    filename: "post-#{g.id}.jpg"
)
g.comments.create(content: "Post #{g.id} is amazing!", user: c)


h = c.posts.create(content: "This is a post by #{c.username}", likes: [])
h.photo.attach(
    io: File.open('public/images/dog2.jpeg'),
    filename: "post-#{h.id}.jpg"
)
h.comments.create(content: "Post #{h.id} is amazing!", user: a)


i = c.posts.create(content: "This is another post by #{c.username}", likes: [])
i.photo.attach(
    io: File.open('public/images/cat3.jpeg'),
    filename: "post-#{i.id}.jpg"
)
i.comments.create(content: "Post #{i.id} is amazing!", user: b)


j = b.posts.create(content: "This is the last post by #{b.username}", likes: [])
j.photo.attach(
    io: File.open('public/images/dog3.jpeg'),
    filename: "post-#{j.id}.jpg"
)
j.comments.create(content: "Post #{j.id} is amazing!", user: a)