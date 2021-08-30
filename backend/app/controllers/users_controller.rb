class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    user.user_id = SecureRandom.uuid
    if user.save
      render json: UserSerializer.new(user)
    else
      render json: {status: "error", message: user.errors.full_messages[0]}
    end
  end

  def show
    user = User.find_by(id: [params[:id]])
    if user 
      posts = user.posts
      render json: PostSerializer.new(posts)
    else
      render json: {status: "error", message: user.errors.full_messages[0]}
    end
  end

  private
    def user_params
      params.permit(:username, :password)
    end
end
