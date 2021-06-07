require 'bcrypt'

class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  # validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
  before_validation :ensure_session_token

  attr_reader :password 

  def generate_session_token
    SecureRandom::base64
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token 
    self.session_token ||= generate_session_token 
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.correct_password?(password)
      return user
    else
      return nil
    end
  end
end