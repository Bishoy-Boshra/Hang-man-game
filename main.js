// Letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array from Letters
let letterArray = [ ...letters ];

console.log( letterArray )

// Selsct letters container 
let letterContainer = document.querySelector( ".letters" )

letterArray.forEach( ( letter ) =>
{
    //create span 
    let span = document.createElement( "span" )

    // create Text into span
    let textSpan = document.createTextNode( letter )

    // append text into the span 
    span.appendChild( textSpan );

    // Add class name to the spans
    span.className = "letter-box"

    // append Span  to the container
    letterContainer.appendChild( span )
} )

// step two
//  create onject of words 
const words = {
    programming: [ "html", "javascript", "css", "php", "go", "mysql", "python" ],
    movies: [ "ana we heya", "msh ana", "elbasha telmez", "afroto" ],
    actors: [ "ahmed elsaka", "adel emam", "ahmed ezz", "ahmed meky", "karem abdelazez" ],
    conuntries: [ "syria", "palestine", "egypt", "qatar", "morocoo", "yamen" ],
}

// Step three
//  Get random property 
let allKays = Object.keys( words );

// Get random number depend on keys lenth
let randomProperytNumber = Math.floor( Math.random() * allKays.length )
// Get the Name by random numbr to category 
let randomPropName = allKays[ randomProperytNumber ];
// Get the Value form the random name 
let randompropValue = words[ randomPropName ];

// Get random Number depond on Keys value length
let randomValueNumber = Math.floor( Math.random() * randompropValue.length )
// Get the Name value Name  // the chosen Word 
let randomValueName = randompropValue[ randomValueNumber ];

// Set the Category Word in the info document
document.querySelector( ".container .game-info .category span" ).innerHTML = randomPropName;

// Step four 
//  Select the container of Guess Word 
let letterGuess = document.querySelector( ".letters-guess" );

// Create Array from the word
let arrayFromVal = Array.from( randomValueName );

// Create loop in the array to Create spans from the length 
arrayFromVal.forEach( ( letter ) =>
{
    let span = document.createElement( "span" )

    // IF THE LETTER AQULE SPACE
    if ( letter === " " )
    {
        span.className = "span-space"
    }
    // Append child to the document container 
    letterGuess.appendChild( span )
} )

// Step five
//  Handle with Clicking on Letters

let increasetheWrongs = 0;
let increaseTrue = 0;
document.addEventListener( "click", ( e ) =>
{
    // to treat with the hangman draw 
    let theStatus = false;

    if ( e.target.classList == "letter-box" )
    {
        // Select the Clicked letter 
        let theClickedLetter = e.target.innerHTML;
        e.target.classList.add( "is-clicked" )

        // loop If the Clicked letter = the word letter 
        arrayFromVal.forEach( ( wordLetter, index ) =>
        {
            if ( theClickedLetter.toLowerCase() == wordLetter.toLowerCase() )
            {
                theStatus = true;
                let spancon = document.querySelectorAll( ".letters-guess span" )[ index ];
                spancon.innerHTML = wordLetter;
                increaseTrue++

                // for Win 
                win()

            }
        } )
        // out the loop 
        if ( theStatus !== true )
        {
            // increase the wrongs one 
            increasetheWrongs++;

            // play fail music
            document.querySelector( "#fail" ).play()
            // Add display block to the draw 
            document.querySelector( ".hangman-draw" ).classList.add( `wrong-${ increasetheWrongs }` )
            if ( increasetheWrongs == 8 )
            {
                endGame()
            }
        }
    }
} )
// to reload the page in fail
let button = document.querySelector( ".massage button" )
let button1 = document.querySelectorAll( ".massage button" )[ 1 ]
button.onclick = ( () => location.reload() )
button1.onclick = ( () => location.reload() )

function endGame ()
{

    letterContainer.classList.add( "game-end" )
    document.querySelector( "#Game-over-sound" ).play()
    document.querySelector( ".game-over" ).style.display = "block";
    document.querySelector( ".massage span" ).innerHTML = ` ,The Word is : ${ randomValueName }`;
}

// thte win 
function win ()
{
    document.querySelector( "#correct" ).play()
    let toSplit = randomValueName.split( " " );

    if ( increaseTrue === ( toSplit.join( "" ) ).length )
    {
        document.querySelector( ".win" ).style.display = "block";
        document.querySelector( "#win" ).play()
    }
}


console.log( randomValueName )