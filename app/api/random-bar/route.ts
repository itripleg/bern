import { NextResponse } from "next/server";

export const GET = async (res: any) => {
  const bars = [
    { name: "The Tipsy Boar", location: "London, UK" },
    { name: "Margarita Villa", location: "New York, USA" },
    { name: "The Drunken Duck", location: "Sydney, Australia" },
    { name: "Bar None", location: "San Francisco, USA" },
    { name: "Last Call Bar", location: "Berlin, Germany" },
    { name: "The Shady Lantern", location: "Tokyo, Japan" },
    { name: "The Golden Stool", location: "Accra, Ghana" },
    { name: "Sapphire Lounge", location: "Paris, France" },
    { name: "The Frosty Mug", location: "Moscow, Russia" },
    { name: "The Red Room", location: "Buenos Aires, Argentina" },
    { name: "Ocean's Bar", location: "Cape Town, South Africa" },
    { name: "The Hidden Pub", location: "Edinburgh, Scotland" },
    { name: "The Pirate's Cove", location: "Kingston, Jamaica" },
    { name: "The Night Owl", location: "Bangkok, Thailand" },
    { name: "The Snowy Pub", location: "Oslo, Norway" },
    { name: "Desert Mirage Bar", location: "Dubai, UAE" },
    { name: "The Vineyard", location: "Rome, Italy" },
    { name: "The Lonely Stool", location: "Toronto, Canada" },
    { name: "The Jungle Bar", location: "Rio de Janeiro, Brazil" },
    { name: "The Northern Lights", location: "Reykjavik, Iceland" },
  ];
  const randomIndex = Math.floor(Math.random() * bars.length);
  const randomBar = bars[randomIndex];
  // return new Response(JSON.stringify(randomBar), { status: 200 });
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
  console.log(
    `Selected index: ${randomIndex}, Bar: ${JSON.stringify(randomBar)}`
  );

  return new Response(JSON.stringify(randomBar), {
    status: 200,
    headers: headers,
  });
};
