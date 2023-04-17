import { NPC, NPCDelay, Dialog } from "@dcl/npc-scene-utils"

let Kamecchi: NPC
const animations: string[] = ['[うなづく]', '[かしげる]', '[笑う]', '[首を振る]']

function randAnimTrigger(max: number) {
    const num = Math.floor(Math.random()*max);

    Kamecchi.playAnimation(animations[num], true)
}

function animTrigger(index: number) {
    Kamecchi.playAnimation(animations[index], true)
}
//
// chatGPTが間に合わなかった場合のバックアップダイアログ
const kamecchiDialog: Dialog[] = [
    { // 0
        text: "Welcome! I'm glad you could make it. Please, make yourself at home. What can I get for you?",
        isQuestion: true,
        buttons: [
            {label: 'おすすめは', goToDialog: 1, triggeredActions: () => animTrigger(2)},
            {label: 'ハイボール', goToDialog: 2, triggeredActions: () => animTrigger(2)},
            {label: 'ビール', goToDialog: 2, triggeredActions: () => animTrigger(2)},
            {label: '梅酒', goToDialog: 2, triggeredActions: () => animTrigger(2)}
        ]
    },
    { // 1
        text: 'We have a great selection of Japanese craft beers on tap. The Yona Yona Ale is one of our most popular choices. Would you like to try that?',
        isQuestion: true,
        fontSize: 20,
        buttons: [
            {label: 'Yona Yona', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: 'ビール', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: 'ハイボール', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: '梅酒', goToDialog: 2, triggeredActions: () => animTrigger(1)},
        ]
    },
    { // 2
        text: 'Coming right up...',
        isQuestion: true,
        buttons: [
            {label: 'ありがとう', goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
            {label: '作る動機は?', goToDialog: 3, triggeredActions: () => randAnimTrigger(3)},
        ]
    },
    { // 3
        text: "Well, I've always been interested in exploring new technologies and finding ways to connect people. When the metaverse started to gain traction, I saw an opportunity to create a new kind of social space that could bring people together from all over the world. And what better way to do that than with a bar, right?",
        isQuestion: true,
        fontSize: 18,
        buttons: [
            {label: 'なるほど', goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
            {label: 'メタ社未は?', goToDialog: 4, triggeredActions: () => randAnimTrigger(3)},
        ]
    }, 
    { // 4
        text: "I think it has a lot of potential. The metaverse is still in its early stages, but I believe it will eventually become a major part of our lives, just like the internet did. It's a whole new world of possibilities, and I'm excited to see where it takes us... Here is your drink",
        isQuestion: true,
        fontSize: 20,
        buttons: [
            {label: "ありがとう!", goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
            {label: "またね!", goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
        ]
    },
    { // 5
        text: 'I hope to see you again soon.',
        isEndOfDialog: true,
        triggeredByNext: () => {
            animTrigger(1)
        }
    }
] 

export function InitKamecchi() {
    const dummyent = new Entity()
    engine.addEntity(dummyent)
    dummyent.addComponent(
        new NPCDelay(2, () => {
            Kamecchi.playAnimation(animations[0])
        })
    )

    Kamecchi = new NPC(
        {
            position: new Vector3(11.46, 10.70, 11.82),
            rotation: Quaternion.Euler(0, 270, 0)
        },
        'models/bar_kamecchi_2023.04.17_1128.glb',
        () => {

            animTrigger(1)

            // TODO: You-San ユーザーから質問を受けるための入力UIを開く

            // chatGPTが間に合わなかった場合のバックアップダイアログ
            Kamecchi.talk(kamecchiDialog)
        },
        {
            faceUser: false,
            darkUI: true,
            hoverText: 'Order a drink',
            onlyClickTrigger: true,
            onWalkAway: () => {
                Kamecchi.endInteraction()
            }
        }
    )
}