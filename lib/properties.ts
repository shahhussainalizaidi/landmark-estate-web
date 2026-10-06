export type Property = { slug:string; title:string; city:string; area:string; type:string; beds:number; baths:number; sqft:number; price:number; summary:string; image:string };
export const properties: Property[] = [
  { slug:"modern-villa-dha-phase-5", image:"/images/modern-villa-dha-phase-5.jpg", title:"Modern villa with garden", city:"Lahore", area:"DHA Phase 5", type:"House", beds:5, baths:5, sqft:4500, price:185000000, summary:"Corner villa with a landscaped garden, double-height lounge and a separate guest wing." },
  { slug:"skyline-apartment-gulberg", image:"/images/skyline-apartment-gulberg.jpg", title:"Skyline apartment", city:"Lahore", area:"Gulberg III", type:"Apartment", beds:3, baths:3, sqft:2100, price:68000000, summary:"Top-floor apartment with city views, covered parking and 24-hour security." },
  { slug:"family-home-bahria-town", image:"/images/family-home-bahria-town.jpg", title:"Family home near the park", city:"Islamabad", area:"Bahria Town", type:"House", beds:4, baths:4, sqft:3200, price:92000000, summary:"Ten minutes from schools, with a park across the street and a finished basement." },
  { slug:"commercial-plaza-blue-area", image:"/images/commercial-plaza-blue-area.jpg", title:"Corner commercial plaza", city:"Islamabad", area:"Blue Area", type:"Commercial", beds:0, baths:6, sqft:9000, price:420000000, summary:"Four-floor plaza with a lift, basement parking and existing rental income." },
];
export const pkr = (n:number) => n>=10000000 ? `PKR ${(n/10000000).toFixed(2)} crore` : `PKR ${(n/100000).toFixed(1)} lac`;
