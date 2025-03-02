export default function handler(req, res) {

  const destinations = [
    {
        "city": "London",
        "country": "United Kingdom",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of London means \u201cgateway to the world\u201d.",
            "London is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? London has a floating market.",
            "London is famous for its incredible architecture."
        ]
    },
    {
        "city": "Rome",
        "country": "Italy",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Rome means \u201cgateway to the world\u201d.",
            "Rome is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Rome has a floating market.",
            "Rome is famous for its incredible architecture."
        ]
    },
    {
        "city": "Sydney",
        "country": "Australia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Sydney means \u201criver of life\u201d.",
            "Sydney is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Sydney has more parks than any other city.",
            "Sydney is famous for its incredible architecture."
        ]
    },
    {
        "city": "Cairo",
        "country": "Egypt",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Cairo means \u201cplace of the sun\u201d.",
            "Cairo is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Cairo has more parks than any other city.",
            "Cairo is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Rio de Janeiro",
        "country": "Brazil",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Rio de Janeiro means \u201criver of life\u201d.",
            "Rio de Janeiro is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Rio de Janeiro has a unique underground city system.",
            "Rio de Janeiro is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Beijing",
        "country": "China",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Beijing means \u201criver of life\u201d.",
            "Beijing is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Beijing has a floating market.",
            "Beijing is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Moscow",
        "country": "Russia",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Moscow means \u201criver of life\u201d.",
            "Moscow is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Moscow has a unique underground city system.",
            "Moscow is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Dubai",
        "country": "United Arab Emirates",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Dubai means \u201cplace of the sun\u201d.",
            "Dubai is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Dubai has a unique underground city system.",
            "Dubai is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Istanbul",
        "country": "Turkey",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Istanbul means \u201ccity of dreams\u201d.",
            "Istanbul is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Istanbul has a floating market.",
            "Istanbul is famous for its incredible architecture."
        ]
    },
    {
        "city": "Bangkok",
        "country": "Thailand",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Bangkok means \u201ccity of dreams\u201d.",
            "Bangkok is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Bangkok has a restaurant inside a cave.",
            "Bangkok is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Berlin",
        "country": "Germany",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Berlin means \u201cplace of the sun\u201d.",
            "Berlin is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Berlin has more parks than any other city.",
            "Berlin is famous for its incredible architecture."
        ]
    },
    {
        "city": "Madrid",
        "country": "Spain",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Madrid means \u201criver of life\u201d.",
            "Madrid is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Madrid has a restaurant inside a cave.",
            "Madrid is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Toronto",
        "country": "Canada",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Toronto means \u201cplace of the sun\u201d.",
            "Toronto is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Toronto has a unique underground city system.",
            "Toronto is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Cape Town",
        "country": "South Africa",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Cape Town means \u201cplace of the sun\u201d.",
            "Cape Town is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Cape Town has more parks than any other city.",
            "Cape Town is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Buenos Aires",
        "country": "Argentina",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Buenos Aires means \u201cplace of the sun\u201d.",
            "Buenos Aires is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Buenos Aires has more parks than any other city.",
            "Buenos Aires is famous for its incredible architecture."
        ]
    },
    {
        "city": "Seoul",
        "country": "South Korea",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Seoul means \u201cplace of the sun\u201d.",
            "Seoul is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Seoul has a unique underground city system.",
            "Seoul is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Mexico City",
        "country": "Mexico",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Mexico City means \u201cgateway to the world\u201d.",
            "Mexico City is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Mexico City has more parks than any other city.",
            "Mexico City is famous for its incredible architecture."
        ]
    },
    {
        "city": "Athens",
        "country": "Greece",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Athens means \u201cgateway to the world\u201d.",
            "Athens is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Athens has a floating market.",
            "Athens is famous for its incredible architecture."
        ]
    },
    {
        "city": "Singapore",
        "country": "Singapore",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Singapore means \u201criver of life\u201d.",
            "Singapore is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Singapore has a unique underground city system.",
            "Singapore is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Los Angeles",
        "country": "USA",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Los Angeles means \u201ccity of dreams\u201d.",
            "Los Angeles is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Los Angeles has a floating market.",
            "Los Angeles is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Amsterdam",
        "country": "Netherlands",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Amsterdam means \u201cgateway to the world\u201d.",
            "Amsterdam is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Amsterdam has a unique underground city system.",
            "Amsterdam is famous for its incredible architecture."
        ]
    },
    {
        "city": "Hong Kong",
        "country": "China",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Hong Kong means \u201ccity of dreams\u201d.",
            "Hong Kong is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Hong Kong has a unique underground city system.",
            "Hong Kong is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Delhi",
        "country": "India",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Delhi means \u201cplace of the sun\u201d.",
            "Delhi is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Delhi has a restaurant inside a cave.",
            "Delhi is famous for its incredible architecture."
        ]
    },
    {
        "city": "Venice",
        "country": "Italy",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Venice means \u201criver of life\u201d.",
            "Venice is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Venice has a restaurant inside a cave.",
            "Venice is famous for its incredible architecture."
        ]
    },
    {
        "city": "Barcelona",
        "country": "Spain",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Barcelona means \u201cplace of the sun\u201d.",
            "Barcelona is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Barcelona has a unique underground city system.",
            "Barcelona is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Lisbon",
        "country": "Portugal",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Lisbon means \u201criver of life\u201d.",
            "Lisbon is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Lisbon has a restaurant inside a cave.",
            "Lisbon is famous for its incredible architecture."
        ]
    },
    {
        "city": "Vienna",
        "country": "Austria",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Vienna means \u201cplace of the sun\u201d.",
            "Vienna is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Vienna has more parks than any other city.",
            "Vienna is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Prague",
        "country": "Czech Republic",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Prague means \u201ccity of dreams\u201d.",
            "Prague is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Prague has more parks than any other city.",
            "Prague is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Stockholm",
        "country": "Sweden",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Stockholm means \u201criver of life\u201d.",
            "Stockholm is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Stockholm has a restaurant inside a cave.",
            "Stockholm is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Oslo",
        "country": "Norway",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Oslo means \u201cplace of the sun\u201d.",
            "Oslo is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Oslo has a unique underground city system.",
            "Oslo is famous for its incredible architecture."
        ]
    },
    {
        "city": "Copenhagen",
        "country": "Denmark",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Copenhagen means \u201ccity of dreams\u201d.",
            "Copenhagen is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Copenhagen has a floating market.",
            "Copenhagen is famous for its incredible architecture."
        ]
    },
    {
        "city": "Hanoi",
        "country": "Vietnam",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Hanoi means \u201cgateway to the world\u201d.",
            "Hanoi is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Hanoi has a unique underground city system.",
            "Hanoi is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Jakarta",
        "country": "Indonesia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Jakarta means \u201cgateway to the world\u201d.",
            "Jakarta is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Jakarta has a unique underground city system.",
            "Jakarta is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Kuala Lumpur",
        "country": "Malaysia",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Kuala Lumpur means \u201ccity of dreams\u201d.",
            "Kuala Lumpur is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Kuala Lumpur has more parks than any other city.",
            "Kuala Lumpur is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Lima",
        "country": "Peru",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Lima means \u201cgateway to the world\u201d.",
            "Lima is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Lima has more parks than any other city.",
            "Lima is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Bogot\u00e1",
        "country": "Colombia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Bogot\u00e1 means \u201cgateway to the world\u201d.",
            "Bogot\u00e1 is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Bogot\u00e1 has a restaurant inside a cave.",
            "Bogot\u00e1 is famous for its incredible architecture."
        ]
    },
    {
        "city": "Manila",
        "country": "Philippines",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Manila means \u201cgateway to the world\u201d.",
            "Manila is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Manila has a unique underground city system.",
            "Manila is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Havana",
        "country": "Cuba",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Havana means \u201cplace of the sun\u201d.",
            "Havana is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Havana has a unique underground city system.",
            "Havana is famous for its incredible architecture."
        ]
    },
    {
        "city": "Warsaw",
        "country": "Poland",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Warsaw means \u201cplace of the sun\u201d.",
            "Warsaw is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Warsaw has a restaurant inside a cave.",
            "Warsaw is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Budapest",
        "country": "Hungary",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Budapest means \u201cgateway to the world\u201d.",
            "Budapest is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Budapest has a unique underground city system.",
            "Budapest is famous for its incredible architecture."
        ]
    },
    {
        "city": "Brussels",
        "country": "Belgium",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Brussels means \u201cplace of the sun\u201d.",
            "Brussels is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Brussels has a restaurant inside a cave.",
            "Brussels is famous for its incredible architecture."
        ]
    },
    {
        "city": "Edinburgh",
        "country": "United Kingdom",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Edinburgh means \u201criver of life\u201d.",
            "Edinburgh is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Edinburgh has a floating market.",
            "Edinburgh is famous for its incredible architecture."
        ]
    },
    {
        "city": "Munich",
        "country": "Germany",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Munich means \u201ccity of dreams\u201d.",
            "Munich is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Munich has a unique underground city system.",
            "Munich is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Marrakech",
        "country": "Morocco",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Marrakech means \u201ccity of dreams\u201d.",
            "Marrakech is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Marrakech has a floating market.",
            "Marrakech is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Dublin",
        "country": "Ireland",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Dublin means \u201criver of life\u201d.",
            "Dublin is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Dublin has a restaurant inside a cave.",
            "Dublin is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Santiago",
        "country": "Chile",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Santiago means \u201ccity of dreams\u201d.",
            "Santiago is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Santiago has a restaurant inside a cave.",
            "Santiago is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Helsinki means \u201cplace of the sun\u201d.",
            "Helsinki is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Helsinki has a floating market.",
            "Helsinki is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Zurich",
        "country": "Switzerland",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Zurich means \u201cplace of the sun\u201d.",
            "Zurich is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Zurich has a unique underground city system.",
            "Zurich is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Johannesburg",
        "country": "South Africa",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Johannesburg means \u201criver of life\u201d.",
            "Johannesburg is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Johannesburg has a unique underground city system.",
            "Johannesburg is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "San Francisco",
        "country": "USA",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of San Francisco means \u201criver of life\u201d.",
            "San Francisco is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? San Francisco has a restaurant inside a cave.",
            "San Francisco is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Seville",
        "country": "Spain",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Seville means \u201cplace of the sun\u201d.",
            "Seville is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Seville has a floating market.",
            "Seville is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Florence",
        "country": "Italy",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Florence means \u201criver of life\u201d.",
            "Florence is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Florence has more parks than any other city.",
            "Florence is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Bratislava",
        "country": "Slovakia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Bratislava means \u201ccity of dreams\u201d.",
            "Bratislava is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Bratislava has a unique underground city system.",
            "Bratislava is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Bali",
        "country": "Indonesia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Bali means \u201criver of life\u201d.",
            "Bali is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Bali has a restaurant inside a cave.",
            "Bali is famous for its incredible architecture."
        ]
    },
    {
        "city": "Reykjavik",
        "country": "Iceland",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Reykjavik means \u201cgateway to the world\u201d.",
            "Reykjavik is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Reykjavik has more parks than any other city.",
            "Reykjavik is famous for its incredible architecture."
        ]
    },
    {
        "city": "Hanoi",
        "country": "Vietnam",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Hanoi means \u201ccity of dreams\u201d.",
            "Hanoi is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Hanoi has a floating market.",
            "Hanoi is famous for its incredible architecture."
        ]
    },
    {
        "city": "Chennai",
        "country": "India",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Chennai means \u201criver of life\u201d.",
            "Chennai is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Chennai has a unique underground city system.",
            "Chennai is famous for its incredible architecture."
        ]
    },
    {
        "city": "Minsk",
        "country": "Belarus",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Minsk means \u201cplace of the sun\u201d.",
            "Minsk is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Minsk has a unique underground city system.",
            "Minsk is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Casablanca",
        "country": "Morocco",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Casablanca means \u201criver of life\u201d.",
            "Casablanca is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Casablanca has a restaurant inside a cave.",
            "Casablanca is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Luxembourg City",
        "country": "Luxembourg",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Luxembourg City means \u201cplace of the sun\u201d.",
            "Luxembourg City is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Luxembourg City has more parks than any other city.",
            "Luxembourg City is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Montevideo",
        "country": "Uruguay",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Montevideo means \u201cgateway to the world\u201d.",
            "Montevideo is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Montevideo has a unique underground city system.",
            "Montevideo is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Riga",
        "country": "Latvia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Riga means \u201criver of life\u201d.",
            "Riga is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Riga has a restaurant inside a cave.",
            "Riga is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Tallinn",
        "country": "Estonia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Tallinn means \u201cplace of the sun\u201d.",
            "Tallinn is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Tallinn has more parks than any other city.",
            "Tallinn is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Vilnius",
        "country": "Lithuania",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Vilnius means \u201ccity of dreams\u201d.",
            "Vilnius is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Vilnius has a floating market.",
            "Vilnius is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Doha",
        "country": "Qatar",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Doha means \u201ccity of dreams\u201d.",
            "Doha is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Doha has a floating market.",
            "Doha is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "San Juan",
        "country": "Puerto Rico",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of San Juan means \u201cplace of the sun\u201d.",
            "San Juan is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? San Juan has a floating market.",
            "San Juan is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Auckland",
        "country": "New Zealand",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Auckland means \u201ccity of dreams\u201d.",
            "Auckland is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Auckland has a restaurant inside a cave.",
            "Auckland is famous for its incredible architecture."
        ]
    },
    {
        "city": "Nairobi",
        "country": "Kenya",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Nairobi means \u201criver of life\u201d.",
            "Nairobi is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Nairobi has more parks than any other city.",
            "Nairobi is famous for its incredible architecture."
        ]
    },
    {
        "city": "Kigali",
        "country": "Rwanda",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Kigali means \u201criver of life\u201d.",
            "Kigali is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Kigali has a restaurant inside a cave.",
            "Kigali is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Lagos",
        "country": "Nigeria",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Lagos means \u201cplace of the sun\u201d.",
            "Lagos is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Lagos has a restaurant inside a cave.",
            "Lagos is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Accra",
        "country": "Ghana",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Accra means \u201criver of life\u201d.",
            "Accra is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Accra has a restaurant inside a cave.",
            "Accra is famous for its incredible architecture."
        ]
    },
    {
        "city": "Karachi",
        "country": "Pakistan",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Karachi means \u201ccity of dreams\u201d.",
            "Karachi is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Karachi has a unique underground city system.",
            "Karachi is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Colombo",
        "country": "Sri Lanka",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Colombo means \u201ccity of dreams\u201d.",
            "Colombo is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Colombo has a unique underground city system.",
            "Colombo is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Kathmandu",
        "country": "Nepal",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Kathmandu means \u201cgateway to the world\u201d.",
            "Kathmandu is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Kathmandu has more parks than any other city.",
            "Kathmandu is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Tashkent",
        "country": "Uzbekistan",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Tashkent means \u201cgateway to the world\u201d.",
            "Tashkent is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Tashkent has more parks than any other city.",
            "Tashkent is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Yerevan",
        "country": "Armenia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Yerevan means \u201cgateway to the world\u201d.",
            "Yerevan is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Yerevan has a unique underground city system.",
            "Yerevan is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Tbilisi",
        "country": "Georgia",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Tbilisi means \u201criver of life\u201d.",
            "Tbilisi is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Tbilisi has a floating market.",
            "Tbilisi is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Baku",
        "country": "Azerbaijan",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Baku means \u201cplace of the sun\u201d.",
            "Baku is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Baku has more parks than any other city.",
            "Baku is famous for its incredible architecture."
        ]
    },
    {
        "city": "La Paz",
        "country": "Bolivia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of La Paz means \u201ccity of dreams\u201d.",
            "La Paz is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? La Paz has a unique underground city system.",
            "La Paz is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "San Salvador",
        "country": "El Salvador",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of San Salvador means \u201cplace of the sun\u201d.",
            "San Salvador is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? San Salvador has a floating market.",
            "San Salvador is famous for its incredible architecture."
        ]
    },
    {
        "city": "Kingston",
        "country": "Jamaica",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Kingston means \u201cplace of the sun\u201d.",
            "Kingston is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Kingston has a restaurant inside a cave.",
            "Kingston is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Panama City",
        "country": "Panama",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Panama City means \u201ccity of dreams\u201d.",
            "Panama City is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Panama City has more parks than any other city.",
            "Panama City is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Porto",
        "country": "Portugal",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Porto means \u201cgateway to the world\u201d.",
            "Porto is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Porto has more parks than any other city.",
            "Porto is famous for its incredible architecture."
        ]
    },
    {
        "city": "Marseille",
        "country": "France",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Marseille means \u201cgateway to the world\u201d.",
            "Marseille is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Marseille has more parks than any other city.",
            "Marseille is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Lyon",
        "country": "France",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Lyon means \u201cgateway to the world\u201d.",
            "Lyon is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Lyon has more parks than any other city.",
            "Lyon is famous for its incredible architecture."
        ]
    },
    {
        "city": "Genoa",
        "country": "Italy",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Genoa means \u201cgateway to the world\u201d.",
            "Genoa is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Genoa has a restaurant inside a cave.",
            "Genoa is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Krakow",
        "country": "Poland",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Krakow means \u201criver of life\u201d.",
            "Krakow is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Krakow has more parks than any other city.",
            "Krakow is famous for its incredible architecture."
        ]
    },
    {
        "city": "Bruges",
        "country": "Belgium",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Bruges means \u201ccity of dreams\u201d.",
            "Bruges is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Bruges has a restaurant inside a cave.",
            "Bruges is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Split",
        "country": "Croatia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Split means \u201cplace of the sun\u201d.",
            "Split is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Split has more parks than any other city.",
            "Split is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Dubrovnik",
        "country": "Croatia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Dubrovnik means \u201ccity of dreams\u201d.",
            "Dubrovnik is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Dubrovnik has a floating market.",
            "Dubrovnik is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Sarajevo",
        "country": "Bosnia and Herzegovina",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Sarajevo means \u201cgateway to the world\u201d.",
            "Sarajevo is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Sarajevo has more parks than any other city.",
            "Sarajevo is famous for its incredible architecture."
        ]
    },
    {
        "city": "Ljubljana",
        "country": "Slovenia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Ljubljana means \u201criver of life\u201d.",
            "Ljubljana is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Ljubljana has more parks than any other city.",
            "Ljubljana is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Valencia",
        "country": "Spain",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Valencia means \u201cgateway to the world\u201d.",
            "Valencia is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Valencia has a unique underground city system.",
            "Valencia is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Cordoba",
        "country": "Spain",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Cordoba means \u201cplace of the sun\u201d.",
            "Cordoba is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Cordoba has more parks than any other city.",
            "Cordoba is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Sofia",
        "country": "Bulgaria",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Sofia means \u201cgateway to the world\u201d.",
            "Sofia is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Sofia has a floating market.",
            "Sofia is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Bucharest",
        "country": "Romania",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Bucharest means \u201criver of life\u201d.",
            "Bucharest is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Bucharest has more parks than any other city.",
            "Bucharest is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Belgrade",
        "country": "Serbia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Belgrade means \u201criver of life\u201d.",
            "Belgrade is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Belgrade has a restaurant inside a cave.",
            "Belgrade is famous for its incredible architecture."
        ]
    },
    {
        "city": "Skopje",
        "country": "North Macedonia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Skopje means \u201cgateway to the world\u201d.",
            "Skopje is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Skopje has a unique underground city system.",
            "Skopje is famous for its incredible architecture."
        ]
    },
    {
        "city": "Podgorica",
        "country": "Montenegro",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Podgorica means \u201criver of life\u201d.",
            "Podgorica is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Podgorica has more parks than any other city.",
            "Podgorica is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Tunis",
        "country": "Tunisia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Tunis means \u201cplace of the sun\u201d.",
            "Tunis is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Tunis has a restaurant inside a cave.",
            "Tunis is famous for its incredible architecture."
        ]
    },
    {
        "city": "Managua",
        "country": "Nicaragua",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Managua means \u201criver of life\u201d.",
            "Managua is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Managua has a floating market.",
            "Managua is famous for its traditional music and dance."
        ]
    },
    {
        "city": "San Jose",
        "country": "Costa Rica",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of San Jose means \u201cgateway to the world\u201d.",
            "San Jose is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? San Jose has a floating market.",
            "San Jose is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Asuncion",
        "country": "Paraguay",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Asuncion means \u201ccity of dreams\u201d.",
            "Asuncion is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Asuncion has a restaurant inside a cave.",
            "Asuncion is famous for its incredible architecture."
        ]
    },
    {
        "city": "Tegucigalpa",
        "country": "Honduras",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Tegucigalpa means \u201criver of life\u201d.",
            "Tegucigalpa is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Tegucigalpa has more parks than any other city.",
            "Tegucigalpa is famous for its incredible architecture."
        ]
    },
    {
        "city": "Paramaribo",
        "country": "Suriname",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Paramaribo means \u201ccity of dreams\u201d.",
            "Paramaribo is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Paramaribo has a floating market.",
            "Paramaribo is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Mal\u00e9",
        "country": "Maldives",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Mal\u00e9 means \u201cgateway to the world\u201d.",
            "Mal\u00e9 is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Mal\u00e9 has a floating market.",
            "Mal\u00e9 is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Port Louis",
        "country": "Mauritius",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Port Louis means \u201cplace of the sun\u201d.",
            "Port Louis is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Port Louis has a unique underground city system.",
            "Port Louis is famous for its incredible architecture."
        ]
    },
    {
        "city": "Victoria",
        "country": "Seychelles",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Victoria means \u201ccity of dreams\u201d.",
            "Victoria is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Victoria has a floating market.",
            "Victoria is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Windhoek",
        "country": "Namibia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Windhoek means \u201cgateway to the world\u201d.",
            "Windhoek is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Windhoek has more parks than any other city.",
            "Windhoek is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Maputo",
        "country": "Mozambique",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Maputo means \u201criver of life\u201d.",
            "Maputo is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Maputo has a unique underground city system.",
            "Maputo is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Harare",
        "country": "Zimbabwe",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Harare means \u201cgateway to the world\u201d.",
            "Harare is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Harare has a unique underground city system.",
            "Harare is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Luanda",
        "country": "Angola",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Luanda means \u201ccity of dreams\u201d.",
            "Luanda is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Luanda has more parks than any other city.",
            "Luanda is famous for its incredible architecture."
        ]
    },
    {
        "city": "Antananarivo",
        "country": "Madagascar",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Antananarivo means \u201cplace of the sun\u201d.",
            "Antananarivo is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Antananarivo has a unique underground city system.",
            "Antananarivo is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Bamako",
        "country": "Mali",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Bamako means \u201ccity of dreams\u201d.",
            "Bamako is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Bamako has more parks than any other city.",
            "Bamako is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Dakar",
        "country": "Senegal",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience world-class museums."
        ],
        "fun_fact": [
            "The name of Dakar means \u201ccity of dreams\u201d.",
            "Dakar is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Dakar has a restaurant inside a cave.",
            "Dakar is famous for its incredible architecture."
        ]
    },
    {
        "city": "Freetown",
        "country": "Sierra Leone",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Freetown means \u201criver of life\u201d.",
            "Freetown is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Freetown has a restaurant inside a cave.",
            "Freetown is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Monrovia",
        "country": "Liberia",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Monrovia means \u201criver of life\u201d.",
            "Monrovia is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Monrovia has a unique underground city system.",
            "Monrovia is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Nouakchott",
        "country": "Mauritania",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Nouakchott means \u201criver of life\u201d.",
            "Nouakchott is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Nouakchott has a floating market.",
            "Nouakchott is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Libreville",
        "country": "Gabon",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Libreville means \u201cplace of the sun\u201d.",
            "Libreville is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Libreville has a restaurant inside a cave.",
            "Libreville is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Port Moresby",
        "country": "Papua New Guinea",
        "clues": [
            "This city is known for its iconic landmark, an ancient temple.",
            "A place where you can experience delicious street food."
        ],
        "fun_fact": [
            "The name of Port Moresby means \u201cplace of the sun\u201d.",
            "Port Moresby is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Port Moresby has a restaurant inside a cave.",
            "Port Moresby is famous for its incredible architecture."
        ]
    },
    {
        "city": "Hobart",
        "country": "Australia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Hobart means \u201criver of life\u201d.",
            "Hobart is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Hobart has a floating market.",
            "Hobart is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Perth",
        "country": "Australia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Perth means \u201cgateway to the world\u201d.",
            "Perth is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Perth has more parks than any other city.",
            "Perth is famous for its incredible architecture."
        ]
    },
    {
        "city": "Adelaide",
        "country": "Australia",
        "clues": [
            "This city is known for its iconic landmark, a famous bridge.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Adelaide means \u201ccity of dreams\u201d.",
            "Adelaide is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Adelaide has more parks than any other city.",
            "Adelaide is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Canberra",
        "country": "Australia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience centuries-old traditions."
        ],
        "fun_fact": [
            "The name of Canberra means \u201cplace of the sun\u201d.",
            "Canberra is home to a historic marketplace dating back centuries."
        ],
        "trivia": [
            "Did you know? Canberra has a unique underground city system.",
            "Canberra is famous for its traditional music and dance."
        ]
    },
    {
        "city": "Ulaanbaatar",
        "country": "Mongolia",
        "clues": [
            "This city is known for its iconic landmark, a stunning skyline.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Ulaanbaatar means \u201criver of life\u201d.",
            "Ulaanbaatar is home to a massive annual festival that attracts millions."
        ],
        "trivia": [
            "Did you know? Ulaanbaatar has a unique underground city system.",
            "Ulaanbaatar is famous for its cuisine that blends multiple cultures."
        ]
    },
    {
        "city": "Vientiane",
        "country": "Laos",
        "clues": [
            "This city is known for its iconic landmark, a historic castle.",
            "A place where you can experience vibrant nightlife."
        ],
        "fun_fact": [
            "The name of Vientiane means \u201cgateway to the world\u201d.",
            "Vientiane is home to one of the oldest universities in the world."
        ],
        "trivia": [
            "Did you know? Vientiane has more parks than any other city.",
            "Vientiane is famous for its traditional music and dance."
        ]
    }
];

  const { askedQuestions = [] } = req.body;

  const remainingDestinations = destinations.filter(
    (destination) => !askedQuestions.includes(destination.city)
  );

  if (remainingDestinations.length === 0) {
    res.status(200).json(null);
    return;
  }

  let randomDestination = remainingDestinations[Math.floor(Math.random() * remainingDestinations.length)];

  let startIndex = destinations.length > 4 ? Math.floor(Math.random() * destinations.length) : 0;
  const options = destinations.slice(startIndex, startIndex + 4).map((destination) => destination.city);

  randomDestination.options = options;

  res.status(200).json(randomDestination);
}
