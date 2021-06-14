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
    post = Post.new(post_params)
    user = User.find_by(username: params[:user])
    post.user_id = user.id
    post.likes = []
    if post.save
      render json: PostSerializer.new(post)
    else
      render json: {status: "error", message: post.errors.full_messages[0]}
    end
  end

  def update
    post = Post.find_by(id: params[:id])
    if !!post
      if !post.likes.include?(params[:user])
        post.likes << params[:user]
      else
        post.likes.delete(params[:user])
      end
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
