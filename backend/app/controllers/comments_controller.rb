class CommentsController < ApplicationController
  # before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    comments = Post.find_by(id: request.headers["PostId"]).comments
    render json: CommentSerializer.new(comments)
  end

  # GET /comments/1
  # def show
  #   render json: @comment
  # end

  # POST /comments
  def create
    comment = Comment.new(comment_params)
    comment.user = User.find_by(username: params[:user])
    if comment.save
      render json: CommentSerializer.new(comment)
    else
      render json: {status: "error", message: comment.errors.full_messages[0]}
    end
  end

  # PATCH/PUT /comments/1
  # def update
  #   if @comment.update(comment_params)
  #     render json: @comment
  #   else
  #     render json: @comment.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /comments/1
  # def destroy
  #   @comment.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_comment
    #   @comment = Comment.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:content, :post_id)
    end
end
