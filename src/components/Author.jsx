import Image from "next/image";
import Avatar from "-/public/My-Profile-Picture.png";
import dayjs from "dayjs";
export default function Author({ published_at }) {
  return (
    <div className="author-box not-prose flex items-center space-x-3 text-left select-none">
      <Image
        className="rounded-full w-12 h-12"
        src={Avatar}
        alt="Dipankar Maikap"
        width={48}
        height={48}
      />
      <div className="desc flex flex-col">
        <p className="font-medium text-lg text-gray-800">Dipankar Maikap</p>
        <time
          className="text-sm font-medium text-gray-600"
          dateTime={published_at}
        >
          {dayjs(published_at).format("D MMM YYYY")}
        </time>
      </div>
    </div>
  );
}
