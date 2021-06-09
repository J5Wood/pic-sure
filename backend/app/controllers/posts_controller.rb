class PostsController < ApplicationController
  # before_action :set_post, only: [:show, :update, :destroy]

  def index
    posts = Post.all

    render json: PostSerializer.new(posts)
  end

  # GET /posts/1
  def show
    post = Post.find_by(id: params[:id])
    render json: PostSerializer.new(post)
    # render json: PostSerializer.new(post)
  end


  def create
    post = Post.new(post_params)
    user = User.find_by(username: params[:user])
    post.user_id = user.id
    if post.save
      render json: PostSerializer.new(post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /posts/1
  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /posts/1
  # def destroy
  #   @post.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_post
    #   @post = Post.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:content, :photo)
    end
end
