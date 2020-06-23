export class ApiUrls {
    //-------------URL backend servera-------------
    public static backend: string = "https://eatin-backend.herokuapp.com";
    public static searchQuery: string[]=["descending","page","sortBy",'tipRestorana',
    'restoran','search','tipArtikla'];

    //-------------putanja ka datotekama-------------
    public static files: string = "/files/";

    //-------------prijavljivanje (url backend srv + promenjive)-------------
    public static auth: string = "/";//  "/auth"
    //nasted putanje
    public static register: string = "register";
    public static login: string = "login";

     //-------------restoran (url backend srv + promenjive)-------------
     public static restaurant: string = "/restoran";
     //nasted putanje

    //-------------tip restorana (url backend srv + promenjive)-------------
    public static tipRestorana: string = "/tip-restorana";
   //nasted putanje

    //-------------tip artikala (url backend srv + promenjive)-------------
    public static tipArtikala: string = "/tip-artikla";
     //-------------articles (url backend srv + promenjive)-------------
     public static articles: string = "/artikl";
     //nasted putanje
     public static bytypes: string = "bytypes";
     public static display: string = "display";
     public static search: string = "search";

     //-------------order (url backend srv + promenjive)-------------
     public static orders: string = "/orders/";
    //nasted putanje
    public static userOrd: string = "user";
    public static deliveryOrd: string = "delivery";
    public static accept: string = "accept";
     //-------------locations (url backend srv + promenjive)-------------
     public static locations: string = "/locations/";
     //nasted putanje
     public static userloc: string = "user";
     public static restloc: string = "restaurant";

     public static getImageUrl(text):string{
         if(text.includes("http"))return text;
         else return this.backend+this.files+text;
     }
}