import { memo, useCallback } from "react";
import {
  BsGlobe2,
  BsDiscord,
  BsYoutube,
  BsTwitter,
  BsInstagram,
  BsPlus,
} from "react-icons/bs";
import { BiCopy } from "react-icons/bi";

const NFTHeader = memo(({ collectionName, collectionAddress, tokenId }) => {
  const onGlobeIconClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://www.discord.com");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://www.twitter.com");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com");
  }, []);

  return (
    <div className="self-stretch bg-background flex flex-col py-10 px-0 items-center text-2xl font-h5-space-mono">
      <div className="flex flex-row gap-[100px]">
        <div className="shrink-0 flex flex-col  gap-[30px]">
          <div className="flex-1 rounded-xl flex flex-col items-start text-7xl">
            <b className="self-stretch relative leading-[140%] capitalize">
              {collectionName ?? <p>Loading...</p>}
            </b>
            <div className="self-stretch relative text-3xl leading-[160%] capitalize font-caption-work-sans">
              {tokenId ?? <p>Loading...</p>}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-caption-label-text">
            <b className="self-stretch relative leading-[100%] capitalize">
              About
            </b>
            <div className="self-stretch relative leading-[100%] capitalize font-caption-work-sans text-text">
              The internet&apos;s friendliest designer kid.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-caption-label-text">
            <b className="relative leading-[100%] capitalize">Links</b>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <BsGlobe2
                className="relative w-5 h-5 shrink-0 cursor-pointer"
                onClick={onGlobeIconClick}
              />
              <BsDiscord
                className="relative w-5 h-5  shrink-0 cursor-pointer"
                onClick={onDiscordLogoIconClick}
              />
              <BsYoutube
                className="relative w-5 h-5 shrink-0 cursor-pointer"
                onClick={onYoutubeLogoIconClick}
              />
              <BsTwitter
                className="relative w-5 h-5  shrink-0 cursor-pointer"
                onClick={onTwitterLogoIconClick}
              />
              <BsInstagram
                className="relative w-5 h-5  shrink-0 cursor-pointer"
                onClick={onInstagramLogoIconClick}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[20px] text-center text-base font-caption-work-sans">
          <div className="rounded-xl bg-[#A259FF] w-[186px] h-[60px] shrink-0 flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px]">
            <BiCopy className="relative w-5 h-5 shrink-0" />
            <div className="relative leading-[140%] font-semibold">
              {collectionAddress?.slice(0, 6) +
                "..." +
                collectionAddress?.slice(-6) ?? <p>Loading...</p>}
            </div>
          </div>
          <div className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[12px] border-[2px] border-solid border-[#A259FF]">
            <BsPlus className="relative w-5 h-5 shrink-0" />
            <div className="relative leading-[140%] font-semibold">Follow</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NFTHeader;
NFTHeader.displayName = "NFTHeader";
