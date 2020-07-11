--kredencijali: it21g2016; ftnftn2016

use it21g2016;

--kreiranje seme
if not exists(select * from sys.schemas where name = 'Dostava')
begin
    execute('create schema Dostava authorization dbo');
end;

--drop stranih kljuceva
if object_id ('FK_Token_Korisnik', 'FK') is not null
    alter table Dostava.Token
        drop constraint FK_Token_Korisnik;
if object_id ('FK_Radi_Tip_datuma', 'FK') is not null
    alter table Dostava.Radi
        drop constraint FK_Radi_Tip_datuma;
if object_id ('FK_Radi_Restoran', 'FK') is not null
    alter table Dostava.Radi
        drop constraint FK_Radi_Restoran;
if object_id ('FK_Je_tipa_Tip_restorana', 'FK') is not null
    alter table Dostava.Je_tipa
        drop constraint FK_Je_tipa_Tip_restorana;
if object_id ('FK_Je_tipa_Restoran', 'FK') is not null
    alter table Dostava.Je_tipa
        drop constraint FK_Je_tipa_Restoran;
if object_id ('FK_Korisnik_Uloga', 'FK') is not null
    alter table Dostava.Korisnik
        drop constraint FK_Korisnik_Uloga;
if object_id ('FK_Zaposleni_Korisnik', 'FK') is not null
    alter table Dostava.Zaposleni
        drop constraint FK_Zaposleni_Korisnik;
if object_id ('FK_Zaposleni_Restoran', 'FK') is not null
    alter table Dostava.Zaposleni
        drop constraint FK_Zaposleni_Restoran;
if object_id ('FK_Klijent_Korisnik', 'FK') is not null
    alter table Dostava.Klijent
        drop constraint FK_Klijent_Korisnik;
if object_id ('FK_Dostavljac_Korisnik', 'FK') is not null
    alter table Dostava.Dostavljac
        drop constraint FK_Dostavljac_Korisnik;
if object_id ('FK_Restoran_se_nalazi_Lokacija', 'FK') is not null
    alter table Dostava.Restoran_se_nalazi
        drop constraint FK_Restoran_se_nalazi_Lokacija;
if object_id ('FK_Restoran_se_nalazi_Restoran', 'FK') is not null
    alter table Dostava.Restoran_se_nalazi
        drop constraint FK_Restoran_se_nalazi_Restoran;
if object_id ('FK_Klijent_se_nalazi_Lokacija', 'FK') is not null
    alter table Dostava.Klijent_se_nalazi
        drop constraint FK_Klijent_se_nalazi_Lokacija;
if object_id ('FK_Klijent_se_nalazi_Klijent', 'FK') is not null
    alter table Dostava.Klijent_se_nalazi
        drop constraint FK_Klijent_se_nalazi_Klijent;
if object_id ('FK_Artikl_Tip_artikla', 'FK') is not null
    alter table Dostava.Artikl
        drop constraint FK_Artikl_Tip_artikla;
if object_id ('FK_Artikl_Restoran', 'FK') is not null
    alter table Dostava.Artikl
        drop constraint FK_Artikl_Restoran;
if object_id ('FK_Moze_sadrzati_priloge_Prilog', 'FK') is not null
    alter table Dostava.Moze_sadrzati_priloge
        drop constraint FK_Moze_sadrzati_priloge_Prilog;
if object_id ('FK_Moze_sadrzati_priloge_Artikl', 'FK') is not null
    alter table Dostava.Moze_sadrzati_priloge
        drop constraint FK_Moze_sadrzati_priloge_Artikl;
if object_id ('FK_Moze_biti_mere_Mera', 'FK') is not null
    alter table Dostava.Moze_biti_mere
        drop constraint FK_Moze_biti_mere_Mera;
if object_id ('FK_Moze_biti_mere_Artikl', 'FK') is not null
    alter table Dostava.Moze_biti_mere
        drop constraint FK_Moze_biti_mere_Artikl;
if object_id ('FK_Porudzbina_Klijent', 'FK') is not null
    alter table Dostava.Porudzbina
        drop constraint FK_Porudzbina_Klijent;
if object_id ('FK_Porudzbina_Restoran', 'FK') is not null
    alter table Dostava.Restoran
        drop constraint FK_Porudzbina_Restoran;
