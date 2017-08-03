# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.delete_all

Album.delete_all

Artist.delete_all

artist_1 = Artist.create!(name: "Led Zepplin")
artist_2 = Artist.create!(name: "Rolling Stones")

album_1 = Album.create!(name: "Led Zepplin", artist_id: artist_1.id)
album_2 = Album.create!(name: "Led Zepplin II", artist_id: artist_1.id)
album_3 = Album.create!(name: "Rolling Stones", artist_id: artist_2.id)

song_1 = Song.create!(
  name: "Baby I'm gonna leave you",
  album_id:  album_1.id,
  embedded_url: 'UyOg0mt2R2k',
  lyrics: "Babe, baby, baby, I'm gonna leave you.
I said baby, you know I'm gonna leave you.

I'll leave you when the summertime
Leave you when the summer comes a rollin'
Leave you when the summer comes along.

Babe, babe, babe, babe, babe, babe, baby, baby
I don't want to leave you
I ain't jokin' woman, I got to ramble.
Oh yeah
Baby, baby, babe, I believin'
We really got to ramble.
I can hear it callin' me the way it used to do
I can hear it callin' me back home!

Babe, I'm gonna leave you
Oh, baby, you know, I've really got to leave you
Oh I can hear it callin 'me
I said don't you hear it callin' me the way it used to do?
Ohhh

I know, I know
I know I never never never never never gonna leave your babe
But I got to go away from this place,

I've got to quit you, yeah
Ooh, baby baby baby baby baby baby ooh
Don't you hear it callin' me?
Woman, woman, I know, I know
It feels good to have you back again
And I know that one day baby, it's really gonna grow, yes it is.
We gonna go walkin' through the park every day.

Come what may, every day
Oh, mama baby
I'm gonna leave you go away

It was really, really good.
You made me happy every single day.
But now!
I've got to go away!

Baby, baby, baby,
That's when it's callin' me
I said that's when it's callin' me back home."
)

song_2 = Song.create!(
  name: "Dazed and Confused",
  album_id:  album_1.id,
  embedded_url: 'yO2n7QoyieM',
  lyrics: "Been dazed and confused for so long it's not true
Wanted a woman, never bargained for you
Lots of people talk and few of them know
Soul of a woman was created below, yeah

You hurt and abused tellin' all of your lies
Run around sweet baby, Lord how they hypnotize
Sweet little baby I don't know where you've been
Gonna love you baby, here I come again

Every day I work so hard
Bringin' home my hard earned pay
Try to love you baby, but you push me away
Don't know where you're goin'
Only know just where you've been
Sweet little baby, I want you again

Been dazed and confused for so long, it's not true
Wanted a woman, never bargained for you
Take it easy baby, let them say what they will
Will your tongue wag so much when I send you the bill"
)

song_3 = Song.create!(
  name: "Whole Lotta Love",
  album_id:  album_2.id,
  embedded_url: 'Q0utAHY3xo4',
  lyrics: "You need cooling
Baby I'm not fooling
I'm gonna send ya
Back to schooling

A-way down inside
A-honey you need it
I'm gonna give you my love
I'm gonna give you my love

Want to whole lotta love
Want to whole lotta love
Want to whole lotta love
Want to whole lotta love

You've been learning
Um baby I been learning
All them good times baby, baby
I've been year-yearning

A-way, way down inside
A-honey you need-ah
I'm gonna give you my love, ah
I'm gonna give you my love, ah oh

Whole lotta love
Want to whole lotta love
Want to whole lotta love
Want to whole lotta love

You've been cooling
And baby I've been drooling
All the good times, baby
I've been misusing

A-way, way down inside
I'm gonna give ya my love
I'm gonna give ya every inch of my love
I'm gonna give ya my love

Hey!
Alright! Let's go!

Whole lotta love
Want to whole lotta love
Want to whole lotta love
Want to whole lotta love

Way down inside
Woman, you need, yeah
Love

My, my, my, my
My, my, my, my
Lord
Shake for me girl

I wanna be your backdoor man
Hey, oh, hey, oh
Hey, oh, hey, oh
Ooh
Oh, oh, oh, oh

Cool, my, my baby
A-keep it cooling baby
A-keep it cooling baby
Ah-keep it cooling baby
Ah-keep it cooling baby
Ah-keep it cooling baby"
)

song_4 = Song.create!(
  name: "Route 66",
  album_id:  album_3.id,
  embedded_url: '4CgZnUXqvi8',
  lyrics: "Well if you ever plan to motor west
Just take my way that's the highway that's the best
Get your kicks on Route 66
Well it winds from Chicago to L.A.
More than 2000 miles all the way
Get your kicks on Route 66
Well goes from St. Louie down to Missouri
Oklahoma city looks oh so pretty
You'll see Amarillo and Gallup, New Mexico
Flagstaff, Arizona don't forget Winona
Kingman, Barstow, San Bernadino
Would you get hip to this kindly tip
And go take that California trip
Get your kicks on Route 66
Well goes from St. Louie down to Missouri
Oklahoma city looks oh so pretty
You'll see Amarillo and Gallup, New Mexico
Flagstaff, Arizona don't forget Winona
Kingman, Barstow, San Bernadino
Would you get hip to this kindly tip
And go take that California trip
Get your kicks on Route 66"
)
