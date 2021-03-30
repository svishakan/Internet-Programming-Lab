USE Patient_Details;

/* Records Table Creation */

DROP TABLE Records;

CREATE TABLE Records(
    pid     CHAR(5) PRIMARY KEY,
    pname   VARCHAR(40),
    age     NUMERIC(3),
    gender  CHAR(1),
    mstatus VARCHAR(25),
    addr    VARCHAR(100),
    phone   NUMERIC(12),
    dov     DATE
);

/* Inserting Dummy Records */ 

INSERT INTO Records VALUES(
    "P2001",
    "Chris Paley",
    25,
    "M",
    "Single",
    "275, Sunset Blvd, Los Angeles, CA",
    9887521131,
    "2021-01-21"
);

INSERT INTO Records VALUES(
    "P2002",
    "Rick Riordan",
    45,
    "M",
    "Married",
    "275, Olympus Avenue, Greek County, NJ",
    9444421212,
    "2021-02-23"
);

