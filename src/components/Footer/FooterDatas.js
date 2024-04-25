// import Assets from "@/public"
import Assets from "../../../public/Assets"
export const FooterData = {
  navLinks: [
    {
      title: "About Us",
      link: "/AboutUs",
    },
    {
      title: "Our Works",
      link: "/OurWorks",
    },
    {
      title: "Contact",
      link: "/Contact",
    },
    {
      title: "Careers",
      link: "/Careers",
    },
    {
      title: "Wedding Vendors",
      link: "/WeddingVendors",
    },
  ],
  nav: [
    {
      title: "Wedding planning",
      SubMenu: [
        {
          title: "Wedding Venues",
          link: "/WeddingVenues",
        },
        {
          title: "Wedding Decorations",
          link: "/WeddingDecorations",
        },
        {
          title: "Beach Wedding Planning",
          link: "/BeachWeddingPlanning",
        },
        {
          title: "Wedding Florist Sydney",
          link: "/WeddingFloristSydney",
        },
        {
          title: "Indian Wedding",
          link: "/IndianWedding",
        },
        {
          title: "Indian Beach Wedding",
          link: "/IndianBeachWedding",
        },
        {
          title: "Wedding Planning",
          link: "/WeddingPlanning",
        },
      ],
    },
    {
      title: "Event planning",
      SubMenu: [
        {
          title: "Corporate Event Styling",
          link: "/CorporateEventStyling",
        },
        {
          title: "Birthday Decorations",
          link: "/BirthdayDecorations",
        },
        {
          title: "Puja Decorations",
          link: "/PujaDecorations",
        },
        {
          title: "Holy Communion",
          link: "/HolyCommunion",
        },
        {
          title: "House Warming",
          link: "/HouseWarming",
        },
      ],
    },
  ],
  address: 
    {
      line1: "Symphony Events Pty Ltd,",
      line2: "Unit 7/40 Bessemer",
      line3: "St, Blacktown NSW 2148,",
    },
  
  contact: {
    phone: {
      text: "+61 410 201 111",
      link: "",
    },
    email: {
      text: "info@symphonyevents.com.au",
      link: "mailto:info@symphonyevents.com.au",
    },
  },
  socialmedia: {
    title: "Follow us",
    icons:[
      {
        logo:Assets.instagra,
      },
      {
        logo:Assets.facebook,
      },
      {
        logo:Assets.pintrest,
      },
      {
        logo:Assets.youtube,
      },
    ]
      
},
policyarea:{
  links:[
    {
      title:"Copyright © 2024 Symphony Events. All Rights Reserved",
      link:""
    },
    {
      title:"Privacy Policy",
      link:""
    },
    {
      title:"Designed by: Webandcrafts",
      link:""
    },
  ]
}
}