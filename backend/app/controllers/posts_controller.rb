class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]


  def index
    posts = Post.all

    render json: PostSerializer.new(posts, { fields: { post: [:id, :attributes, :content, :photo_url, :user, :relationships, :comments]}})
  end

  # # GET /posts/1
  # def show
  #   photo = @post.photo
  #   render json: @post
  # end


  def create
    post = Post.new(post_params)
    post.user_id = 1
    if post.save
      render json: PostSerializer.new(post, { fields: { post: [:id, :attributes, :content, :photo_url, :user, :relationships, :comments]}})
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
      params.permit(:content, :photo, :user_id)
    end
end
