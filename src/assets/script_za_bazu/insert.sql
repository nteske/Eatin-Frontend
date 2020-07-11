--restoran
INSERT INTO Dostava.Restoran(naziv_restorana, pib_restorana, telefon_restorana, opis_restorana, slika_restorana)
VALUES('Caribic Pizza', '101629981', '0666611800', 'Caribic je picerija osnovana 2005. godine.', 'https://www.caribic.rs/uploads/files/images/logo.svg');
INSERT INTO Dostava.Restoran(naziv_restorana, pib_restorana, telefon_restorana, opis_restorana, slika_restorana)
VALUES('Minuta', '104258197', '+381216339300', '2006. godine zapoceli smo ideju da ljudima ponudimo sirok asortiman nasih proizvoda (peciva, sendvici, salate, pice, rostilj, palacinke, sladoled)', 'https://minuta.rs/wp-content/uploads/2016/12/minuta-web-logo-test.png');

select * from Dostava.Restoran;

--tip datuma
INSERT INTO Dostava.Tip_datuma(opis_tipa_datuma)
VALUES ('Radni dan');
INSERT INTO Dostava.Tip_datuma(opis_tipa_datuma)
VALUES ('Subota');
INSERT INTO Dostava.Tip_datuma(opis_tipa_datuma)
VALUES ('Nedelja');

select * from Dostava.Tip_datuma;

--radi
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(1, 1, '8:00:00', '23:00:00');
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(2, 1, '8:00:00', '20:00:00');
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(3, 1, '8:00:00', '16:00:00');
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(1, 2, '6:00:00', '23:00:00');
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(2, 2, '6:00:00', '20:00:00');
INSERT INTO Dostava.Radi(id_tipa_datuma, id_restorana, vreme_od, vreme_do)
VALUES(3, 2, '6:00:00', '16:00:00');

select * from Dostava.Radi;

--tip restorana
INSERT INTO Dostava.Tip_restorana(opis_tipa_restorana)
VALUES ('Picerija');
INSERT INTO Dostava.Tip_restorana(opis_tipa_restorana)
VALUES ('Kineska hrana');
INSERT INTO Dostava.Tip_restorana(opis_tipa_restorana)
VALUES ('Brza hrana');

select * from Dostava.Tip_restorana;

--je tipa
INSERT INTO Dostava.Je_tipa(id_tipa_restorana, id_restorana)
VALUES (1, 1);
INSERT INTO Dostava.Je_tipa(id_tipa_restorana, id_restorana)
VALUES (3, 2);

select * from Dostava.Je_tipa;

--tip artikla
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Pice'); --piĆe
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Pizza');
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Glavno jelo');
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Dezert');
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Dorucak');
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Sendvici');
INSERT INTO Dostava.Tip_artikla(opis_tipa_artikla)
VALUES('Girosi');

select * from Dostava.Tip_artikla;

