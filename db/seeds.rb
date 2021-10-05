# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Sound.destroy_all
User.destroy_all

#users
u1 = User.create(email: "demolovato@they.com", username: "Wonderful Person", password: "secretdemo")
u2 = User.create(email: "bezier@they.com", username: "Bezier", password: "bezibee")
u3 = User.create(email: "schploink@they.com", username: "Chipmint", password: "chipmyint")
u4 = User.create(email: "kavery@they.com", username: "Daniel", password: "okaaaaay")
u5 = User.create(email: "ims@they.com", username: "Music System", password: "therapy")
u6 = User.create(email: "kacey@they.com", username: "Kacey", password: "password")
u7 = User.create(email: "corbin@they.com", username: "Corbin", password: "password")
u8 = User.create(email: "puppy@they.com", username: "Chris", password: "password")

#sounds
s1 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s2 = Sound.create(description: "Moody electronic synthcloud from the UK", uploader_id: u4.id)
s3 = Sound.create(description: "Moody electronic synthcloud from Europe", uploader_id: u5.id)
s4 = Sound.create(description: "Moody electronic synthcloud from SFs old upstart", uploader_id: u3.id)
s5 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s6 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s7 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s8 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s9 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s10 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s11 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s12 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s13 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s14 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s15 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s16 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s17 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
s18 = Sound.create(description: "Moody electronic synthcloud from SFs finest", uploader_id: u2.id)
