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
DROP TABLE IF EXISTS OpportunityRequested;
DROP TABLE IF EXISTS MarkRequested;
DROP TABLE IF EXISTS Mark;
DROP TABLE IF EXISTS ChatRequest;

CREATE TABLE ChatRequest (
    idChatRequest int NOT NULL AUTO_INCREMENT,
    dateFirstRequest datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
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

CREATE TABLE CategoryRequested (
    idCategory int NOT NULL,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idCategory, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Category (
    idCategory int NOT NULL AUTO_INCREMENT,
    category varchar(255) NOT NULL,
	PRIMARY KEY (idCategory)
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

CREATE TABLE OpportunityRequested (
    idOpportunityRequested int NOT NULL AUTO_INCREMENT,
    opportunity varchar(255) NOT NULL,
	idChatRequest int NOT NULL,
	PRIMARY KEY (idOpportunityRequested)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE MarkRequested (
    idMark int NOT NULL AUTO_INCREMENT,
    idChatRequest int NOT NULL,
	PRIMARY KEY (idMark, idChatRequest)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Mark (
    idMark int NOT NULL AUTO_INCREMENT,
    mark varchar(255) NOT NULL,
	PRIMARY KEY (idMark)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE RefinedQuestionAnswered
ADD CONSTRAINT FK_RefinedQuestionAnswered_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE CategoryRequested
ADD CONSTRAINT FK_CategoryRequested_ChatRequest
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
ALTER TABLE OpportunityRequested
ADD CONSTRAINT FK_OpportunityRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);
ALTER TABLE MarkRequested
ADD CONSTRAINT FK_MarkRequested_ChatRequest
FOREIGN KEY (idChatRequest) REFERENCES ChatRequest(idChatRequest);

ALTER TABLE MarkRequested
ADD CONSTRAINT FK_MarkRequested_Mark
FOREIGN KEY (idMark) REFERENCES Mark(idMark);

ALTER TABLE AromaRequested
ADD CONSTRAINT FK_AromaRequested_Aroma
FOREIGN KEY (idAroma) REFERENCES Aroma(idAroma);

ALTER TABLE GrapeVarietyRequested
ADD CONSTRAINT FK_GrapeVarietyRequested_GrapeVarietyRequested
FOREIGN KEY (idGrapeVariety) REFERENCES GrapeVariety(idGrapeVariety);

ALTER TABLE RefinedQuestionAnswered
ADD CONSTRAINT FK_RefinedQuestionAnswered_RefinedQuestion
FOREIGN KEY (idRefinedQuestion) REFERENCES RefinedQuestion(idRefinedQuestion);

ALTER TABLE CategoryRequested
ADD CONSTRAINT FK_CategoryRequested_Category
FOREIGN KEY (idCategory) REFERENCES Category(idCategory);

INSERT INTO Category
(category)
VALUES
('Rosé'),
('Blanc'),
('Rouge');

INSERT INTO Aroma
(aroma)
VALUES
('Végétal'),
('Fruité'),
('Floral'),
('Empyromatique'),
('Epice aromate');

INSERT INTO GrapeVariety
(grapeVariety)
VALUES
('Mourvèdre'),
('Syrah'),
('Cabernet sauvignon'),
('Rolle'),
('Cinsault'),
('Grenache noir'),
('Tibouren'),
('Sémillon'),
('Carignan');

INSERT INTO Mark
(mark)
VALUES
('Château St Roseline'),
('Château des demoiselles');
