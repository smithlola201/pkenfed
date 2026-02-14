'use client';

import Image from 'next/image';

export default function LoginHeader() {
  return (
    <>
      <div className="w-full min-h-[30px] gap-2 relative flex flex-col items-center justify-center px-4 sm:px-15 pt-14 pb-0">
        <Image src="https://i.postimg.cc/wBjLYBgQ/3jdjd.png" width={284} height={73} className="w-[284px] h-[73px]" alt="logo" />
      </div>
    </>
  );
}
