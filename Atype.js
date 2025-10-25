const paragraphs = [
"The morning sun peeked over the horizon painting the sky in shades of gold and pink Birds sang in the distance while a gentle breeze rustled through the trees The air smelled fresh and invigorating encouraging people to start their day with energy and optimism",
"In the heart of the city the streets were alive with movement and color Street vendors sold fresh produce while musicians played cheerful tunes People hurried along sidewalks yet moments of laughter and friendly greetings created warmth amidst the chaos Life here was vibrant fast paced",
"A quiet forest path meandered between towering trees Sunlight filtered through the canopy creating dancing patterns on the forest floor Birds chirped overhead while a small brook babbled beside the trail The scent of moss and pine filled the air providing a peaceful retreat",
"The seaside village woke to the sound of crashing waves Fishermen prepared their boats and children played along the shore The salty breeze mingled with the aroma of freshly baked bread from local bakeries Colorful houses lined the cobbled streets offering a charming view",
"In the old library shelves of books reached toward the ceiling Sunlight streamed through large windows illuminating dust particles that danced in the air Students and readers sat quietly at wooden tables absorbed in stories and research The atmosphere was calm and contemplative",
"A gentle rain fell over the countryside nourishing the green fields and gardens Farmers moved carefully through muddy paths while birds sought shelter under trees The scent of wet earth and blooming flowers filled the air creating a serene and refreshing ambiance",
"The city park buzzed with activity as people jogged strolled and played Dogs ran freely chasing balls and each other while children laughed and screamed with joy Flowers bloomed in vibrant colors along the pathways The air smelled faintly of fresh grass",
"In the quiet cafe soft music played as patrons sipped coffee and read newspapers The aroma of freshly brewed drinks filled the space mingling with the scent of baked pastries Conversations were hushed punctuated by laughter and the clinking of cups",
"The mountain trail wound through rugged terrain offering breathtaking views at every turn Pine trees lined the path their needles brushing against hikers' hands A clear stream ran nearby reflecting sunlight and creating tiny rainbows in the mist The air was crisp and invigorating",
"On the sandy beach waves lapped at the shore rhythmically Children built sandcastles while seagulls circled above searching for scraps Colorful umbrellas dotted the coastline providing shade for families enjoying the sun The salty breeze carried laughter music and occasional shouts",
"The marketplace buzzed with energy as vendors called out to potential customers Fresh fruits vegetables spices and handmade crafts filled the stalls People moved among the crowds chatting and laughing while examining the colorful offerings The smell of spices flowers and baked goods",
"A small creek wound through the meadow its waters sparkling in the afternoon sun Wildflowers dotted the grassy banks swaying gently in the breeze Birds sang and insects buzzed in harmony completing a perfect natural symphony The peacefulness encouraged quiet reflection",
"The train station was bustling with passengers rushing to catch their departures Luggage trolleys rolled along the polished floors while announcements echoed overhead Some travelers lingered enjoying coffee and snacks while others hurried past The rhythm of movement created a vivid portrait",
"In the quiet village smoke rose lazily from chimneys as families prepared meals Children ran along cobblestone streets their laughter mixing with the sounds of clattering pots and distant bells Flowers bloomed in window boxes adding color to charming houses",
"The evening sky blazed with orange and purple hues signaling the close of day Streetlights flickered on casting soft glows across the sidewalks People strolled leisurely enjoying the last moments of sunlight Shops closed one by one leaving only the quiet hum",
"A cozy cabin nestled in the forest emitted smoke from its chimney Inside a fire crackled warmly in the hearth while a cat purred on the rug Outside the wind rustled leaves gently creating a comforting rhythm The smell of wood and freshly baked",
"The university campus bustled with students walking between buildings Laughter and conversations echoed across the green lawns Professors hurried along carrying books and papers Trees swayed in the breeze providing shade and a touch of nature amidst the busy academic environment",
"Along the riverbank fishermen cast their lines hoping for a good catch Ducks swam nearby creating ripples in the water The sun reflected off the surface producing a sparkling effect The gentle sound of flowing water mixed with birdsong providing a soothing environment",
"The theater lobby was alive with excitement as patrons gathered before the performance The smell of popcorn and perfume mingled creating a unique atmosphere People chatted enthusiastically sharing expectations and predictions for the show Lights dimmed and the audience slowly moved",
"In the desert the sun blazed overhead casting long shadows over sand dunes Wind sculpted patterns in the sand while a lone traveler moved steadily across the landscape Despite the harsh conditions the environment held a stark beauty The sky stretched endlessly",
"The bakery smelled of fresh bread and pastries drawing customers from the busy street Golden croissants and sweet rolls were arranged neatly on trays People chatted softly while enjoying morning coffee Outside the city woke to another day The warmth provided comfort",
"The snow covered landscape glistened under winter sunlight Pine branches bent under the weight of fresh powder creating natural archways along the path Animal tracks crisscrossed the pristine surface telling stories of nocturnal wanderings The air was crisp and cold carrying",
"The art gallery stood quiet and imposing white walls displaying vibrant works of creativity Visitors moved slowly from piece to piece some whispering observations others lost in silent contemplation Natural light from skylights illuminated brushstrokes and textures revealing the artists",
"The rooftop garden offered an escape from the urban landscape below Colorful containers held herbs vegetables and flowers creating a patchwork of life against the concrete backdrop Bees buzzed between blossoms while birds visited birdbaths The city's sounds softened here replaced",
"The fog rolled in from the sea blanketing the coastal town in mystery Streetlights cast hazy halos in the damp air and distant ship horns sounded mournful through the mist Footsteps echoed on wet pavement as figures moved like shadows through",
"The carnival grounds pulsed with excitement and sensory overload Bright lights flashed against the night sky as rides spun and tilted Laughter mingled with screams of delight and the tinny music of carousel organs The air smelled of popcorn cotton candy",
"The ancient ruins stood silhouetted against the setting sun weathered stones telling stories of civilizations long past Crumbling columns reached toward the sky like fingers of history Moss and wildflowers grew in crevices nature reclaiming what humans had built",
"The ice skating rink glimmered under floodlights as figures twirled and glided across the frozen surface Cold air carried the sound of blades cutting ice and occasional laughter as someone stumbled Parents helped children find their balance while experienced skaters",
"The hospital corridor was quiet during the night shift fluorescent lights humming overhead Nurses moved with practiced efficiency their soft soled shoes making little sound on polished floors Monitors beeped in rhythmic patterns from behind closed doors The air carried",
"The rooftop bar buzzed with conversation as the city lights twinkled below Glasses clinked and ice swirled in cocktails while patrons leaned against the railing taking in the panoramic view A gentle breeze carried music from hidden speakers The bartender worked",
"The autumn forest was ablaze with color as leaves turned from green to gold crimson and amber A crisp breeze sent them cascading to the forest floor creating a crunchy carpet underfoot Squirrels scurried about gathering nuts for the coming winter",
"The abandoned amusement park stood silent rides frozen in mid motion as if waiting for visitors who would never return Paint peeled from carousel horses and roller coaster tracks Weeds grew through cracks in the pavement slowly reclaiming the land",
"The hot air balloon festival painted the dawn sky with vibrant colors Dozens of balloons inflated slowly their fabric canopies blossoming like flowers against the morning light Flames roared periodically sending the crafts ascending into the atmosphere Passengers looked down",
"The monastery garden was a place of perfect tranquility Monks in simple robes moved silently among vegetable plots and flower beds tending plants with gentle care Stone pathways meandered through the space leading to quiet benches for meditation",
"The night market came alive as darkness fell stalls illuminated by strings of colorful lights Vendors called out offering everything from exotic foods to handmade crafts The air was thick with aromas of grilling meat spices and sweet desserts",
"The vineyard stretched across rolling hills rows of grapevines creating geometric patterns against the landscape Sunlight filtered through leaves ripening fruit that would soon become wine The air smelled of earth grapes and distant rain A stone farmhouse",
"The underground subway station was a world of constant motion Trains arrived and departed with rushing air and screeching brakes People flowed up and down escalators their faces illuminated by digital advertisements Musicians played for coins in designated corners",
"The botanical greenhouse was a humid paradise filled with exotic plants from around the world Orchids bloomed in impossible colors while ferns unfurled their delicate fronds A small waterfall cascaded into a pond where koi fish swam lazily Visitors moved",
"The lighthouse stood firm against the rocky coast its beam cutting through the night fog at regular intervals Waves crashed against the cliffs below their spray reaching the white washed tower Inside spiral stairs led to the lantern",
"The ski resort buzzed with winter energy as people bundled in colorful gear moved between slopes and lodges The mountain was carved with trails of varying difficulty each dotted with tiny figures descending in controlled chaos The air was cold",
"The flower market was a riot of color and fragrance Stalls overflowed with blooms of every variety from common daisies to exotic orchids Florists arranged bouquets with artistic precision while customers chose flowers for every occasion The air was",
"The observatory dome opened to reveal the night sky stars scattered across darkness like diamonds on velvet The powerful telescope brought distant galaxies into view their light traveling millions of years to reach this moment Visitors took turns peering into",
"The fishing harbor was active before dawn as boats returned with their night's catch Seagulls circled overhead their cries mixing with the rumble of diesel engines and the splash of water against hulls Fishermen moved with practiced efficiency sorting",
"The rooftop greenhouse was an urban oasis glass walls protecting plants from the city below Tomatoes ripened on vines while herbs grew in neat rows Bees buzzed between flowers pollinating with purpose The gardener moved carefully among the plants",
"The antique shop was a treasure trove of forgotten stories Dust motes danced in shafts of light that illuminated glass cases and crowded shelves Each item held history a tarnished silver locket a yellowed book with marginalia",
"The ice cream parlor was a colorful haven of sweet treats Glass cases displayed dozens of flavors in pastel hues from classic vanilla to exotic combinations Children pressed their faces against the glass while parents deliberated choices",
"The campsite was nestled in a forest clearing tents arranged in a circle around a central fire pit Campers moved between activities some preparing food others setting up hammocks or organizing gear The smell of woodsmoke and coffee mingled",
"The rooftop yoga class began as the sun rose over the city skyline Mats were arranged in neat rows on the wooden deck participants facing east to greet the day The instructor's voice was calm and guiding leading through poses",
"The science museum buzzed with excited children and curious adults Interactive displays invited hands on exploration of principles from physics to biology A massive dinosaur skeleton dominated the main hall its bones telling stories of ancient life",
"The winter market was a magical gathering in the town square Wooden stalls sold handmade gifts warm clothing and seasonal treats The air was cold but filled with the aroma of mulled wine roasted nuts and evergreen boughs",
"The artist's studio was a controlled chaos of creativity Canvases in various stages of completion leaned against walls while brushes soaked in jars of turpentine Tubes of paint were squeezed and arranged on a wooden palette",
"The community garden was a patchwork of individual plots each reflecting the personality of its gardener Some grew neat rows of vegetables others cultivated wildflowers and a few created elaborate landscapes with paths and water features",
"The rooftop skate park was an unexpected urban oasis ramps and rails arranged against a backdrop of city skyline Skateboards rolled across concrete with a distinctive rhythm occasionally punctuated by the sound of a trick successfully landed or a fall",
"The night market was a feast for the senses food stalls sizzling with exotic dishes while vendors called out their specials Colorful lanterns illuminated crowds moving between stalls their conversations creating a constant hum of activity Musicians played traditional instruments",
"The greenhouse laboratory was a sterile environment where scientific precision met natural growth Researchers in white coats moved between rows of experimental plants recording data and adjusting conditions Specialized lighting mimicked various natural environments while sensors monitored",
"The riverside cafe was perfectly positioned to watch the water flow by Outdoor tables offered views of passing boats while inside large windows framed the changing light on the water's surface Patrons sipped drinks and worked on laptops",
"The rooftop apiary was an unexpected sanctuary in the heart of the city Beehives lined the perimeter of the green roof their inhabitants buzzing between flowers and returning laden with pollen The beekeeper moved carefully among the hives checking",
"The meditation center was a place of profound quiet its minimalist design encouraging inward focus Soft natural light filtered through sheer curtains illuminating cushions arranged in neat rows on polished wood floors The air was still and cool",
"The underground music venue was intimate and raw brick walls covered with posters from countless previous shows The stage was small but powerful its spotlight cutting through dim light and haze As the band began to play the room",
"The rooftop farm was a testament to urban innovation raised beds and hydroponic systems transforming empty space into productive land Vegetables grew in neat rows while fruit vines climbed trellises The farmer moved between plants checking for pests",
"The lakeside cabin was a perfect retreat from modern life its wooden porch offering panoramic views of water and mountains A small dock extended into the clear lake a canoe tied to its side waiting for exploration Inside the space",
"The community kitchen was a place of cultural exchange and culinary education Multiple cooking stations allowed different groups to prepare traditional foods simultaneously The air was a complex tapestry of aromas spices herbs baking bread and sizzling",
"The rooftop observatory offered a unique perspective on both the city and the cosmos A powerful telescope pointed toward the heavens its lens bringing distant celestial objects into stunning clarity The astronomer guided visitors through constellations planets and nebulae",
"The underground art gallery was a hidden gem its converted industrial space providing the perfect backdrop for contemporary works Exposed brick walls and high ceilings created an atmosphere of urban sophistication Track lighting illuminated paintings and sculptures",
"The rooftop classroom was an innovative educational space where learning met the environment Students sat at desks arranged to face outward with the city as their backdrop Lessons often incorporated the surroundings weather patterns visible in the sky",
"The community workshop was a space where ideas became tangible through tools and collaboration Workbenches were arranged with equipment for woodworking metalworking electronics and textile arts Members moved between projects sometimes offering advice or assistance to others",
"The rooftop theater was an unexpected venue where performances met the skyline A simple stage was set against a backdrop of city lights with seating arranged to take advantage of the urban panorama As actors performed the city became part",
"The underground hydroponic farm was a futuristic vision of agriculture its LED lights casting a purple glow on rows of plants growing without soil Nutrient rich water circulated through the system delivering precisely what each plant needed",
"The rooftop wildlife sanctuary was an unexpected haven in the urban landscape Native plants provided food and shelter for birds butterflies and beneficial insects Small water features offered drinking spots and birdbaths The naturalist who maintained the space",
"The community recording studio was a place where musical dreams became reality Soundproofed rooms contained equipment for every step of the creative process from writing to mixing Musicians of all genres and skill levels collaborated their diverse backgrounds",
"The rooftop sculpture garden was an open air museum where art met sky Pieces in various materials and styles were arranged to take advantage of changing light and weather conditions Some works incorporated natural elements responding to wind and",
"The underground gaming lounge was a retreat for digital adventurers its low lighting and comfortable stations creating an immersive environment Multiple screens glowed with different virtual worlds while players wore headsets that connected them to teammates",
"The rooftop dance studio was a place where movement met the horizon Mirrors reflected dancers against a backdrop of sky and cityscape The sprung floor provided perfect support for leaps and turns while the open air offered natural ventilation",
"The community repair cafe was a space where broken things found new life Tables were organized by specialty electronics clothing furniture bicycles with tools and volunteers ready to assist People brought items they might otherwise discard",
"The rooftop writing retreat offered writers a space elevated above daily distractions Simple desks were arranged to face outward with views that inspired rather than interrupted Some writers typed furiously while others stared into the distance",
"The underground speakeasy was a step back in time its dim lighting and jazz music creating an atmosphere of clandestine sophistication Bartenders in period attire mixed classic cocktails with practiced flair their movements precise and theatrical",
"The rooftop wellness center was a sanctuary for mind and body elevated above urban stress Yoga mats were arranged for morning practice as the sun rose over the skyline Meditation cushions offered a place for quiet reflection",
"The community makerspace was a workshop of infinite possibilities its tools and equipment available to members with diverse interests and skills 3D printers whirred beside traditional woodworking tools while laser cutters etched designs into various",
"The rooftop cinema was an enchanting venue where films met the stars Comfortable seating was arranged with blankets and pillows for cozy viewing As dusk fell the screen came to life against a backdrop of city lights",
"The underground library was a quiet refuge beneath the city bustle its shelves carved from earth and stone Soft lighting illuminated reading nooks where visitors escaped into other worlds through books The air was cool and still",
"The rooftop beekeeping sanctuary was an unexpected intersection of nature and urban life Hives were carefully arranged to maximize sun exposure while minimizing wind The beekeeper moved with practiced calm among the colonies explaining the importance",
"The community art studio was a space where creative expression was accessible to all Easels stood ready for painters pottery wheels awaited sculptors and printing presses offered possibilities for graphic artists The air was filled with the energy",
"The rooftop astronomy club gathered weekly to explore the cosmos from their urban perch Telescopes of various sizes were arranged to point toward different celestial objects The amateur astronomer who led the group shared knowledge with enthusiasm",
"The underground fermentation lab was a place where science met culinary tradition Glass vessels held bubbling concoctions at various stages kombucha kefir kimchi and more The air was thick with distinctive sour smells that signaled beneficial",
"The rooftop music conservatory offered a unique learning environment where students practiced against the sky Soundproof practice rooms allowed for focused work while common areas encouraged collaboration The acoustics were designed to work with the open",
"The mountain cabin stood blanketed in pristine snow smoke curling from its stone chimney Inside a fire crackled while skis rested by the door Ice crystals decorated windowpanes creating intricate patterns that transformed sunlight into rainbows",
"The airport terminal hummed with perpetual motion travelers rushing to gates while announcements echoed overhead Suitcases rolled across polished floors as children pointed at planes through massive windows The air smelled of coffee cleaning products",
"The bookstore closed for the night leaving only the soft glow of security lights Dust motes danced in moonbeams that slanted through high windows The scent of aging paper and leather bindings created an atmosphere of quiet wisdom",
"The desert oasis shimmered like a mirage as sunset painted the sand in gold and crimson Palm fronds rustled in the cooling breeze while water reflected the changing sky Date palms offered shade to weary travelers",
"The farmers market buzzed with morning energy as vendors arranged colorful produce in neat rows Tomatoes glistened in sunlight while fresh herbs released their fragrances Customers chatted with growers exchanging recipes and stories",
"The riverside picnic spot was a perfect summer sanctuary Blankets dotted the grassy bank while children splashed in shallow water A gentle breeze carried the scent of wildflowers and sunscreen Laughter mingled with the sound of water",
"The old movie theater was a palace of memories its velvet curtains faded but still majestic Popcorn butter scent lingered in the air decades after the last showing Dust motes danced in projector beams that never",
"The rooftop garden party glowed under string lights as guests mingled among container plants The city skyline created a dramatic backdrop as cocktails clinked and soft music played A breeze carried the scent of jasmine",
"The foggy morning transformed the countryside into an ethereal landscape Trees emerged like ghosts from the mist while familiar paths became mysterious adventures Bird calls sounded muffled and distant Dewdrops clung to spiderwebs creating",
"The hospital emergency room pulsed with controlled chaos Doctors and nurses moved with practiced efficiency through corridors filled with urgency Monitors beeped in rhythmic patterns while families waited anxiously The air smelled",
"The lakeside campfire drew people together as darkness fell Flames danced casting flickering light on faces and creating shadows beyond the circle The scent of woodsmoke mingled with marshmallow roasting",
"The snow covered village street looked like a Christmas card come to life Lampposts cast warm halos on pristine white while smoke curled from chimneys Footsteps created a path through the otherwise",
"The tropical beach at sunrise offered a moment of pure magic The sky transformed from deep purple to brilliant orange as the first rays touched the water Palm fronds silhouetted against",
"The old fashioned candy shop was a sweet wonderland of glass jars and colorful treats The air was thick with sugar and chocolate scents that transported visitors to childhood",
"The university lecture hall filled with the quiet energy of learning Sunlight streamed through tall windows as students found their seats The professor arranged notes at the podium",
"The subway car during rush hour was a study in controlled intimacy Strangers stood shoulder to shoulder each lost in their own world while physically connected to others",
"The botanical garden in spring was a celebration of renewal Cherry blossoms created pink canopies overhead while tulips painted the ground in vibrant colors The air was",
"The fishing boat rocked gently on the open ocean surrounded by endless blue The morning sun sparkled on water as the crew prepared their nets Seagulls circled",
"The rooftop bar at night offered an urban escape with panoramic views Glasses clinked as conversations flowed against the backdrop of city lights A gentle breeze",
"The quiet monastery courtyard was a sanctuary of peace and contemplation Stone pathways meandered through carefully tended gardens A single fountain provided the only sound"
]

