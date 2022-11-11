import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Mahatet Masr",
            artist: "MahatetMasr",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s3.radio.co/s9cb11828c/listen",
            active: true,
        },
        {
            name:"Adeem Radio",
            artist: "AdeemRadio",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://usa19.fastcast4u.com/adeem",
            active: false,
        },
        {
            name:"Falastini Radio",
            artist: "FalastiniRadio",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://palradio.radioca.st/;",
            active: false,
        },
        {
            name:"Radio Shoma",
            artist: "RadioShoma",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://n0b.radiojar.com/rzcfw4cbsxquv?rj-ttl=5&rj-tok=AAABhGPMM1gAyREXibccP_ajxQ",
            active: false,
        },
        {
            name:"Radio Mosaïque FM",
            artist: "RadioMosaïqueFM",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://radio.mosaiquefm.net/mosalive",
            active: false,
        },
        {
            name:"Radio Eram",
            artist: "RadioEram",
            cover: "https://img.freepik.com/vector-gratis/marco-neon-vivo-aire_23-2148758076.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://radio1.radioeram.com/",
            active: false,
        },
        {
            name:"Radio Flash Lebanon",
            artist: "RadioFlashLebanon",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://live.orientstream.com/proxy/radioflash/stream",
            active: false,
        },
        {
            name:"Arab American Radio",
            artist: "ArabAmericanRadio",
            cover: "https://img.freepik.com/foto-gratis/dispositivo-digital-inalambrico-auriculares-rosa_53876-96804.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://streamer.radio.co/s20f8deeb8/listen",
            active: false,
        },
        {
            name:"Sumer FM",
            artist: "SumerFM",
            cover: "https://img.freepik.com/vector-gratis/fondo-retro-dia-mundial-radio_23-2147594195.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://l3.itworkscdn.net/itwaudio/9012/stream",
            active: false,
        },
    ];
}

export default chillHop;


