class CommentsController < ApplicationController

  def index
    comments = Post.find_by(id: request.headers["PostId"]).comments
    render json: CommentSerializer.new(comments)
  end

  def create
    comment = Comment.new(comment_params)
    comment.user = User.find_by(username: params[:user])
    if comment.save
      render json: CommentSerializer.new(comment)
    else
      render json: {status: "error", message: comment.errors.full_messages[0]}
    end
  end

  private
    def comment_params
      params.permit(:content, :post_id)
    end
end
