class CommentsController < ApplicationController

  def index
    comments = Post.find_by(id: request.headers["PostId"]).comments
    render json: CommentSerializer.new(comments)
  end

  def create
    user = User.find_by(user_id: params[:userId])
    if !!user
      comment = user.comments.build(comment_params)
      if comment.save
        render json: CommentSerializer.new(comment)
      else
        render json: {status: "error", message: comment.errors.full_messages[0]}
      end
    else
      render json: {status: "error", message: "Unexpected Error Occurred"}
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    if comment.destroy
      render json: {commentId: params[:id]}
    else
      render json: {status: "error", message: comment.errors.full_messages[0]}
    end
  end

  private
    def comment_params
      params.permit(:content, :post_id)
    end
end
