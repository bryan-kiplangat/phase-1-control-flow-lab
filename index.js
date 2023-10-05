let result = ""

function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    result = "This one is on me!"
  } else if (ride > 200 && ride <= 2500 ) {
    result = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(destination) {

  return result = (destination === "NYC") ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip) {
  switch (tip) {

    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
      break;
  }

  return result
}

