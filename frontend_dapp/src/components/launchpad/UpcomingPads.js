import React, { useEffect, useState } from "react";
import { launchpadContract, launchpadFactory } from "@/utils/contractInfo.js";
import { useAccount, useContractRead, useContractReads } from "wagmi";
import Link from "next/link";
import Head from "next/head";
import { ethers } from "ethers";
import { Truncate } from "../Truncate";
import CopyButton from "../CopyButton";

const UpcomingPads = ({ arg }) => {
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

  // const today = date(read?.[2]).toDateString();
  // const start = date(data?.[2]).toDateString();
  // const end = date(data?.[4]).toDateString();

  if (data?.[2] == 0 && data?.[4] == 0) {
    console.log("upcoming");
    return (
      <Link
        href={`/launchpad/upcoming/${arg}`}
        className="rounded-lg shadow-2xl bg-[rgba(0,0,0,0.4)] border-2 border-black p-5"
      >
        <div>
          <div className="flex gap-3 p-2">
            <div className="flex flex-col">
              <h1 className="text-3xl border-b-2 py-2 mb-2">{read?.[0]}</h1>
              <p>
                Amount Raised:{" "}
                {String(data?.[1]) / ethers.utils.parseEther("1") ?? <p>Loading...</p>} ETH /{" "}
                {String(data?.[5]) / ethers.utils.parseEther("1") ?? <p>Loading...</p>} ETH
              </p>
              <h6 className="flex gap-2">
                LaunchPad Address: <Truncate string={String(read?.[3])} />
                <span>
                  <CopyButton arg={read?.[3]} />
                </span>
              </h6>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    console.log("ongoing");
  }
};

export default UpcomingPads;
