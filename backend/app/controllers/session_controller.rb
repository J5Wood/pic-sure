class SessionController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user.authenticate(params[:password])
            render json: UserSerializer.new(user)
        else
            byebug
        end
    end

    def auto_login
            token = request.headers['Authorization'].split(' ')[1] 
            decoded_hash = (JWT.decode(token, 'secret' , true, algorithm: 'HS256'))
            if (!decoded_hash.empty?)
                user = User.find_by(id: decoded_hash[0]["user_id"])
                render json: UserSerializer.new(user)
            else
                byebug
            end
    end

    private

    def session_params
        params.require(:session).permit(:username, :password)
    end

end