--artikl
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(1, 1, 'Pepsi', 'https://cenoteka.rs/assets/images/articles/pepsi-limenka-330ml-1000076-large.jpg', 80.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(1, 2, 'Capricciosa', 'https://www.caribic.rs/uploads/cache/img-15a6f00f47014b2f2a538636ffe7c307', 900.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(1, 2, 'Venezia', 'https://www.caribic.rs/uploads/cache/img-32c92d5aad2c339451ef1e48ab1cff89', 950.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(1, 2, 'Srce pizza', 'https://www.caribic.rs/uploads/cache/img-23bb6dc2343fbd53c67a0a0f031cf0ac', 1000.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(2, 1, 'Pepsi', 'https://cenoteka.rs/assets/images/articles/pepsi-limenka-330ml-1000076-large.jpg', 100.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(2, 7, 'Pileci giros', 'https://minuta.rs/wp-content/uploads/2017/01/Giros.jpg', 180.99);
INSERT INTO Dostava.Artikl(id_restorana, id_tipa_artikla, naziv_artikla, slika_artikla, cena_artikla)
VALUES(2, 6, 'Minuta index', 'https://minuta.rs/wp-content/uploads/2017/03/MinutaIndex.jpg', 200.99);

select * from Dostava.Artikl;

--prilog
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Kecap ljuti');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Kecap blagi');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Majonez');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Pavlaka');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Luk');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Krastavci');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Paradajz');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Zelena salata');
INSERT INTO Dostava.Prilog(naziv_priloga)
VALUES ('Kupus');

select * from Dostava.Prilog;

--moze_sadrzati_priloge
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (1, 2);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (2, 2);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (1, 3);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (2, 3);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (1, 4);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (2, 4);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (1, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (2, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (3, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (4, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (5, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (6, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (7, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (8, 6);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (1, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (2, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (3, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (4, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (5, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (6, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (7, 7);
INSERT INTO Dostava.Moze_sadrzati_priloge(id_priloga, id_artikla)
VALUES (8, 7);


select * from Dostava.Moze_sadrzati_priloge;

--mera
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('Veliki');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('Mali');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('Porodicna');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('Srednja');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('Mini');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('0.3l');
INSERT INTO Dostava.Mera(opis_mere)
VALUES ('0.5l');

select * from Dostava.Mera;

--moze_biti_mere
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (6, 1);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (7, 1);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (6, 5);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (7, 5);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (3, 2);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (4, 2);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (5, 2);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (3, 3);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (4, 3);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (5, 3);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (3, 4);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (4, 4);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (5, 4);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (1, 6);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (2, 6);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (1, 7);
INSERT INTO Dostava.Moze_biti_mere(id_mere, id_artikla)
VALUES (2, 7);

select * from Dostava.Moze_biti_mere;

--lokacija
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Novi Sad', 'Modene', 'bb', '21000', 19.846112, 45.254689);
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Novi Sad', 'Sutjetska', '2', '21000', 19.846653, 45.247323);
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Backi Jarak', 'Partizanska', '6', '21234', 19.865583, 45.372337);
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Novi Sad', 'Dr Sime Milosevica', '8', '21000', 19.848489, 45.245642);
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Novi Sad', 'Bulevar Cara Lazara', '51', '21000', 19.835799, 45.242242);
INSERT INTO Dostava.Lokacija(grad, ulica, broj, postanski_broj, longitude, latitude)
VALUES ('Novi Sad', 'Sentandrejski put', '53', '21000', 19.827260, 45.281864);

select * from Dostava.Lokacija;

--restoran_se_nalazi
INSERT INTO Dostava.Restoran_se_nalazi(id_lokacije, id_restorana)
VALUES (1, 1);
INSERT INTO Dostava.Restoran_se_nalazi(id_lokacije, id_restorana)
VALUES (2, 2);

select * from Dostava.Restoran_se_nalazi;

--uloga
select * from Dostava.Uloga;
--vec popunjeno u DDL skripti

--korisnik
--klijenti
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (1, 'ivan.petrovic123@gmail.com', 'ivanpetrovic', 'Ivan', 'Petrovic', '0623658291', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (1, 'anaper0vic@gmail.com', 'anaperovic', 'Ana', 'Perovic', '065932587', 1);
--zaposleni
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (2, 'lristic@caribic.com', 'zaposlenicaribic1', 'Lara', 'Ristic', '062148569', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (2, 'teodorilic@minuta.com', 'zaposleniminuta1', 'Teodor', 'Ilic', '0635287596', 1);
--dostavljaci
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (3, 'ilic@eatit.com', 'dostava1', 'Aleksandar', 'Ilic', '061524963', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (3, 'milinkovic@eatit.com', 'dostava2', 'Ivan', 'Milinkovic', '064721584', 1);
--admini
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (4, 'tesic@eatit.com', 'nemanjatesic96', 'Nemanja', 'Tesic', '061234567', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (4, 'samardzic@eatit.com', 'marianasamardzic97', 'Mariana', 'Samardzic', '063142547', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (4, 'kron@eatit.com', 'jovankron97', 'Jovan', 'Kron', '064825469', 1);
INSERT INTO Dostava.Korisnik(id_uloge, email_korisnika, lozinka_korisnika, ime_korisnika, prezime_korisnika, telefon_korisnika, aktivan)
VALUES (4, 'karanovic@eatit.com', 'majakaranovic98', 'Maja', 'Karanovic', '065259413', 1);

select * from Dostava.Korisnik;

--zaposleni
INSERT INTO Dostava.Zaposleni(id_zaposlenog, id_restorana, funkcija_zaposlenog)
VALUES (3, 1, 'Kasir');
INSERT INTO Dostava.Zaposleni(id_zaposlenog, id_restorana, funkcija_zaposlenog)
VALUES (4, 2, 'Kasir');

select * from Dostava.Zaposleni;

--klijent
INSERT INTO Dostava.Klijent(id_klijenta)
VALUES (1);
INSERT INTO Dostava.Klijent(id_klijenta)
VALUES (2);

select * from Dostava.Klijent;

--klijent_se_nalazi
INSERT INTO Dostava.Klijent_se_nalazi(id_lokacije, id_klijenta, aktuelna_adresa)
VALUES (4, 1, 1);
INSERT INTO Dostava.Klijent_se_nalazi(id_lokacije, id_klijenta, aktuelna_adresa)
VALUES (5, 2, 1);

select * from Dostava.Klijent_se_nalazi;

--dostavljac
INSERT INTO Dostava.Dostavljac(id_dostavljaca, prevozno_sredstvo)
VALUES (5, 'Automobil');
INSERT INTO Dostava.Dostavljac(id_dostavljaca, prevozno_sredstvo)
VALUES (6, 'Bicikl');

select * from Dostava.Dostavljac;

--porudzbina
INSERT INTO Dostava.Porudzbina(id_klijenta, id_dostavljaca, id_lokacije, id_restorana, status_porudzbine, ukupna_cena)
VALUES (1, 5, 4, 1, 'Primljena', 1500.00);
INSERT INTO Dostava.Porudzbina(id_klijenta, id_dostavljaca, id_lokacije, id_restorana, status_porudzbine, ukupna_cena)
VALUES (2, 6, 5, 2, 'Primljena', 2000.00);

select * from Dostava.Porudzbina;

--sadrzi
INSERT INTO Dostava.Sadrzi(id_porudzbine, id_artikla, id_mere)
VALUES (1, 1, 6);
INSERT INTO Dostava.Sadrzi(id_porudzbine, id_artikla, id_mere)
VALUES (1, 2, 4);
INSERT INTO Dostava.Sadrzi(id_porudzbine, id_artikla, id_mere)
VALUES (2, 5, 7);
INSERT INTO Dostava.Sadrzi(id_porudzbine, id_artikla, id_mere)
VALUES (2, 7, 1);

select * from Dostava.Sadrzi;

--ima_priloge
INSERT INTO Dostava.Ima_priloge(id_sadrzi, id_priloga)
VALUES(2, 1);

select * from Dostava.Ima_priloge;

select * from Dostava.Sadrzi s full outer join Dostava.Artikl a on (s.id_artikla = a.id_artikla) full outer join Dostava.Ima_priloge i on (s.id_sadrzi = i.id_sadrzi) full outer join Dostava.Prilog p on (i.id_priloga = p.id_priloga);
