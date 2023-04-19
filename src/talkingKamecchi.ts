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
        text: "ようこそへ！来てくれてうれしく思います。どうぞ、くつろいでください。ご注文は何でしょうか？",
        isQuestion: true,
        buttons: [
            {label: 'おすすめは', goToDialog: 1, triggeredActions: () => animTrigger(2)},
            {label: 'ハイボール', goToDialog: 2, triggeredActions: () => animTrigger(2)},
            {label: 'ビール', goToDialog: 2, triggeredActions: () => animTrigger(2)},
            {label: '梅酒', goToDialog: 2, triggeredActions: () => animTrigger(2)}
        ]
    },
    { // 1
        text: '日本のクラフトビールを豊富に取り揃えています。中でも「よなよなエール」は人気の一品です。それどうですか？',
        isQuestion: true,
        fontSize: 20,
        buttons: [
            {label: 'よなよな', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: 'ビール', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: 'ハイボール', goToDialog: 2, triggeredActions: () => animTrigger(1)},
            {label: '梅酒', goToDialog: 2, triggeredActions: () => animTrigger(1)},
        ]
    },
    { // 2
        text: '了解です。ちょっと待ってください...',
        isQuestion: true,
        buttons: [
            {label: 'ありがとう', goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
            {label: '作る動機は?', goToDialog: 3, triggeredActions: () => randAnimTrigger(3)},
        ]
    },
    { // 3
        text: "私は、常に新しいテクノロジーを探求し、人々をつなぐ方法を見つけることに興味がありました。メタバースが普及し始めた頃、私は世界中の人々を結びつけることができる新しいタイプのソーシャルスペースを作る機会を得たのです。そして、それを実現するのに、バー以上の方法があるだろうか？",
        isQuestion: true,
        fontSize: 18,
        buttons: [
            {label: 'なるほど', goToDialog: 5, triggeredActions: () => randAnimTrigger(2)},
            {label: 'メタ社未は?', goToDialog: 4, triggeredActions: () => randAnimTrigger(3)},
        ]
    }, 
    { // 4
        text: "多くの可能性を秘めていると思います。メタバースはまだ初期段階ですが、インターネットがそうであったように、いずれは私たちの生活の主要な部分を占めるようになると思います。まったく新しい可能性を秘めた世界ですから、その行く末が楽しみです...ドリンクはこちらです",
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
        'models/bar_kamecchi_2023.04.18_0044.glb',
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