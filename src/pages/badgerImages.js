import "./pages.css"

const bajurPics = [
    ["https://pbs.twimg.com/media/F7vQLRxbQAA_L8_?format=jpg&name=large", "Bajur Majestic"],
    ["https://pbs.twimg.com/media/F7q_RdFbkAA4Ybr?format=jpg&name=large", "Bajur 'check this out'"],
    ["https://pbs.twimg.com/media/F5wqSMhaIAIstfK?format=jpg&name=large", "Bajur Troll"],
    ["https://pbs.twimg.com/media/F2Qj0jda8AAMEEg?format=jpg&name=large", "Bajur 'ooooooh'"],
    ["https://pbs.twimg.com/media/F2Fwb8NasAAb3D-?format=jpg&name=large", "Bajur Seductive"],
    ["https://pbs.twimg.com/media/F1vdMAwWAAAg-Bn?format=jpg&name=large", "Bajur Like 1"],
    ["https://pbs.twimg.com/media/F1lvxOVWIAMcSE5?format=jpg&name=large", "Bajur Like 2"],
    ["https://pbs.twimg.com/media/F0ZLl2pagAAAFm5?format=jpg&name=large", "Bajur 'don't like it'"],
    ["https://pbs.twimg.com/media/Fz51SWHaIAAKoNO?format=jpg&name=large", "Bajur monitor seductive"],
    ["https://pbs.twimg.com/media/Fw1KOK-aQAAtVQ2?format=jpg&name=large", "Bajur 'MEN'"],
    ["https://pbs.twimg.com/media/FoIUnyUXgAA7DBc?format=jpg&name=large", "Bajur croc"],
    ["https://pbs.twimg.com/media/FjkIZqmaUAEm-Gf?format=jpg&name=large", "Bajur protects his drink"],
    ["https://pbs.twimg.com/media/FYdJH2RUUAAMh_u?format=jpg&name=large", "Bajur kills shork"],
    ["https://pbs.twimg.com/media/FUl7KmSUAAAoVBF?format=jpg&name=large", "Bajur sucks on them tits"],
    ["https://pbs.twimg.com/media/FJF5mYrVcAIWBHR?format=jpg&name=large", "Bajur goofy"],
    ["https://pbs.twimg.com/media/FE-5sMNUcAABq-j?format=jpg&name=large", "Bajur gamer sups"],
    ["https://pbs.twimg.com/media/FBH_5gWVQA0N0fq?format=jpg&name=large", "Bajur stinky pc"],
    ["https://pbs.twimg.com/media/E3Pbh8qVkAcE2AF?format=jpg&name=large", "Bajur helmet"],
    ["https://pbs.twimg.com/media/Ey9joaqVgAIuKr9?format=jpg&name=large", "Bajur PAIN"]
]

function GeneratePicsBajur() {
    return (
        <div>
            {bajurPics.map((pic, index) => (
                <img key={index} src={pic[0]} alt={pic[1]} className="image" />
            ))}
        </div>
    );
}

export default GeneratePicsBajur;