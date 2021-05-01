const submit= document.querySelector('.submit');
const text=document.querySelector('.text');
var count=0;
var check=[4,8,12,16,20,24,28,32,36,40,44,48,52];
// for clicking of the submit button
submit.addEventListener('click', function() {
    let text=document.querySelector('.text').value;
    // playing the notification
    document.getElementById('user-notif').play();
    count = count+ 1;
    output(text);
    document.querySelector(".text").value = "";
    if (check.includes(count)) {
        clear();
        console.log('done');
    }
})

// for pressing the enter key
text.addEventListener('keydown', function(e) {
    if (e.code === "Enter"){
        let text=document.querySelector('.text').value;
        count = count+ 1;
         // playing the notification
        document.getElementById('user-notif').play();
        output(text);
        document.querySelector(".text").value = "";
        if (check.includes(count)) {
            clear();
            console.log('done');
        }
    }
})

function output(input) {

    // removing all the characters except word, digits and spaces
    let text = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?']/g,"").replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");

    // changing different styles of text into simple understandable text
    // like
    // 'tell me a story' -> 'tell me story'
    // 'i feel happy' -> 'happy'
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/please/g, "")
        .replace(/so/,"")
        .replace(/so /,"");

    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // update DOM
    create__chat(input, product);

    // todo:make the bot speak
}


const mobile__screen= document.querySelector('.mobile__screen__chats');

function create__chat(input,product) {
    let user__chat= document.createElement('div');
    user__chat.className= "mobile__screen__chats__left chats";
    user__chat.id="user";
    user__chat.innerHTML=input;
    // setting up dynamic width
    user__chat.style.width=((input.length + 1) * 8) + 'px';
    mobile__screen.appendChild(user__chat);

    let bot__chat= document.createElement('div');
    bot__chat.className= "mobile__screen__chats__right chats";
    bot__chat.id="bot";
    bot__chat.innerHTML=product;
    // todo: change the width according to the input
    // setting up dynamic width
    bot__chat.style.width=((product.length + 1) * 8) + 'px';

    // setting a delay for the bot reply
    setTimeout(bot_reply,1000);
   
}

function bot_reply() {
    // playing the notification
    document.getElementById('bot-notif').play();
    let bot__chat= document.createElement('div');
    bot__chat.className= "mobile__screen__chats__right chats";
    bot__chat.id="bot";
    bot__chat.innerHTML=product;
    // todo: change the width according to the input
    // setting up dynamic width
    bot__chat.style.width=((product.length + 1) * 8) + 'px';
    mobile__screen.appendChild(bot__chat);
    
}

// clears the chat area after four chats
function clear() {
    const user= document.querySelectorAll("#user");
    const bot=document.querySelectorAll("#bot");
    for (var i=0; i<user.length-1;i++) {
        user[i].style.display="none";
        bot[i].style.display="none";
    }
    count=0;
}

// some triggers for the conversation

const robot = ["i am not a robot", "hi, fellow human what are you doing ?"]
const trigger = [
    //0 
    ["hi", "hey", "hello","yo"],
    //1
    ["how are you"],
    //2
    ["what is going on", "what is up"],
    //3
    ["happy", "good", "well", "fantastic", "cool", "great","same","nothing much","thats like a good boy"],
    //4
    ["bad", "bored", "tired", "sad","meh"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"],
    // 8
    ["fuck","holyshit","bullshit","motherfucker","bs","wtf"],
    // 9
    ["what is your name"],
    // 10
    ["good morning"],
    // 11
    ["good night"],
    // 12
    ["good evening"],
    //13
    ["abe sale","sale","chal nikal"],
    //14
    ["type to kar sakta h"]
    
];

const reply = [
    //0 
    ["Hello 👋", "Hi 👋", "Hey 👋", "Hi there 👋"],
    //1
    [
        "Fine... how are you ?",
        "Pretty well, how are you ?",
        "Fantastic, how are you ?"
    ],
    //2
    [
        "Nothing much"
    ],
    //3
    ["Glad to hear it"],
    //4
    ["Cheer up buddy 😊","Things will get better 😊"],
    //5
    ["What about ?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    [" Goodbye", "See you later"],
    // 8
    ["You disappointed me 😔"],
    // 9
    ["RohChat, what's your's ?"],
    // 10
    ["Good Morning 🌞"],
    // 11
    ["Good Night 🌙"],
    // 12
    ["Good Evening 🌙"],
    //13
    ["Bol Sale"],
    //14
    ["Ha, lekin mood nehi hain"]
];

const alternative = [
    " 🤐",
    "Ok",
    "Yup",
    "Nope"
];

function compare(triggerArray, replyArray, text) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

// menu
const open= document.querySelector('#open');
const close= document.querySelector('#close');
const nav= document.querySelector('.mobile__navbar');
open.addEventListener('click', function() {
    nav.classList.add("show");
    open.style.display="none";
    close.style.display="block";
})

close.addEventListener('click', function() {
    nav.classList.remove('show');
    open.style.display="block";
    close.style.display="none";
})

const screen_drop= document.querySelector('#screen__drop') ;
const layout_drop= document.querySelector('#layout__drop') ;

screen__drop.addEventListener('click', function() {
    document.querySelector('.screen__colors').classList.toggle('appear');
    layout__drop.classList.toggle('click_one_at_a_time');
})

layout__drop.addEventListener('click', function() {
    document.querySelector('.layout__colors').classList.toggle('appear');
    screen__drop.classList.toggle('click_one_at_a_time');
})

// about
document.querySelector('.about').addEventListener('click', function() {
    document.querySelector('.about__cloud').classList.toggle('show');
})

// changing colors
const mobile_layout= document.querySelector('.mobile__layout');
const mobile_screen= document.querySelector('.mobile__screen');
const mobile_edge= document.querySelector('.mobile__screen__edge');

// for layout
document.querySelector('.layout__black__icon').addEventListener('click', function() {
    mobile_layout.style="background:black";
    mobile_edge.style="background:black";
})

document.querySelector('.layout__purple__icon').addEventListener('click', function() {
    mobile_layout.style="background:#7F00FF";
    mobile_edge.style="background:#7F00FF";
})

document.querySelector('.layout__green__icon').addEventListener('click', function() {
    mobile_layout.style="background:greenyellow";
    mobile_edge.style="background:greenyellow";
})

document.querySelector('.layout__pink__icon').addEventListener('click', function() {
    mobile_layout.style="background:pink";
    mobile_edge.style="background:pink";
})

// for screen
document.querySelector('.screen__black__icon').addEventListener('click', function() {
    mobile_screen.style="background:black";
})

document.querySelector('.screen__purple__icon').addEventListener('click', function() {
    mobile_screen.style="background:#7F00FF";
})

document.querySelector('.screen__green__icon').addEventListener('click', function() {
    mobile_screen.style="background:greenyellow";
})

document.querySelector('.screen__pink__icon').addEventListener('click', function() {
    mobile_screen.style="background:pink";
})

// intro
const intro= document.querySelector('.intro');
const start= document.querySelector('#get__started');

start.addEventListener('click', function() {
    intro.classList.add('fade__intro');
})
