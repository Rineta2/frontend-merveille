import img1 from "@/components/assets/mega/koleb/img1.png"
import img2 from "@/components/assets/mega/koleb/img2.png"
import img3 from "@/components/assets/mega/koleb/img3.png"

//==================== Slider ====================//
import kaos from "@/components/assets/home/slider/1.webp"
import sweater from "@/components/assets/home/slider/2.webp"
import jaket from "@/components/assets/home/slider/3.webp"
import jersey from "@/components/assets/home/slider/4.webp"
import kaosM from "@/components/assets/home/slider/mobile1.webp";
import sweaterM from "@/components/assets/home/slider/mobile2.webp";
import jaketM from "@/components/assets/home/slider/mobile3.webp";
import jerseyM from "@/components/assets/home/slider/mobile4.webp";

//==================== Service ====================//
import serviceImg_1 from "@/components/assets/home/services/1.png"
import serviceImg_2 from "@/components/assets/home/services/2.png"
import serviceImg_3 from "@/components/assets/home/services/3.png"

//==================== Banner ====================//
import banner from "@/components/assets/banner/MERVEILLE.png";

//==================== About ====================//
import aboutImg from "@/components/assets/about/aboutImg.png";

//==================== Icons ====================//
import { History, Shirt, ChartBarStacked } from "lucide-react"

//============================== Header ==============================//

export const topHeader = [
  {
    id: 1,
    name: "Lokasi Toko",
    path: "",
  },

  {
    id: 2,
    name: "Lokasi Toko",
    path: "",
  },

  {
    id: 3,
    name: "Tracking",
    path: "",
  },
];

export const navLink = [
  {
    id: 1,
    name: "Article",
    path: "/",
  },

  {
    id: 2,
    name: "Lokasi",
    path: "/",
  },
];

export const megaMenu = [
  {
    id: 1,
    name: "Koleksi Baru",
    list: [
      {
        id: 1,
        name: "Comming Soon",
        path: "",
        img: img1,
        icons: <History />
      },

      {
        id: 2,
        name: "Comming Soon",
        path: "",
        img: img2,
        icons: <History />
      },

      {
        id: 3,
        name: "Comming Soon",
        path: "",
        img: img3,
        icons: <History />
      },
    ]
  },

  {
    id: 2,
    name: "Product",
    list: [
      {
        id: 1,
        name: "",
        title: "All Category",
        path: "/produk",
        img: "",
        icons: <ChartBarStacked />
      },

      {
        id: 2,
        name: "Kaos",
        title: "Kaos",
        path: "/produk/kaos",
        img: img3,
        icons: <Shirt />
      },

      {
        id: 3,
        name: "Jersey",
        title: "Jersey",
        path: "/produk/jersey",
        img: img2,
        icons: <Shirt />
      },

      {
        id: 4,
        name: "Switer",
        title: "Switer",
        path: "/produk/switer",
        img: img1,
        icons: <Shirt />
      },

      {
        id: 5,
        name: "Jaket",
        title: "Jaket",
        path: "/produk/jaket",
        img: img3,
        icons: <Shirt />
      }
    ]
  },
]

//============================== Slider ==============================//

export const sliderHome = [
  {
    id: 1,
    img: kaos,
    name: "kaos",
    mobile: kaosM
  },

  {
    id: 2,
    img: sweater,
    name: "sweater",
    mobile: sweaterM
  },

  {
    id: 3,
    img: jaket,
    name: "jaket",
    mobile: jaketM
  },

  {
    id: 4,
    img: jersey,
    name: "jersey",
    mobile: jerseyM
  }
]

//============================== About ==============================//

export const aboutData = [
  {
    id: 1,
    title: "Mervielle - Elevating Fashion with Modern Elegance and Innovation",
    desc: "Mervielle adalah brand fashion yang mengedepankan keanggunan dan inovasi dalam setiap desain. Kami berkomitmen untuk menghadirkan produk berkualitas tinggi yang memadukan gaya modern dan tren terkini, menciptakan busana yang tidak hanya stylish namun juga nyaman dipakai. Dengan koleksi yang selalu mengikuti perkembangan fashion terbaru dan diciptakan dengan detail yang sempurna, Mervielle menjadi pilihan utama bagi mereka yang ingin tampil memukau di setiap kesempatan. Temukan keindahan yang memancarkan pesona dan kepercayaan diri Anda bersama Mervielle.",
    img: aboutImg
  }
]

//============================== Service ==============================//

export const serviceData = [
  {
    id: 1,
    title: "We’re proud of our clothes"
  }
]

export const serviceBox = [
  {
    id: 1,
    img: serviceImg_1,
    name: "Design",
    span: "Designed by locals"
  },

  {
    id: 2,
    img: serviceImg_2,
    name: "Size",
    span: "Inclusive sizes"
  },

  {
    id: 3,
    img: serviceImg_3,
    name: "Packing",
    span: "Eco-friendly packaging"
  },
]

//============================== Banner ==============================//

export const bannerProduk = [
  {
    id: 1,
    img: banner
  }
]