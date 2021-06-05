# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create(username: "Joe", password: "pass")
b = User.create(username: "Jill", password: "pass")



e = a.posts.create(content: "This is a post by #{a.username}")
e.photo.attach(
    io: File.open('public/images/cat1.jpeg'),
    filename: "post-#{e.id}.jpg"
)
e.comments.create(content: "Post #{e.id} is amazing!", user: b)

f = a.posts.create(content: "This is another post by #{a.username}")
f.photo.attach(
    io: File.open('public/images/cat2.jpeg'),
    filename: "post-#{f.id}.jpg"
)
f.comments.create(content: "Post #{f.id} is amazing!", user: b)


g = a.posts.create(content: "This is the last post by #{a.username}")
g.photo.attach(
    io: File.open('public/images/cat3.jpeg'),
    filename: "post-#{g.id}.jpg"
)
g.comments.create(content: "Post #{g.id} is amazing!", user: b)




h = b.posts.create(content: "This is a post by #{b.username}")
h.photo.attach(
    io: File.open('public/images/cat4.jpeg'),
    filename: "post-#{h.id}.jpg"
)
h.comments.create(content: "Post #{h.id} is amazing!", user: a)

i = b.posts.create(content: "This is another post by #{b.username}")
i.photo.attach(
    io: File.open('public/images/cat5.jpeg'),
    filename: "post-#{i.id}.jpg"
)
i.comments.create(content: "Post #{i.id} is amazing!", user: a)

j = b.posts.create(content: "This is the last post by #{b.username}")
j.photo.attach(
    io: File.open('public/images/cat6.jpeg'),
    filename: "post-#{j.id}.jpg"
)
j.comments.create(content: "Post #{j.id} is amazing!", user: a)




# b.posts.create(content: "This is a post by #{b.username}")
# b.posts.create(content: "This is another post by #{b.email}")
# b.posts.create(content: "This is the last post by #{b.email}")




# c.posts.create(content: "This is a post by #{c.email}")
# c.posts.create(content: "This is another post by #{c.email}")
# c.posts.create(content: "This is the last post by #{c.email}")

# d.posts.create(content: "This is a post by #{d.email}")
# d.posts.create(content: "This is another post by #{d.email}")
# d.posts.create(content: "This is the last post by #{d.email}")


