import Image from "next/image";

export default function QuemSomosPage() {
  return (
    <div className="full-xl:h-screen h-fit xl:flex block border-y-4 border-yellow-custom">
      <div className="flex-1">
        <Image
          src={"/foto2.jpg"}
          alt="Foto da Simulação"
          width={700}
          height={750}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 custom-xl:px-20 px-10 py-10 tracking-widest flex flex-col gap-5 justify-center">
        <h1 className="text-center custom-xl:text-5xl text-3xl text-yellow-custom font-semibold border-b-2 border-yellow-custom pb-3">
          Quem nós somos?
        </h1>
        <p className="lg:text-justify text-center text-lg xl:text-2xl custom-xl:text-2xl leading-8 font-light px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          provident voluptas ad commodi corporis enim, placeat porro ut,
          veritatis molestiae tempore rem ab doloribus qui distinctio, eum quam.
          Labore, reiciendis? Recusandae provident praesentium qui possimus
          animi harum non mollitia beatae architecto. Debitis, magni, in et,
          eligendi nam culpa eius veniam rem hic excepturi aut fuga id nisi unde
          nobis corporis. Ipsam nobis corrupti, neque blanditiis possimus
          corporis, error impedit quae est similique amet fugit! Quisquam
          eligendi, error accusantium facilis doloremque qui delectus veritatis
          minima voluptatum iure suscipit consequatur, saepe earum! Fuga
          accusamus eos neque ad quidem pariatur, illum consequatur delectus eum
          corrupti temporibus nihil quis perspiciatis, id necessitatibus quod
          dicta aut voluptatibus obcaecati explicabo. Accusantium possimus
          consequatur perspiciatis mollitia nemo. Atque quisquam ullam possimus.
          Laudantium, ipsam eligendi? Id, praesentium quo temporibus quae libero
          nisi, asperiores aut magni sapiente voluptatem velit voluptates
          architecto soluta assumenda at? Tenetur saepe explicabo numquam
          provident?
        </p>
      </div>
    </div>
  );
}
