import EndedPads from "@/components/launchpad/EndedPads.js";
import LaunchPads from "@/components/launchpad/LaunchPads.js";
import OngoingPads from "@/components/launchpad/OngoingPads.js";
import UpcomingPads from "@/components/launchpad/UpcomingPads.js";
import { launchpadFactory } from "@/utils/contractInfo.js";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";

export default function Launchpad() {
  const [read, setRead] = useState();

  const { address } = useAccount();
  const {
    data: reads,
    isError,
    isLoading,
  } = useContractRead({
    address: launchpadFactory.address,
    abi: launchpadFactory.abi,
    functionName: "totalLaunchPads",
  });

  useEffect(() => {
    setRead(reads);
  }, [read]);

  const Reads = Number(read);

  const arr = [];

  const Params = () => {
    for (let i = 1; i < Reads; i++) {
      arr.push(i);
    }
  };

  Params();
  // if (!reads) {
  //   return (
  //     <div className="mt-3 mb-[4rem] rounded-lg shadow-xl bg-[rgba(0,0,0,0.4)] border-2 border-black flex justify-center gap-10 items-center p-6">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div className="">
      <header className="flex items-center flex-col">
        <h1 className="text-center">Discover Investment Worthy LaunchPads</h1>
      </header>
      <main className="w-[80%] mx-auto">
        <div className="mt-3 mb-[4rem] rounded-lg shadow-xl bg-[rgba(0,0,0,0.4)] border-2 border-black md:flex justify-center gap-10 items-center p-6">
          <div className="flex-1">
            <h1 className="text-2xl px-8">
              Want to raise funding for your favorite NFT, Create your LaunchPad
              Now 👉🏼
            </h1>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <Image
              src="/assets/benz2.gif"
              alt="icon"
              width={250}
              height={200}
              className="rounded-md"
            />
            <Link
              href="/launchpad/createlaunchpad"
              className="w-full flex justify-center"
            >
              <button className="bg-green-700 shadow-xl md:w-[50%] rounded-md py-4 px-2">
                Create LaunchPad Now
              </button>
            </Link>
          </div>
        </div>

        <Tab.Group>
          <Tab.List className="gap-4 md:gap-0 flex flex-col md:flex-row justify-evenly bg-[rgba(0,0,0,0.4)] border-2 border-black py-4 rounded-xl">
            <Tab className="md:outline-none w-[100%]">HOME</Tab>
            <Tab className="md:outline-none w-[100%]">ONGOING</Tab>
            <Tab className="md:outline-none w-[100%]">UPCOMING</Tab>
            <Tab className="md:outline-none w-[100%]">ENDED</Tab>
          </Tab.List>
          {(
            <Tab.Panels>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 md:gap-10 py-10">
                {arr.map((pad) => {
                  return <LaunchPads arg={pad} key={pad} />;
                })}
              </Tab.Panel>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                {arr.map((data1) => {
                  return <OngoingPads arg={data1} key={data1} />;
                })}
              </Tab.Panel>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                {arr.map((data2) => {
                  return <UpcomingPads arg={data2} key={data2} />;
                })}
              </Tab.Panel>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                {arr.map((data3) => {
                  return <EndedPads arg={data3} key={data3} />;
                })}
              </Tab.Panel>
            </Tab.Panels>
          ) ?? (
            <div className="mt-3 mb-[4rem] rounded-lg shadow-xl bg-[rgba(0,0,0,0.4)] border-2 border-black flex justify-center gap-10 items-center p-6">
              Loading...{" "}
            </div>
          )}
        </Tab.Group>
      </main>
    </div>
  );
}
