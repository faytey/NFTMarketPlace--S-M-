import React, { useEffect, useState } from "react";
import { launchpadContract, launchpadFactory } from "@/utils/contractInfo.js";
import { useAccount, useContractRead, useContractReads } from "wagmi";
import Link from "next/link";
import { ethers } from "ethers";

const OngoingPads = ({ arg }) => {
  const [read, setRead] = useState();

  const { address } = useAccount();

  const {
    data: readData,
    isError,
    isLoading,
  } = useContractRead({
    address: launchpadFactory.address,
    abi: launchpadFactory.abi,
    functionName: "LaunchPads",
    args: [arg],
  });

  // console.log(readData);

  const reads = String(readData?.[3]);

  const {
    data,
    isError: readerror,
    isLoading: readloading,
  } = useContractReads({
    contracts: [
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "symbol",
      },
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "amtRaised",
      },
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "startTime",
      },
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "price",
      },
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "endTime",
      },
      {
        address: reads,
        abi: launchpadContract.abi,
        functionName: "totalAmountNeeded",
      },
    ],
  });

  useEffect(() => {
    setRead(readData);
    console.log(read);
  }, [read]);

  const date = (x) => {
    let myDate = new Date(x * 1000);
    console.log(myDate);
    return myDate;
  };

  const today = date(read?.[2]).toDateString();
  const start = date(data?.[2]).toDateString();
  const end = date(data?.[4]).toDateString();
  const d = new Date();

  if (data?.[2] < d.getTime() / 1000 && data?.[4] > d.getTime() / 1000) {
    console.log("ongoing");
    return (
      <Link
        href={`/ongoing/${arg}`}
        key={arg}
        className="rounded-lg shadow-2xl bg-[rgba(0,0,0,0.4)] border-2 border-black p-5"
      >
        <div className="flex justify-center py-2">
          {/* <Image
          src={`/${arg}`}
          alt="image"
          width={500}
          height={100}
          className="rounded-lg"
        /> */}
        </div>
        <div>
          <div className="flex gap-3 p-2">
            <div>
              {/* <Image
              src={`/${arg}`}
              alt="image"
              width={150}
              height={200}
              className="rounded-lg"
            /> */}
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl border-b-2 py-2 mb-2">{read?.[0]}</h1>
              <p>
                Amount Raised:{" "}
                {String(data?.[1]) / ethers.utils.parseEther("1")} ETH /{" "}
                {String(data?.[5]) / ethers.utils.parseEther("1")} ETH
              </p>
              <h6>LaunchPad Address: {read?.[3]}</h6>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <Link
              legacyBehavior
              href={`https://sepolia.etherscan.io/address/${read?.[3]}`}
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                View on Etherscan
              </a>
            </Link>
          </div>
        </div>
      </Link>
    );
  } else {
    console.log("upcoming");
  }
};

export default OngoingPads;