if object_id ('FK_Porudzbina_Dostavljac', 'FK') is not null
    alter table Dostava.Porudzbina
        drop constraint FK_Porudzbina_Dostavljac;
if object_id ('FK_Porudzbina_Lokacija', 'FK') is not null
    alter table Dostava.Porudzbina
        drop constraint FK_Porudzbina_Lokacija;

if object_id ('FK_Sadrzi_Porudzbina', 'FK') is not null
    alter table Dostava.Sadrzi
        drop constraint FK_Sadrzi_Porudzbina;
if object_id ('FK_Sadrzi_Artikl', 'FK') is not null
    alter table Dostava.Sadrzi
        drop constraint FK_Sadrzi_Artikl;
if object_id ('FK_Sadrzi_Mera', 'FK') is not null
    alter table Dostava.Sadrzi
        drop constraint FK_Sadrzi_Mera;
if object_id ('FK_Ima_priloge_Sadrzi', 'FK') is not null
    alter table Dostava.Ima_priloge
        drop constraint FK_Ima_priloge_Sadrzi;
if object_id ('FK_Ima_priloge_Prilog', 'FK') is not null
    alter table Dostava.Ima_priloge
        drop constraint FK_Ima_priloge_Prilog;

--drop tabela
if object_id ('Dostava.Token', 'U') is not null
    drop table Dostava.Token;
if object_id ('Dostava.Radi', 'U') is not null
    drop table Dostava.Radi;
if object_id ('Dostava.Tip_datuma', 'U') is not null
    drop table Dostava.Tip_datuma;
if object_id ('Dostava.Ima_priloge', 'U') is not null
    drop table Dostava.Ima_priloge;
if object_id ('Dostava.Je_tipa', 'U') is not null
    drop table Dostava.Je_tipa;
if object_id ('Dostava.Tip_restorana', 'U') is not null
    drop table Dostava.Tip_restorana;
if object_id ('Dostava.Moze_sadrzati_priloge', 'U') is not null
    drop table Dostava.Moze_sadrzati_priloge;
if object_id ('Dostava.Prilog', 'U') is not null
    drop table Dostava.Prilog;
if object_id ('Dostava.Restoran_se_nalazi', 'U') is not null
    drop table Dostava.Restoran_se_nalazi;
if object_id ('Dostava.Klijent_se_nalazi', 'U') is not null
    drop table Dostava.Klijent_se_nalazi;
if object_id ('Dostava.Moze_biti_mere', 'U') is not null
    drop table Dostava.Moze_biti_mere;
if object_id ('Dostava.Sadrzi', 'U') is not null
    drop table Dostava.Sadrzi;
if object_id ('Dostava.Mera', 'U') is not null
    drop table Dostava.Mera;
if object_id ('Dostava.Artikl', 'U') is not null
    drop table Dostava.Artikl;
if object_id ('Dostava.Tip_artikla', 'U') is not null
    drop table Dostava.Tip_artikla;
if object_id ('Dostava.Porudzbina', 'U') is not null
    drop table Dostava.Porudzbina;
if object_id ('Dostava.Dostavljac', 'U') is not null
    drop table Dostava.Dostavljac;
if object_id ('Dostava.Klijent', 'U') is not null
    drop table Dostava.Klijent;
if object_id ('Dostava.Zaposleni', 'U') is not null
    drop table Dostava.Zaposleni;
if object_id ('Dostava.Restoran', 'U') is not null
    drop table Dostava.Restoran;
if object_id ('Dostava.Korisnik', 'U') is not null
    drop table Dostava.Korisnik;
if object_id ('Dostava.Lokacija', 'U') is not null
    drop table Dostava.Lokacija;
if object_id ('Dostava.Uloga', 'U') is not null
    drop table Dostava.Uloga;

--drop sekvenci
if object_id ('Dostava.Token_sequence', 'SO') is not null
    drop sequence Dostava.Token_sequence;
if object_id ('Dostava.Porudzbina_sequence', 'SO') is not null
    drop sequence Dostava.Porudzbina_sequence;
if object_id ('Dostava.Artikl_sequence', 'SO') is not null
    drop sequence Dostava.Artikl_sequence;
if object_id ('Dostava.Lokacija_sequence', 'SO') is not null
    drop sequence Dostava.Lokacija_sequence;
