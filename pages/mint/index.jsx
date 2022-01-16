import Layout from "../../components/Layout";
import { getSvgPath } from 'figma-squircle';
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const svgPath = getSvgPath({
    width: 302,
    height: 184,
    cornerRadius: 48,
    cornerSmoothing: 1
});

const svgPath2 = getSvgPath({
    width: 296,
    height: 178,
    cornerRadius: 46,
    cornerSmoothing: 1
});



const Index = () => {

    const [mint, setMint] = useState('');

    const router = useRouter();

    const handleMint = () => {
        if (mint.length > 0) {
            router.push('/mint/' + mint);
        }
    }

    return (
        <Layout>
            <main className='w-screen h-screen flex flex-col items-center justify-center'>
                <div style={{ clipPath: `path('${svgPath}')` }} className='w-[302px] h-[184px] bg-[#AA7364] flex flex-col items-center justify-center'>
                    <div style={{ clipPath: `path('${svgPath2}')` }} className='w-[296px] h-[178px] bg-[#FFFCF8] flex flex-col items-center px-4 py-4 justify-evenly'>
                        <p className="font-baloo font-bold text-[24px] text-[#AA7364]">Mint an NFT</p>

                        <div className="flex items-center gap-2 self-center mx-auto w-full justify-center">
                            <input onChange={(e) => setMint(e.target.value)} className="font-baloo text-center text-[#754B40] font-bold bg-[#FFE9D2] rounded-[16px] py-2 px-2 w-[50%]" type="number" placeholder="Mint Price:" />
                            <button onClick={handleMint} className='px-4 py-1 font-baloo font-bold text-base text-[#AA7364] hover:text-[#754B40] hover:border-[#aa7364] bg-[#FFE9D2] rounded-[16px] border-[3px] border-[#754B40] w-[40%]'>
                                Mint
                            </button>

                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Index;