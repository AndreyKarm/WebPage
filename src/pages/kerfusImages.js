import React, { useState } from 'react';
import "./pages.css"

const kerfuspics = [
    ["https://steamuserimages-a.akamaihd.net/ugc/2046376967586371434/E1BF3EB83C732C4E6F2AA58B15216FFCE5BE6535/", "O cholera"],
    ["https://preview.redd.it/paczcie-kogo-ja-mam-na-18-stk%C4%99-v0-xupprbgpwssb1.jpg?width=1080&crop=smart&auto=webp&s=6e8f8a518f114e8b0ff6a888234cf3fa90609f02", "Kerfus :3"],
    ["https://preview.redd.it/mini-kerfus-zdobyty-v0-gikw5b7mu4lb1.jpg?width=1080&crop=smart&auto=webp&s=7d45889f6a5b7b2b286d4c77d7a1c00b2cba4623", "Kerfus cube :3"],
    ["https://preview.redd.it/ive-found-a-lovely-pet-friendly-dinner-and-went-with-my-cat-v0-ik7ggkc25tra1.jpg?auto=webp&s=77c799e4f4b2bc25a54df785d2b3154479b7f40e", "Kerfus takes your order :3"],
    ["https://preview.redd.it/znalezisko-z-niedalekiego-cerfura-nie-jestem-pewien-co-v0-4htfdzb6g6ma1.jpg?width=1080&crop=smart&auto=webp&s=e9afab75676452f84c92ba2405806867b3d0f659", "Kerfus tshirt :3"],
    ["https://preview.redd.it/stare-projekty-rz%C4%85du-londy%C5%84skiego-1944-v0-x88snihf4jka1.png?auto=webp&s=bad94795c85e01983aef13330c9ee1f25926b999", "Kerfur on war :3"],
    ["https://preview.redd.it/at-swensens-v0-rfaogvwwqcba1.jpg?width=1080&crop=smart&auto=webp&s=2640ac1540e10fb2dde483eef89ba2839f34c851", "Kerfus servant :3  "],
    ["https://preview.redd.it/narysowa%C5%82em-adoracj%C4%99-kerfusia-v0-9jigrqnf161a1.jpg?width=1080&crop=smart&auto=webp&s=d41710594712af6f9a94975fc8fefdde9b356b5b", "Kerfus Supremacy :3"]
]

function KerfusImages() {
    const [isHovered, setIsHovered] = useState(false);

    const playSound = () => {
        const audio = new Audio('/test.mp3');
        audio.play();
    };

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                playSound();
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            {kerfuspics.map((pic, index) => (
                <img key={index} src={pic[0]} alt={pic[1]} className={"image"} />
            ))}
        </div>
    );
}

export default KerfusImages;