if object_id ('Dostava.Restoran_sequence', 'SO') is not null
    drop sequence Dostava.Restoran_sequence;
if object_id ('Dostava.Korisnik_sequence', 'SO') is not null
    drop sequence Dostava.Korisnik_sequence;
if object_id ('Dostava.Uloga_sequence', 'SO') is not null
    drop sequence Dostava.Uloga_sequence;
if object_id ('Dostava.Mera_sequence', 'SO') is not null
    drop sequence Dostava.Mera_sequence;
if object_id ('Dostava.Prilog_sequence', 'SO') is not null
    drop sequence Dostava.Prilog_sequence;
if object_id ('Dostava.Tip_artikla_sequence', 'SO') is not null
    drop sequence Dostava.Tip_artikla_sequence;
if object_id ('Dostava.Tip_restorana_sequence', 'SO') is not null
    drop sequence Dostava.Tip_restorana_sequence;
if object_id ('Dostava.Tip_datuma_sequence', 'SO') is not null
    drop sequence Dostava.Tip_datuma_sequence;
if object_id ('Dostava.Radi_sequence', 'SO') is not null
    drop sequence Dostava.Radi_sequence;
if object_id ('Dostava.Ima_priloge_sequence', 'SO') is not null
    drop sequence Dostava.Ima_priloge_sequence;
if object_id ('Dostava.Je_tipa_sequence', 'SO') is not null
    drop sequence Dostava.Je_tipa_sequence;
if object_id ('Dostava.Moze_sadrzati_priloge_sequence', 'SO') is not null
    drop sequence Dostava.Moze_sadrzati_priloge_sequence;
if object_id ('Dostava.Restoran_se_nalazi_sequence', 'SO') is not null
    drop sequence Dostava.Restoran_se_nalazi_sequence;
if object_id ('Dostava.Klijent_se_nalazi_sequence', 'SO') is not null
    drop sequence Dostava.Klijent_se_nalazi_sequence;
if object_id ('Dostava.Moze_biti_mere_sequence', 'SO') is not null
    drop sequence Dostava.Moze_biti_mere_sequence;
if object_id ('Dostava.Sadrzi_sequence', 'SO') is not null
    drop sequence Dostava.Sadrzi_sequence;

--kreiranje sekvenci i tabela--



--RESTORAN
create sequence Dostava.Restoran_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Restoran (
	id_restorana int default (next value for Dostava.Restoran_sequence),
	naziv_restorana varchar(50) not null,
	pib_restorana varchar(9) unique not null,
	telefon_restorana varchar(15) not null,
	opis_restorana varchar(200),
	slika_restorana varchar(200) not null,
	constraint CH_Restoran_mbr check (len(pib_restorana) = 9),
	constraint PK_Restoran primary key (id_restorana)
);

--TIP DATUMA
create sequence Dostava.Tip_datuma_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Tip_datuma (
	id_tipa_datuma int default (next value for Dostava.Tip_datuma_sequence),
	opis_tipa_datuma varchar(30) not null,
	constraint PK_Tip_datuma primary key (id_tipa_datuma)
);

--RADI
create sequence Dostava.Radi_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Radi (
	id_radi int default (next value for Dostava.Radi_sequence),
	id_tipa_datuma int not null,
	id_restorana int not null,
	vreme_od time not null,
	vreme_do time not null,
	constraint FK_Radi_Tip_datuma foreign key (id_tipa_datuma)
		references Dostava.Tip_datuma (id_tipa_datuma),
	constraint FK_Radi_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint PK_Radi primary key (id_radi)
);

--TIP RESTORANA
create sequence Dostava.Tip_restorana_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Tip_restorana (
	id_tipa_restorana int default (next value for Dostava.Tip_restorana_sequence),
	opis_tipa_restorana varchar(30) not null,
	constraint PK_Tip_restorana primary key (id_tipa_restorana)
);

--JE_TIPA (JE_TIPA_RESTORANA)
create sequence Dostava.Je_tipa_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Je_tipa (
	id_je_tipa int default (next value for Dostava.Je_tipa_sequence),
	id_tipa_restorana int not null,
	id_restorana int not null,
	constraint FK_Je_tipa_Tip_restorana foreign key (id_tipa_restorana)
		references Dostava.Tip_restorana (id_tipa_restorana),
	constraint FK_Je_tipa_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint PK_Je_tipa primary key (id_je_tipa)
);

