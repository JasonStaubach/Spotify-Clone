class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { in: 6..50 }, allow_nil: true
    validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be valid email" }
    validates :username,  length: { in: 3..30 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  
    attr_reader :password
  
    before_validation :ensure_session_token

    def self.find_by_credentials(cred, password)
        debugger
        if(cred =~ URI::MailTo::EMAIL_REGEXP)
          user = User.find_by(email: cred)
        else
          user = User.find_by(username: cred)
        end
        
        if user && user.is_password?(password)
            user
        else
            nil
        end
        
    end
  
    def password=(pass)
      @password = pass
      self.password_digest = BCrypt::Password.create(pass)
    end
  
    
    
    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end
    
    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private 
    
    def ensure_session_token
      self.session_token ||= generate_session_token
    end
    
    def generate_session_token
      SecureRandom::urlsafe_base64
    end
end
