class PostsController < ApplicationController

  def index
    posts = Post.all
    render json: PostSerializer.new(posts)
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post)
  end

  def create
    user = User.find_by(user_id: params[:userId])
    if !!user
      post = user.posts.build(post_params)
      post.likes = []
      if post.save
        render json: PostSerializer.new(post)
      else
        render json: {status: "error", message: post.errors.full_messages[0]}
      end
    else
      render json: {status: "error", message: "Unexpected Error Occurred"}
    end
  end

  def update
    post = Post.find_by(id: params[:id])
    if !!post
      if !post.likes.include?(params[:userId])
        post.likes << params[:userId]
      else
        post.likes.delete(params[:userId])
      end
    end
    if post.save
      render json: PostSerializer.new(post)
    else
      render json: {status: "error", message: post.errors.full_messages[0]}
    end
  end

  private
    def post_params
      params.permit(:content, :photo)
    end
end
