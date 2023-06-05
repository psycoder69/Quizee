// contains questions for English Grammar category of the quiz

const grammar = [
    {
        'question': "Take a sandwich with you ________ you get hungry later.",
        '0': "if",
        '1': "when",
        '2': "so as not to",
        '3': "in case",
        'correct': 3
    },

    {
        'question': "I’ll send it to you ________ I get the money.",
        '0': "as soon as",
        '1': "unless",
        '2': "in case",
        '3': "until",
        'correct': 0
    },

    {
        'question': "Do you think it’s ________ rain tomorrow?",
        '0': "will",
        '1': "going",
        '2': "going to",
        '3': "to",
        'correct': 2
    },

    {
        'question': "Could you tell me ________?",
        '0': "where the bus stop is",
        '1': "is where the bus stop",
        '2': "where is the bus stop",
        '3': "the bus stop is where",
        'correct': 0
    },

    {
        'question': "But they ________ be away – I saw them this morning!",
        '0': "shouldn't",
        '1': "can't",
        '2': "mustn't",
        '3': "don't have to",
        'correct': 1
    },

    {
        'question': "She’s wearing a ________ dress.",
        '0': "long black beautiful",
        '1': "black long beautiful",
        '2': "beautiful long black",
        '3': "long beautiful black",
        'correct': 2
    },

    {
        'question': "Let’s go to the cinema. Great idea! What film ________ we watch?",
        '0': "shall",
        '1': "will",
        '2': "do",
        '3': "are we going to",
        'correct': 0
    },

    {
        'question': "He ________ ever works as ________ as he should.",
        '0': "hardly ... hardly",
        '1': "hard ... hardly",
        '2': "hard ... hard",
        '3': "hardly ... hard",
        'correct': 3
    },

    {
        'question': "Whose bag is this? It’s ________.",
        '0': "my",
        '1': "mine",
        '2': "of me",
        '3': "the mine",
        'correct': 1
    },

    {
        'question': "I was ________ exhausted by the end of the day.",
        '0': "completely",
        '1': "extremely",
        '2': "very",
        '3': "incredibly",
        'correct': 0
    },

    {
        'question': "I wouldn’t say that to him if I ________ you.",
        '0': "would be",
        '1': "am",
        '2': "was",
        '3': "were",
        'correct': 3
    },

    {
        'question': "If he ________ one minute later, he ________ the train.",
        '0': "would arrive ... would miss",
        '1': "had arrived ... would have missed",
        '2': "arrived ... would have missed",
        '3': "would have arrived ... would have missed",
        'correct': 1
    },

    {
        'question': "It was the first time he ________ anything so spicy.",
        '0': "has eaten",
        '1': "had eaten",
        '2': "had been eating",
        '3': "was eating",
        'correct': 1
    },

    {
        'question': "I ________ like getting up early.",
        '0': "am not",
        '1': "doesn't",
        '2': "don't",
        '3': "not",
        'correct': 2
    },

    {
        'question': "I’d love to ________ in the 19th century.",
        '0': "live",
        '1': "lived",
        '2': "have lived",
        '3': "have been lived",
        'correct': 2
    },

    {
        'question': "This house is ________, but also ________.",
        '0': "bigger ... more expensive",
        '1': "more big ... more expensive",
        '2': "bigger ... expensiver",
        '3': "bigger ... expensiver",
        'correct': 0
    },

    {
        'question': "How did this ________ broken?",
        '0': "be",
        '1': "become",
        '2': "get",
        '3': "was",
        'correct': 2
    },

    {
        'question': "How long have they ________ there?",
        '0': "waited",
        '1': "been waited",
        '2': "been waiting",
        '3': "waiting",
        'correct': 2
    },

    {
        'question': "That wasn’t a good idea - you ________ thought about it more carefully.",
        '0': "must have",
        '1': "have to",
        '2': "ought have",
        '3': "should have",
        'correct': 3
    },

    {
        'question': "I don’t know where she is. I suppose she ________ got stuck in traffic.",
        '0': "can have",
        '1': "might have",
        '2': "should have",
        '3': "must have",
        'correct': 1
    },

    {
        'question': "I spend too much time ________. I’d like ________ more time for myself and my family.",
        '0': "working ... to have",
        '1': "working ... having",
        '2': "to working ... having",
        '3': "to work ... to have",
        'correct': 0
    },

    {
        'question': "By next month I ________ all my exams, and I can relax!",
        '0': "will finish",
        '1': "will be finishing",
        '2': "will have finished",
        '3': "will have been finishing",
        'correct': 2
    },

    {
        'question': "_______ spent time abroad when I was a student, I found it easier to get used to ________ in another country.",
        '0': "Having ... live",
        '1': "Have ... live",
        '2': "To have ... living",
        '3': "Having ... living",
        'correct': 3
    },

    {
        'question': "I’m busy on Friday, so I ________ come.",
        '0': "don't",
        '1': "can't",
        '2': "haven't",
        '3': "am not going to",
        'correct': 1
    },

    {
        'question': "If I had more time, I ________ do more exercise.",
        '0': "am going to",
        '1': "would",
        '2': "will",
        '3': "want to",
        'correct': 1
    },

    {
        'question': "He drives quite ________, but his brother drives really ________.",
        '0': "slowly ... fast",
        '1': "slowly ... fastly",
        '2': "slow ... fast",
        '3': "slow ... fastly",
        'correct': 0
    },

    {
        'question': "Winters here ________ be really cold sometimes, so make sure you bring warm clothes!",
        '0': "could",
        '1': "can",
        '2': "might",
        '3': "may",
        'correct': 1
    },

    {
        'question': "Where ________ they from?",
        '0': "can",
        '1': "are",
        '2': "could",
        '3': "might",
        'correct': 1
    },

    {
        'question': "I ________ to Germany last year.",
        '0': "gone",
        '1': "was going",
        '2': "went",
        '3': "had been gone",
        'correct': 2
    },

    {
        'question': "I drink coffee ________.",
        '0': "two times for a day",
        '1': "twice a day",
        '2': "two times day",
        '3': "twice in day",
        'correct': 1
    },

    {
        'question': "I ________ been hit by a car, but luckily I just managed to get out of the way.",
        '0': "must have",
        '1': "can have",
        '2': "could have",
        '3': "should have",
        'correct': 2
    },

    {
        'question': "I wish he ________ so rude to people when we go out.",
        '0': "hadn't been",
        '1': "didn't be",
        '2': "won't be",
        '3': "wouldn't be",
        'correct': 3
    },

    {
        'question': "She ________ have short hair, but now it’s long.",
        '0': "had",
        '1': "use to",
        '2': "used to",
        '3': "has had",
        'correct': 2
    },

    {
        'question': "The film ________ by Quentin Tarantino.",
        '0': "directed",
        '1': "was directed",
        '2': "was direct",
        '3': "did directed",
        'correct': 1
    },

    {
        'question': "Put ________ bag on ________ table, then give me ________ apple and ________ bar of chocolate.",
        '0': "the ... the ... a ... a",
        '1': "the ... the ... an ... a",
        '2': "a ... a ... the ... the",
        '3': "a ... the ... an ... the",
        'correct': 1
    },

    {
        'question': "She ________ in a small house near the park.",
        '0': "live",
        '1': "stays",
        '2': "lives",
        '3': "living",
        'correct': 2
    },

    {
        'question': "Where ________ he work?",
        '0': "do",
        '1': "is",
        '2': "used to",
        '3': "does",
        'correct': 3
    },

    {
        'question': "That smells good! What ________.",
        '0': "do you cooking?",
        '1': "are you cook?",
        '2': "are you cooking?",
        '3': "do you cook?",
        'correct': 2
    },

    {
        'question': "I’ve already called her four times ________.",
        '0': "before",
        '1': "again",
        '2': "yesterday",
        '3': "today",
        'correct': 3
    },

    {
        'question': "She’s from ________, so she speaks ________.",
        '0': "Spain ... Spainese",
        '1': "Spain ... Spanish",
        '2': "Spanish ... Spain",
        '3': "Spanish ... Spanish",
        'correct': 1
    },
];