--TIP ARTIKLA
create sequence Dostava.Tip_artikla_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Tip_artikla (
	id_tipa_artikla int default (next value for Dostava.Tip_artikla_sequence),
	opis_tipa_artikla varchar(30) not null,
	constraint PK_Tip_artikla primary key (id_tipa_artikla)
);

--PRILOG
create sequence Dostava.Prilog_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Prilog (
	id_priloga int default (next value for Dostava.Prilog_sequence),
	naziv_priloga varchar(30) not null,
	constraint PK_Prilog primary key (id_priloga)
);

--MERA
create sequence Dostava.Mera_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Mera (
	id_mere int default (next value for Dostava.Mera_sequence),
	opis_mere varchar(30) not null,
	constraint PK_Mera primary key (id_mere)
);

--ULOGA
create sequence Dostava.Uloga_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Uloga (
	id_uloge int default (next value for Dostava.Uloga_sequence),
	naziv_uloge varchar(20) not null,
	constraint PK_Uloga primary key (id_uloge)
);

--KORISNIK
create sequence Dostava.Korisnik_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Korisnik (
	id_korisnika int default (next value for Dostava.Korisnik_sequence),
	id_uloge int not null,
	email_korisnika varchar(50) unique not null,
	lozinka_korisnika varchar(50) not null,
	ime_korisnika varchar(30) not null,
	prezime_korisnika varchar(30) not null,
	telefon_korisnika varchar(15) not null,
	aktivan bit not null,
	constraint CH_Korisnik_lozinka_korisnika check (len(lozinka_korisnika) > 7),
	constraint FK_Korisnik_Uloga foreign key (id_uloge)
		references Dostava.Uloga(id_uloge),
	constraint PK_Korisnik primary key (id_korisnika)
);

--ZAPOSLENI
create table Dostava.Zaposleni (
	id_zaposlenog int not null,
	id_restorana int,
	funkcija_zaposlenog varchar(15),
	constraint FK_Zaposleni_Korisnik foreign key (id_zaposlenog)
		references Dostava.Korisnik (id_korisnika),
	constraint FK_Zaposleni_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint PK_Zaposleni primary key (id_zaposlenog)
);

--KLIJENT
create table Dostava.Klijent (
	id_klijenta int not null,
	constraint FK_Klijent_Korisnik foreign key (id_klijenta)
		references Dostava.Korisnik (id_korisnika),
	constraint PK_Klijent primary key (id_klijenta)
);

--DOSTAVLJAC
create table Dostava.Dostavljac (
	id_dostavljaca int not null,
	prevozno_sredstvo varchar(15),
	constraint FK_Dostavljac_Korisnik foreign key (id_dostavljaca)
		references Dostava.Korisnik (id_korisnika),
	constraint PK_Dostavljac primary key (id_dostavljaca)
);

--LOKACIJA
create sequence Dostava.Lokacija_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Lokacija (
	id_lokacije int default (next value for Dostava.Lokacija_sequence),
	grad varchar(20) not null,
	ulica varchar(30) not null,
	broj varchar(1000) not null,
	postanski_broj varchar(5) not null,
	longitude decimal(12,9),
	latitude decimal(12,9),
	constraint PK_Lokacija primary key (id_lokacije)
);

--RESTORAN_SE_NALAZI
create sequence Dostava.Restoran_se_nalazi_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Restoran_se_nalazi (
	id_restoran_se_nalazi int default (next value for Dostava.Restoran_se_nalazi_sequence),
	id_lokacije int not null,
	id_restorana int not null,
	constraint FK_Restoran_se_nalazi_Lokacija foreign key (id_lokacije)
		references Dostava.Lokacija (id_lokacije),
	constraint FK_Restoran_se_nalazi_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint PK_Restoran_se_nalazi primary key (id_restoran_se_nalazi)
);

