class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      render json: UserSerializer.new(user)
    else
      render json: {status: "error", message: user.errors.full_messages[0]}
    end
  end

  private
    def user_params
      params.permit(:username, :password)
    end
end
