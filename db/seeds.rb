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
u2 = User.create(email: "bezier@they.com", username: "Bezier", password: "password")
u3 = User.create(email: "dtiffany@they.com", username: "Dtiff", password: "password")
u4 = User.create(email: "danielavery@they.com", username: "Daniel", password: "password")
u5 = User.create(email: "deetron@they.com", username: "Deetron", password: "password")
u6 = User.create(email: "johnroberts@they.com", username: "John", password: "password")
u7 = User.create(email: "pauljohnson@they.com", username: "Paul", password: "password")
u8 = User.create(email: "lauer@they.com", username: "Lauer", password: "password")
u9 = User.create(email: "axelboman@they.com", username: "Axel", password: "password")
u10 = User.create(email: "prinsthomas@they.com", username: "Prins", password: "password")
u11 = User.create(email: "echonomist@they.com", username: "Echonomist", password: "password")
u12 = User.create(email: "barker@they.com", username: "Barker", password: "password")
u13 = User.create(email: "arthurrussell@they.com", username: "Arthur", password: "password")



#sounds
s1 = Sound.create(description: "Lexicon", uploader_id: u2.id)
s2 = Sound.create(description: "Projector", uploader_id: u4.id)
s3 = Sound.create(description: "How RU Plush", uploader_id: u3.id)
s4 = Sound.create(description: "Body Electric", uploader_id: u5.id)
s5 = Sound.create(description: "Eyeline Match", uploader_id: u6.id)
s6 = Sound.create(description: "I Can Make You A Big Freak", uploader_id: u7.id)
s7 = Sound.create(description: "Power (feat Jasnau)", uploader_id: u8.id)
s8 = Sound.create(description: "Surfliner", uploader_id: u9.id)
s9 = Sound.create(description: "Traaens 1", uploader_id: u10.id)
s10 = Sound.create(description: "Daydreaming", uploader_id: u11.id)
s11 = Sound.create(description: "You're in my system", uploader_id: u1.id)
s12 = Sound.create(description: "That's Us/Wild Combination", uploader_id: u13.id)
s13 = Sound.create(description: "Illusion of Time", uploader_id: u4.id)
s14 = Sound.create(description: "Paradise Engineering", uploader_id: u12.id)

sound1 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Lexicon.mp3')
s1.sound.attach(io: sound1, filename: '01+Lexicon.mp3')
sound2 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/03+Projector.mp3')
s2.sound.attach(io: sound2, filename: '03+Projector.mp3')
sound3 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/03+How+RU+Plush.mp3')
s3.sound.attach(io: sound3, filename: '03+How+RU+Plush.mp3')
sound4 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Body+Electric.mp3')
s4.sound.attach(io: sound4, filename: '01+Body+Electric.mp3')
sound5 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Eyeline+Match.mp3')
s5.sound.attach(io: sound5, filename: '01+Eyeline+Match.mp3')
sound6 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/02+I+Can+Make+You+A+Big+Freak.mp3')
s6.sound.attach(io: sound6, filename: '02+I+Can+Make+You+A+Big+Freak.mp3')
sound7 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/09+Power+(feat+Jasnau).mp3')
s7.sound.attach(io: sound7, filename: '09+Power+(feat+Jasnau).mp3')
sound8 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/03+Surfliner.mp3')
s8.sound.attach(io: sound8, filename: '03+Surfliner.mp3')
sound9 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Traaens+1.mp3')
s9.sound.attach(io: sound9, filename: '01+Traaens+1.mp3')
sound10 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/05+Daydreaming.mp3')
s10.sound.attach(io: sound10, filename: '05+Daydreaming.mp3')
sound11 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+You%26apos%3Bre+In+My+System+(Atmospheric+vocal).mp3')
s11.sound.attach(io: sound11, filename: '01+You%26apos%3Bre+In+My+System+(Atmospheric+vocal).mp3')
sound12 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/06+That%26apos%3Bs+Us_Wild+Combination.mp3')
s12.sound.attach(io: sound12, filename: '06+That%26apos%3Bs+Us_Wild+Combination.mp3')
sound13 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/02+Illusion+of+Time.mp3')
s13.sound.attach(io: sound13, filename: '02+Illusion+of+Time.mp3')
sound14 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/01+Paradise+Engineering.mp3')
s14.sound.attach(io: sound14, filename: '01+Paradise+Engineering.mp3')

photo1 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Bezier.jpg')
s1.photo.attach(io: photo1, filename: 'Bezier.jpg')
photo2 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Song+For+Alpha+%5BPHLP09%5D.jpg')
s2.photo.attach(io: photo2, filename: 'Song+For+Alpha+%5BPHLP09%5D.jpg')
photo3 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/DTiffany.png')
s3.photo.attach(io: photo3, filename: 'DTiffany.png')
photo4 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Deetron.png')
s4.photo.attach(io: photo4, filename: 'Deetron.png')
photo5 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/JohnRoberts.jpg')
s5.photo.attach(io: photo5, filename: 'JohnRoberts.jpg')
photo6 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/PaulJohnson.png')
s6.photo.attach(io: photo6, filename: 'PaulJohnson.png')
photo7 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Lauer.jpg')
s7.photo.attach(io: photo7, filename: 'Lauer.jpg')
photo8 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/AxelBoman.jpg')
s8.photo.attach(io: photo8, filename: 'AxelBoman.jpg')
photo9 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/PrinsThomas.png')
s9.photo.attach(io: photo9, filename: 'PrinsThomas.png')
photo10 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Echonomist.png')
s10.photo.attach(io: photo10, filename: 'Echonomist.png')
photo11 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/TheSystem.png')
s11.photo.attach(io: photo11, filename: 'TheSystem.png')
photo12 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/Arthur+Russell.png')
s12.photo.attach(io: photo12, filename: 'Arthur+Russell.png')
photo13 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/DanielAveryAlessandroCortini.jpg')
s13.photo.attach(io: photo13, filename: 'DanielAveryAlessandroCortini.jpg')
photo14 = open('https://active-storage-audiofog-dev.s3.us-west-1.amazonaws.com/BARKER.png')
s14.photo.attach(io: photo14, filename: 'BARKER.png')

