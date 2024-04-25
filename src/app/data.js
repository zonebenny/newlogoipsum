import Assets from "../../public/Assets";

export const pagedata = {
  // homebanner:{
  //     image:'https://dev.uiwac.webc.in/juniors-2023/zone/nextimage/Homebanner.png',
  // }

  harmonisearea: {
    title: "HARMONISE YOUR WEDDING WITH SYDNEY’S PREMIER PLANNER",

    about_us_btn: {
      url: "/about-us",
      text: "About us",
      target: ""
    },
    content: [
      {
        title: 12,
        description: "Years of experience"
      },
      {
        title: 85,
        description: "Working Professionals"
      },
      {
        title: 200,
        description: "Satisfied clients"
      }
    ]
  },
  weddingreception: {
    title: "WEDDING RECEPTION",
    subtitle: "EXPLORE OUR SERVICES",
    content: [
      {
        image: Assets.reception1,
        title: "Wedding Planning"
      },
      {
        image: Assets.reception12,
        title: "Event Decor"
      },
      {
        image: Assets.reception3,
        title: "Wedding Decorations"
      },
    ]
  },

  orchestrating: {
    title: "ORCHESTRATING WEDDING CELEBRATIONS",
    subcontent: [
      {
        image: Assets.ourworks,
        alt: "our_works",
        title: "OUR WORKS",
        discription: "Symphony Events were absolutely incredible right through the process from our first meeting",
        about_us_btn: {
          url: "/about-us",
          text: "VIEW ALL WORKS",
          target: ""
        },
      },
      {
        image: Assets.ourgallery,
        alt: "our_gallery",
        title: "OUR GALLERY",
        discription: "Symphony Events were absolutely incredible right through the process from our first meeting",
        about_us_btn: {
          url: "/about-us",
          text: "VIEW ALL GALLERY",
          target: ""
        }
      },

    ]
  },

  awardssection: {
    title: "ACHIEVEMENTS",
    subtitle: "AWARDS & RECOGNITIONS",
    content: [
      {
        image: {
          src: Assets.award1,
          alt: "awards",
          width: 172,
          height: 170
        },
        description: "ABIA WEDDING STYLIST WINNER 2023"
      },
      {
        image: {
          src: Assets.award2,
          alt: "awardss",
          width: 172,
          height: 170
        },
        description: "ABIA ARTIFICIAL FLORAL DESIGN FINALIST 2023"
      },
      {
        image: {
          src: Assets.award2,
          alt: "awardsss",
          width: 172,
          height: 170
        },
        description: "ABIA WEDDING HIRE FINALIST 2023"
      },
      {
        image: {
          src: Assets.award1,
          alt: "awardcv",
          width: 172,
          height: 170
        },
        description: "ABIA WEDDING STYLIST WINNER 2023"
      },
    ],
    know_more_btn: {
      url: "/know_more",
      text: "KNOW MORE",
      target: ""
    },
  },

  ourblogsection: {
    title: "OUR BLOG",
    view_all_btn: {
      url: "/view_all",
      text: "VIEW ALL",
      target: ""
    },

    content: [
      {
        image: {
          src: Assets.blog1,
          alt: "blog1",
          width: 434,
          height: 305
        },
        date: "JANUARY 18, 2024",
        description: "How to plan a big fat wedding without making a bankrupt"
      },
      {
        image: {
          src: Assets.blog2,
          alt: "blog2",
          width: 434,
          height: 305
        },
        date: "JANUARY 04, 2024",
        description: "Symphony Events wows ABIA Awards, snags gold & near-perfect score!"
      },
      {
        image: {
          src: Assets.blog3,
          alt: "blog3",
          width: 434,
          height: 305
        },
        date: "JANUARY 02, 2024",
        description: "25 Bridal Shower Decoration Ideas to Impress Your Guests"
      },
    ],

  },

  reviewsection: {
    content: [
      {
        description: "“ Symphony Events were absolutely incredible right through the process from our first meeting to execution of the reception event.”",
        authorname: "MR.& MRS. EDWARD",
        location: "Sydney - Australia"
      },
      {
        description: "“ Symphony Events were absolutely incredible right through the process from our first meeting to execution of the reception event. Symphony Events were absolutely incredible right through”",
        authorname: "MR.& MRS. EDWARD",
        location: "Sydney - Australia"
      },
      {
        description: "“ Symphony Events were absolutely incredible right through the process from our first meeting to execution of the reception event. Symphony Events were absolutely incredible right throughSymphony Events were absolutely incredible right through”",
        authorname: "MR.& MRS. EDWARD",
        location: "Sydney - Australia"
      }
    ],
    view_all_btn: {
      url: "/view_all",
      text: "VIEW ALL",
      target: ""
    },

  },
  formdatasection: {
    title: "EXCITED TO ENGAGE WITH OUR TEAM?",
    formFields: [
      { id: 'name', label: 'Name*', type: 'text' },
      { id: 'email', label: 'Email*', type: 'email' },
      { id: 'mobile', label: 'Mobile*', type: 'text' },
      { id: 'typeofevent', label: 'Type of event*', type: 'text' },
      { id: 'noofguests', label: 'Number of guests*', type: 'text' },
      { id: 'estimatedbudget', label: 'Estimated budget*', type: 'text' },
      { id: 'date', label: 'Date*', type: 'text' },
      { id: 'eventlocation', label: 'Event location*', type: 'text' },
      { id: 'message', label: 'Tell us About Your Event*', type: 'textarea' }
    ]
  },
  instagramsection: {
    instadata: {
      tabs: [
        {
          image: Assets.instapage1,
          alt: "instapic1"
        },
        {
          image: Assets.instapage2,
          alt: "instapic2"
        },
        {
          image: Assets.instapage3,
          alt: "instapic3"
        },
      ],
      logo: Assets.instagra,
      subtitle: "STAY UP TO DATE WITH US",
      link: {
        text: "FOLLOW NOW",
        url: "/follownow"
      }
    }
  },

  ourhighlight: {
    title: "OUR HIGHLIGHTS",
    tabs: [
      {
        id: "WeddingStyling",
        label: "WEDDING STYLING",
        image: Assets.highlight,
      },
      {
        id: "IndianWedding",
        label: "INDIAN WEDDING",
        image: Assets.highlight1,
      },
      {
        id: "WeddingDecoration",
        label: "WEDDING DECORATION",
        image: Assets.highlight2,
      },
    ],
  }
}