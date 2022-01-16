
import { getSvgPath } from 'figma-squircle';
import Link from 'next/link';
import Layout from '../components/Layout';

const svgPath = getSvgPath({
  width: 479,
  height: 360,
  cornerRadius: 48,
  cornerSmoothing: 1
});

function CardMain() {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <path d={svgPath} fill="white" />
    </svg>
  )
}

export default function Home() {
  return (
    <Layout >
      <main className='w-screen h-screen flex flex-col items-center justify-center'>
        <div style={{ clipPath: `path('${svgPath}')` }} className='w-[479px] h-[360px] bg-white flex flex-col items-center px-4 py-4 justify-between'>
          {/* <img src="/hero_img.svg" alt="" /> */}
          <div className='relative w-full'>
            <img className='absolute' src="/hero.png" alt="" />
            {/* <img className='absolute' src="/hero_f.svg" alt="" /> */}
          </div>

          <div className='flex flex-col items-center gap-2'>
          <Link href='/mint'>
            <button className='px-4 py-1 font-baloo font-bold text-base text-[#AA7364] bg-[#FFE9D2] rounded-[16px] border-[3px] border-[#754B40]'>
              Mint An NFT
            </button>
          </Link>
          <Link href='/burn'>
            <a className='font-baloo font-bold text-base text-[#AA7364]' >Burn an NFT</a>
          </Link>
          </div>
        </div>
      </main>

    </Layout>
  );
}
