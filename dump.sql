DROP TABLE IF EXISTS RefinedQuestion;
DROP TABLE IF EXISTS RefinedQuestionAnswered;
DROP TABLE IF EXISTS Categorie;
DROP TABLE IF EXISTS CategorieRequested;
DROP TABLE IF EXISTS PriceRequested;
DROP TABLE IF EXISTS YearRequested;
DROP TABLE IF EXISTS AromaRequested;
DROP TABLE IF EXISTS Aroma;
DROP TABLE IF EXISTS GrapeVarietyRequested;
DROP TABLE IF EXISTS GrapeVariety;
DROP TABLE IF EXISTS DishRequested;
DROP TABLE IF EXISTS PersonnalInformation;
DROP TABLE IF EXISTS ChatRequest;

CREATE TABLE ChatRequest (
    idChatRequest int NOT NULL AUTO_INCREMENT,
    dateFirstRequest datetime NOT NULL,
    firstRequest varchar(255) NOT NULL,
    idUser int,
	PRIMARY KEY (idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE PersonnalInformation (
    idPersonalInformation int NOT NULL AUTO_INCREMENT,
    mail varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    firstname varchar(255) NOT NULL,
	idChatRequest int NOT NULL,
	PRIMARY KEY (idPersonalInformation)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE DishRequested (
    idDishRequested int NOT NULL AUTO_INCREMENT,
    dish varchar(255) NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idDishRequested)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE GrapeVariety (
    idGrapeVariety int NOT NULL AUTO_INCREMENT,
	grapeVariety varchar(255) NOT NULL,
	PRIMARY KEY (idGrapeVariety)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE GrapeVarietyRequested (
    idGrapeVariety int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idGrapeVariety, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Aroma (
    idAroma int NOT NULL AUTO_INCREMENT,
	aroma varchar(255),
	PRIMARY KEY (idAroma)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE AromaRequested (
    idAroma int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idAroma, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE YearRequested (
    idYearRequested int NOT NULL AUTO_INCREMENT,
    year int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idYearRequested)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE PriceRequested (
    idPriceRequested int NOT NULL AUTO_INCREMENT,
    priceMin int NOT NULL,
    priceMax int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idPriceRequested)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE CategorieRequested (
    idCategorie int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idCategorie, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Categorie (
    idCategorie int NOT NULL AUTO_INCREMENT,
    categorie varchar(255) NOT NULL,
	PRIMARY KEY (idCategorie)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE RefinedQuestionAnswered (
    idRefinedQuestion int NOT NULL,
    value bool NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idRefinedQuestion, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE RefinedQuestion (
    idRefinedQuestion int NOT NULL AUTO_INCREMENT,
    refinedQuestion varchar(255) NOT NULL,
	PRIMARY KEY (idRefinedQuestion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE RefinedQuestionAnswered
ADD CONSTRAINT FK_RefinedQuestionAnswered_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE CategorieRequested
ADD CONSTRAINT FK_CategorieRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE PriceRequested
ADD CONSTRAINT FK_PriceRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE YearRequested
ADD CONSTRAINT FK_YearRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE AromaRequested
ADD CONSTRAINT FK_AromaRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE GrapeVarietyRequested
ADD CONSTRAINT FK_GrapeVarietyRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE DishRequested
ADD CONSTRAINT FK_DishRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE PersonnalInformation
ADD CONSTRAINT FK_PersonnalInformation_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
