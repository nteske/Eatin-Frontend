export class ApiUrls {
    //-------------URL backend servera-------------
    public static backend: string = "https://eatin-backend.herokuapp.com";
    public static searchQuery: string[]=["descending","page","sortBy",'tipRestorana',
    'restoran','search','tipArtikla','statusPorudzbine'];

    //-------------putanja ka datotekama-------------
    public static files: string = "/files/";

    //-------------prijavljivanje (url backend srv + promenjive)-------------
    public static auth: string = "/";//  "/auth"
    //nasted putanje
    public static register: string = "register";
    public static login: string = "login";
    public static profil: string = "profil";
    public static korisnici: string = "/korisnik";


     //-------------restoran (url backend srv + promenjive)-------------
     public static restaurant: string = "/restoran";
     //nasted putanje

    //-------------tip restorana (url backend srv + promenjive)-------------
    public static tipRestorana: string = "/tip-restorana";
   //nasted putanje

        //-------------locations (url backend srv + promenjive)-------------
     public static locations: string = "/lokacija/";

     //-------------order (url backend srv + promenjive)-------------
     public static clientOrders: string = "/klijent-porudzbina";
     public static deliveryOrders: string = "/dostavljac-porudzbina";
     public static deliveryAvalOrders: string = "/dostavljac-porudzbina-gotova";

     public static deliveryPrihvata: string = "/dostavljac-porudzbina-prihvacena/";
     public static deliveryIsporucuje: string = "/dostavljac-porudzbina-isporucena/";

     public static employeeOrders: string = "/zaposleni-porudzbina";
     public static employeGotovo: string = "/zaposleni-porudzbina-gotova/";

    //-------------tip artikala (url backend srv + promenjive)-------------
    public static tipArtikala: string = "/tip-artikla";
     //-------------articles (url backend srv + promenjive)-------------


     //zaposleni
     public static zaposleniRestoran: string = "/restoran-zaposleni";
     public static zaposleniRestoranTip: string = "/restoran-tip";
     
     public static zaposleniTipDatuma: string = "/tip-datuma";
     public static zaposleniVreme: string = "/restoran-vreme";
     public static zaposleniLokacije: string = "/restoran-lokacije";
     public static zaposleniArtikli: string = "/artikl-zaposleni";


     public static zaposleniPrilog: string = "/artikl-prilog";
     public static zaposleniMera: string = "/artikl-mera";

     public static mera: string = "/mera";
     public static prilog: string = "/prilog";

     public static articles: string = "/artikl";
     //nasted putanje
     public static bytypes: string = "bytypes";
     public static display: string = "display";
     public static search: string = "search";

    //nasted putanje
    public static userOrd: string = "user";
    public static deliveryOrd: string = "delivery";
    public static accept: string = "accept";

     //nasted putanje
     public static userloc: string = "user";
     public static restloc: string = "restaurant";

     public static getImageUrl(text):string{
         if(text.includes("http")|| text.includes("www"))return text;
         else return "../../../assets/images/placeholder.png";
        // else return this.backend+this.files+text;
     }
}
