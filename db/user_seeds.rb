User.destroy_all

User.create(
  name: "admin",
  password: "admin",
  password_confirmation: "admin"
)