--KLIJENT_SE_NALAZI
create sequence Dostava.Klijent_se_nalazi_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Klijent_se_nalazi (
	id_klijent_se_nalazi int default (next value for Dostava.Klijent_se_nalazi_sequence),
	id_lokacije int not null,
	id_klijenta int not null,
	aktuelna_adresa bit not null,
	constraint FK_Klijent_se_nalazi_Lokacija foreign key (id_lokacije)
		references Dostava.Lokacija (id_lokacije),
	constraint FK_Klijent_se_nalazi_Klijent foreign key (id_klijenta)
		references Dostava.Klijent (id_klijenta),
	constraint PK_Klijent_se_nalazi primary key (id_klijent_se_nalazi)
);

--ARTIKL
create sequence Dostava.Artikl_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Artikl (
	id_artikla int default (next value for Dostava.Artikl_sequence),
	id_restorana int not null,
	id_tipa_artikla int not null,
	naziv_artikla varchar(50) not null,
	slika_artikla varchar(200) not null,
	cena_artikla decimal(10,2) not null,
	constraint FK_Artikl_Tip_artikla foreign key (id_tipa_artikla)
		references Dostava.Tip_artikla (id_tipa_artikla),
	constraint FK_Artikl_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint PK_Artikl primary key (id_artikla)
);

--MOZE_SADRZATI_PRILOGE
create sequence Dostava.Moze_sadrzati_priloge_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Moze_sadrzati_priloge (
	id_moze_sadrzati_priloge int default (next value for Dostava.Moze_sadrzati_priloge_sequence),
	id_priloga int not null,
	id_artikla int not null,
	constraint FK_Moze_sadrzati_priloge_Prilog foreign key (id_priloga)
		references Dostava.Prilog (id_priloga),
	constraint FK_Moze_sadrzati_priloge_Artikl foreign key (id_artikla)
		references Dostava.Artikl(id_artikla),
	constraint PK_Moze_sadrzati_priloge primary key (id_moze_sadrzati_priloge)
)

--MOZE_BITI_MERE
create sequence Dostava.Moze_biti_mere_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Moze_biti_mere (
	id_moze_biti_mere int default (next value for Dostava.Moze_biti_mere_sequence),
	id_mere int not null,
	id_artikla int not null,
	constraint FK_Moze_biti_mere_Mera foreign key (id_mere)
		references Dostava.Mera (id_mere),
	constraint FK_Moze_biti_mere_Artikl foreign key (id_artikla)
		references Dostava.Artikl(id_artikla),
	constraint PK_Moze_biti_mere primary key (id_moze_biti_mere)
)

--PORUDZBINA
create sequence Dostava.Porudzbina_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Porudzbina (
	id_porudzbine int default (next value for Dostava.Porudzbina_sequence),
	id_klijenta int not null,
	id_dostavljaca int,
	id_lokacije int not null,
	vreme_prijema_porudzbine datetime2(7) default(current_timestamp),
	vreme_isporuke_porudzbine datetime2(7),
	status_porudzbine varchar(20) not null,
	ukupna_cena decimal(10,2) not null,
	id_restorana int not null,
	constraint FK_Porudzbina_Klijent foreign key (id_klijenta)
		references Dostava.Klijent (id_klijenta),
	constraint FK_Porudzbina_Dostavljac foreign key (id_dostavljaca)
		references Dostava.Dostavljac (id_dostavljaca),
	constraint FK_Porudzbina_Lokacija foreign key (id_lokacije)
		references Dostava.Lokacija (id_lokacije),
	constraint FK_Porudzbina_Restoran foreign key (id_restorana)
		references Dostava.Restoran (id_restorana),
	constraint CH_Porudzbina_vremena check (vreme_prijema_porudzbine < vreme_isporuke_porudzbine),
	constraint CH_Porudzbina_status_porudzbine check (status_porudzbine in ('Primljena', 'Gotova', 'Preuzeta', 'Dostavljena')),
	constraint PK_Porudzbina primary key (id_porudzbine)
);

--SADRZI
create sequence Dostava.Sadrzi_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Sadrzi(
	id_sadrzi int default (next value for Dostava.Sadrzi_sequence),
	id_porudzbine int not null,
	id_artikla int not null,
	id_mere int,
	constraint FK_Sadrzi_Porudzbina foreign key (id_porudzbine)
		references Dostava.Porudzbina (id_porudzbine),
	constraint FK_Sadrzi_Artikl foreign key (id_artikla)
		references Dostava.Artikl (id_artikla),
	constraint FK_Sadrzi_Mera foreign key (id_mere)
		references Dostava.Mera (id_mere),
	constraint FK_Sadrzi primary key (id_sadrzi)
)

