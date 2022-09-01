let dynamicChangeTime = document.getElementById("dynamicChangeTime");
let durationNot = document.getElementById("durationNotDynamic");
let lyrics = document.getElementById("lyrics");
let playBool = document.querySelectorAll(".isPlaying");
let songCol = document.querySelectorAll(".songInfoCard");


//console.log(btnBg);


let songsInfo = [
  {
    songOne: "Headlights",
    songArtist: "Alan walker",
    songPath: "/music/headlights.mp3",
    songImgPath: "/img/headlight.jpeg",
    fontColor: "#30CC41",
    color: "#6CB0C2",
    lyrics: "Oh, oh, I'm gonna use every heartbeat" +
      "<br>" + "Oh, oh, today not tomorrow" +
      "<br>" + "Oh, oh, I'm gonna disobey" +
      "<br>" + "Oh, oh, far from the shallows" +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Blinded by, blinded by headlights" +
      "<br>" + " Running in, running in headlights" +
      "<br>" + "Light me up, light me up, headlights" +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Blinded by, blinded by headlights" +
      "<br>" + "Running in, running in headlights" +
      "<br>" + "Light me up, light me up, headlights"

      +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights"

      +
      "<br>" + "Oh, oh, I got a taste of the good life" +
      "<br>" + "Oh, oh, I'm never letting go" +
      "<br>" + "Oh, I'm a cat, gotta use all my nine lives" +
      "<br>" + "Whoa, oh, I'm gonna do it all"

      +
      "<br>" + "And oh, I'm tipping on the edge" +
      "<br>" + "And oh, I don't wanna be scared" +
      "<br>" + "And oh, don't you pull the brakes" +
      "<br>" + "And oh, just take me all the way"

      +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Blinded by, blinded by headlights" +
      "<br>" + "Running in, running in headlights" +
      "<br>" + "Light me up, light me up, headlights" +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Blinded by, blinded by headlights" +
      "<br>" + "Running in, running in headlights" +
      "<br>" + "Light me up, light me up, headlights"

      +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Baby, I'm all about headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights" +
      "<br>" + "Headlights, headlights, headlights",
    fontColor: "#74C45F"

},
  {
    songOne: "Starboy",
    songArtist: "The Weekend",
    songPath: "/music/starboy.mp3",
    songImgPath: "/img/starboy.jpeg",
    fontColor: "#30CC41",
    color: "#CA053A",
    lyrics: "I'm tryna put you in the worst mood, ah" + "<br>" +
      "P1 cleaner than your church shoes, ah" + "<br>" +
      "Milli point two just to hurt you, ah" + "<br>" +
      "All red lamb just to tease you, ah" + "<br>" +
      "None of these toys on lease too, ah" + "<br>" +
      "Made your whole year in a week too, yeah" + "<br>" +
      "Main bitch out of your league too, ah" + "<br>" +
      "Side bitch out of your league too, ah" + "<br>" +

      "House so empty, need a centerpiece" + "<br>" +
      "Twenty racks, a table cut from ebony" + "<br>" +
      "Cut that ivory into skinny pieces" + "<br>" +
      "Then she clean it with her face, man" + "<br>" +
      "I love my baby" + "<br>" +
      "You talking money, need a hearing aid" + "<br>" +
      "You talking 'bout me, I don't see the shade" + "<br>" +
      "Switch up my style, I take any lane" + "<br>" +
      "I switch up my cup, I kill any pain" + "<br>" +

      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +

      "Every day a nigga try to test me, ah" + "<br>" +
      "Every day a nigga try to end me, ah" + "<br>" +
      "Pull off in that roadster SV, ah" + "<br>" +
      "Pockets over weight getting hefty, ah" + "<br>" +
      "Coming for the king, that's a far cry" + "<br>" +
      "I come alive in the fall time I" + "<br>" +
      "No competition, I don't really listen" + "<br>" +
      "I'm in the blue Mulsanne bumping New Edition" + "<br>" +

      "House so empty, need a centerpiece" + "<br>" +
      "Twenty racks, a table cut from ebony" + "<br>" +
      "Cut that ivory into skinny pieces" + "<br>" +
      "Then she clean it with her face, man" + "<br>" +
      "I love my baby" + "<br>" +
      "You talking money, need a hearing aid" + "<br>" +
      "You talking 'bout me, I don't see the shade" + "<br>" +
      "Switch up my style, I take any lane" + "<br>" +
      "I switch up my cup, I kill any pain" + "<br>" +

      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +

      "Let a nigga brag Pitt" + "<br>" +
      "Legend of the fall took the year like a bandit" + "<br>" +
      "Bought mama a crib and a brand new wagon" + "<br>" +
      "Now she hit the grocery shop looking lavish" + "<br>" +
      "Star Trek roof in that Wraith of Khan" + "<br>" +
      "Girls get loose when they hear this song" + "<br>" +
      "Hundred on the dash get me close to God" + "<br>" +
      "We don't pray for love, we just pray for cars" + "<br>" +

      "House so empty, need a centerpiece" + "<br>" +
      "Twenty racks, a table cut from ebony" + "<br>" +
      "Cut that ivory into skinny pieces" + "<br>" +
      "Then she clean it with her face" + "<br>" +
      "Man, I love my baby" + "<br>" +
      "You talking money, need a hearing aid" + "<br>" +
      "You talking 'bout me, I don't see the shade" + "<br>" +
      "Switch up my style, I take any lane" + "<br>" +
      "I switch up my cup, I kill any pain" + "<br>" +

      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +

      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "Look what you've done!" + "<br>" +
      "Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha" + "<br>" +
      "I'm a motherfuckin' Starboy" + "<br>",
    fontColor: "#74C45F"

  },
  {
    songOne: "Redemption",
    songArtist: "BesoMorph & Riell",
    songPath: "/music/redemption.mp3",
    songImgPath: "/img/redemption.jpeg",
    fontColor: "#30CC41",
    color: "#AB5B66",
    lyrics: "You say I make you nervous, a tragedy" + "<br>" +
      "I'm a beautiful disaster, a reckoning" + "<br>" +
      "You wonder how I got this way (You wonder how I got this way)" + "<br>" +
      "You think I'm someone to be saved, someone to clean up and tame" + "<br>" +
      "Oh, somethings never change, never change, oh" + " <br> " +

      "You think I would look pretty on your arm once you cover up my bruises and battle " + " <br> " +
      "But it always ends the same (But it always ends the same) " + " <br> " +
      "Can't bear the things I've had to face. Got you crying on your knees in pain " + " <br> " +
      "Oh, somethings never change, never change, oh" + " <br> " +

      "You'll break your back to make me feel again" + " <br> " +
      "Suffocate to make me breathe again" + " <br> " +
      "Lose your mind from endless praying" + " <br> " +
      "Somethings never change, never change, oh" + " <br> " +
      "Redemption never came " + " <br> " +

      "I stopped asking for forgiveness cause you should know only fools tread where the angels fear to go" + " <br> " +
      "But you keep trying to get too close (But you keep trying to get too close)" + " <br> " +
      "Saved myself by turning into stone, so save your judgment cause you just don't know" + " <br> " +
      "But somethings never change, never change, oh" + " <br> " +

      "They say I should feel guilty and change my ways. Leaving crumpled bodies in my wake" + " <br> " +
      "Swear I didn't mean to make them break (Swear I didn't mean to make them break)" + " <br> " +
      "But they're so delicate and so mundane, and they keep coming like a moth to flame" + " <br> " +
      "Oh, somethings never change, never change, mm" + " <br> " +

      "You'll break your back to make me feel again" + " <br> " +
      "Suffocate to make me breathe again" + " <br> " +
      "Lose your mind from endless praying" + " <br> " +
      "Somethings never change, never change, oh" + " <br> " +
      "Redemption never came" + " <br> ",
    fontColor: "#74C45F"

  },
  {
    songOne: "Last one standing",
    songArtist: "Skyler grey & Eminem",
    songPath: "/music/lastonestanding.mp3",
    songImgPath: "/img/lastonestanding.jpeg",
    fontColor: "#30CC41",
    color: "#9A8F83",
    lyrics:

      "[Skylar Grey:]" + "<br>" +
      "Now you see me standin' in the lights" + "<br>" +
      "But you never saw my sacrifice" + "<br>" +
      "Or all the nights I had to struggle to survive" + "<br>" +
      "Had to lose it all to win the fight" + "<br>" +
      "I had to fall so many times" + "<br>" +
      "Oh, now I'm the last one standin'" + "<br>" +

      "[Polo G:]" + "<br>" +
      "Uh, you weren't with me on the cold block nights" + "<br>" +
      "Now you front row for the spotlight" + "<br>" +
      "Now the diamonds in the Audemars bright" + "<br>" +
      "Jets overseas for a far flight" + "<br>" +
      "Young nigga on bullshit and I ball on 'em, Bill Cartwright" + "<br>" +
      "Knew I could shine through the darkness" + "<br>" +
      "I guess I always been a star type" + "<br>" +
      "That lion in me made my heart fight, could've been a victim of an opp pipe" + "<br>" +
      "Took a million risks just to get to this 'cause we ain't the ones that the cops like" + "<br>" +
      "Been so many times God tested me, they only see the answers I got right" + "<br>" +
      "They commentin' all on the blogs, tryna tell me how to live my life" + "<br>" +
      "And I waited so patiently, if you could take off, don't wait for me" + "<br>" +
      "No days off, grind faithfully, I keep thankin' God for savin' me" + "<br>" +
      "Front line, showcasin' our bravery" + "<br>" +
      "I know that top spot, it was made for me" + "<br>" +
      "It all paid off so we felt the struggle so painfully" + "<br>" +

      "[Skylar Grey:]" + "<br>" +
      "Now you see me standin' in the lights" + "<br>" +
      "But you never saw my sacrifice" + "<br>" +
      "Or all the nights I had to struggle to survive" + "<br>" +
      "Had to lose it all to win the fight" + "<br>" +
      "I had to fall so many times" + "<br>" +
      "Oh, now I'm the last one standin'" + "<br>" +

      "[Mozzy:]" + "<br>" +
      "Yeah, you know the code we gotta live by" + "<br>" +
      "Nevermind all the ice cubes on this wrist, wearin' the big body" + "<br>" +
      "Live by the gun, get bodied or it's hella time in that cell" + "<br>" +
      "It was hella times where I failed, where I had to double back from them Ls" + "<br>" +
      "Bet he don't double back when he tell" + "<br>" +
      "'Cause it ain't no comin' back when you tell" + "<br>" +
      "Why would you leave me here by myself? A nigga be lonely" + "<br>" +
      "Ayy, I blew the whole bag on they flights, ain't leavin' the homies" + "<br>" +
      "If he really gang, then get him a chain, no cubic zirconies" + "<br>" +
      "Why is arm in a stogey? Stood firm, never folded" + "<br>" +
      "Furthest thing from a rodent, you put the jacket on and you bogus" + "<br>" +
      "Yeah, big dawg and they know it" + "<br>" +
      "I had to spin off to stay focused" + "<br>" +
      "Longev' on the motion" + "<br>" +
      "We don't abandon ship when it's hopeless" + "<br>" +
      "Sound of the microphone, and they know it" + "<br>" +

      "[Skylar Grey (Eminem):]" + "<br>" +
      "I make it look easy" + "<br>" +
      "Like I made it overnight" + "<br>" +
      "I make it look easy" + "<br>" +
      "But you don't see the dark side" + "<br>" +
      "And all of the monsters I had to fight" + "<br>" +
      "And all of the nightmares" + "<br>" +
      "Made me stronger than life (Yeah)" + "<br>" +

      "[Eminem:]" + "<br>" +
      "Y'all say (What?), I've changed (Huh?)" + "<br>" +
      "Really, though? (Tell me), how so? (I got)" + "<br>" +
      "Got all (What?), this bread (Yeah)" + "<br>" +
      "I'm still (What?), sour dough (Huh)" + "<br>" +
      "I don't know, I'm a square peg in a round hole (Yeah)" + "<br>" +
      "Like a block of cheese in a paper towel roll" + "<br>" +
      "Rocky Balboa, never been no (What?), towel thrower" + "<br>" +
      "Even when I got kicked to the curb (Yeah)" + "<br>" +
      "Life knocked my dick in the dirt" + "<br>" +
      "I got back up, flipped it the bird" + "<br>" +
      "'Til I earned the attention I yearned" + "<br>" +
      "Not to mention, I learned" + "<br>" +
      "How to turn resentment and hurt" + "<br>" +
      "To an unquenchable thirst, in the simplest terms" + "<br>" +
      "It's revenge of the nerd, in every sense of the word" + "<br>" +
      "But all you see is the fame and the millions" + "<br>" +
      "You don't see the strength, the resilience (Nah)" + "<br>" +
      "How I rack my brain but it feels as if I'm tryna explain it to children (Damn)" + "<br>" +
      "So a lot of this pain isn't healin', you're escapin' at this angerous feeling" + "<br>" +
      "Almost like recreatin' a feelin' of 9/11 when the second plane hit the building" + "<br>" +
      "So let 'em paint you the villain" + "<br>" +
      "Some of this just may be a symptom (Yeah)" + "<br>" +
      "Of havin' way too much income (Mm)" + "<br>" +
      "But when you struggled every day just to get some (Yeah)" + "<br>" +
      "Now all of this hate is a syndrome (Yuh)" + "<br>" +
      "When they can't relate, and that stems from (What?)" + "<br>" +
      "Money lookin' like it grows on trees" + "<br>" +
      "Yeah, they're green but those aren't leaves (Leaves)" + "<br>" +
      "Sufficed to say, with every sacrifice I made" + "<br>" +
      "It's like I gave up my life to fame" + "<br>" +
      "All the nights that I lied awake" + "<br>" +
      "Nights I stayed up to write and pray" + "<br>" +
      "Had to claw, scratch and fight my way" + "<br>" +
      "Just follow me, and I'll light the way" + "<br>" +
      "Look to the hook if your sky look grey (Skylar Grey)" + "<br>" +
      "And rappers, how can we be on the same level now?" + "<br>" +
      "When I gotta look down and see these clowns that are on the ground" + "<br>" +
      "Bitch, I got the clouds beneath me" + "<br>" +
      "Ever since I put out the EP to the height of 2003 me" + "<br>" +
      "You ain't see the struggle to make it out the D" + "<br>" +
      "Because I made it somehow look easy" + "<br>" +

      "[Skylar Grey:]" + "<br>" +
      "Now you see me standin' in the lights" + "<br>" +
      "But you never saw my sacrifice" + "<br>" +
      "Or all the nights I had to struggle to survive" + "<br>" +
      "Had to lose it all to win the fight" + "<br>" +
      "I had to fall so many times" + "<br>" +
      "Oh, now I'm the last one standin'" + "<br>" +
      "Oh, now I'm the last one standin' " + "<br>",
    fontColor: "#74C45F"

    },
  {
    songOne: "Aurora",
    songArtist: "K-391 & RORY",
    songPath: "/music/aurora.mp3",
    songImgPath: "/img/aurora.jpeg",
    color: "#FBC07A",
    lyrics: "I've been looking through my memories, I've been tryna see your face" + "<br>" +
      "But you're moving like a mystery and you look the other way" + "<br>" +
      "If you found me in the pouring rain, would you let me in?" + "<br>" +
      "Would you look into your memories, tell me where you've been?" + "<br>" +

      "When the sun is going down, I feel you coming closer" + "<br>" +
      "Counting in the dark, I feel at home" + "<br>" +

      "I see you light up the sky, a dance in the night, Aurora" + "<br>" +
      "I see the stars in your eyes, believe in your lies, Aurora" + "<br>" +
      "Mine for a moment and then you're gone, and I'm still holding on" + "<br>" +
      "To a light in the sky, a dance in the night, Aurora" + "<br>" +

      "Feeling almost like a secret hidden in an emerald sea" + "<br>" +
      "And I'm drowning in your green eyes, got that power over me" + "<br>" +
      "If I told you how I really feel, would you let me in?" + "<br>" +
      "Would you tell me all your secrets, tell me where you've been?" + "<br>" +

      "When the sun is going down, I feel you coming closer" + "<br>" +
      "Counting in the dark, I feel at home" + "<br>" +

      "I see you light up the sky, a dance in the night, Aurora" + "<br>" +
      "I see the stars in your eyes, believe in your lies, Aurora" + "<br>" +
      "Mine for a moment and then you're gone, and I'm still holding on" + "<br>" +
      "To a light in the sky, a dance in the night, Aurora" + "<br>" +

      "I see you light up the sky, a dance in the night, Aurora" + "<br>" +
      "I see the stars in your eyes, believe in your lies, Aurora" + "<br>" +
      "Mine for a moment and then you're gone, and I'm still holding on" + "<br>" +
      "To a light in the sky, a dance in the night, Aurora" + "<br>",
    fontColor: "#74C45F"

   },
  {
    songOne: "Fake a smile",
    songArtist: "Alan walker & salem ilese",
    songPath: "/music/fakeasmile.mp3",
    songImgPath: "/img/fakeasmile.jpeg",
    color: "#9FA8AB",
    lyrics: "You and I up all night" + "<br>" +
      "Nothing's wrong, nothing's right" + "<br>" +
      "I swear these walls are upside down" + "<br>" +
      "Swear the roof is underground" + "<br>" +
      "Demons don't sleep at night" + "<br>" +
      "Oh, oh, oh" + "<br>" +

      "I try to turn off my mind" + "<br>" +
      "Say I'm doing just fine" + "<br>" +
      "But I'm screaming inside like (Oh-oh-oh-oh)" + "<br>" +
      "Say these words on repeat" + "<br>" +
      "While I'm trying to breathe" + "<br>" +
      "Now you're counting on me" + "<br>" +

      "So I fake a smile" + "<br>" +
      "But I know you know me too well" + "<br>" +
      "But it's alright" + "<br>" +
      "You're like heaven when I'm in hell" + "<br>" +

      "You were there, held me hard" + "<br>" +
      "Tasted light but felt the dark" + "<br>" +
      "I'm waiting for them all to see" + "<br>" +
      "I don't deserve your company" + "<br>" +
      "To love myself is way too hard" + "<br>" +
      "Oh, oh, oh" + "<br>" +

      "I try to turn off my mind" + "<br>" +
      "Say I'm doing just fine" + "<br>" +
      "But I'm screaming inside like (Oh-oh-oh-oh)" + "<br>" +
      "Say these words on repeat" + "<br>" +
      "While I'm trying to breathe" + "<br>" +
      "Now you're counting on me" + "<br>" +

      "So I fake a smile" + "<br>" +
      "But I know you know me too well" + "<br>" +
      "But it's alright" + "<br>" +
      "You're like heaven when I'm in hell" + "<br>" +

      "(No sleep...)" + "<br>" +
      "(It's alright...)" + "<br>" +
      "(No sleep...)" + "<br>" +

      "So I fake a smile" + "<br>" +
      "But I know you know me too well" + "<br>" +
      "But it's alright" + "<br>" +
      "You're like heaven when I'm in hell" + "<br>" +

      "So I fake a smile" + "<br>" +
      "But I know you know me too well" + "<br>" +
      "But it's alright" + "<br>" +
      "You're like heaven when I'm in hell" + "<br>" +

      "So I fake a smile" + "<br>" +
      "But I know you know me too well" + "<br>" +
      "But it's alright" + "<br>" +
      "You're like heaven when I'm in hell" + "<br>",
    fontColor: "#74C45F"
   },
  {
    songOne: "Glow",
    songArtist: "Corsak & Robinson",
    songPath: "/music/glow.mp3",
    songImgPath: "/img/glow.jpeg",
    color: "#9C0308",
    lyrics: "Prisoners of war" + "<br>" +
      "Me and you" + "<br>" +
      "And our baggage" + "<br>" +
      "Pieces that we lost" + "<br>" +
      "Like a cross" + "<br>" +
      "That we carry" + "<br>" +

      "But even though it's years ago you're still inside my mind" + "<br>" +
      "You should know that" + "<br>" +
      "Like a glow so beautiful it takes me back in time" + "<br>" +
      "To what we had" + "<br>" +

      "So when I close my eyes" + "<br>" +
      "It's just like you're by my side" + "<br>" +
      "And I can hold you like" + "<br>" +
      "Like it was the first time" + "<br>" +
      "Even if I only get to see you in my mind" + "<br>" +
      "It's not over" + "<br>" +
      "This is not a last goodbye" + "<br>" +
      "Because I love you like the first time" + "<br>" +

      "Even if I only get to see you in my mind" + "<br>" +
      "It's not over" + "<br>" +
      "This is not a last goodbye" + "<br>" +
      "Because I love you like the first time" + "<br>" +

      "These revolving doors" + "<br>" +
      "We go through" + "<br>" +
      "Leave us damaged" + "<br>" +
      "We were so in love" + "<br>" +
      "Me and you" + "<br>" +
      "But we panicked" + "<br>" +

      "We talk on the telephone and you act like you're fine" + "<br>" +
      "It's just a mask" + "<br>" +
      "'Cause I can hear it in your voice a part of you is still mine" + "<br>" +
      "So let's go back" + "<br>" +

      "So when you close your eyes" + "<br>" +
      "Pretend that I'm by your side" + "<br>" +
      "And I will hold you like" + "<br>" +
      "Like it was the first time" + "<br>" +
      "Even if you only get to see me in your mind" + "<br>" +
      "You should know that" + "<br>" +
      "This is not a last goodbye" + "<br>" +
      "Because I love you like the first time" + "<br>" +

      "Even if you only get to see me in your mind" + "<br>" +
      "You should know that" + "<br>" +
      "This is not a last goodbye" + "<br>" +
      "Because I love you like the first time" + "<br>",
    fontColor: "#74C45F",
   },
  {
    songOne: "Hello World",
    songArtist: "Alan walker & Torine",
    songPath: "/music/helloworld.mp3",
    songImgPath: "/img/helloworld.jpeg",
    color: "#D09306",
    fontColor: "#74C45F",
    lyrics: "404",
   },
  {
    songOne: "Army",
    songArtist: "Besomorph & Neoni",
    songPath: "/music/army.mp3",
    songImgPath: "/img/army.jpeg",
    color: "#E818A5",
    fontColor: "#74C45F",
    lyrics: "404"
   },
  {
    songOne: "Heading Home",
    songArtist: "Alan walker & Ruben",
    songPath: "/music/headinghome.mp3",
    songImgPath: "/img/headinghome.jpeg",
    color: "#DBC89B",
    fontColor: "#74C45F",
    lyrics: "404"
   },
  {
    songOne: "Pride & Fear",
    songArtist: "Thefatrat & Riell",
    songPath: "/music/pride.mp3",
    songImgPath: "/img/pride.jpeg",
    color: "#F5741B",
    fontColor: "#74C45F",
    lyrics: "404",
   }
  ];

