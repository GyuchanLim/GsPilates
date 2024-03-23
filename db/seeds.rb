# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Post.destroy_all

# Create 2 posts
2.times do
  Post.create(
    title: Faker::Lorem.sentence(word_count: 3),
    body: Faker::Lorem.paragraph(sentence_count: 3)
  )
end

# c = Client.find(1)
# c.jobs.create(:subject => "Test", :description => "This is a test")

Session.destroy_all
Appointment.destroy_all
Client.destroy_all
Movement.destroy_all

Client.create(
  [{
    name: "Gyuchan",
    email: "GyuchanEmail@gmail.com",
    phone_number: "0212312312",
    note: "Gyuchan's NOTE"
  },
  {
    name: "Grace",
    email: "GraceEmail@gmail.com",
    phone_number: "0212312313",
    note: "Grace's NOTE"
  }]
)

for i in 1..5 do
  a = Appointment.create(
    # date: DateTime.now.strftime("%m/%d/%Y"),
    date: DateTime.yesterday,
    from: "#{1+i}pm",
    to: "#{2+i}pm",
    message: "Appointment Message #{i}"
  )
  s = Session.create(
    note: "Session Note #{i}",
    appointment: a
  )
end

Movement.create(
  [
    {movement_name: "Splits1"},
    {movement_name: "Splits2"},
    {movement_name: "Splits3"}
  ]
)