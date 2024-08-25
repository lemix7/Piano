function playSound(keyCode) {
    let audio;
  
    switch (keyCode) {
      case 65: 
        audio = document.getElementById('keyA');
        break;

      case 87: 
        audio = document.getElementById('keyW');
        break;

      case 83: 
        audio = document.getElementById('keyS');
        break;

      case 69: 
        audio = document.getElementById('keyE');
        break;

      case 68: 
        audio = document.getElementById('keyD');
        break;

        case 70:
        audio = document.getElementById('keyF');
        break;

        case 84:
        audio = document.getElementById('keyT');
        break;

        case 71:
        audio = document.getElementById('keyG');
        break;

        case 89:
        audio = document.getElementById('keyY');
        break;

        case 72:
        audio = document.getElementById('keyH');
        break;

        case 85:
        audio = document.getElementById('keyU');
        break;

        case 74:
        audio = document.getElementById('keyJ');
        break;

        case 75:
        audio = document.getElementById('keyK');
        break;

        case 79:
        audio = document.getElementById('keyO');
        break;

        case 76:
        audio = document.getElementById('keyL');
        break;

        case 80:
        audio = document.getElementById('keyP');
        break;

        case 186:
        audio = document.getElementById('keySemicolon');
        break;

      default:
        return; 
    }
  
    // Reset the sound and play it
    audio.currentTime = 0; 
    audio.play();          
  }
  
  window.addEventListener('keydown', function(e) {
    playSound(e.keyCode);
  });
  