playPause.addEventListener("click", play);
backward.addEventListener("click", back);
forward.addEventListener("click", forw);

let musicId = document.getElementById("audioPlay");

let currentMusic = 0;

const music = (i) => {
  currentMusic = i;
  let songs = songsInfo[i];
  musicId.src = songs.songPath;


  songImgBack.src = songs.songImgPath;
  songImgCard.src = songs.songImgPath;
  title.innerHTML = songs.songOne;
  artistMain.innerHTML = songs.songArtist;
  lyrics.innerHTML = songs.lyrics;


  var btnBg = document.querySelectorAll('.queryBtn');

  let j;
  for (j = 0; j < btnBg.length; ++j) {
    btnBg[j].style.background = songs.color;
  }

  for (var k = 0; k < playBool.length; ++k) {
    playBool[k].style.opacity = '0';
  }
  for (var l = 0; l < songCol.length; ++l) {
    songCol[l].style.color = "#FFFFFF";
  }

  if (currentMusic == 0) {
    playBool[0].style.opacity = '1';
    songCol[0].style.color = songs.fontColor;
  }
  else if (currentMusic == 1) {
    playBool[1].style.opacity = '1';
    songCol[1].style.color = songs.fontColor;
  }
  else if (currentMusic == 2) {
    playBool[2].style.opacity = '1';
    songCol[2].style.color = songs.fontColor;
  }
  else if (currentMusic == 3) {
    playBool[3].style.opacity = '1';
    songCol[3].style.color = songs.fontColor;
  }
  else if (currentMusic == 4) {
    playBool[4].style.opacity = '1';
    songCol[4].style.color = songs.fontColor;
  }
  else if (currentMusic == 5) {
    playBool[5].style.opacity = "1";
    songCol[5].style.color = songs.fontColor;

  }
  else if (currentMusic == 6) {
    playBool[6].style.opacity = "1";
    songCol[6].style.color = songs.fontColor;
  }
  else if (currentMusic == 7) {
    playBool[7].style.opacity = "1";
    songCol[7].style.color = songs.fontColor;

  }
  else if (currentMusic == 8) {
    playBool[8].style.opacity = "1";
    songCol[8].style.color = songs.fontColor;
  }
  else if (currentMusic == 9) {
    playBool[9].style.opacity = "1";
    songCol[9].style.color = songs.fontColor;
  }
  /*   playPause.style.background = songs.color;
      forward.style.background = songs.color;
      backward.style.background = songs.color;*/


  //console.log(songs.lyrics);
};

