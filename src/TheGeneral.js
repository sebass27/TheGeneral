/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */
DOT = "dot";
DASH = "dash";

MorseCode = "MORSE CODE";
Telephony = "TELEPHONY";

SpellingTypes = {};
SpellingTypes[MorseCode] = "Morse Code";
SpellingTypes[Telephony] = "Telephony";

SpeechOutputPattern = "You say |WORD| in |SPELINGTYPE| like so: |SPELLING|."
WORD = "|WORD|";
SPELINGTYPE = "|SPELINGTYPE|";
SPELLING = "|SPELLING|";

CARDTITLE = "The General";

/**
 * Doing this because javascript wasn't supporting key interpolation when making a map literal like so
   NATOPhoneticAlphabetMap = {
	 "A" = {MorseCode:[], Telephony: []}
   }
 */
NATOPhoneticAlphabetMap = {};
NATOPhoneticAlphabetMap["A"] = {}; NATOPhoneticAlphabetMap["A"][MorseCode] = [DOT, DASH]; NATOPhoneticAlphabetMap["A"][Telephony] = ["Alpha"];
NATOPhoneticAlphabetMap["B"] = {}; NATOPhoneticAlphabetMap["B"][MorseCode] = [DASH, DOT, DOT, DOT]; NATOPhoneticAlphabetMap["B"][Telephony] = ["Bravo"];
NATOPhoneticAlphabetMap["C"] = {}; NATOPhoneticAlphabetMap["C"][MorseCode] = [DASH, DOT, DASH, DOT]; NATOPhoneticAlphabetMap["C"][Telephony] = ["Charlie"];
NATOPhoneticAlphabetMap["D"] = {}; NATOPhoneticAlphabetMap["D"][MorseCode] = [DASH, DOT, DOT]; NATOPhoneticAlphabetMap["D"][Telephony] = ["Delta"];
NATOPhoneticAlphabetMap["E"] = {}; NATOPhoneticAlphabetMap["E"][MorseCode] = [DOT]; NATOPhoneticAlphabetMap["E"][Telephony] = ["Echo"];
NATOPhoneticAlphabetMap["F"] = {}; NATOPhoneticAlphabetMap["F"][MorseCode] = [DOT, DOT, DASH, DOT]; NATOPhoneticAlphabetMap["F"][Telephony] = ["Foxtrot"];
NATOPhoneticAlphabetMap["G"] = {}; NATOPhoneticAlphabetMap["G"][MorseCode] = [DASH, DASH, DOT]; NATOPhoneticAlphabetMap["G"][Telephony] = ["Golf"];
NATOPhoneticAlphabetMap["H"] = {}; NATOPhoneticAlphabetMap["H"][MorseCode] = [DOT, DOT, DOT, DOT]; NATOPhoneticAlphabetMap["H"][Telephony] = ["Hotel"];
NATOPhoneticAlphabetMap["I"] = {}; NATOPhoneticAlphabetMap["I"][MorseCode] = [DOT, DOT]; NATOPhoneticAlphabetMap["I"][Telephony] = ["India"];
NATOPhoneticAlphabetMap["J"] = {}; NATOPhoneticAlphabetMap["J"][MorseCode] = [DOT, DASH, DASH, DASH]; NATOPhoneticAlphabetMap["J"][Telephony] = ["Juliett"];
NATOPhoneticAlphabetMap["K"] = {}; NATOPhoneticAlphabetMap["K"][MorseCode] = [DASH, DOT, DASH]; NATOPhoneticAlphabetMap["K"][Telephony] = ["Kilo"];
NATOPhoneticAlphabetMap["L"] = {}; NATOPhoneticAlphabetMap["L"][MorseCode] = [DOT, DASH, DOT, DOT]; NATOPhoneticAlphabetMap["L"][Telephony] = ["Lima"];
NATOPhoneticAlphabetMap["M"] = {}; NATOPhoneticAlphabetMap["M"][MorseCode] = [DASH, DASH]; NATOPhoneticAlphabetMap["M"][Telephony] = ["Mike"];
NATOPhoneticAlphabetMap["N"] = {}; NATOPhoneticAlphabetMap["N"][MorseCode] = [DASH, DOT]; NATOPhoneticAlphabetMap["N"][Telephony] = ["November"];
NATOPhoneticAlphabetMap["O"] = {}; NATOPhoneticAlphabetMap["O"][MorseCode] = [DASH, DASH, DASH]; NATOPhoneticAlphabetMap["O"][Telephony] = ["Oscar"];
NATOPhoneticAlphabetMap["P"] = {}; NATOPhoneticAlphabetMap["P"][MorseCode] = [DOT, DASH, DASH, DOT]; NATOPhoneticAlphabetMap["P"][Telephony] = ["Papa"];
NATOPhoneticAlphabetMap["Q"] = {}; NATOPhoneticAlphabetMap["Q"][MorseCode] = [DASH, DASH, DOT, DASH]; NATOPhoneticAlphabetMap["Q"][Telephony] = ["Quebec"];
NATOPhoneticAlphabetMap["R"] = {}; NATOPhoneticAlphabetMap["R"][MorseCode] = [DOT, DASH, DOT]; NATOPhoneticAlphabetMap["R"][Telephony] = ["Romeo"];
NATOPhoneticAlphabetMap["S"] = {}; NATOPhoneticAlphabetMap["S"][MorseCode] = [DOT, DOT, DOT]; NATOPhoneticAlphabetMap["S"][Telephony] = ["Sierra"];
NATOPhoneticAlphabetMap["T"] = {}; NATOPhoneticAlphabetMap["T"][MorseCode] = [DASH]; NATOPhoneticAlphabetMap["T"][Telephony] = ["Tango"];
NATOPhoneticAlphabetMap["U"] = {}; NATOPhoneticAlphabetMap["U"][MorseCode] = [DOT, DOT, DASH]; NATOPhoneticAlphabetMap["U"][Telephony] = ["Uniform"];
NATOPhoneticAlphabetMap["V"] = {}; NATOPhoneticAlphabetMap["V"][MorseCode] = [DOT, DOT, DOT, DASH]; NATOPhoneticAlphabetMap["V"][Telephony] = ["Victor"];
NATOPhoneticAlphabetMap["W"] = {}; NATOPhoneticAlphabetMap["W"][MorseCode] = [DOT, DASH, DASH]; NATOPhoneticAlphabetMap["W"][Telephony] = ["Whiskey"];
NATOPhoneticAlphabetMap["X"] = {}; NATOPhoneticAlphabetMap["X"][MorseCode] = [DASH, DOT, DOT, DASH]; NATOPhoneticAlphabetMap["X"][Telephony] = ["Xray"];
NATOPhoneticAlphabetMap["Y"] = {}; NATOPhoneticAlphabetMap["Y"][MorseCode] = [DASH, DOT, DASH, DASH]; NATOPhoneticAlphabetMap["Y"][Telephony] = ["Yankee"];
NATOPhoneticAlphabetMap["Z"] = {}; NATOPhoneticAlphabetMap["Z"][MorseCode] = [DASH, DASH, DOT, DOT]; NATOPhoneticAlphabetMap["Z"][Telephony] = ["Zulu"];
NATOPhoneticAlphabetMap["1"] = {}; NATOPhoneticAlphabetMap["1"][MorseCode] = [DOT, DASH, DASH, DASH, DASH]; NATOPhoneticAlphabetMap["1"][Telephony] = ["One"];
NATOPhoneticAlphabetMap["2"] = {}; NATOPhoneticAlphabetMap["2"][MorseCode] = [DOT, DOT, DASH, DASH, DASH]; NATOPhoneticAlphabetMap["2"][Telephony] = ["Two"];
NATOPhoneticAlphabetMap["3"] = {}; NATOPhoneticAlphabetMap["3"][MorseCode] = [DOT, DOT, DOT, DASH, DASH]; NATOPhoneticAlphabetMap["3"][Telephony] = ["Three"];
NATOPhoneticAlphabetMap["4"] = {}; NATOPhoneticAlphabetMap["4"][MorseCode] = [DOT, DOT, DOT, DOT, DASH]; NATOPhoneticAlphabetMap["4"][Telephony] = ["Four"];
NATOPhoneticAlphabetMap["5"] = {}; NATOPhoneticAlphabetMap["5"][MorseCode] = [DOT, DOT, DOT, DOT, DOT]; NATOPhoneticAlphabetMap["5"][Telephony] = ["Five"];
NATOPhoneticAlphabetMap["6"] = {}; NATOPhoneticAlphabetMap["6"][MorseCode] = [DASH, DOT, DOT, DOT, DOT]; NATOPhoneticAlphabetMap["6"][Telephony] = ["Six"];
NATOPhoneticAlphabetMap["7"] = {}; NATOPhoneticAlphabetMap["7"][MorseCode] = [DASH, DASH, DOT, DOT, DOT]; NATOPhoneticAlphabetMap["7"][Telephony] = ["Seven"];
NATOPhoneticAlphabetMap["8"] = {}; NATOPhoneticAlphabetMap["8"][MorseCode] = [DASH, DASH, DASH, DOT, DOT]; NATOPhoneticAlphabetMap["8"][Telephony] = ["Eight"];
NATOPhoneticAlphabetMap["9"] = {}; NATOPhoneticAlphabetMap["9"][MorseCode] = [DASH, DASH, DASH, DASH, DOT]; NATOPhoneticAlphabetMap["9"][Telephony] = ["Nine"];
NATOPhoneticAlphabetMap["0"] = {}; NATOPhoneticAlphabetMap["0"][MorseCode] = [DASH, DASH, DASH, DASH, DASH]; NATOPhoneticAlphabetMap["0"][Telephony] = ["Zero"];
 
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.4ed1f11a-8e86-4581-b906-ba8546bfc19d") {
             context.fail("Invalid Application ID");
        }
        

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId +
        ", sessionId=" + session.sessionId);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId +
        ", sessionId=" + session.sessionId);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId +
        ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if ("SpellIntent" === intentName) {
        getSpelling(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        getHelpResponse(callback, session);
    } else if ("AMAZON.StopIntent" === intentName || "AMAZON.CancelIntent" === intentName) {
	    getExitResponse(callback);
	} else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId +
        ", sessionId=" + session.sessionId);
    // Add cleanup logic here
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback, session) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = session.attributes;
    var cardTitle = "Welcome to The General";
    var speechOutput = "Welcome, Please say a word you would like me to spell " +
	"using NATO Phonetic Alphapet along with the spelling type of Morse Code or Telephony";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "Please say a word you would like me to spell "+
	"using NATO Phonetic Alphapet along with the spelling type of Morse Code or Telephony";
    var shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getHelpResponse(callback, session) {
    var sessionAttributes = session.attributes;
    var cardTitle = "Help with The General";
    var speechOutput = "With The General, you can get a morse code interpretation or a telephonic spelling for any word or a list of words."+
	" Now, what word or list of words can I spell for you?";
    var repromptText = "What word or list of words can I spell for you?";
    var shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getExitResponse(callback) {
    var sessionAttributes = {};
    var cardTitle = "Good Bye";
    var speechOutput = "Good-bye";
    var repromptText = "";
    var shouldEndSession = true;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

/**
 * Sets the color in the session and prepares the speech to reply to the user.
 */
function getSpelling(intent, session, callback) {
    var cardTitle = CARDTITLE;
    var wordsSlot = intent.slots.Words;
	var spellingTypeSlot = intent.slots.SpellingType;
	
	//TODO Add the word and spelling type to the session attributes
	//when the user doesn't specify all the slots and you want to maintain what was already given in the session.
	//This is only if the slots aren't all provided by the NLU
	var sessionAttributes = session.attributes;
	
    var repromptText = "";
    var shouldEndSession = false;
    var speechOutput = "";
	var speechOutputList = [];
	
	var words = "";
	var spellingType = "";
		
	if((!wordsSlot 
		|| !(words = wordsSlot.value))
		&& !sessionAttributes[WORD]){
		speechOutputList.push("Please specify a list of words to spell. You can ask me to spell a word by saying, Spell \"Words\" in Morse Code or Telephony?");
		
		//Alexa seems to be sending the data in lower case
	} else if((!spellingTypeSlot 
		|| !(spellingType = spellingTypeSlot.value) 
		|| !SpellingTypes[spellingType = spellingTypeSlot.value.toUpperCase()])
		&& !sessionAttributes[SPELINGTYPE]){
		speechOutputList.push("Please specify spelling type. You can ask me to spell a word by saying, Spell \"Words\" in Morse Code or Telephony?");
	} else {
		
		//We will use the session attribute values
		setKeyValueInSession(sessionAttributes, WORD, words, false);
		setKeyValueInSession(sessionAttributes, SPELINGTYPE, spellingType, false);
		
		var wordTokens = tokenizeWord(sessionAttributes[WORD]);
		if(wordTokens.length > 1){
			speechOutputList.push("You specified "+wordTokens.length+ " words to spell out. Here they are in order.");
		}
		
		for(var index in wordTokens){
			var word = wordTokens[index];
			speechOutputList.push(constructSpeechOutputPart(word, SpellingTypes[sessionAttributes[SPELINGTYPE]], 
			getSpellingForWordAndType(word, sessionAttributes[SPELINGTYPE])));
		}
		
		shouldEndSession = true;
    }
	
	//In the cases where one is set but not the other
	setKeyValueInSession(sessionAttributes, WORD, words, false);
	setKeyValueInSession(sessionAttributes, SPELINGTYPE, spellingType, false);
	
	
	
	//Put a space after the period of each sentence
	speechOutput = speechOutputList.join(" ");
	repromptText = "You can ask me to spell a word by saying, Spell \"Words\" in Morse Code or Telephony?";

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function setKeyValueInSession(sessionAttributes, key, value, replaceIfNullOrEmpty){
	if(replaceIfNullOrEmpty != undefined && replaceIfNullOrEmpty == true){
		sessionAttributes[key] = value;
	} else {
		if(key != undefined && value != undefined && value !== ""){
			sessionAttributes[key] = value;
		}
	}
}

function constructSpeechOutputPart(word, spellingTypeReadable, spelling){
	return ((SpeechOutputPattern.replace(WORD, word)).replace(SPELINGTYPE, spellingTypeReadable)).replace(SPELLING, spelling);
}

function tokenizeWord(words){
	return words.split(" ");
}

function getSpellingForWordAndType(word, type) {
	var spelling = [];
	console.log(word);
	console.log(type);
	for(var indx = 0; indx < word.length; indx++){
		spelling.push(NATOPhoneticAlphabetMap[word.charAt(indx).toUpperCase()][type].join(" "));
	}
	
	return spelling.join(". ");
}

// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}