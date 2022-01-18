import ContractJSON from "./SeleneAirdrop.json";
import Web3 from "web3";
import web3Utils from "web3-utils";
import abiJSON from "./UpgradebleStormSender.json"
import { List } from "postcss/lib/list";

// const contractJSON = ContractJSON as { abi: any };

const contractJSON = abiJSON as { abi: any };
// TODO change the contract address
export default class ContractOperator {
    public static web3 = new Web3(new Web3.providers.HttpProvider("https://andromeda.metis.io/?owner=1088"));
    // public static Contract = new ContractOperator.web3.eth.Contract(
    //     contractJSON.abi,
    //     "0x70D4Fe3d2aDAF9829D7DEBEd7F4769a1721981a0",
    // );
    public static Contract = new ContractOperator.web3.eth.Contract(
        contractJSON.abi,
        "0x1A70055df11e5E447D1Bfd0b7889Eb315EA48AdA",
    );
    public static utils = web3Utils;

    // public static async airdropToken(token: string, to: string[], amounts: bigint[]) {
    //     const result = await ContractOperator.Contract.methods.bulksendToken(token, to, amounts).call();
    //     return result;
    // }

    public static async airdropToken() {
        const result = await ContractOperator.Contract.methods.multisendToken(
            "0x0f268eE8bDABCA505034EFDC8e3EFB2495b1096b", 
            ["0xA94F472e104c7d72220f6F46c5ec3b3aa26851DF",
            "0xbce3Ae59b59cDcBa6e92AaA44e78B940749BB7bb",
            "0xbab5a1aff3a290307430adFa8c34Cdc2D31eFe80",
            "0x2A693cCbda744faf14ecb7C28bD811927BEA61A7",
            "0x3560580BBe7411a963B859f5017320790901a4Fb",
            "0x896c892a00395C38616AB128d98Df6781F074EeE",
            "0x522BF786D9628308E25D5354b22c1b7446cAFa37",
            "0x26C4317E6f45c1fbC85886F81e2977e7D6F8eac7",
            "0x8a3034dc09e4d452Ed7299fEB86A9Dd66503a6d5",
            "0x5CD364dF460c40588b865D6985F530767263CF84",
            "0xb0e196eF75882b9542Caee70A0a6165a63D660E2",
            "0xD9E884b2e1151140495b089fd6B07D0296616198",
            "0x5dbeB9968FE1133d506f53bB1aCe6004a55641c5",
            "0x95FA22bB9c465C5eD234718cC0417405539017C3",
            "0x90d9C324Eb2892315279b6d60428b1b76c700E72",
            "0x23AF65DE327461E308Ee5e81996c761770d49fee",
            "0x8a876c5Bc968Dd8B4671a99BD5e6c1d54e1E7f19",
            "0x8d84655346B3D05A670F78E8fc094f729Cc8A682",
            "0xd2C0884ae6950bF8cac1B91eB181449A087f58E1",
            "0xe12D731750E222eC53b001E00d978901B134CFC9",
            "0xf3b4aDE14D14504dd2520A0107d04Cc3C0B8d4F3",
            "0xcE202C4e6B5aEb92427f5A8005cb3636f4340702",
            "0x0D083DcDD4c865cEc8EBEb04e427bFC47956dAd4",
            "0x51129076a523B041f85B5A73B1d8522c6230034a",
            "0xe623A85F5f729E95d519bc7A4570Cf51cF1B8b2C",
            "0x3b3908eDD878ac42f1Ed3e53cc3Af02577D072c3",
            "0x95dAa0B7EF78270d14971fC79A54Bd093a52C7BA",
            "0x5e1fA1CD6d2ba2b57DF0C1638fA93Dfd8952ed88",
            "0x28e38d3Bf57969DDb28eab925aD4DE50Be0280Fb",
            "0xAB5f9071D325b9B5844D52cD4e55ea6bbaCeB021",
            "0x6403584E4e70F97C8c241ACA1483BBd84C183d1e",
            "0x2a94086c36F9b26f21D9b7aB4419F6dC31C677c1",
            "0x6F28A2F0c5B9A869a8C64eC30BA4527716c36a14",
            "0xad41E40c0c06484D3942E61E929c6D4B7adB357E",
            "0xEC948f0a29cE77412773412D076fBBABa1e67491",
            "0x2BE551971271FAB5aa9eDB9572b9476ec5775Ae0",
            "0x78BacD44bFd671EB252B4c395C3Ba77862f2A412",
            "0x425F5a61034f75b48Ea33dDD090d01102F92D4Ab",
            "0xFF3F521Fc061842bFe9e1A269162D06f591867ee",
            "0x4B285583b9cA24685227fcB1C03Ea1e77C4656D5",
            "0x140558dd7C4B58b7fa9978CF268AD2f02484D8ec",
            "0x5c46DeeA1783f1d7e9579B963f2021AC1B5BFE7b",
            "0xad362d64E8bCf3bBd98eB61d540aAbB22c2cE8Db",
            "0x702FE637e120042A1b80e9AB97242462Fea30850",
            "0x7dec7d0Bb9f27988c005B0fe6e9FD88b22250F08",
            "0x78e897872D6479761647856d75cabC981073A99a",
            "0x5E2797db5DfCa21788E4eCB191692CC338c17ac4",
            "0x5646889144dbb12fCdfF5d644B5B44e7E5a89ACC",
            "0xF5E35a79567FE8b0221eB46c12c106bde2FEC20D",
            "0xa8F2b210BC1d6AA485051C28A67D2f353FCd60e7",
            "0x3249ED789279906FBBf0014cDC2EACD413955799",
            "0x249245b8F119cc3a77403cAE848d43Eb879a98eA",
            "0x91eBd60b4457A393F70779Ba20EbBA0550e473dE",
            "0x7F049056383D8B67d48D7b754676e5Dc7b10a92e",
            "0xC959fA2C65a965890f6AF5a935d6B7973394d37B",
            "0xE30D4A53e3A4f835e504574192987988C420c7Bd",
            "0xe13C5bb07389ee2dA2E20dDF317B7Af8bD55940e",
            "0x819884634b84B3F9B71abde27AD1C599D8327176",
            "0x3831d812f87814B2203615D1bf1A647d1c1816c5",
            "0x76CfabC8a6366fe7a53778867EF05a61De5cc732",
            "0xb2Ee477CEd8D69AfDb5707b31170C782f5F26F5B",
            "0xC06317755C94482461E378Df882eDdcB86c26351",
            "0x0fA8e6518E2f5c2FCF5c2d09f8b2ca443BD5b853",
            "0xD92127901df1b4bD1e4512864Dc306587B22c770",
            "0x07F3A4041AD0B4FF0cC4440eE655669bfBe90159",
            "0x30c1b00687fAec2e0274081C15C0c5A76B71DAac",
            "0xAaAFD7FDc46eD8D443a9d419873260713438329E",
            "0x177f44eCDEa293f7124C3071D9C54E59fcfD16f9",
            "0x3C881696C68A89285F77882C93d589cB9b356ccD",
            "0x6cC1D2178F0f5d300999D510e8c1C8350e55863c",
            "0x2E06678014abe962451Dc50eB8379E1c46793B4d",
            "0x2C67951A0609fa56F4D500DE6a9457114a392639",
            "0xC443D816a011D720DC8f3dD69390B16554ff2A3B",
            "0xa564aDC4BB6F5Ae30276D3c12e7F717207DB9c18",
            "0x25165a9ca2ce8e3e62443275D114B618dC53E9f2",
            "0xf5fd62710b5fAA37f429Eb5e2bC25eA34Dc21bF7",
            "0x57fF793903F3a85e08a5e261abAF942857F29605",
            "0xb16Ff5f0399440d1180d3af7FD82C64F6A875dd5",
            "0x766e5B26E82c3993E46111d2176438248CA1E8b6",
            "0xbBa33057Dd1cca99371a2e499136CD025F052037",
            "0x3955c2fDb2461198a1005aa0323568A7d75A07E9",
            "0xfF983307058dA622633CFCD2caCE59A90532228c",
            "0x64eA0FA30eFED0d53900FCd4fb10C6C47262f0d9",
            "0x03F7f1aB10e8bA1f6c3B7ea588087Ee12d44Dcc8",
            "0xe3cD72C69510cF04Fef85B9fA0Cc9dF259A20a51",
            "0xf3b75aEB448FCa1b457432FcCa3ab8c491Ba1e22",
            "0x6dA10463F51e105aC3D15A8C4f13E1F1032EFB99",
            "0x21d7a1A909620AB6aA7BbC82451A40aE74631A67",
            "0x39DE56518e136d472Ef9645e7D6E1F7c6C8Ed37b",
            "0xeAc52C518688110a5D45C4D886188F56029BB6e0",
            "0x198A1BDD2703c3D04852DbEC15101fFf30D298bD",
            "0xf05A72CCE4e9105CEb1e1AD285498c517018B997",
            "0xbD33ef95fA6Bd6DAB8BBDcE810092319d27078F7",
            "0x0c313A5d3f29aeB8a28D66f69b873edC117f2450",
            "0x21a0B6Fd81ec697E326228DF279F9Add0D1B021A",
            "0xe1cD19D059cE0a47B285F85c29fccd59fBb69853",
            "0x873f826Cfe2663F078674e0fE01e6940DeFFb97b",
            "0x16D274aa79De744CdB2272A6aE1EE1C64ad2D564",
            "0x5fb52B83b5796C069ceD3B64eaE162042D9e51A6",
            "0xAEAcdc16E26A30ad2b6EaFbf60DA32f551A7AAC1",
            "0xA4bE242CF0dEDb27a47EF1a5C4f3ac46178eFD20",
            "0x6c23C34961E6406DE6367Da86c43BfEe74DA90a5",
            "0xEAb9F671bdc7157b275793780EB4C5cD23147680",
            "0x92b426D4798044FD895e0Bb06ff58DA82e40E9a3",
            "0x306fedEFc07FC4D2bcB38034616a12DeB8ba2EeA",
            "0x5e214545B974853156Ef1a90dB241087eCeF46e1",
            "0x0E37AC2Ba495E6b362171a11BfA2dF5C4631CDB0",
            "0x4a642be622EBa7C40eFC06A8f8E1B3278b1fce4E",
            "0x141d48801abC47213D7f714b77618E698ADCbe44",
            "0x9b7ad9Cb6207707cc70838c459d3185dDB4F6D00",
            "0x3Db1a02aD1a87cb078959B115b47B53300bcC0b8",
            "0x721Bd7ea7CC17EcF88503b1E7F54532246dd6348",
            "0xC007DF76CA23b2e4C393f029367BBBf9D0F99466",
            "0xB30Aab5E29be4486cA86057a478b1A28c5C0eB70",
            "0x065C84641EE62d032ea5F20C49d59817C87A2747",
            "0xEfA117fC408c83E82427fcc22A7d06302c542346",
            "0xC1E549320f048D8149d5B0cB9Cb268dA59f1F2aD",
            "0x3D19fc015Be5e6e41bc42Ba0A3B31D995332574C",
            "0xE0F23a1e291f9658364A44A2D64E5205Fd0498fD",
            "0x041D48194Bc554334fBA675fEf52A812Aa180230",
            "0x8A4C8DCec54089dd5431425D61bb08023cd3F895",
            "0xC70F954Fa5575DcA91Ab87F9e3950b7c014eD1eC",
            "0x23685e339a4FA8E99Aea56c1ff95B3623862A8B8",
            "0xaC46415C44240C0087589BB8E0e29281DFcCd279",
            "0x505a3BBa719f6A123e78c7637CA371dFFc549C00",
            "0x6FA129BFaB0be55b44713aee6567615018308000",
            "0xf03DF965490882583018c64fD41fA82D7DeE032F",
            "0xc1aE72cbCF2D60Ab04Eb7798BAA8a07286091410",
            "0xEDb110E9Bd48d772Be9bE9620329FAF79A8B5b0D",
            "0xd96D937101eD95b8f3E4b8ffb17c2fb7b0Bd9201",
            "0x66043708B0F7a99Ba5aBfBCa4d1727c121fbC14e",
            "0x86EB5D473e6FbceF05FBc3560Aad291275f36D16",
            "0xc3A8A41f5F7C542DF32227A9bDdacf3A4617Afa3",
            "0x48d18A882b0Be145606A11fCe6F8A301256B93fa",
            "0x674c3b366e5AeFcF67bCb4D96D9CA1BC95db8937",
            "0x45ca01B98c7653FDE973b4B8259e25ff575Ae8a9",
            "0xe0F21CD21C27edAB156dcFF12fC43fcbd11e1bee",
            "0xAb04059A771DcDf8A7aC54297048D413F545acbE",
            "0xC96B80cc21cF2F507ca53C9e12A2b730B93696b5",
            "0x4BaFEa7c1452A3A8568D96d99D66b2228b8F7604",
            "0xaAa313393E79ea3454939e843E0AA8DEC66A9949"],
            [68359313,
                84702015,
                1991147087,
                900542841,
                39971616,
                37081804,
                35926805,
                680852385,
                6591772,
                857265572,
                213951953,
                143058015,
                23931156,
                99063691,
                41301382,
                22017466,
                204328500,
                435457923,
                88420425,
                98171355,
                40220915,
                28692509,
                77810056,
                473571362,
                10233079,
                36528206,
                161897819,
                310019945,
                86189585,
                200726259,
                279412203,
                118577887,
                1106626200,
                79449775,
                436677688,
                64104782,
                216485036,
                313411439,
                410704850,
                154079085,
                184853369,
                482680283,
                135292225,
                41707456,
                145112547,
                50925349,
                452081279,
                247863806,
                308654712,
                3637730133,
                103251913,
                96965981,
                26628211,
                1024113903,
                5911212,
                402069340,
                194031683,
                1186534480,
                111222283,
                506918823,
                17215505,
                187205518,
                514331997,
                32378021,
                91224909,
                237618391,
                26577323,
                1151905057,
                393160373,
                323985826,
                2242879397,
                305384527,
                295441354,
                217139382,
                346168806,
                2130243562,
                190733226,
                16090833,
                317398166,
                743013664,
                1283812471,
                68245201,
                823285868,
                2724834400,
                64766,
                1158237765,
                32448956,
                52403152,
                677132947,
                18645505,
                235475962,
                248065302,
                1643937393,
                149769554,
                19143588,
                282395566,
                131045404,
                333352270,
                1561818320,
                387081590,
                307287423,
                12755881,
                155338430,
                265729032,
                350414599,
                3170462692,
                296435466,
                113830412,
                66240529,
                79846083,
                73221927,
                159239316,
                56022870,
                4684250,
                327803955,
                38234748,
                265264873,
                752112818,
                19414476,
                96834907,
                17061300,
                330193113,
                66307865,
                313237700,
                743309224,
                18803822,
                196803270,
                161108801,
                2493972267,
                44062689,
                70221087,
                130209096,
                504626815,
                45188389,
                255582307,
                227983115,
                490640887,
                125761809,
                1052619310,
                172782674,
                14947142]


        ).call();
        return result;
    }

    // public static async addToWhitelist() {
    //     const result = await ContractOperator.Contract.methods
    //         .addToWhitelist(
    //             ["0x0dd874F41cE844FcdaeBA33714B6197136D89B7F", "0xC96B80cc21cF2F507ca53C9e12A2b730B93696b5"],
    //             ["69", "420"],
    //         )
    //         .call();
    //     return result;
    // }

    // public static async isInWhitelist(address: string) {
    //     const result = await ContractOperator.Contract.methods.isInWhitelist(address).call();
    //     return result;
    // }

    // public static async whoIsOwner() {
    //     const result = await ContractOperator.Contract.methods.owner().call();
    //     return result;
    // }

    // public static async claimAirdrop() {
    //     const result = await ContractOperator.Contract.methods.claimAirdrop().call();
    //     return result;
    // }
}