--IMA PRILOGE
create sequence Dostava.Ima_priloge_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Ima_priloge(
	id_ima_priloge int default (next value for Dostava.Ima_priloge_sequence),
	id_sadrzi int not null,
	id_priloga int not null,
	constraint FK_Ima_priloge_Sadrzi foreign key (id_sadrzi)
		references Dostava.Sadrzi (id_sadrzi),
	constraint FK_Ima_priloge_Prilog foreign key (id_priloga)
		references Dostava.Prilog (id_priloga),
	constraint PK_Ima_priloge primary key (id_ima_priloge)
)

--CONFIRMATION TOKEN
create sequence Dostava.Token_sequence as int
    start with 1
    increment by 1
    minvalue 1
    maxvalue 1000
    cycle;

create table Dostava.Token (
	id_tokena int default (next value for Dostava.Token_sequence),
	token varchar(100) not null,
	datum_kreiranja datetime2(7) not null,
	id_korisnika int,
	constraint PK_Token primary key (id_tokena),
	constraint FK_Token_Korisnik foreign key (id_korisnika)
		references Dostava.Korisnik (id_korisnika)
);

GO

--trigger instead of insert on Dostava.Klijent
IF OBJECT_ID('Dostava.TR_Klijent_insert_id', 'TR') IS NOT NULL
	DROP TRIGGER Dostava.TR_Klijent_insert_id;

