# Eatin Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

On first start run `npm i`. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Token
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.<br/><br/>
**Payload** <br/>
`{`<br/> 
`   ...`<br/> 
`   "role":"Admin",`<br/>
`   ...`<br/> 
`}`<br/><br/> 
Roles, file: [roles.ts](https://github.com/nteske/Eatin-Frontend/blob/master/src/app/core/constants/roles.ts)
## Routes for Backend

Backend url is set to `http://localhost:7000`, file:[api-urls.ts](https://github.com/nteske/Eatin-Frontend/blob/master/src/app/core/constants/api-urls.ts).

### 1.Auth
Value is set to `/auth/`, file:[api-urls.ts](https://github.com/nteske/Eatin-Frontend/blob/master/src/app/core/constants/api-urls.ts).<br/> 
Login is set to `login`.<br/> 
Register is set to `register`.<br/> <br/> 
**Login route:**<br/> 
**Post:** `http://localhost:7000`+`/auth/`+`login`<br/> <br/> 
Data sent:<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "email_korisnika":"test",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "lozinka_korisnika":"text"`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br/> 
Data received:<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "token":"Bearer ....."`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br/> <br/> 
**Register route:** <br/> 
**Post:** `http://localhost:7000`+`/auth/`+`register`<br/> <br/> 
Data sent:<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "email_korisnika":"test",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "lozinka_korisnika":"text"`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "ime_korisnika":"test",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "prezime_korisnika":"test",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "telefon_korisnika":"test"`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br/> 
Data received:<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "token":"Bearer ....."`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br/> 
### 2.Restaurant
Value is set to `/restaurant/`, file:[api-urls.ts](https://github.com/nteske/Eatin-Frontend/blob/master/src/app/core/constants/api-urls.ts).<br/> 
Locations of all restaurants, route is set to `locations`.<br/><br/>
**Locations of all restaurants - route:** <br/> 
**Get:** `http://localhost:7000`+`/restaurant/`+`locations`<br/> <br/> 
Data received:<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "id_lokacije":1,`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "grad":"Novi Sad",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "ulica":"Bulevar Oslobodjenja",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "broj":"bb",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "postanski_broj":"21000",`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "longitude":19.0,`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    "latitude":45.0`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`},`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`....`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`<br/> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`]`<br/> 