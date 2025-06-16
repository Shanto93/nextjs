import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    service_name: "Haircut",
    service_time: 30,
  },
  {
    id: 2,
    service_name: "Manicure",
    service_time: 45,
  },
  {
    id: 3,
    service_name: "Massage Therapy",
    service_time: 60,
  },
  {
    id: 4,
    service_name: "Teeth Cleaning",
    service_time: 20,
  },
  {
    id: 5,
    service_name: "Car Wash",
    service_time: 15,
  },
  {
    id: 6,
    service_name: "Personal Training",
    service_time: 50,
  },
  {
    id: 7,
    service_name: "House Cleaning",
    service_time: 120,
  },
  {
    id: 8,
    service_name: "IT Support",
    service_time: 90,
  },
  {
    id: 9,
    service_name: "Dog Grooming",
    service_time: 40,
  },
  {
    id: 10,
    service_name: "Photography Session",
    service_time: 180,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Services</h1>

      <div className="grid grid-cols-3 gap-5">
        {data.map((service) => (
          <div key={service.id}>
            <Link href={`/services/${service.id}`}>
              <h2>{service.service_name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
