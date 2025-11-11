
import Phaser from 'https://esm.sh/phaser@4.0.0-rc5';


let foo = {
    type: Phaser.WEBGL,
    backgroundColor: "#010101",
    pixelArt: !0,
    scale: {
        // parent: a.o.value,
        width: 448,
        height: 688,
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: "arcade",
        arcade: {
            // debug: c
        }
    },
    // scene: [Mf, Hf, Nf, Jf, If, Of, uf, tf, Pf, Sf, Rf, Qf, sf, qf, Ef],
    antialias: !1,
    audio: {
        // context: b
    }
}