music(0);

function play() {
  let playPauseIcon = document.getElementById("playPauseIcon");
  if (playPauseIcon.getAttribute("src") == "/icons/player-play.svg") {
    playPauseIcon.src = "/icons/player-pause.svg";
    musicId.play();
  } else {
    playPauseIcon.src = "/icons/player-play.svg";
    musicId.pause();
  }
}

function forw() {
  if (currentMusic >= songsInfo.length - 1) {
    currentMusic = 0;
  }
  else {
    currentMusic++;
  }
  music(currentMusic);
  musicId.play();
  //playPause.click();
  playPauseIcon.src = "/icons/player-pause.svg";
}

function back() {
  console.log(currentMusic)
  if (currentMusic < songsInfo.length + 1) {
    if(currentMusic <= 0) {
      currentMusic = 0;
    }
    else {
      currentMusic--;
    }
  }
  music(currentMusic);
  musicId.play();
  playPauseIcon.src = "/icons/player-pause.svg";
}

//bgBtn();

/*function bgBtn() {
  if (title.innerHTML == "Headlights") {
    /*playPause.style.background = "#6CB0C2";
    forward.style.background = "#6CB0C2";
    backward.style.background = "#6CB0C2";
  }
  else if (title.innerHTML == "Starboy") {
    forward.style.background = "#CA053A";
    backward.style.background = "#CA053A";
    playPause.style.background = "#CA053A";
  }
}*/

