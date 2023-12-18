// shout function
// turn string lowercase to uppercase

function shout(string) {
  return string.toUpperCase();
}

// whisper function
// turn string to lowercase

function whisper(string) {
  return string.toLowerCase();
}

// log shout to the console

function logShout(string) {
  console.log(string.toUpperCase());
}

// log whisper to the console

function logWhisper(string) {
  console.log(string.toLowerCase());
}

// if whisper function
// respond if lowercase

function sayHiToHeadphonedRoommate(string) {
  let friendlyString = "Let's have dinner together!";
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === friendlyString) {
    return "I would love to!";
  }
}
