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

MorseCode = "MorseCode";
Telephony = "Telephony";
 
NATOPhoneticAlphabetMap = {
	"A" : {MorseCode:[DOT, DASH], Telephony:["Alpha"]},
	"B" : {MorseCode:[DASH, DOT, DOT, DOT], Telephony:["Bravo"]},
	"C" : {MorseCode:[DASH, DOT, DASH, DOT], Telephony:["Charlie"]},
	"D" : {MorseCode:[DASH, DOT, DOT], Telephony:["Delta"]},
	"E" : {MorseCode:[DOT], Telephony:["Echo"]},
	"F" : {MorseCode:[DOT, DOT, DASH, DOT], Telephony:["Foxtrot"]},
	"G" : {MorseCode:[DASH, DASH, DOT], Telephony:["Golf"]},
	"H" : {MorseCode:[DOT, DOT, DOT, DOT], Telephony:["Hotel"]},
	"I" : {MorseCode:[DOT, DOT], Telephony:["India"]},
	"J" : {MorseCode:[DOT, DASH, DASH, DASH], Telephony:["Juliett"]},
	"K" : {MorseCode:[DASH, DOT, DASH], Telephony:["Kilo"]},
	"L" : {MorseCode:[DOT, DASH, DOT, DOT], Telephony:["Lima"]},
	"M" : {MorseCode:[DASH, DASH], Telephony:["Mike"]},
	"N" : {MorseCode:[DASH, DOT], Telephony:["November"]},
	"O" : {MorseCode:[DASH, DASH, DASH], Telephony:["Oscar"]},
	"P" : {MorseCode:[DOT, DASH, DASH, DOT], Telephony:["Papa"]},
	"Q" : {MorseCode:[DASH, DASH, DOT, DASH], Telephony:["Quebec"]},
	"R" : {MorseCode:[DOT, DASH, DOT], Telephony:["Romeo"]},
	"S" : {MorseCode:[DOT, DOT, DOT], Telephony:["Sierra"]},
	"T" : {MorseCode:[DASH], Telephony:["Tango"]},
	"U" : {MorseCode:[DOT, DOT, DASH], Telephony:["Uniform"]},
	"V" : {MorseCode:[DOT, DOT, DOT, DASH], Telephony:["Victor"]},
	"W" : {MorseCode:[DOT, DASH, DASH], Telephony:["Whiskey"]},
	"X" : {MorseCode:[DASH, DOT, DOT, DASH], Telephony:["Xray"]},
	"Y" : {MorseCode:[DASH, DOT, DASH, DASH], Telephony:["Yankee"]},
	"Z" : {MorseCode:[DASH, DASH, DOT, DOT], Telephony:["Zulu"]},
	"1" : {MorseCode:[DOT, DASH, DASH, DASH, DASH], Telephony:["One"]},
	"2" : {MorseCode:[DOT, DOT, DASH, DASH, DASH], Telephony:["Two"]},
	"3" : {MorseCode:[DOT, DOT, DOT, DASH, DASH], Telephony:["Three"]},
	"4" : {MorseCode:[DOT, DOT, DOT, DOT, DASH], Telephony:["Four"]},
	"5" : {MorseCode:[DOT, DOT, DOT, DOT, DOT], Telephony:["Five"]},
	"6" : {MorseCode:[DASH, DOT, DOT, DOT, DOT], Telephony:["Six"]},
	"7" : {MorseCode:[DASH, DASH, DOT, DOT, DOT], Telephony:["Seven"]},
	"8" : {MorseCode:[DASH, DASH, DASH, DOT, DOT], Telephony:["Eight"]},
	"9" : {MorseCode:[DASH, DASH, DASH, DASH, DOT], Telephony:["Nine"]},
	"0" : {MorseCode:[DASH, DASH, DASH, DASH, DASH], Telephony:["Zero"]},
};
 
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        /*
        if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.[unique-value-here]") {
             context.fail("Invalid Application ID");
        }
        */

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
        getWelcomeResponse(callback);
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

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = {};
    var cardTitle = "Welcome";
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

/**
 * Sets the color in the session and prepares the speech to reply to the user.
 */
function getSpelling(intent, session, callback) {
    var cardTitle = intent.name;
    var wordSlot = intent.slots.Word;
	var spellingTypeSlot = intent.slots.SpellingType;
	
	//TODO Add the word and spelling type to the session attributes
	//when the user doesn't specify all the slots and you want to maintain what was already given in the session.
	//This is only if the slots aren't all provided by the NLU
	var sessionAttributes = {};
	if (session.attributes) {
        sessionAttributes = session.attributes;
    }
	
    var repromptText = "";
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    if (wordSlot && spellingTypeSlot) {
        var word = wordSlot.value;
		var spellingType = spellingTypeSlot.value;
        speechOutput = getSpellingForWordAndType(word, spellingType);
        repromptText = "You can ask me to spell a word by saying, Spell \"Word\" in Morse Code?";
    } 

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getSpellingForWordAndType(word, type) {
	var spelling = [];
    NATOPhoneticAlphabetMap;
	console.log(word);
	console.log(type);
	for(var indx = 0; indx < word.length; indx++){
		spelling.push(NATOPhoneticAlphabetMap[word.charAt(indx).toUpperCase()][type].join(" "));
	}
	
	return spelling.join("  ");//Double space to cause some delay possibly
}

function getColorFromSession(intent, session, callback) {
    var favoriteColor;
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    if (session.attributes) {
        favoriteColor = session.attributes.favoriteColor;
    }

    if (favoriteColor) {
        speechOutput = "Your favorite color is " + favoriteColor + ". Goodbye.";
        shouldEndSession = true;
    } else {
        speechOutput = "I'm not sure what your favorite color is, you can say, my favorite color " +
            " is red";
    }

    // Setting repromptText to null signifies that we do not want to reprompt the user.
    // If the user does not respond or says something that is not understood, the session
    // will end.
    callback(sessionAttributes,
         buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
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
            title: "SessionSpeechlet - " + title,
            content: "SessionSpeechlet - " + output
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