# Schema: User(name:string, password_digest:string, recovery_password_digest:string)
class User < ActiveRecord::Base
  has_secure_password
  has_secure_password :recovery_password, validations: false
end