const paraContainer = document.querySelector('.para');
const resetBtn = document.getElementById('resetBtn');
const inputField = document.getElementById('typingInput');
const results = document.querySelector('.result');
const time = document.getElementById('time')
  time.classList.add('time')

let charSpans = [];
let currentParaWords = [];
let isTimerRunning = false;
let seconds = 60;
let timerInterval;

function resultDisplay(){
  const inputWords = inputField.value.trim().split(/\s+/);
  const typedWords = inputWords

    let correctWords = 0;
    let incorrectWords = 0;

    currentParaWords.forEach((word, idx) => {
      if (inputWords[idx] === word) {
        correctWords += 1;
      } else {
        incorrectWords += 1;
      }
    });

    // Accuracy: only based on typed words
    let correctTyped = 0;
    typedWords.forEach((word, idx) => {
        if (word === currentParaWords[idx]) correctTyped += 1;
    });
    const accuracy = typedWords.length > 0 ? ((correctTyped / typedWords.length) * 100).toFixed(2) : 0;

    // WPM Calculation (keep same as before)
    const timeTaken = (60 - seconds) / 60; // convert seconds to minutes
    const wpm = Math.round(correctWords / (timeTaken || 1)); // avoid divide-by-zero

    results.textContent = `Correct Words: ${correctWords} | Incorrect Words: ${incorrectWords} | Total Words: ${currentParaWords.length} | WPM: ${wpm} | Accuracy: ${accuracy}%`;
}

