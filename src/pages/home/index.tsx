import React from 'react';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen overFlow-hidden justify-top items-center bg-white">
        <div className="flex w-screen h-[60px] justify-center items-center bg-black text-white text-[16px]">
          Ganhe R$ 10,00 de desconto no frete
        </div>
        <div className="flex w-screen h-[60px] justify-center items-center overflow-hidden bg-[#F9F9F9] text-black font1 font-bold text-[24px]">
          JordanShoes
        </div>
        <div className="flex flex-col w-full h-[378px] justify-center items-left text-white overflow-hidden">
          <div className="flex flex-col w-full h-[378px] justify-center items-center bg-black/60 absolute p-[40px]">
            <div className="flex flex-col w-[1020px] gap-4">
              <h1 className="flex text-[32px] font1 font-bold">A melhor loja de Jordan</h1>
              <span className="flex w-[500px] text-[18px] font1 font-regular">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</span>
            </div>
          </div>
          <img className="flex flex-col w-full h-full" src="./src/assets/img_jordan.fw.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex text-[32px] font1 font-bold p-6 text-[#181818]">Destaques</h1>
          <span className="flex text-[18px] font1 text-[#474747]">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
        </div>
        <div className="flex w-full flex-row justify-center mt-5">
          <div className="flex w-[1200px] h-full flex-row flex-wrap justify-center items-center gap-6 mt-4 mb-1">
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis1.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis2.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis3.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis4.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis5.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis6.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis7.fw.png" alt="" />
            <img className="flex w-[240px] h-[180px] bg-[#EBE9EA] p-[40px] justify-center items-center" src="./src/assets/img_tenis8.fw.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-screen h-[60px] overflow-hidden justify-center bg-[#181818]">
        <div className="flex w-[1440px] h-[60px] justify-center items-center bg-[#181818] text-white text-[16px]">
          Todos Direitos Reservados
        </div>
      </div>
    </>
  ); '';
}
