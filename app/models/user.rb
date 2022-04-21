#has email:string 
#password_digest: string
#built in from has_scure_password
# password:string virtual attribute
# password_confirmation:string virtual attribute
#
class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, format: { with: /\A[^@\s]+@bedfordasd.org/, message: "Must be a valid Bedford Area School District email address"}
end
