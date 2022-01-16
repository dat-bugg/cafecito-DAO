import Layout from "../../../components/Layout";
import { getSvgPath } from 'figma-squircle';
import Link from "next/link";

const svgPath = getSvgPath({
    width: 479,
    height: 400,
    cornerRadius: 48,
    cornerSmoothing: 1
});

const svgPath2 = getSvgPath({
    width: 296,
    height: 178,
    cornerRadius: 46,
    cornerSmoothing: 1
});
const index = () => {
    return (
        <Layout>
            <main className='w-screen h-screen flex flex-col items-center justify-center'>
                <div style={{ clipPath: `path('${svgPath}')` }} className='w-[479px] h-[400px] bg-white flex flex-col items-center px-4 py-4 justify-between'>
                    {/* <img src="/hero_img.svg" alt="" /> */}
                    <div className='w-full'>
                        <img className='h-full ' src="/burn.png" alt="" />
                        {/* <img className='absolute' src="/hero_f.svg" alt="" /> */}
                    </div>

                    <div className='flex flex-col items-center gap-1'>
                        <p className="text-[#5E28BA] leading-3 font-baloo font-bold text-center">Succesfully Burned an NFT 😞<br />
                            <span className="text-sm text-[#AA7364]">(Check your wallet)</span>
                        </p>
                        <Link href="/mint">
                        <button className='mt-2 px-4 py-1 font-baloo font-bold text-base text-[#AA7364] bg-[#FFE9D2] rounded-[16px] border-[3px] border-[#754B40]'>
                            Mint Again?
                        </button>
                        </Link>
                        <Link href="/">
                        <a className='font-baloo font-bold text-base text-[#AA7364]' href="#">No, Thanks!</a>
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default index;