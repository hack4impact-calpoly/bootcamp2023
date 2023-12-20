export default async (req, res) => {
    const data = [
      {
        id: 1,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044026848591486976/image.png",
        name: "Singify 1st Place SLO-Hacks 2021",
        point1: "• A ”finish the lyrics” game using Spotify, YouTube Transcript, and YouTube Search APIs, coupled with speech recognition and visual machine learning.",
        point2: "• Learned how to input data into a jason file and extract data from a jason file.",
        point3: "• Worked with Google’s teachable machine to differentate between right hand raise and left hand raises. Learned how to implement teh teachable machine algorithm into our program",
        link: "https://devpost.com/software/singify",
      },
  
      {
        id: 2,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044027789659082825/image.png",
        name: "Covid Bot 2nd Place Cisco Hackathon",
        point1: "• Worked on a team of three and created a python program that sends users by phone or email with open covid vaccine appointments.",
        point2: "• Worked with google forms and sheets API to manipulate with user data input.",
        point3: "• Worked on the chatbot that scanned user’s questions and looked for patterns within them. Based on the pattern the bot will answer the user’s covid question using a web scraper(Parse Hub).",
        link: "https://devpost.com/software/covid-vaccine-bot",
      },
  
      {
        id: 4,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044075721078870016/image.png",
        name: "Whack A Note",
        point1: "• Created a Whack the Mole like game with Bassy3 Board. The goal of the game is to flick on the switchs where the led blinks.",
        point2: "• Each flick you hit correctly, you will gain a point and each point you get a note from a song. End Goal is to get 32 points before the 20 sec timer runs out.",
        point3: "• Created using System Verilog, MCU, Muxs, Clock dividers, counters and etc.",
        link: "https://docs.google.com/document/d/1aBFzRF0Ks7xMG3dGD6h3_Z0PLHMzVWmxl5w35YvOTCA/edit?usp=sharing",
      },
  
      {
        id: 5,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044099374084542504/image.png",
        name: "Function Generator",
        point1: "• Created a function generator with Nucleo-L476RG Board, DAC(MCP4901) and 4x4 Keypad. It has a percent error of .13% for frequecies and .1% for duty cycles",
        point2: "• It can generate sine, square, triangle, and sawtooth waves. With Max frequencies 100Hz-500Hz.",
        point3: "• Using the keypad it the user can change teh frequency, waveform and duty cycle of the waveforms.",
        link: "https://docs.google.com/document/d/1Rfh0_Kf8kssjSrYkmTZTcqcP1A4cIhoVHbIVbq-M1Gw/edit?usp=sharing",
      },
  
      {
        id: 6,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044090344972763146/image.png",
        name: "Dragon Rush",
        point1: "• Started with a large java messy code-base. Learned how to read the codebase and refactored it using abstract class and interfaces.",
        point2: "• After cleaning it up, Ichanged the theme to dragons for the game and implemented A* star algorithm for enemy tracking in the game",
        point3: "• Reduced the codebase by 20%",
        link: "https://github.com/Westluu/cpe-203_project1",
      },
  
      {
        id: 7,
        image: "https://cdn.discordapp.com/attachments/981024250091687946/1044092070140325919/image.png",
        name: "Geoplacer",
        point1: "• Inspired by r/place, where the canvas the Cal Poly SLO campus. User go to a tile based on the map and place a color.",
        point2: "• The goal is to have the community work together to create art.",
        point3: "• Learned to work with sockets to create a real-time world chat between other players and google maps API to track users location",
        link: "https://devpost.com/software/geoplace",
      }
    ];
    res.status(200).json(data);
  };
  