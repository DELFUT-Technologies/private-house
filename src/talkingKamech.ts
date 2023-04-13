import { NPC, Dialog } from "@dcl/npc-scene-utils"
import { Parent } from "./resource"

const kamechDialog: Dialog[] = [
    { // 0
        text: "Welcome! I'm glad you could make it. Please, make yourself at home. What can I get for you?",
        buttons: [
            {label: 'Beer', goToDialog: 2},
            {label: 'Highball', goToDialog: 2},
            {label: 'What do you recommend', goToDialog: 1}
        ]
    },
    { // 1
        text: 'We have a great selection of Japanese craft beers on tap. The Yona Yona Ale is one of our most popular choices. Would you like to try that?',
        buttons: [
            {label: 'Yona Yona Ale', goToDialog: 2},
            {label: 'Beer', goToDialog: 2},
            {label: 'Highball', goToDialog: 2},
        ]
    },
    { // 2
        text: 'Coming right up...',
        buttons: [
            {label: 'Thank you', goToDialog: 5},
            {label: 'So, what inspired you to create a virtual bar like this?', goToDialog: 3},
        ]
    },
    { // 3
        text: "Well, I've always been interested in exploring new technologies and finding ways to connect people. When the metaverse started to gain traction, I saw an opportunity to create a new kind of social space that could bring people together from all over the world. And what better way to do that than with a bar, right?",
        buttons: [
            {label: 'Okay', goToDialog: 5},
            {label: 'This is really impressive. Do you think the metaverse is going to be the future of socializing?', goToDialog: 4},
        ]
    }, 
    { // 4
        text: "I think it has a lot of potential. The metaverse is still in its early stages, but I believe it will eventually become a major part of our lives, just like the internet did. It's a whole new world of possibilities, and I'm excited to see where it takes us.",
        buttons: [
            {label: "That's really cool. Thanks for the drink and the chat, Mr. Kameyama. I'll definitely be back.", goToDialog: 5},
        ]
    },
    { // 5
        text: 'I hope to see you again soon.',
        isEndOfDialog: true
    }
]


export function InitKamech() {
    const Kamech = new NPC(
        {
            position: new Vector3(15.48,11.54,7.85),
        },
        '',
        () => {},
        {
            faceUser: true,
            darkUI: true,
            onWalkAway: () => {}
        }
    )
    Kamech.setParent(Parent)
    /* const kamech = new Entity()
    kamech.addComponent(new BoxShape())
    kamech.addComponent(new Transform({
        position: new Vector3(15.48,11.54,7.85),
        scale: new Vector3(1, 2, 1)
    }))
    engine.addEntity(kamech) */
}