import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Emily Clark",
    username: "@emilyc",
    body: "The pasta was absolutely delicious.",
    img: "/testimonials/emily-clark.jpg",
  },
  {
    name: "Daniel Smith",
    username: "@danny_s",
    body: "Authentic flavors and cozy atmosphere.",
    img: "/testimonials/daniel-smith.jpg",
  },
  {
    name: "Sofia Russo",
    username: "@sofiarusso",
    body: "As an Italian, I can confirm: this place is the real deal.",
    img: "/testimonials/sofia-russo.jpg",
  },
  {
    name: "Michael Lee",
    username: "@mikelee",
    body: "Everything was fresh and full of flavor. Service was top-notch!",
    img: "/testimonials/michael-lee.jpg",
  },
  {
    name: "Ava Johnson",
    username: "@avaj",
    body: "Perfect date night spot. We loved the antipasti platter.",
    img: "/testimonials/ava-johnson.jpg",
  },
  {
    name: "Luca Bianchi",
    username: "@luca_b",
    body: "Reminded me of Sunday dinners at Nonna’s. Truly amazing.",
    img: "/testimonials/luca-bianchi.jpg",
  },
];

const ReviewCard = ({ name, username, body, img }: any) => (
  <div className="w-64 min-h-[120px] shrink-0 cursor-pointer rounded-xl border p-4 mx-2 bg-card hover:bg-olive text-foreground hover:text-white transition-colors duration-300 flex flex-col justify-between">
    <div className="flex items-center gap-2">
      <img src={img} alt={name} className="w-8 h-8 rounded-full" />
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{username}</div>
      </div>
    </div>
    <p className="mt-2 text-sm">{body}</p>
  </div>
);

export default function Testimonials() {
  return (
    <div className="py-12 space-y-6">
      <Marquee pauseOnHover speed={40} gradient={false}>
        {reviews.map((r, i) => (
          <ReviewCard key={`top-${i}`} {...r} />
        ))}
      </Marquee>
      <Marquee pauseOnHover speed={40} gradient={false} direction="right">
        {reviews.map((r, i) => (
          <ReviewCard key={`bot-${i}`} {...r} />
        ))}
      </Marquee>
    </div>
  );
}