musicId.addEventListener('timeupdate', (x) => {
  let progBar = document.getElementById("progBarSub");
  // console.log(x);

  const { currentTime, duration } = x.srcElement;

  let progBarTime = (currentTime / duration) * 100;

  progBar.style.width = progBarTime + "%";

  let c_min = Math.floor(currentTime / 60);
  let c_sec = Math.floor(currentTime % 60);

  if (c_sec < 10) {
    let c_out = "0" + c_sec;
    dynamicChangeTime.innerHTML = "0" + c_min + ":" + c_out;
  }
  else {
    dynamicChangeTime.innerHTML = "0" + c_min + ":" + c_sec;
  }

  let min = Math.floor(duration / 60);
  let sec = Math.floor(duration % 60);

  if (duration) {
    if (sec < 9) {
      durationNot.innerHTML = min + ":" + "0" + sec;
    }
    else {
      durationNot.innerHTML = min + ":" + sec;
    }
  }

});

musicId.addEventListener('ended', forw);

let tc = document.getElementById("timeControl");

tc.addEventListener('click', (x) => {
  const { duration } = musicId;
  let musicSetTime = (x.offsetX / x.srcElement.clientWidth) * duration;

  musicId.currentTime = musicSetTime;
})


function showLyric() {
  showLyr.classList.add("toShowLyr");
  x_icon.style.opacity = '1';
}