// Generate random paragraph
function generateRandomPara() {
  paraContainer.innerHTML = '';
  inputField.value = '';
  results.textContent = '';

  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  const para = paragraphs[randomIndex];

  currentParaWords = para.split(' '); // For word counting

  charSpans = [];

  const words = para.split(' ');

  words.forEach((word) => {
    const wordSpan = document.createElement('span');

    word.split('').forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.classList.add('pending');
      wordSpan.appendChild(charSpan);
      charSpans.push(charSpan);
    });

    // Add space after each word
    const spaceSpan = document.createElement('span');
    spaceSpan.textContent = ' ';
    spaceSpan.classList.add('pending');
    wordSpan.appendChild(spaceSpan);
    charSpans.push(spaceSpan);

    paraContainer.appendChild(wordSpan);
  });
}


// Live character comparison
inputField.addEventListener('input', () => {
  const userChars = inputField.value.split('');

  charSpans.forEach((span, idx) => {
    if (!userChars[idx]) {
      span.className = 'pending';
    } else if (userChars[idx] === span.textContent) {
      span.className = 'correct';
    } else {
      span.className = 'wrong';
    }
  });
});

// Start timer once when typing starts
inputField.addEventListener('keydown', (e) => {
  if (!isTimerRunning && e.key.length === 1) { // only start on first character typed
    isTimerRunning = true;
    time.textContent = `${seconds}/60`;
    timerInterval = setInterval(() => {
      seconds--;
      time.textContent = `${seconds}/60`;

      if (seconds <= 0) {
        clearInterval(timerInterval);
        time.textContent = '';
        inputField.disabled = true;
        resultDisplay();
      }
    }, 1000);
  }

  // Show result when Enter is pressed
  if (e.key === 'Enter') {
    clearInterval(timerInterval);
    isTimerRunning = false;
    time.textContent = '';
    inputField.disabled = true;
    resultDisplay();
  }
});

// Reset paragraph
resetBtn.addEventListener('click', () => {
  // Stop any running timer
  clearInterval(timerInterval); // clear previous timer
  isTimerRunning = false;
  seconds = 60;
  time.textContent = ''; // reset timer display
  inputField.disabled = false;
  inputField.value = ''; // clear input
  results.textContent = ''; // clear results
  generateRandomPara()
});

// Initialize first paragraph
generateRandomPara();