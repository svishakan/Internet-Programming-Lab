/* Profile Table Creation */

USE mysql;

DROP TABLE Profile;

CREATE TABLE Profile(
    uid         CHAR(5) UNIQUE,
    uname       VARCHAR(40) PRIMARY KEY,
    pass        VARCHAR(20),
    name        VARCHAR(40),
    age         NUMERIC(3),
    location    VARCHAR(100)
);

/* Inserting Dummy Records */ 

INSERT INTO Profile VALUES(
    "P2001",
    "chris_p2k",
    "sunnyday",
    "Chris Paley",
    25,
    "Scranton"
);

INSERT INTO Profile VALUES(
    "P2002",
    "rickrolled",
    "youtube",
    "Rick Astley",
    30,
    "Harrow"
);

INSERT INTO Profile VALUES(
    "P2003",
    "universe_boss",
    "westindian",
    "Chris Gayle",
    34,
    "Trinidad & Tobago"
);

INSERT INTO Profile VALUES(
    "P2004",
    "ironman",
    "pepperpotts",
    "Anthony Stark",
    40,
    "Malibu"
);

INSERT INTO Profile VALUES(
    "P2005",
    "kal_el",
    "justiceleague",
    "Clark Kent",
    44,
    "Smallville"
);

INSERT INTO Profile VALUES(
    "P2006",
    "heywood",
    "manofsteel",
    "Nathaniel",
    32,
    "Waverider"
);

INSERT INTO Profile VALUES(
    "P2007",
    "saulgoodman",
    "wexlermcgill",
    "James M. McGill",
    37,
    "Albuquerque"
);

/*USAGE: source path_to_script/script.sql */