GO
CREATE TRIGGER Dostava.TR_Klijent_insert_id
ON Dostava.Klijent
INSTEAD OF INSERT
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @id_korisnika int;
	select *
	into #InsertedTable
	from inserted;
	while exists (select * from #InsertedTable)
	begin
		select top 1 @id_korisnika = id_klijenta from #InsertedTable;

		if((select id_uloge from Dostava.Korisnik where id_korisnika = @id_korisnika) != 1)
		begin
			RAISERROR ('ID korisnika nema odgovarajucu ulogu', 16, 1);
			ROLLBACK TRANSACTION;
			RETURN;
		end
		else
		begin
			insert into Dostava.Klijent (id_klijenta) values (@id_korisnika);
		end

		delete #InsertedTable
		where id_klijenta = @id_korisnika;
	end
	drop table #InsertedTable;
END
GO


GO
--trigger instead of insert on Dostava.Zaposleni
IF OBJECT_ID('Dostava.TR_Zaposleni_insert_id', 'TR') IS NOT NULL
	DROP TRIGGER Dostava.TR_Zaposleni_insert_id;

GO
CREATE TRIGGER Dostava.TR_Zaposleni_insert_id
ON Dostava.Zaposleni
INSTEAD OF INSERT
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @id_korisnika int, @id_restorana int,
	@funkcija_zaposlenog varchar(15);
	select *
	into #InsertedTable
	from inserted;
	while exists (select * from #InsertedTable)
	begin
		select top 1 @id_korisnika = id_zaposlenog,
		@id_restorana = id_restorana, @funkcija_zaposlenog = funkcija_zaposlenog
		from #InsertedTable;

		if((select id_uloge from Dostava.Korisnik where id_korisnika = @id_korisnika) != 2)
		begin
			RAISERROR ('ID korisnika nema odgovarajucu ulogu', 16, 1);
			ROLLBACK TRANSACTION;
			RETURN;
		end
		else
		begin
			insert into Dostava.Zaposleni(id_zaposlenog,id_restorana,funkcija_zaposlenog)
			values (@id_korisnika,@id_restorana,@funkcija_zaposlenog);
		end

		delete #InsertedTable
		where id_zaposlenog = @id_korisnika;
	end
	drop table #InsertedTable;
END
GO



GO
--trigger instead of insert on Dostava.Dostavljac
IF OBJECT_ID('Dostava.TR_Dostavljac_insert_id', 'TR') IS NOT NULL
	DROP TRIGGER Dostava.TR_Dostavljac_insert_id;

GO
CREATE TRIGGER Dostava.TR_Dostavljac_insert_id
ON Dostava.Dostavljac
INSTEAD OF INSERT
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @id_korisnika int, @prevozno_sredstvo varchar(15);
	select *
	into #InsertedTable
	from inserted;
	while exists (select * from #InsertedTable)
	begin
		select top 1 @id_korisnika = id_dostavljaca,
		@prevozno_sredstvo = prevozno_sredstvo
		from #InsertedTable;

		if((select id_uloge from Dostava.Korisnik where id_korisnika = @id_korisnika) != 3)
		begin
			RAISERROR ('ID korisnika nema odgovarajucu ulogu', 16, 1);
			ROLLBACK TRANSACTION;
			RETURN;
		end
		else
		begin
			insert into Dostava.Dostavljac(id_dostavljaca,prevozno_sredstvo)
			values (@id_korisnika,@prevozno_sredstvo);
		end

		delete #InsertedTable
		where id_dostavljaca = @id_korisnika;
	end
	drop table #InsertedTable;
END
GO

--trigger instead of insert on Dostava.Klijent_se_nalazi
IF OBJECT_ID('Dostava.TR_Klijent_se_nalazi', 'TR') IS NOT NULL
	DROP TRIGGER Dostava.TR_Klijent_se_nalazi;

GO
CREATE TRIGGER Dostava.TR_Klijent_se_nalazi
ON Dostava.Klijent_se_nalazi
INSTEAD OF INSERT
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @id_klijenta int, @id_lokacije int,
	@aktuelna_adresa bit;
	select *
	into #InsertedTable
	from inserted;
	while exists (select * from #InsertedTable)
	begin
		select top 1 @id_klijenta = id_klijenta,
		@id_lokacije = id_lokacije, @aktuelna_adresa = aktuelna_adresa
		from #InsertedTable;

		if not exists(select * from Dostava.Klijent_se_nalazi where id_klijenta = @id_klijenta)
		begin
			insert into Dostava.Klijent_se_nalazi
			(id_klijenta,id_lokacije,aktuelna_adresa)
			values (@id_klijenta,@id_lokacije,1)
		end
		else
		begin
			if(@aktuelna_adresa = 1)
			begin
				update Dostava.Klijent_se_nalazi
				SET aktuelna_adresa = 0
				WHERE id_klijenta = @id_klijenta AND aktuelna_adresa = 1

				insert into Dostava.Klijent_se_nalazi
				(id_klijenta,id_lokacije,aktuelna_adresa)
				values (@id_klijenta,@id_lokacije,@aktuelna_adresa)
			end
			else
			begin
				insert into Dostava.Klijent_se_nalazi
				(id_klijenta,id_lokacije,aktuelna_adresa)
				values (@id_klijenta,@id_lokacije,@aktuelna_adresa)
			end

		end
		delete #InsertedTable
		where id_klijenta = @id_klijenta AND id_lokacije = @id_lokacije;
	end
	drop table #InsertedTable;
END
GO

--trigger instead of update on Dostava.Klijent_se_nalazi
IF OBJECT_ID('Dostava.TR_Klijent_se_nalazi_update', 'TR') IS NOT NULL
	DROP TRIGGER Dostava.TR_Klijent_se_nalazi_update;

GO
CREATE TRIGGER Dostava.TR_Klijent_se_nalazi_update
ON Dostava.Klijent_se_nalazi
INSTEAD OF UPDATE
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @id_klijenta int, @id_lokacije int,
	@aktuelna_adresa bit;
	select *
	into #InsertedTable
	from inserted;
	while exists (select * from #InsertedTable)
	begin
		select top 1 @id_klijenta = id_klijenta,
		@id_lokacije = id_lokacije, @aktuelna_adresa = aktuelna_adresa
		from #InsertedTable;

		if(@aktuelna_adresa = 1)
		begin
			UPDATE Dostava.Klijent_se_nalazi
			SET aktuelna_adresa = 0
			where id_klijenta = @id_klijenta and aktuelna_adresa = 1

			UPDATE Dostava.Klijent_se_nalazi
			SET aktuelna_adresa = 1
			where id_klijenta = @id_klijenta and id_lokacije = @id_lokacije
		end

		delete #InsertedTable
		where id_klijenta = @id_klijenta AND id_lokacije = @id_lokacije;
	end
	drop table #InsertedTable;
END
GO

--insert uloga
insert into Dostava.Uloga (naziv_uloge) values
('Klijent'),('Zaposleni'),('Dostavljac'),('Admin')