function disableLyric() {
  showLyr.classList.remove("toShowLyr");
  x_icon.style.opacity = '0';
}

function zeroSong() {
  currentMusic = 0;
  music(currentMusic);
  musicId.play();
  playPauseIcon.src = "/icons/player-pause.svg";
}

function firstSong() {
  currentMusic = 1;
  music(currentMusic);
  musicId.play();
  playPauseIcon.src = "/icons/player-pause.svg";

}

function secondSong() {
  currentMusic = 2;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";

}

function thirdSong() {
  currentMusic = 3;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";

}

function fourSong() {
  currentMusic = 4;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";

}

function fiveSong() {
  currentMusic = 5;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";

}

function sixSong() {
  currentMusic = 6;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";
}

function sevenSong() {
  currentMusic = 7;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";
}

function eightSong() {
  currentMusic = 8;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";
}

function nineSong() {
  currentMusic = 9;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";
}

function tenSong() {
  currentMusic = 10;
  music(currentMusic);
  musicId.play()
  playPauseIcon.src = "/icons/player-pause.svg";
}


function callCard() {
  queSong.classList.add("callCard");
}

function disableCard() {
  queSong.classList.remove("callCard");
}
console.log(1)

function callNav() {
  let callNav = document.getElementById("callNav");
  btn.classList.toggle("transitBtn");
  callNav.classList.toggle("callNav");
}
