class User < ApplicationRecord
has_secure_password
has_many :notes
has_many :recipes

validates :username, :email, presence: true, uniqueness: true
end
