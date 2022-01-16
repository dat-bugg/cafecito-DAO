import Layout from "../../components/Layout";
import { getSvgPath } from 'figma-squircle';
import { useState } from "react";
import { useRouter } from "next/router";

const svgPath = getSvgPath({
    width: 202,
    height: 234,
    cornerRadius: 48,
    cornerSmoothing: 1
});

const svgPath2 = getSvgPath({
    width: 196,
    height: 228,
    cornerRadius: 46,
    cornerSmoothing: 1
});
const index = () => {

    const [add, setAdd] = useState('');
    
    const route = useRouter();

    const handleClick = () => {
        if (add.length > 0) {
            route.push('/burn/' + add);
        }
    }

    return (
        <Layout>
            <main className='w-screen h-screen flex flex-col items-center justify-center'>
                <div style={{ clipPath: `path('${svgPath}')` }} className='w-[202px] h-[234px] bg-[#AA7364] flex flex-col items-center justify-center'>
                    <div style={{ clipPath: `path('${svgPath2}')` }} className='w-[196px] h-[228px] bg-[#FFFCF8] flex flex-col items-center px-4 py-4 justify-evenly'>
                        <p className="font-baloo font-bold text-[24px] text-[#AA7364]">Burn an NFT</p>

                        <div className="flex flex-col items-center gap-4 self-center mx-auto w-full justify-center">
                            <input onChange={(e) => setAdd(e.target.value) } className="font-baloo text-center text-[#754B40] font-bold bg-[#FFE9D2] rounded-[16px] py-2 px-2 w-[80%]" type="text" placeholder="Predefined" />
                            
                            <button onClick={handleClick} className='px-4 py-1 font-baloo font-bold text-base text-[#AA7364] bg-[#FFE9D2] rounded-[16px] border-[3px] border-[#754B40] w-[80%]'>
                                Burn
                            </button>
                            
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default index;