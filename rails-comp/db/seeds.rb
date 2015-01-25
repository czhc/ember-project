# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Hit.create_with(description: 'The song consists of two parts, titled "Yoncé" and "Partition". 
                              "Partition" has been described as "electro-R&B" that moves "from a sweet, girl-group pop sound to Dirty South hip-hop". 
                              Its production musically consists of a sparse synthesized arrangement, a thrusting bassline and a heavy drumbeat. 
                              Exploring the deep, sexual nature of Beyoncé, "Partition" depicts sexual intercourse in the back of a limousine. 
                              The closing minute of the song features a French word interpolation similar to a quote by actress Julianne Moore in the 1998 film The Big Lebowski.').
      find_or_create_by(name: 'Partition')

Hit.create_with(description: 'Contemporary music critics wrote generally positive reviews for "Drunk in Love", 
                              many of whom called it a follow-up to Beyoncé\'s and Jay-Z\'s song "Crazy in Love" (2003). 
                              They also commended its appeal to urban radio and the pair\'s vocals. 
                              "Drunk in Love" peaked at number two on the US Billboard Hot 100 chart and 
                              number one on the US Hot R&B/Hip-Hop Songs chart. 
                              Despite only being officially released in the US and the UK, 
                              it managed to appear on some international charts; it reached the top ten in France, 
                              Ireland, New Zealand and the United Kingdom.').
      find_or_create_by(name: 'Drunk in Love')

Hit.create_with(description: 'Musically, "Flawless" consists of two parts – "Bow Down" and "Flawless", 
                              divided by a speech titled "We should all be feminists" delivered by Nigerian writer 
                              Chimamanda Ngozi Adichie at a TEDxEuston conference. 
                              It is a trap-influenced song, with a dirty groove and a clattering beat. 
                              Upon its release, the song was received positively by music critics who particularly praised 
                              the use of Adichie\'s sample and widely discussed and acclaimed its lyrics. 
                              After released as a radio single, the song peaked at number 41 on the Billboard Hot 100, 
                              so far, in addition to charting on several of the magazine\'s component charts.').
      find_or_create_by(name: '**Flawless**')