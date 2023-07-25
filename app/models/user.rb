class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { in: 6..50, message:"is too short." }, allow_nil: true
    validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP, message: "is invalid. Make sure it’s written like example@email.com" }
    validates :username,  length: { in: 3..30 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "username can't be an email" }
    validates :birthday, presence: true
    validate :valid_month?, :valid_year?, :valid_day?
  
    attr_reader :password
  
    before_validation :ensure_session_token

    def self.find_by_credentials(cred, password)
        #debugger
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

    def valid_year?

      debugger

      if(!birthday) 
        errors.add(:birthday, "Not a valid date")
      else
        if birthday.year < 1910 || birthday.year > 2023
          errors.add(:birthday, "must be between 1910 and 2023")
          return false
        end
      end
      true
    end
      
    def valid_month?
      debugger
      if(!birthday) 
        errors.add(:birthday, "Not a valid date")
      else
        unless(birthday.month > 0 && birthday.month < 13)
          errors.add(:birthday, "Select a month")
        end
      end
      true
    end

    def valid_day?
      debugger
      if(!birthday)
        errors.add(:birthday, "Not a valid date")
      else

        debugger

        if (birthday.day < 1 || birthday.day > 31 ||
          ["November","September","April","June"].include?(birthday.month) || birthday.day > 30 ||
          birthday.month === "February")
          errors.add(:birthday, "Select a valid day for this month")
        end
      end
      true
    end


    private 
    
    def ensure_session_token
      self.session_token ||= generate_session_token
    end
    
    def generate_session_token
      SecureRandom::urlsafe_base64
    end
end
