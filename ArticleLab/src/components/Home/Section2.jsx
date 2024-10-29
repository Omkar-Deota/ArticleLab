const img1 = "src/assets/section1.jpg";
import { Card, CardBody, Image } from "@nextui-org/react";
function Section2() {
  const list = [
    {
      title: "Orange",
      img: `${img1}`,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: `${img1}`,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: `${img1}`,
      price: "$10.00",
    },
  ];
  return (
    <div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 bg-none ">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="ml-6 w-11/12 -top-16 shadow-xl rounded-none"
          >
            <CardBody className="p-0 h-[300px] ">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className=" object-cover h-[200px] rounded-none "
                src={item.img}
              />
            
            </CardBody>
            <p className="">{item.title}</p>
          </Card>
           
        ))}
    
      </div>
      
    </div>
  );
}

export default Section2;
