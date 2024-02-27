// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {

myName.innerHTML="My name is Kekee";
  myHobby.innerHTML="i like to work to make money";

  image1Button.src= "https://s.yimg.com/ny/api/res/1.2/lopKq61GgKpHTuro2SkGag--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk2MQ--/https://media.zenfs.com/en/hypebae_340/005d624b683af9baa5d785d7dfed2295";


image2Button.src= "https://i.pinimg.com/originals/c9/"
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
