export class ApiUrls {
    //-------------URL backend servera-------------
    public static backend: string = "http://localhost:7000";
    public static searchQuery: string[]=["page","type","search","sort","restaurant"];

    //-------------putanja ka datotekama-------------
    public static files: string = "/files/";

    //-------------prijavljivanje (url backend srv + promenjive)-------------
    public static auth: string = "/auth/";
    //nasted putanje
    public static register: string = "register";
    public static login: string = "login";

     //-------------restoran (url backend srv + promenjive)-------------
     public static restaurant: string = "/restaurant/";
     //nasted putanje
     public static locations: string = "locations";

     //-------------articles (url backend srv + promenjive)-------------
     public static articles: string = "/articles/";
     //nasted putanje
     public static bytypes: string = "bytypes";
     public static display: string = "display";
     public static search: string = "search";

     public static getImageUrl(text):string{
         if(text.includes("http"))return text;
         else return this.backend+this.files+text;
     }
}