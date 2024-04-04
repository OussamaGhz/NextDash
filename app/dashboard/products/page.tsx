import Container from "@/app/ui/container";
import { ProductData, columns } from "@/app/ui/product/columns";
import { UsersDataTable } from "@/app/ui/product/data-table";

export default async function DemoPage() {

  // product data with real data 
  const data: ProductData[] = [
    {
      title: "iPhone 13 Pro Max",
      descreption: "The latest flagship smartphone from Apple with stunning performance and camera capabilities.",
      price: 1000,
      createdAt: "2022-03-15",
      stock: 15,
    },
    {
      title: "Samsung Galaxy S22 Ultra",
      descreption: "A powerful Android smartphone with a versatile camera system and sleek design.",
      price: 1100,
      createdAt: "2022-02-20",
      stock: 25,
    },
    {
      title: "MacBook Pro 2023",
      descreption: "The ultimate productivity machine for professionals, featuring Apple's latest M2 chip.",
      price: 2000,
      createdAt: "2022-01-10",
      stock: 20,
    },
    {
      title: "Sony PlayStation 5",
      descreption: "Next-gen gaming console with cutting-edge graphics and immersive gaming experience.",
      price: 500,
      createdAt: "2021-12-05",
      stock: 30,
    },
    {
      title: "Nike Air Jordan 1",
      descreption: "Iconic basketball shoes with classic design and superior comfort.",
      price: 150,
      createdAt: "2021-11-25",
      stock: 40,
    },
    {
      title: "Canon EOS R5",
      descreption: "High-performance mirrorless camera for professional photographers.",
      price: 2500,
      createdAt: "2021-10-30",
      stock: 10,
    },
    {
      title: "Dyson V11 Vacuum Cleaner",
      descreption: "Advanced cordless vacuum cleaner with powerful suction and intelligent features.",
      price: 600,
      createdAt: "2021-09-20",
      stock: 35,
    },
    {
      title: "Nintendo Switch OLED",
      descreption: "Upgraded version of the popular gaming console with vibrant OLED display.",
      price: 400,
      createdAt: "2021-08-15",
      stock: 45,
    },
    {
      title: "Bose Noise Cancelling Headphones 700",
      descreption: "Premium wireless headphones with world-class noise-canceling technology.",
      price: 350,
      createdAt: "2021-07-10",
      stock: 50,
    },
    {
      title: "Tesla Model S Plaid",
      descreption: "Fastest electric car with long-range capability and futuristic design.",
      price: 100000,
      createdAt: "2021-06-05",
      stock: 5,
    },
  ];



  

  return (
    <Container>
      <div className="w-full">
        <UsersDataTable columns={columns} data={data} />
      </div>
    </Container>
  );
}
