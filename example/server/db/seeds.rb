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

artist_led_zep = Artist.create!(name: "Led Zepplin")
artist_rolling_stones = Artist.create!(name: "Rolling Stones")
artist_cream = Artist.create!(name: "Cream")

album_led_zep = Album.create!(
  name: "Led Zepplin",
  artist_id: artist_led_zep.id,
  image_url: "https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png"
)

album_led_zep_two = Album.create!(
  name: "Led Zepplin II",
  artist_id: artist_led_zep.id,
  image_url: "https://upload.wikimedia.org/wikipedia/en/2/20/Led_Zeppelin_-_Led_Zeppelin_II.jpg"
)

album_rolling_stones = Album.create!(
  name: "Rolling Stones",
  artist_id: artist_rolling_stones.id,
  image_url: "https://upload.wikimedia.org/wikipedia/en/8/82/RollingStones.album.cover.jpg"
)

album_fresh_cream = Album.create!(
  name: "Fresh Cream",
  artist_id: artist_cream.id,
  image_url: "https://upload.wikimedia.org/wikipedia/en/2/20/Fresh_cream.jpg"
)

song_1 = Song.create!(
  name: "Baby I'm gonna leave you",
  album_id:  album_led_zep.id,
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
  album_id:  album_led_zep.id,
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
  album_id:  album_led_zep_two.id,
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
  album_id:  album_rolling_stones.id,
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

song_5 = Song.create!(
  name: "Mona (I Need You Baby)",
  album_id: album_rolling_stones.id,
  embedded_url: "jE8lPCZCjzE",
  lyrics: "I say hey, Mona
Oh, Mona
I say yeah, yeah, yeah, yeah, Mona
Oh, Mona

I tell you Mona what I wanna do
I'll build a house next door to you
Can I see you sometimes?
We can blow kisses through the blinds
Yeah can I out come out on the front
And listen to my heart go bumpety bump
I need you baby that's no lie
Without your love I'd surely die

I say hey, Mona
Oh, Mona
I say yeah, yeah, yeah, yeah, Mona
Oh, Mona

I say hey, hey Mona
Oh, Mona
I say yeah, yeah, yeah, yeah, Mona
Oh, Mona

I tell you Mona what I wanna do
I'm gonna build a house next door to you
Can I see you sometime?
We can blow kisses through the blinds
Yeah can I out come out on the front
And listen to my heart go bumpety bump
I need you baby that's no lie
Without your love I'd surely die

I say hey, hey Mona
Oh, Mona
I say yeah, yeah, yeah, yeah, Mona
Oh, Mona"
)

song_6 = Song.create!(
  name: "Tell Me",
  album_id: album_rolling_stones.id,
  embedded_url: "MUa_gHbHmQE",
  lyrics: "I want you back again
I want your love again
I know you find it hard to reason with me
But this time it's different, darling you'll see
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You said we're through before
You walked out on me before
I tried to tell you, but you didn't want to know
This time you're different and determined to go
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
I wait as the days go by
I long for the nights to go by
I hear the knock on my door that never comes
I hear the telephone that hasn't rung
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta tell me you're coming back to me
You gotta"
)

song_7 = Song.create!(
  name: "N.S.U.",
  album_id: album_fresh_cream.id,
  embedded_url: "y8WYMkTP5_s",
  lyrics: "Driving in my car, smoking my cigar,
The only time I'm happy's when I play my guitar.

Singing in my yacht, what a lot I got,
Happiness is something that just cannot be bought.

I've been in and I'm out, I've been up and down,
I don't want to go until I've been all around.

What's it all about, anyone in doubt,
I don't want to go until I've found it all out."
)

song_8 = Song.create!(
  name: "Sleepy Time Time",
  album_id: album_fresh_cream.id,
  embedded_url: "5azvGKGbEjI",
  lyrics: "I'm a sleepy time baby, a sleepy time boy.
Work only maybe, life is a joy.

We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
Sleepy time time, sleepy time all the time.

Asleep in the daytime, asleep at night.
Life is all playtime; working ain't right.

We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
Sleepy time time, sleepy time all the time.

I have my Sunday, that ain't no lie.
But on Monday morning comes my favorite cry.

We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
We'll have a sleepy time time.
Sleepy time time, sleepy time all the time."
)

song_9 = Song.create!(
  name: "Spoonful",
  album_id: album_fresh_cream.id,
  embedded_url: "tv-dIdlqahY",
  lyrics: "Could fill spoons full of diamonds,
Could fill spoons full of gold.
Just a little spoon of your precious love
Will satisfy my soul.

Men lies about it.
Some of them cries about it.
Some of them dies about it.
Everything's a-fightin' about the spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.

Could fill spoons full of coffee,
Could fill spoons full of tea.
Just a little spoon of your precious love;
Is that enough for me?

Men lies about it.
Some of them cries about it.
Some of them dies about it.
Everything's a-fightin' about the spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.

Could fill spoons full of water,
Save them from the desert sands.
But a little spoon of your forty-five
Save you from another man.

Men lies about it.
Some of them cries about it.
Some of them dies about it.
Everything's a-fightin' about the spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful.
That spoon, that spoon, that spoonful."
)
