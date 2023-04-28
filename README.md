 ## Leírás
Ez a **BiteMe Burger** Applikációnk Frontendje egy szakdologozatra

## Telepítés

```bash
$ npm install
```

## Az alakalmazás futtatása (olvasd el lentebb is)

```bash
# fejlesztői
$ npm run start

# Változtatások automatikus applikálása
$ npm run start:dev

# "Kulcsrakész"
$ npm run start:prod
```

## Tesztesetek
## Ez Backendhez kell
<p align="left">
 A végpontTesztek a  <a href="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/thunder-collection_BiteMe_Burger_V%C3%A9gpont_tesztek_final.json" target="blank">thunder-collection_BiteMe_Burger_Végpont_tesztek_final.json</a> fájlban elérhetőek amit egy egyszerű Thunder Client-es import-al már használható is
</p>
 
 ## Mielött futatnád az alkalmazást
.env.example fájlban megtalálod az adatbázis kapcsolat beállításait ha kész vagy a beállításával akkor töröld ki a **.example**-t a fájlból
### .env.example

Mivel az alkalmazások a localhost:3000-re vannak configolva ezért nem ajánlott ezeket változtatni
```bash
PORT=3000
DB_HOST=localhost
DB_PORT=
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=vizsgadb
```
## Adatbázis

<p align="left">
 Ajánlott a repoban megtalálható <a href="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/vizsgadb_final.sql" target="blank">vizsgadb_final.sql</a> dump-ot használni
</p>

### Az adatbázisban megtalálható felhaszálókhoz az adatok
```bash
Admin: 
- Email : admin@example.com
- Pw : 123321
User:
- Email : joska@example.com
- Pw : 123321
```

### Az adatbázis diagram
<p align="center">
  <img src="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/Final_database_structure.png"  alt="adatazisdiagram" />
</p>

## Dokumentáció
### Fejlesztői
A fejlesztői dokumentáció elérhető a repoban megtalálható [/docs/index.html](https://github.com/Juhaszcsenge/frontend_vizsga/blob/master/docs/index.html)



## Az alkalmazás többi része

### Weboldal

[BiteMe Burger Weboldal](https://github.com/Juhaszcsenge/frontend_vizsga)
> Fejlesztő: [Juhász Csenge](https://github.com/Juhaszcsenge)


### Mobil applikáció 

[BiteMe Burger App](https://github.com/greengamerhu/Vizsgaremek_android)

> Fejlesztő: [Rimóczi Dániel](https://github.com/greengamerhu)


### Asztali alkalmazás

[BiteMe Burger AdminTool](https://github.com/Elcsa/vizsgarremek)

> Fejlesztő: [Fekete Edina](https://github.com/Elcsa) 

  
