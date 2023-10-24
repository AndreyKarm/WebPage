import "./pages.css"

const BajurTroll = "https://cdn.discordapp.com/attachments/1041726796716056607/1163814714036457562/IMG_7874.jpg?ex=6540f1ea&is=652e7cea&hm=1d4a0d1c05d84e706c2ae7d85ae867fbb5e46476e4301994512dcb6e922734a0&"
const BajurHappi2 = "https://media.discordapp.net/attachments/745003015676624997/1161100019978473623/IMG_7875.jpg?ex=654986a8&is=653711a8&hm=aa6e17c9b9c2fa872c4a2f9c6123ba3755c661acd7475c947ad5e5350d6582d6&=&width=440&height=585"
const BajurHappi1 = "https://cdn.discordapp.com/attachments/745003015676624997/1161099998298124391/IMG_7876.jpg?ex=654986a3&is=653711a3&hm=1f1c96ee1f4968b611546c395ef34386226f84a345641dc54062367f4024d7fa&"
const BajurAngryAtShark = "https://cdn.discordapp.com/attachments/745003015676624997/1161100038953504838/IMG_7880.jpg?ex=654986ad&is=653711ad&hm=afb384bc6ad495c17e6c4a85d4776ad94b24f9a80c6159c36a4f1f384f83df1f&"
const BajurAngryAtYou = "https://cdn.discordapp.com/attachments/745003015676624997/1161100046096408576/IMG_7879.jpg?ex=654986af&is=653711af&hm=aa029801d02af649fee252e43de8f3f39ef8c8eba0640614ba93dcd9fbf93487&"

export default function Home() {
    return (
    <span className="font-link">
        <div className="container">
            <div>
                <h1 className="h1_text_glow">Home</h1>
            </div>
            <div>
                <a className="a_text">bajur shrine</a>
            </div>
            <div>
                <img src={BajurTroll} alt="Bajur Troll" className="bajur_image"/>
                <img src={BajurHappi2} alt="Bajur Happi" className="bajur_image"/>
                <img src={BajurHappi1} alt="Bajur Happi" className="bajur_image"/>
                <img src={BajurAngryAtShark} alt="Bajur Angry at shark" className="bajur_image"/>
                <img src={BajurAngryAtYou} alt="Bajur Angry At You" className="bajur_image" />
            </div>
        </div>
    </span>
    )
}